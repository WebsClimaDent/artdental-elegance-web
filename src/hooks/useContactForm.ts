
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  clinic: string;
  message: string;
  type: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    console.log('Iniciando envío de formulario con datos:', formData);
    
    try {
      // Verificar que el usuario esté autenticado
      if (!user) {
        throw new Error('Debe iniciar sesión para enviar el formulario de contacto');
      }

      // Validar datos requeridos
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Los campos nombre, email y mensaje son obligatorios');
      }

      console.log('Validación exitosa, verificando conexión con Supabase...');
      
      // Primero, vamos a verificar la conexión con Supabase
      console.log('Probando conexión con Supabase...');
      const { data: testData, error: testError } = await supabase
        .from('Artdental')
        .select('count')
        .limit(1);
      
      if (testError) {
        console.error('Error de conexión con Supabase:', testError);
        throw new Error('No se puede conectar con la base de datos. Por favor, inténtelo más tarde.');
      }
      
      console.log('Conexión con Supabase exitosa, insertando datos...');
      
      // Mapear los datos del formulario a los campos de la tabla Artdental
      const artdentalData = {
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone ? parseFloat(formData.phone) : null,
        "Clínica name": formData.clinic || null,
        Message: formData.message || null,
        Type: formData.type || null
      };

      console.log('Datos mapeados para Supabase:', artdentalData);

      // Insertar en la base de datos
      const { data, error } = await supabase
        .from('Artdental')
        .insert([artdentalData])
        .select()
        .single();

      if (error) {
        console.error('Error de Supabase al insertar contacto:', error);
        throw new Error(`Error al guardar en la base de datos: ${error.message}`);
      }

      console.log('Contacto insertado exitosamente en Supabase:', data);

      // Enviar datos al webhook de Zapier (sin fallar si hay error)
      try {
        console.log('Enviando datos a Zapier webhook...');
        const zapierResponse = await fetch('https://hooks.zapier.com/hooks/catch/3875058/uy47p8g/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
          body: JSON.stringify({
            ...formData,
            contactId: data.id,
            timestamp: new Date().toISOString(),
            source: 'artdental_website'
          }),
        });

        console.log('Datos enviados a Zapier webhook exitosamente');
      } catch (zapierError) {
        console.warn('Error al enviar a Zapier (no crítico):', zapierError);
        // No fallar el formulario por error de Zapier, solo registrar
      }

      // Enviar notificación por email (sin fallar si hay error)
      try {
        console.log('Enviando notificación por email...');
        const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
          body: { ...formData, contactId: data.id }
        });

        if (emailError) {
          console.warn('Error al enviar notificación (no crítico):', emailError);
        } else {
          console.log('Notificación por email enviada exitosamente');
        }
      } catch (emailError) {
        console.warn('Error en función de email (no crítico):', emailError);
        // Continuar sin fallar
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Nos pondremos en contacto con usted a la mayor brevedad.",
      });

      console.log('Formulario enviado exitosamente');
      return { success: true, data };
    } catch (error: any) {
      console.error('Error completo en submitForm:', error);
      
      let errorMessage = "Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.";
      
      // Proporcionar mensajes de error más específicos
      if (error.message.includes('obligatorios')) {
        errorMessage = error.message;
      } else if (error.message.includes('conectar con la base de datos')) {
        errorMessage = "Problemas de conexión con el servidor. Por favor, verifique su conexión a internet e inténtelo de nuevo.";
      } else if (error.message.includes('guardar en la base de datos')) {
        errorMessage = "Error al guardar los datos. Por favor, inténtelo de nuevo.";
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = "Error de conexión. Por favor, verifique su conexión a internet e inténtelo más tarde.";
      }
      
      toast({
        title: "Error al enviar mensaje",
        description: errorMessage,
        variant: "destructive",
      });

      return { success: false, error: error.message };
    } finally {
      setIsSubmitting(false);
      console.log('Finalizando proceso de envío de formulario');
    }
  };

  return {
    submitForm,
    isSubmitting
  };
};

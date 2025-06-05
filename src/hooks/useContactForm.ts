
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Enviando formulario de contacto:', formData);
      
      // Insertar en la base de datos
      const { data, error } = await supabase
        .from('web_contacts')
        .insert([formData])
        .select()
        .single();

      if (error) {
        console.error('Error al insertar contacto:', error);
        throw error;
      }

      console.log('Contacto insertado exitosamente:', data);

      // Enviar notificación por email
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
          body: { ...formData, contactId: data.id }
        });

        if (emailError) {
          console.error('Error al enviar notificación:', emailError);
          // No fallar el formulario por error de email, solo registrar
        }
      } catch (emailError) {
        console.error('Error en función de email:', emailError);
        // Continuar sin fallar
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Nos pondremos en contacto con usted a la mayor brevedad.",
      });

      return { success: true, data };
    } catch (error: any) {
      console.error('Error en submitForm:', error);
      
      toast({
        title: "Error al enviar mensaje",
        description: "Ha ocurrido un error. Por favor, inténtelo de nuevo o contáctenos directamente.",
        variant: "destructive",
      });

      return { success: false, error: error.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting
  };
};

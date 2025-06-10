
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactNotificationRequest {
  name: string;
  email: string;
  phone?: string;
  clinic?: string;
  message: string;
  type: string;
  contactId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactNotificationRequest = await req.json();
    console.log('Datos del contacto recibidos:', contactData);

    // Preparar el contenido del email para el administrador
    const adminEmailContent = `
      <h2>Nuevo contacto desde ArtDental</h2>
      <p><strong>Tipo de consulta:</strong> ${contactData.type}</p>
      <p><strong>Nombre:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      ${contactData.phone ? `<p><strong>Teléfono:</strong> ${contactData.phone}</p>` : ''}
      ${contactData.clinic ? `<p><strong>Clínica:</strong> ${contactData.clinic}</p>` : ''}
      <p><strong>Mensaje:</strong></p>
      <p>${contactData.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>ID de contacto: ${contactData.contactId}</small></p>
      <p><small>Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</small></p>
    `;

    // Preparar email de confirmación para el cliente
    const clientEmailContent = `
      <h2>Gracias por contactar con ArtDental</h2>
      <p>Estimado/a ${contactData.name},</p>
      <p>Hemos recibido su mensaje y nos pondremos en contacto con usted a la mayor brevedad posible.</p>
      <p><strong>Sus datos de contacto:</strong></p>
      <p><strong>Tipo de consulta:</strong> ${contactData.type}</p>
      <p><strong>Mensaje enviado:</strong></p>
      <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${contactData.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <h3>Información de contacto</h3>
      <p><strong>Dirección:</strong> Avda Juan XIII, N° 48 B, 46025, Valencia</p>
      <p><strong>Teléfono:</strong> +34 963 587 411 | +34 609 976 027</p>
      <p><strong>Email:</strong> Info@artdentalvlc.com</p>
      <p><strong>Horario:</strong> Lunes - Viernes: 7:00 - 19:30</p>
      <br>
      <p>Gracias por su confianza,</p>
      <p><strong>Equipo ArtDental</strong></p>
    `;

    // Por ahora, solo registramos en consola ya que necesitaremos configurar el servicio de email
    console.log('Email para administrador preparado:', adminEmailContent);
    console.log('Email para cliente preparado:', clientEmailContent);

    // Aquí se integraría con un servicio de email como Resend, SendGrid, etc.
    // Para eso necesitaríamos que el usuario configure las credenciales del servicio

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Notificación procesada correctamente',
        contactId: contactData.contactId 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error('Error en send-contact-notification:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);


import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Back button */}
        <div className="container-custom py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-dental-primary hover:text-dental-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
        </div>

        {/* Header */}
        <div className="bg-dental-light py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-dental-dark mb-4">
              Política de Privacidad
            </h1>
            <p className="text-lg text-dental-dark/80 max-w-2xl mx-auto">
              Información sobre el tratamiento de datos personales en nuestro sitio web
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-dental-dark mb-6">
                I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS
              </h2>
              
              <p className="text-gray-700 mb-6">
                Respetando lo establecido en la legislación vigente, <strong>ARTDENTAL – Laboratorio Estética Dental</strong> (en adelante, también el Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.
              </p>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Leyes que incorpora esta política de privacidad
              </h3>
              <p className="text-gray-700 mb-4">
                Esta política está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, respeta las siguientes normas:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Reglamento (UE) 2016/679 (RGPD)</li>
                <li>Ley Orgánica 3/2018 (LOPD-GDD)</li>
                <li>Real Decreto 1720/2007 (RDLOPD)</li>
                <li>Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE)</li>
              </ul>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Identidad del responsable del tratamiento
              </h3>
              <p className="text-gray-700 mb-2">
                El responsable del tratamiento de los datos personales recogidos en el Sitio Web es:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold text-dental-dark">ARTDENTAL – Laboratorio Estética Dental</p>
                <p className="text-gray-700">Dirección: Av. de Joan XXIII, 48, bajo, Benicalap, 46025 Valencia</p>
                <p className="text-gray-700">Correo electrónico: info@artdentalvlc.com</p>
              </div>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Registro de Datos de Carácter Personal
              </h3>
              <p className="text-gray-700 mb-6">
                Los datos facilitados por los usuarios a través de formularios serán incorporados y tratados por ARTDENTAL para poder facilitar, agilizar y cumplir los compromisos establecidos, o para atender consultas o solicitudes. Se mantiene un registro de actividades de tratamiento conforme al RGPD.
              </p>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Principios aplicables al tratamiento de los datos personales
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Licitud, lealtad y transparencia</li>
                <li>Limitación de la finalidad</li>
                <li>Minimización de datos</li>
                <li>Exactitud</li>
                <li>Limitación del plazo de conservación</li>
                <li>Integridad y confidencialidad</li>
                <li>Responsabilidad proactiva</li>
              </ul>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Categorías de datos tratados
              </h3>
              <p className="text-gray-700 mb-6">
                Solo se tratarán datos identificativos. No se recogen categorías especiales según el artículo 9 del RGPD.
              </p>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Base legal del tratamiento
              </h3>
              <p className="text-gray-700 mb-6">
                La base legal es el consentimiento del Usuario, que podrá retirarse en cualquier momento sin afectar al uso del sitio web.
              </p>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Finalidad del tratamiento
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Atender consultas, formularios o solicitudes del Usuario</li>
                <li>Mantenimiento de la relación comercial</li>
                <li>Análisis estadístico, personalización y mejora del contenido</li>
                <li>Estudios de marketing</li>
              </ul>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Plazo de conservación
              </h3>
              <p className="text-gray-700 mb-6">
                Los datos se conservarán durante 18 meses o hasta que el Usuario solicite su supresión.
              </p>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Destinatarios de los datos
              </h3>
              <p className="text-gray-700 mb-6">
                No se compartirán datos personales con terceros, salvo obligación legal o autorización explícita.
              </p>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Menores de edad
              </h3>
              <p className="text-gray-700 mb-6">
                Solo mayores de 14 años podrán prestar consentimiento. Para menores, se requerirá el consentimiento de padres o tutores.
              </p>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Seguridad y confidencialidad
              </h3>
              <p className="text-gray-700 mb-4">
                ARTDENTAL se compromete a proteger los datos mediante medidas técnicas y organizativas adecuadas. El sitio web cuenta con certificado SSL para garantizar una transmisión segura.
              </p>
              <p className="text-gray-700 mb-6">
                En caso de violación de seguridad que suponga riesgo para los derechos del Usuario, este será notificado de forma inmediata.
              </p>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Derechos del Usuario
              </h3>
              <p className="text-gray-700 mb-4">
                El Usuario podrá ejercer los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Acceso</li>
                <li>Rectificación</li>
                <li>Supresión (derecho al olvido)</li>
                <li>Limitación del tratamiento</li>
                <li>Portabilidad</li>
                <li>Oposición</li>
                <li>No ser objeto de decisiones automatizadas</li>
              </ul>
              <p className="text-gray-700 mb-2">
                Para ejercerlos, debe enviar solicitud con:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Nombre, apellidos y copia de DNI</li>
                <li>Petición concreta</li>
                <li>Domicilio de notificación</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">Dirección postal: Av. de Joan XXIII, 48, bajo, Benicalap, 46025 Valencia</p>
                <p className="text-gray-700">Email: info@artdentalvlc.com</p>
              </div>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Enlaces a sitios web de terceros
              </h3>
              <p className="text-gray-700 mb-6">
                El Sitio Web puede contener enlaces a páginas externas. ARTDENTAL no se responsabiliza por sus políticas de privacidad.
              </p>

              <h3 className="text-xl font-semibold text-dental-dark mb-4">
                Reclamaciones ante la autoridad de control
              </h3>
              <p className="text-gray-700 mb-6">
                El Usuario podrá presentar una reclamación ante la Agencia Española de Protección de Datos si considera que se ha vulnerado su derecho: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-dental-primary hover:text-dental-dark underline">https://www.aepd.es</a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-dental-dark mb-6">
                II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD
              </h2>
              <p className="text-gray-700 mb-4">
                El uso del sitio web implica la aceptación de esta política de privacidad. ARTDENTAL podrá modificarla en función de cambios legislativos o doctrinales. No se notificará de forma individual, por lo que se recomienda su revisión periódica.
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                Última actualización: 03 junio 2025
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidad;

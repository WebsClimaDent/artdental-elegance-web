import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-dental-dark">
      <Header />
      
      <main className="pt-20">
        {/* Back button */}
        <div className="container-custom py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-dental-light hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
        </div>

        {/* Header section with better gradient */}
        <div className="relative bg-gradient-to-r from-dental-dark to-dental-primary py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container-custom text-center">
            <div className="mb-6">
              <span className="text-3xl md:text-4xl font-playfair font-bold text-white">
                Art<span className="text-dental-light">Dental</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Información sobre el tratamiento de datos personales en nuestro sitio web
            </p>
          </div>
        </div>

        {/* Content with better styling */}
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            
            <section className="mb-16">
              <div className="bg-dental-primary/10 rounded-lg p-8 mb-12 border border-dental-primary/20">
                <h2 className="text-3xl font-playfair font-bold text-white mb-6 border-b-2 border-dental-primary pb-4">
                  I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS
                </h2>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Respetando lo establecido en la legislación vigente, <strong className="text-white">ARTDENTAL – Laboratorio Estética Dental</strong> (en adelante, también el Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    Leyes que incorpora esta política de privacidad
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Esta política está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, respeta las siguientes normas:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-dental-primary/10 p-4 rounded-lg border border-dental-primary/20">
                      <p className="font-semibold text-white">• Reglamento (UE) 2016/679 (RGPD)</p>
                    </div>
                    <div className="bg-dental-primary/10 p-4 rounded-lg border border-dental-primary/20">
                      <p className="font-semibold text-white">• Ley Orgánica 3/2018 (LOPD-GDD)</p>
                    </div>
                    <div className="bg-dental-primary/10 p-4 rounded-lg border border-dental-primary/20">
                      <p className="font-semibold text-white">• Real Decreto 1720/2007 (RDLOPD)</p>
                    </div>
                    <div className="bg-dental-primary/10 p-4 rounded-lg border border-dental-primary/20">
                      <p className="font-semibold text-white">• Ley 34/2002 (LSSI-CE)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    Identidad del responsable del tratamiento
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    El responsable del tratamiento de los datos personales recogidos en el Sitio Web es:
                  </p>
                  <div className="bg-gradient-to-r from-dental-primary/20 to-dental-primary/10 p-6 rounded-lg border-l-4 border-dental-primary">
                    <p className="font-bold text-white text-lg mb-2">ARTDENTAL – Laboratorio Estética Dental</p>
                    <p className="text-gray-300 mb-2">📍 Avda Juan XIII, N° 48 B, 46025, Valencia</p>
                    <p className="text-gray-300">✉️ artdental@gmx.es</p>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    Registro de Datos de Carácter Personal
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Los datos facilitados por los usuarios a través de formularios serán incorporados y tratados por ARTDENTAL para poder facilitar, agilizar y cumplir los compromisos establecidos, o para atender consultas o solicitudes. Se mantiene un registro de actividades de tratamiento conforme al RGPD.
                  </p>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    Principios aplicables al tratamiento de los datos personales
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Licitud, lealtad y transparencia",
                      "Limitación de la finalidad",
                      "Minimización de datos",
                      "Exactitud",
                      "Limitación del plazo de conservación",
                      "Integridad y confidencialidad",
                      "Responsabilidad proactiva"
                    ].map((principio, index) => (
                      <div key={index} className="flex items-center p-3 bg-dental-primary/10 rounded-lg border border-dental-primary/20">
                        <span className="text-dental-primary mr-3">✓</span>
                        <span className="text-gray-300 font-medium">{principio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      Categorías de datos tratados
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Solo se tratarán datos identificativos. No se recogen categorías especiales según el artículo 9 del RGPD.
                    </p>
                  </div>

                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      Base legal del tratamiento
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      La base legal es el consentimiento del Usuario, que podrá retirarse en cualquier momento sin afectar al uso del sitio web.
                    </p>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    Finalidad del tratamiento
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Atender consultas, formularios o solicitudes del Usuario",
                      "Mantenimiento de la relación comercial",
                      "Análisis estadístico, personalización y mejora del contenido",
                      "Estudios de marketing"
                    ].map((finalidad, index) => (
                      <div key={index} className="flex items-start p-4 bg-dental-primary/10 rounded-lg border border-dental-primary/20">
                        <span className="text-dental-primary mr-3 mt-1">•</span>
                        <span className="text-gray-300">{finalidad}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      Plazo de conservación
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Los datos se conservarán durante <strong className="text-dental-primary">18 meses</strong> o hasta que el Usuario solicite su supresión.
                    </p>
                  </div>

                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      Destinatarios de los datos
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      No se compartirán datos personales con terceros, salvo obligación legal o autorización explícita.
                    </p>
                  </div>

                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      Menores de edad
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Solo mayores de <strong className="text-dental-primary">14 años</strong> podrán prestar consentimiento. Para menores, se requerirá el consentimiento de padres o tutores.
                    </p>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    Seguridad y confidencialidad
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      ARTDENTAL se compromete a proteger los datos mediante medidas técnicas y organizativas adecuadas. El sitio web cuenta con <strong className="text-dental-primary">certificado SSL</strong> para garantizar una transmisión segura.
                    </p>
                    <div className="bg-dental-primary/10 p-4 rounded-lg border-l-4 border-dental-primary">
                      <p className="text-gray-300 leading-relaxed">
                        En caso de violación de seguridad que suponga riesgo para los derechos del Usuario, este será notificado de forma inmediata.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    Derechos del Usuario
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    El Usuario podrá ejercer los siguientes derechos:
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {[
                      "Acceso",
                      "Rectificación", 
                      "Supresión (derecho al olvido)",
                      "Limitación del tratamiento",
                      "Portabilidad",
                      "Oposición",
                      "No ser objeto de decisiones automatizadas"
                    ].map((derecho, index) => (
                      <div key={index} className="bg-dental-primary/10 p-3 rounded-lg text-center border border-dental-primary/20">
                        <span className="text-white font-medium">{derecho}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-dental-primary/5 p-6 rounded-lg border border-dental-primary/20">
                    <h4 className="font-bold text-white mb-4">Para ejercer estos derechos, debe enviar solicitud con:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start text-gray-300">
                        <span className="text-dental-primary mr-2">•</span>
                        Nombre, apellidos y copia de DNI
                      </li>
                      <li className="flex items-start text-gray-300">
                        <span className="text-dental-primary mr-2">•</span>
                        Petición concreta
                      </li>
                      <li className="flex items-start text-gray-300">
                        <span className="text-dental-primary mr-2">•</span>
                        Domicilio de notificación
                      </li>
                    </ul>
                    <div className="bg-dental-dark/30 p-4 rounded-lg border border-dental-primary/30">
                      <p className="font-semibold text-white mb-2">Datos de contacto:</p>
                      <p className="text-gray-300">📍 Avda Juan XIII, N° 48 B, 46025, Valencia</p>
                      <p className="text-gray-300">✉️ artdental@gmx.es</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      Enlaces a sitios web de terceros
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      El Sitio Web puede contener enlaces a páginas externas. ARTDENTAL no se responsabiliza por sus políticas de privacidad.
                    </p>
                  </div>

                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      Reclamaciones ante la autoridad de control
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      El Usuario podrá presentar una reclamación ante la Agencia Española de Protección de Datos si considera que se ha vulnerado su derecho:
                    </p>
                    <a 
                      href="https://www.aepd.es" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-dental-primary hover:text-white underline font-medium"
                    >
                      🔗 https://www.aepd.es
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-dental-dark to-dental-primary rounded-lg p-8 text-white border border-dental-primary/20">
              <h2 className="text-3xl font-playfair font-bold mb-6 border-b-2 border-white/30 pb-4">
                II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD
              </h2>
              <div className="space-y-4">
                <p className="text-white/90 leading-relaxed">
                  El uso del sitio web implica la aceptación de esta política de privacidad. ARTDENTAL podrá modificarla en función de cambios legislativos o doctrinales. No se notificará de forma individual, por lo que se recomienda su revisión periódica.
                </p>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-white font-semibold">
                    📅 Última actualización: 03 junio 2025
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidad;

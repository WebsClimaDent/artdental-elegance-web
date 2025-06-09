
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-black">
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

        {/* Header section */}
        <div className="relative bg-gradient-to-r from-dental-dark to-dental-primary py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container-custom text-center">
            <div className="mb-6">
              <span className="text-3xl md:text-4xl font-playfair font-bold text-white">
                Art<span className="text-dental-light">Dental</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Política de Cookies
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Información sobre el uso de cookies en nuestro sitio web
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            
            <section className="mb-16">
              <div className="bg-dental-primary/10 rounded-lg p-8 mb-12 border border-dental-primary/20">
                <h2 className="text-3xl font-playfair font-bold text-white mb-6 border-b-2 border-dental-primary pb-4">
                  POLÍTICA DE COOKIES
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en nuestro sitio web 
                  y qué opciones tiene para controlarlas.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    ¿QUÉ SON LAS COOKIES?
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
                    nuestro sitio web. Estas cookies nos permiten reconocer su navegador y capturar y recordar 
                    cierta información.
                  </p>
                  <div className="bg-gradient-to-r from-dental-primary/20 to-dental-primary/10 p-6 rounded-lg border-l-4 border-dental-primary">
                    <p className="text-gray-300 leading-relaxed">
                      Las cookies mejoran su experiencia de navegación al permitir que el sitio web recuerde 
                      sus preferencias y proporcione funcionalidades personalizadas.
                    </p>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    TIPOS DE COOKIES QUE UTILIZAMOS
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-dental-primary/10 p-6 rounded-lg border border-dental-primary/20">
                      <h4 className="text-xl font-semibold text-white mb-3">🔧 Cookies Técnicas</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Son estrictamente necesarias para el funcionamiento del sitio web. Sin estas cookies, 
                        el sitio web no puede funcionar correctamente.
                      </p>
                    </div>

                    <div className="bg-dental-primary/10 p-6 rounded-lg border border-dental-primary/20">
                      <h4 className="text-xl font-semibold text-white mb-3">📊 Cookies Analíticas</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web 
                        recopilando y reportando información de forma anónima.
                      </p>
                    </div>

                    <div className="bg-dental-primary/10 p-6 rounded-lg border border-dental-primary/20">
                      <h4 className="text-xl font-semibold text-white mb-3">⚙️ Cookies de Funcionalidad</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Permiten que el sitio web recuerde las opciones que hace (como su nombre de usuario, 
                        idioma o región) y proporcione características mejoradas y más personales.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    COOKIES ESPECÍFICAS QUE UTILIZAMOS
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-dental-primary/20">
                          <th className="text-left p-4 text-dental-light font-semibold">Cookie</th>
                          <th className="text-left p-4 text-dental-light font-semibold">Propósito</th>
                          <th className="text-left p-4 text-dental-light font-semibold">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-dental-primary/10">
                          <td className="p-4 text-gray-300 font-mono">session_id</td>
                          <td className="p-4 text-gray-300">Mantener la sesión del usuario</td>
                          <td className="p-4 text-gray-300">Sesión</td>
                        </tr>
                        <tr className="border-b border-dental-primary/10">
                          <td className="p-4 text-gray-300 font-mono">preferences</td>
                          <td className="p-4 text-gray-300">Recordar preferencias del usuario</td>
                          <td className="p-4 text-gray-300">1 año</td>
                        </tr>
                        <tr className="border-b border-dental-primary/10">
                          <td className="p-4 text-gray-300 font-mono">analytics</td>
                          <td className="p-4 text-gray-300">Recopilar datos de uso anónimos</td>
                          <td className="p-4 text-gray-300">2 años</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    CÓMO GESTIONAR LAS COOKIES
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Puede controlar y/o eliminar las cookies como desee. Para obtener detalles, 
                    consulte aboutcookies.org. Puede eliminar todas las cookies que ya están en 
                    su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white mb-4">Gestión por navegador:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-dental-primary/10 p-4 rounded-lg border border-dental-primary/20">
                        <h5 className="font-semibold text-white mb-2">🌐 Chrome</h5>
                        <p className="text-gray-300 text-sm">
                          Configuración → Privacidad y seguridad → Cookies y otros datos del sitio
                        </p>
                      </div>
                      <div className="bg-dental-primary/10 p-4 rounded-lg border border-dental-primary/20">
                        <h5 className="font-semibold text-white mb-2">🦊 Firefox</h5>
                        <p className="text-gray-300 text-sm">
                          Opciones → Privacidad y seguridad → Cookies y datos del sitio
                        </p>
                      </div>
                      <div className="bg-dental-primary/10 p-4 rounded-lg border border-dental-primary/20">
                        <h5 className="font-semibold text-white mb-2">🧭 Safari</h5>
                        <p className="text-gray-300 text-sm">
                          Preferencias → Privacidad → Gestionar datos del sitio web
                        </p>
                      </div>
                      <div className="bg-dental-primary/10 p-4 rounded-lg border border-dental-primary/20">
                        <h5 className="font-semibold text-white mb-2">📘 Edge</h5>
                        <p className="text-gray-300 text-sm">
                          Configuración → Privacidad, búsqueda y servicios → Cookies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    CONSENTIMIENTO Y ACEPTACIÓN
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Al utilizar nuestro sitio web, usted consiente el uso de cookies de acuerdo con 
                    esta Política de Cookies. Si no está de acuerdo con el uso de cookies, 
                    puede deshabilitarlas a través de la configuración de su navegador.
                  </p>
                  <div className="bg-dental-primary/10 p-4 rounded-lg border-l-4 border-dental-primary">
                    <p className="text-gray-300 leading-relaxed">
                      ⚠️ <strong>Nota importante:</strong> La desactivación de ciertas cookies puede 
                      afectar la funcionalidad del sitio web y su experiencia de usuario.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      COOKIES DE TERCEROS
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      En algunos casos especiales, también utilizamos cookies proporcionadas por 
                      terceros de confianza. Estas cookies están sujetas a las políticas de 
                      privacidad de los respectivos terceros.
                    </p>
                  </div>

                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      ACTUALIZACIONES
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Esta Política de Cookies puede actualizarse ocasionalmente. 
                      Cualquier cambio se publicará en esta página con la fecha de 
                      la última actualización.
                    </p>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    CONTACTO
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Si tiene alguna pregunta sobre esta Política de Cookies, puede contactarnos:
                  </p>
                  <div className="bg-gradient-to-r from-dental-primary/20 to-dental-primary/10 p-6 rounded-lg border-l-4 border-dental-primary">
                    <p className="text-white font-semibold mb-2">ARTDENTAL – Laboratorio Estética Dental</p>
                    <p className="text-gray-300 mb-2">📍 Avda Juan XIII, N° 48 B, 46025, Valencia</p>
                    <p className="text-gray-300">✉️ artdental@gmx.es</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-dental-dark to-dental-primary rounded-lg p-8 text-white border border-dental-primary/20">
              <div className="text-center">
                <p className="text-white/90 leading-relaxed mb-4">
                  Esta política de cookies tiene carácter informativo sobre el uso de cookies en nuestro sitio web
                </p>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-white font-semibold">
                    📅 Última actualización: 09 junio 2025
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

export default Cookies;

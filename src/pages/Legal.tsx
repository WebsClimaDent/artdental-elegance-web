
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Legal = () => {
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
              Aviso Legal
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Información legal del sitio web
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            
            <section className="mb-16">
              <div className="bg-dental-primary/10 rounded-lg p-8 mb-12 border border-dental-primary/20">
                <h2 className="text-3xl font-playfair font-bold text-white mb-6 border-b-2 border-dental-primary pb-4">
                  AVISO LEGAL DEL SITIO WEB
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  El presente aviso legal regula el uso del sitio web, propiedad de ARTDENTAL – Laboratorio Estética Dental.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    I. DATOS IDENTIFICATIVOS
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular del sitio web:
                  </p>
                  <div className="bg-gradient-to-r from-dental-primary/20 to-dental-primary/10 p-6 rounded-lg border-l-4 border-dental-primary">
                    <p className="font-bold text-white text-lg mb-2">ARTDENTAL – Laboratorio Estética Dental</p>
                    <p className="text-gray-300 mb-2">📍 Av. de Joan XXIII, 48, bajo, Benicalap, 46025 Valencia</p>
                    <p className="text-gray-300">✉️ info@artdentalvlc.com</p>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    II. USUARIOS
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    El acceso y/o uso de este sitio web atribuye la condición de Usuario, que acepta, desde dicho acceso y/o uso, las condiciones aquí reflejadas. El uso de este sitio web implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, por lo que, si no está de acuerdo con cualquiera de las condiciones aquí establecidas, no deberá usar ni acceder a este sitio.
                  </p>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    III. USO DEL SITIO WEB
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Este sitio web proporciona acceso a información, servicios, datos y contenidos (en adelante, "los contenidos") propiedad de ARTDENTAL. El Usuario asume la responsabilidad del uso del sitio web. Esta responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios que ARTDENTAL ofrece a través de su sitio web y, con carácter enunciativo pero no limitativo, a no emplearlos para:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público",
                      "Difundir contenidos de carácter racista, xenófobo, pornográfico, de apología del terrorismo o atentatorio contra los derechos humanos",
                      "Provocar daños en los sistemas físicos y lógicos de ARTDENTAL, de sus proveedores o de terceras personas",
                      "Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-dental-primary/10 rounded-lg border border-dental-primary/20">
                        <span className="text-dental-primary mr-3 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    IV. PROPIEDAD INTELECTUAL E INDUSTRIAL
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Todos los contenidos del sitio web (diseño gráfico, logotipos, textos, imágenes, vídeos, software, etc.) son propiedad exclusiva de ARTDENTAL o de sus licenciantes, estando protegidos por derechos de propiedad intelectual e industrial.
                  </p>
                  <div className="bg-dental-primary/10 p-4 rounded-lg border-l-4 border-dental-primary">
                    <p className="text-gray-300 leading-relaxed">
                      Queda expresamente prohibida la reproducción, distribución, transformación o comunicación pública, total o parcial, de los contenidos del sitio sin la autorización expresa de ARTDENTAL.
                    </p>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    V. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    ARTDENTAL no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Errores u omisiones en los contenidos",
                      "Falta de disponibilidad del portal",
                      "Transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-dental-primary/10 rounded-lg border border-dental-primary/20">
                        <span className="text-dental-primary mr-3 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      VI. MODIFICACIONES
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      ARTDENTAL se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos como los servicios que se presten a través de la misma, así como la forma en la que estos aparezcan presentados o localizados.
                    </p>
                  </div>

                  <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      VII. ENLACES
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      En el caso de que en este sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de internet, ARTDENTAL no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                    </p>
                  </div>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    VIII. DERECHO DE EXCLUSIÓN
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    ARTDENTAL se reserva el derecho a denegar o retirar el acceso al sitio web y/o a los servicios ofrecidos sin necesidad de preaviso a instancia propia o de un tercero, a aquellos usuarios que incumplan el presente Aviso Legal.
                  </p>
                </div>

                <div className="bg-dental-dark/50 border border-dental-primary/20 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                    IX. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    La relación entre ARTDENTAL y el Usuario se regirá por la normativa española vigente. Cualquier controversia se someterá a los Juzgados y Tribunales de Valencia, salvo que la normativa aplicable disponga otra cosa.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-dental-dark to-dental-primary rounded-lg p-8 text-white border border-dental-primary/20">
              <div className="text-center">
                <p className="text-white/90 leading-relaxed mb-4">
                  Este aviso legal tiene carácter informativo y regula las condiciones de acceso y uso del sitio web
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

export default Legal;

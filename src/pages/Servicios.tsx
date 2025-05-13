import { useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";

const Servicios = () => {
  useEffect(() => {
    document.title = "ArtDental - Nuestros Servicios";
  }, []);

  return (
    <PageLayout title="Nuestros Servicios">
      <section className="section-padding">
        <div className="container-custom">
          {/* Content for the services page */}
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Ofrecemos una amplia gama de servicios de laboratorio dental con los más altos estándares de calidad y precisión. Nuestro equipo de técnicos altamente capacitados trabaja con los materiales más avanzados para crear restauraciones dentales excepcionales.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-dental-dark p-6 rounded-lg shadow-md reveal">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Coronas y Puentes</h3>
              <p className="text-gray-300 mb-4">
                Fabricamos coronas y puentes personalizados utilizando diversos materiales como cerámica, zirconio, metal-cerámica y oro, adaptándonos a las necesidades específicas de cada caso.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Coronas de cerámica sin metal</li>
                <li>Coronas de zirconio</li>
                <li>Puentes fijos de 3 a 6 unidades</li>
                <li>Restauraciones sobre implantes</li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-dental-dark p-6 rounded-lg shadow-md reveal">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Carillas de Porcelana</h3>
              <p className="text-gray-300 mb-4">
                Creamos carillas de porcelana ultrafinas que transforman la estética dental con resultados naturales y duraderos, perfectas para corregir problemas de color, forma o posición.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Carillas mínimamente invasivas</li>
                <li>Carillas de disilicato de litio</li>
                <li>Carillas de feldespato</li>
                <li>Diseño digital de sonrisa</li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-dental-dark p-6 rounded-lg shadow-md reveal">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Prótesis Removibles</h3>
              <p className="text-gray-300 mb-4">
                Fabricamos prótesis removibles de alta calidad que combinan funcionalidad y estética, utilizando materiales biocompatibles para mayor comodidad del paciente.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Prótesis parciales de acrílico</li>
                <li>Prótesis parciales flexibles</li>
                <li>Prótesis parciales metálicas</li>
                <li>Prótesis completas</li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-dental-dark p-6 rounded-lg shadow-md reveal">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Rehabilitación sobre Implantes</h3>
              <p className="text-gray-300 mb-4">
                Desarrollamos soluciones protésicas sobre implantes, desde coronas unitarias hasta rehabilitaciones completas, con precisión milimétrica y excelente estética.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Coronas atornilladas y cementadas</li>
                <li>Barras y sobredentaduras</li>
                <li>Prótesis híbridas</li>
                <li>Rehabilitaciones completas All-on-4 y All-on-6</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-dental-dark p-8 rounded-lg shadow-md reveal">
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-white text-center">Nuestro Proceso de Trabajo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-dental-dark text-2xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">Planificación</h4>
                <p className="text-gray-300">Recepción del caso y análisis detallado de requisitos y especificaciones técnicas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-dental-dark text-2xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">Fabricación</h4>
                <p className="text-gray-300">Producción meticulosa utilizando tecnología avanzada y técnicas artesanales.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-dental-dark text-2xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">Control de Calidad</h4>
                <p className="text-gray-300">Verificación exhaustiva de ajuste, función y estética antes de la entrega.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Servicios;

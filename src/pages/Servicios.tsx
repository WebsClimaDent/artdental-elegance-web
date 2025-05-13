
import { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import ServiceDialog from "../components/services/ServiceDialog";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  detailedDescription?: string;
  benefits?: string[];
  materials?: string[];
  testimonial?: {
    quote: string;
    author: string;
    clinic?: string;
  };
  additionalImages?: string[];
}

const Servicios = () => {
  useEffect(() => {
    document.title = "ArtDental - Nuestros Servicios";
  }, []);
  
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Coronas",
      description: "Fabricamos coronas personalizadas utilizando diversos materiales como cerámica, zirconio, metal-cerámica y oro, adaptándonos a las necesidades específicas de cada caso.",
      image: "/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png",
      detailedDescription: "Nuestras coronas dentales son restauraciones de alta precisión diseñadas para recrear la forma, función y estética del diente natural. Utilizamos tecnología de vanguardia y materiales de la más alta calidad para garantizar resultados excepcionales.",
      materials: [
        "Disilicato de litio para máxima estética en sectores anteriores", 
        "Zirconio multicapa para resistencia y naturalidad", 
        "Metal-cerámica para casos que requieren mayor durabilidad"
      ],
      benefits: [
        "Restauración completa de la función masticatoria",
        "Mejora significativa de la estética dental",
        "Protección del diente remanente",
        "Durabilidad excepcional con mantenimiento adecuado"
      ],
      testimonial: {
        quote: "Las coronas de ArtDental han revolucionado nuestra práctica clínica. La precisión del ajuste y la calidad estética son simplemente superiores.",
        author: "Dr. Alejandro Méndez",
        clinic: "Clínica Dental Sonrisas"
      }
    },
    {
      id: 2,
      title: "Puentes",
      description: "Creamos puentes dentales fijos que reemplazan piezas ausentes con alta estética y funcionalidad, devolviendo la sonrisa completa al paciente.",
      image: "/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
      detailedDescription: "Nuestros puentes dentales son estructuras protésicas fijas diseñadas para reemplazar uno o varios dientes ausentes. Fabricados con precisión milimétrica, nuestros puentes restauran tanto la función como la estética de la dentición natural.",
      materials: [
        "Zirconio monolítico para máxima resistencia", 
        "Cerámica estratificada para resultados estéticos superiores", 
        "Metal-cerámica para casos con requerimientos especiales"
      ],
      benefits: [
        "Restauración completa de la función masticatoria",
        "Prevención de la migración de dientes adyacentes",
        "Distribución equilibrada de las fuerzas masticatorias",
        "Mejora de la fonética y estética facial"
      ]
    },
    {
      id: 3,
      title: "Carillas de Porcelana",
      description: "Láminas ultrafinas que transforman la estética dental con resultados naturales y duraderos, perfectas para corregir problemas de color, forma o posición.",
      image: "/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
      detailedDescription: "Nuestras carillas de porcelana son láminas ultrafinas diseñadas para cubrir la superficie frontal de los dientes, transformando por completo su apariencia. Fabricadas con materiales cerámicos de alta calidad, ofrecen resultados estéticos excepcionales con mínima invasión.",
      materials: [
        "Porcelana feldespática para máxima translucidez y naturalidad", 
        "Disilicato de litio para combinar resistencia y estética", 
        "Cerámica de última generación con propiedades ópticas avanzadas"
      ],
      benefits: [
        "Corrección de problemas de color, forma y posición dental",
        "Resultados altamente estéticos y naturales",
        "Mínima preparación dental",
        "Resistencia a las manchas y durabilidad"
      ],
      testimonial: {
        quote: "Las carillas fabricadas por ArtDental son obras de arte. La naturalidad y el detalle son impresionantes, mis pacientes quedan encantados.",
        author: "Dra. Gabriela Rodríguez",
        clinic: "Centro de Estética Dental"
      }
    },
    {
      id: 4,
      title: "Prótesis Removibles",
      description: "Soluciones funcionales y estéticas para reemplazar piezas dentales con comodidad y naturalidad, adaptadas a las necesidades específicas de cada paciente.",
      image: "/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png",
      detailedDescription: "Nuestras prótesis removibles representan soluciones personalizadas para pacientes con pérdida dental parcial o total. Fabricadas con materiales biocompatibles de alta calidad, estas restauraciones ofrecen comodidad, funcionalidad y estética superior.",
      materials: [
        "Acrílico de alta resistencia con caracterizaciones personalizadas", 
        "Estructuras metálicas de cromo-cobalto para mayor estabilidad", 
        "Materiales flexibles para casos especiales y mayor comodidad"
      ],
      benefits: [
        "Restauración de la función masticatoria y fonética",
        "Mantenimiento del contorno facial y soporte labial",
        "Fácil mantenimiento e higiene",
        "Solución económica para múltiples ausencias dentales"
      ]
    },
    {
      id: 5,
      title: "Rehabilitación sobre Implantes",
      description: "Desarrollamos soluciones protésicas sobre implantes, desde coronas unitarias hasta rehabilitaciones completas, con precisión milimétrica y excelente estética.",
      image: "/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png",
      detailedDescription: "Nuestra línea de rehabilitación sobre implantes ofrece soluciones definitivas para pacientes con ausencias dentales. Desde coronas unitarias hasta rehabilitaciones completas, cada trabajo se realiza con precisión milimétrica para garantizar un ajuste pasivo y resultados predecibles.",
      materials: [
        "Zirconio translúcido para óptima estética en sectores visibles", 
        "Titanio médico para componentes personalizados", 
        "Materiales híbridos de alta resistencia para rehabilitaciones completas"
      ],
      benefits: [
        "Restauraciones fijas con estética y función natural",
        "Preservación del hueso alveolar a largo plazo",
        "Mejora significativa en la calidad de vida",
        "Soluciones duraderas con mantenimiento adecuado"
      ],
      testimonial: {
        quote: "La precisión y el acabado de las rehabilitaciones sobre implantes de ArtDental son excepcionales. El ajuste pasivo y la estética conseguida facilitan enormemente nuestro trabajo clínico.",
        author: "Dr. Fernando Martínez",
        clinic: "Instituto de Implantología Oral"
      }
    },
  ];

  const openServiceDialog = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <PageLayout title="Nuestros Servicios">
      <section className="section-padding">
        <div className="container-custom">
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Ofrecemos una amplia gama de servicios de laboratorio dental con los más altos estándares de calidad y precisión. Nuestro equipo de técnicos altamente capacitados trabaja con los materiales más avanzados para crear restauraciones dentales excepcionales.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-dental-dark p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer reveal"
                onClick={() => openServiceDialog(service)}
              >
                <div className="h-40 overflow-hidden rounded-md mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  {service.benefits?.slice(0, 2).map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <button className="text-white font-medium hover:underline inline-flex items-center">
                  Ver detalles
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            ))}
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
      
      {selectedService && (
        <ServiceDialog 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          service={selectedService} 
        />
      )}
    </PageLayout>
  );
};

export default Servicios;

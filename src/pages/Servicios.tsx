
import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceDialog from "../components/services/ServiceDialog";
import BackButton from "@/components/ui/back-button";

// Extended service data with additional information for popups
const serviceCategories = [
  {
    id: 1,
    title: "Restauraciones Estéticas",
    services: [
      {
        id: 1,
        title: "Coronas de Disilicato de Litio",
        description: "Restauraciones completas que combinan estética y resistencia. Ideales para sectores anteriores y posteriores.",
        image: "/lovable-uploads/ffea444a-33f5-4622-be46-fb3bb47eb5d3.png",
        detailedDescription: "Las coronas de disilicato de litio representan la fusión perfecta entre estética y funcionalidad. Fabricadas con materiales de última generación, estas restauraciones ofrecen una translucidez natural que imita perfectamente el esmalte dental, mientras mantienen una resistencia excepcional para soportar las fuerzas masticatorias. En ArtDental, personalizamos cada corona considerando la morfología dental del paciente y la armonía con el resto de su sonrisa.",
        benefits: [
          "Estética superior con apariencia natural",
          "Alta resistencia a la fractura",
          "Excelente adaptación marginal",
          "Biocompatibilidad óptima",
          "Mínima preparación dental"
        ],
        materials: [
          "Disilicato de litio de alta densidad",
          "Cerámicas estratificadas para personalización",
          "Sistemas adhesivos de última generación"
        ],
        testimonial: {
          quote: "Las coronas que ArtDental fabricó para mi paciente revitalizaron completamente su sonrisa. La precisión y el acabado estético son simplemente impecables.",
          author: "Dr. Miguel Fernández",
          clinic: "Clínica Dental Avanza"
        },
        additionalImages: [
          "/lovable-uploads/ffea444a-33f5-4622-be46-fb3bb47eb5d3.png",
          "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png"
        ]
      },
      {
        id: 2,
        title: "Carillas de Porcelana",
        description: "Finas láminas de porcelana que transforman la apariencia dental con mínima invasión.",
        image: "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png",
        detailedDescription: "Nuestras carillas de porcelana son verdaderas joyas dentales, diseñadas para transformar sonrisas con la mínima invasión posible. Cada lámina es meticulosamente elaborada, capa por capa, para lograr efectos de profundidad, translucidez y color que emulan perfectamente la naturaleza. En ArtDental nos especializamos en conseguir resultados imperceptibles que realzan la belleza natural de cada paciente.",
        benefits: [
          "Transformación estética inmediata",
          "Conservación máxima del diente natural",
          "Resistencia a las manchas",
          "Durabilidad excepcional",
          "Personalización total"
        ],
        materials: [
          "Porcelana feldespática de alta calidad",
          "Cerámicas estratificadas artesanales",
          "Sistemas de adhesión avanzados"
        ],
        testimonial: {
          quote: "Mis pacientes quedan maravillados con el resultado de las carillas de ArtDental. La naturalidad y el detalle que consiguen en cada pieza es extraordinario.",
          author: "Dra. Laura Martínez",
          clinic: "Estética Dental Barcelona"
        },
        additionalImages: [
          "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png",
          "/lovable-uploads/b2650b57-05ac-4db5-84d8-cd04602b37eb.png"
        ]
      },
      {
        id: 3,
        title: "Incrustaciones",
        description: "Restauraciones parciales para dientes posteriores con daño moderado que preservan estructura dental.",
        image: "/lovable-uploads/a9f43105-d66d-429f-8974-d05472ea5b4d.png",
        detailedDescription: "Las incrustaciones representan la evolución de las obturaciones tradicionales. Fabricadas con precisión digital y materiales cerámicos de alta resistencia, ofrecen una solución conservadora y duradera para restaurar dientes con daño moderado. En ArtDental, cada incrustación es diseñada para adaptarse perfectamente a la anatomía oclusal del paciente, garantizando función y longevidad.",
        benefits: [
          "Preservación máxima de estructura dental sana",
          "Mayor resistencia que las restauraciones directas",
          "Sellado marginal superior",
          "Estabilidad de color a largo plazo",
          "Biocompatibilidad"
        ],
        materials: [
          "Disilicato de litio monolítico",
          "Cerámica reforzada con polímeros",
          "Composite nanohíbrido de alta densidad"
        ],
        testimonial: {
          quote: "La precisión y ajuste de las incrustaciones es impresionante. Los pacientes aprecian la durabilidad y estética natural de estas restauraciones.",
          author: "Dr. Javier Ruiz",
          clinic: "Centro Odontológico Valencia"
        },
        additionalImages: [
          "/lovable-uploads/a9f43105-d66d-429f-8974-d05472ea5b4d.png",
          "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Rehabilitación Funcional",
    services: [
      {
        id: 4,
        title: "Puentes sobre Dientes",
        description: "Estructuras fijas para reemplazar piezas dentales ausentes con alta estética y funcionalidad.",
        image: "/lovable-uploads/f996a1e6-22ae-4be8-a0c0-ec1aaaec28a9.png",
        detailedDescription: "Nuestros puentes dentales combinan ingeniería de precisión con artesanía estética para reemplazar dientes ausentes de forma permanente. Utilizando tecnología CAD/CAM y materiales de última generación, creamos estructuras de soporte invisible que sostienen piezas de reemplazo indistinguibles de los dientes naturales. El resultado es una restauración que devuelve la función masticatoria y la estética sin compromisos.",
        benefits: [
          "Restauración completa de la función masticatoria",
          "Prevención del desplazamiento dental",
          "Distribución equilibrada de fuerzas oclusales",
          "Estética natural en el sector anterior",
          "Solución permanente y duradera"
        ],
        materials: [
          "Estructura de zirconio de alta resistencia",
          "Cerámica estratificada para máxima estética",
          "Conectores reforzados para mayor durabilidad"
        ],
        testimonial: {
          quote: "Los puentes que ArtDental fabrica para mis pacientes son obras maestras de funcionalidad y estética. La capacidad técnica y artística de su equipo es extraordinaria.",
          author: "Dr. Alejandro Sánchez",
          clinic: "Instituto Dental Especializado"
        },
        additionalImages: [
          "/lovable-uploads/f996a1e6-22ae-4be8-a0c0-ec1aaaec28a9.png",
          "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png"
        ]
      },
      {
        id: 5,
        title: "Sobredentaduras",
        description: "Prótesis completas con sistemas de retención sobre implantes para mayor estabilidad y confort.",
        image: "/lovable-uploads/b2650b57-05ac-4db5-84d8-cd04602b37eb.png",
        detailedDescription: "Las sobredentaduras representan la evolución de las prótesis removibles tradicionales. Mediante sistemas de anclaje precisos sobre implantes, ofrecemos soluciones que combinan la estabilidad de restauraciones fijas con la facilidad de mantenimiento de las removibles. En ArtDental, cada sobredentadura es diseñada considerando la anatomía facial, la fonética y la estética para devolver confianza y calidad de vida a los pacientes.",
        benefits: [
          "Mayor estabilidad que prótesis convencionales",
          "Prevención de reabsorción ósea",
          "Facilidad de higiene",
          "Mejora significativa de la función masticatoria",
          "Restauración del perfil facial"
        ],
        materials: [
          "Base acrílica de alta densidad",
          "Dientes de composite multicapa",
          "Sistemas de retención de precisión en titanio"
        ],
        testimonial: {
          quote: "Las sobredentaduras de ArtDental han devuelto la calidad de vida a muchos de mis pacientes. La precisión en los sistemas de retención y la naturalidad estética son excepcionales.",
          author: "Dra. Carmen Rodríguez",
          clinic: "Clínica Odontológica Integral"
        },
        additionalImages: [
          "/lovable-uploads/b2650b57-05ac-4db5-84d8-cd04602b37eb.png",
          "/lovable-uploads/ffea444a-33f5-4622-be46-fb3bb47eb5d3.png"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Soluciones sobre Implantes",
    services: [
      {
        id: 6,
        title: "Coronas sobre Implantes",
        description: "Restauraciones unitarias sobre implantes con perfecta integración estética y funcional.",
        image: "/lovable-uploads/f996a1e6-22ae-4be8-a0c0-ec1aaaec28a9.png",
        detailedDescription: "Las coronas sobre implantes representan el estándar más alto en la reposición de dientes unitarios. Diseñadas con precisión digital y fabricadas con materiales de última generación, estas restauraciones se integran perfectamente con la dentición natural, tanto en forma como en función. En ArtDental, prestamos especial atención al perfil de emergencia y la interfaz con el tejido gingival para lograr resultados que desafían la detección.",
        benefits: [
          "Reemplazo dental sin afectar dientes adyacentes",
          "Preservación del hueso alveolar",
          "Estética indistinguible del diente natural",
          "Funcionalidad completa y duradera",
          "Mantenimiento simple como un diente natural"
        ],
        materials: [
          "Pilares personalizados de titanio o zirconio",
          "Coronas de disilicato de litio o zirconio multicapa",
          "Sistemas de conexión de precisión"
        ],
        testimonial: {
          quote: "Las coronas sobre implantes de ArtDental son simplemente perfectas. La integración con el tejido gingival y la armonía con los dientes naturales adyacentes es impresionante.",
          author: "Dr. Ricardo Vega",
          clinic: "Clínica Implantológica Avanzada"
        },
        additionalImages: [
          "/lovable-uploads/f996a1e6-22ae-4be8-a0c0-ec1aaaec28a9.png",
          "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png"
        ]
      },
      {
        id: 7,
        title: "Rehabilitaciones Completas",
        description: "Reconstrucción total de la dentición con sistemas implantosoportados de última generación.",
        image: "/lovable-uploads/b2650b57-05ac-4db5-84d8-cd04602b37eb.png",
        detailedDescription: "Las rehabilitaciones completas sobre implantes representan la cumbre de la odontología restauradora moderna. Combinando planificación quirúrgica 3D, diseño digital avanzado y materiales de vanguardia, ofrecemos soluciones definitivas para pacientes con pérdida dental extensa. Cada caso es abordado como un proyecto integral donde función, estética y longevidad se consideran en cada detalle del proceso.",
        benefits: [
          "Restauración completa de función masticatoria",
          "Estabilidad oclusal perfecta",
          "Rejuvenecimiento facial integral",
          "Prevención de reabsorción ósea",
          "Solución definitiva y duradera"
        ],
        materials: [
          "Estructuras de titanio o zirconio monolítico",
          "Cerámicas multicapa estratificadas",
          "Sistemas de conexión de alta precisión"
        ],
        testimonial: {
          quote: "ArtDental ha sido mi socio clave en los casos más complejos. Su capacidad para coordinar la precisión técnica con la visión artística en rehabilitaciones completas es excepcional.",
          author: "Dr. Francisco Torres",
          clinic: "Centro de Implantología Avanzada"
        },
        additionalImages: [
          "/lovable-uploads/b2650b57-05ac-4db5-84d8-cd04602b37eb.png",
          "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png"
        ]
      }
    ]
  }
];

const Servicios = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openServiceDialog = (service: any) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  useEffect(() => {
    document.title = "Nuestros Servicios - ArtDental";
    
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="bg-dental-dark min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-cover bg-center relative" 
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png)' }}>
          <div className="container-custom">
            <div className="mb-6">
              <BackButton className="text-white hover:text-dental-light" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-white">Nuestros Servicios</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto text-white">
                Soluciones dentales de precisión que combinan artesanía tradicional con 
                tecnología avanzada para resultados excepcionales.
              </p>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {serviceCategories.map((category) => (
          <section key={category.id} className="section-padding" id={`category-${category.id}`}>
            <div className="container-custom">
              <h2 className="text-3xl font-playfair font-semibold mb-12 text-white text-center">{category.title}</h2>
              
              <div className="space-y-16">
                {category.services.map((service, index) => (
                  <div 
                    key={service.id} 
                    className={`reveal flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                  >
                    <div className="lg:w-1/2">
                      <div className="rounded-lg overflow-hidden shadow-2xl h-96">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <button 
                        onClick={() => openServiceDialog(service)}
                        className="inline-flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-dental-dark transition-colors"
                      >
                        Saber más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Materials Section */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <h2 className="text-3xl font-playfair font-semibold mb-12 text-white text-center">Materiales Premium</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dental-dark rounded-lg overflow-hidden shadow-xl card-hover reveal">
                <div className="h-72 overflow-hidden">
                  <img 
                    src="/lovable-uploads/b4fb9586-9767-4aa4-85c0-edd9336d75ee.png" 
                    alt="Disilicato de Litio"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-white">Disilicato de Litio</h3>
                  <p className="text-gray-300 mb-4">
                    Material cerámico de alta resistencia que ofrece una estética excepcional. Ideal para restauraciones en zonas visibles.
                  </p>
                </div>
              </div>
              
              <div className="bg-dental-dark rounded-lg overflow-hidden shadow-xl card-hover reveal">
                <div className="h-72 overflow-hidden">
                  <img 
                    src="/lovable-uploads/2d62c58a-c567-46f0-b750-87913a275b9e.png" 
                    alt="Zirconio"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-white">Zirconio</h3>
                  <p className="text-gray-300 mb-4">
                    Material de última generación que combina resistencia superior con excelente estética. Perfecto para rehabilitaciones completas.
                  </p>
                </div>
              </div>
              
              <div className="bg-dental-dark rounded-lg overflow-hidden shadow-xl card-hover reveal">
                <div className="h-72 overflow-hidden">
                  <img 
                    src="/lovable-uploads/9c267ef9-0497-4708-9d11-9f6f0aadaf93.png" 
                    alt="Composite"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-white">Composite Avanzado</h3>
                  <p className="text-gray-300 mb-4">
                    Resinas de alta tecnología que permiten restauraciones estéticas y funcionales con excelente biocompatibilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-black">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 text-white">
              ¿Necesita una solución personalizada?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctenos para discutir casos específicos y desarrollar juntos 
              la mejor solución para sus pacientes.
            </p>
            <Link to="/contacto" className="btn-primary">
              Contactar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Dialog for service details */}
        {selectedService && (
          <ServiceDialog 
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
            service={selectedService}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Servicios;

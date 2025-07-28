import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceDialog from "../components/services/ServiceDialog";
import BackButton from "@/components/ui/back-button";
import TiltedCard from "@/components/ui/TiltedCard";

// Extended service data with additional information for popups
const serviceCategories = [
  {
    id: 1,
    title: "Restauraciones Estéticas",
    services: [
      {
        id: 2,
        title: "Carillas mínimamente invasivas",
        description: "Finas láminas de porcelana que transforman la apariencia dental con mínima invasión.",
        image: "/lovable-uploads/b45eb243-f90f-4e0d-9621-0b9a09a0c4ba.png",
        detailedDescription: "Nuestras carillas de porcelana son verdaderas joyas dentales, diseñadas para transformar sonrisas con la mínima invasión posible. Cada lámina es meticulosamente elaborada, capa por capa, para lograr efectos de profundidad, translucidez y color que emulan perfectamente la naturaleza. En ArtDental nos especializamos en conseguir una integración imperceptible que realza la belleza natural de cada paciente.",
        benefits: [
          "Transformación estética inmediata.",
          "Conservación máxima del diente natural.",
          "Resistencia a las manchas.",
          "Durabilidad excepcional.",
          "Personalización total."
        ],
        materials: [
          "Porcelana feldespática de alta calidad.",
          "Cerámicas estratificadas artesanales.",
          "Sistemas de adhesión avanzados."
        ],
        testimonial: {
          quote: "Mis pacientes quedan maravillados con el resultado de las carillas de ArtDental. La naturalidad y el detalle que consiguen en cada pieza es extraordinario.",
          author: "Dra. Laura Martínez"
        },
        additionalImages: [
          "/lovable-uploads/b45eb243-f90f-4e0d-9621-0b9a09a0c4ba.png",
          "/lovable-uploads/b2650b57-05ac-4db5-84d8-cd04602b37eb.png"
        ],
        galleryImages: [
          "/lovable-uploads/d03c8838-d654-4e41-a466-02e1c9705eca.png",
          "/lovable-uploads/444845aa-3d07-4987-bc4f-ad69fa1f72a9.png"
        ]
      },
      {
        id: 3,
        title: "Zirconio",
        description: "Restauraciones parciales para dientes posteriores con daño moderado que preservan estructura dental.",
        image: "/lovable-uploads/33f19cab-a7ba-41be-8791-7779d844bc96.png",
        detailedDescription: "Las incrustaciones de zirconio representan una alternativa moderna y precisa a las obturaciones tradicionales. Gracias al diseño digital y a la tecnología CAD/CAM, en ArtDental fabricamos restauraciones personalizadas que se ajustan perfectamente a la anatomía del diente. Utilizamos zirconio multicapa, un material cerámico de alta resistencia y gran estética, que permite conservar estructura dental sana y ofrecer una solución duradera, funcional y mínimamente invasiva para dientes con daño moderado.",
        benefits: [
          "Preservación máxima de estructura dental sana.",
          "Mayor resistencia que las restauraciones directas.",
          "Sellado marginal superior.",
          "Estabilidad de color a largo plazo.",
          "Biocompatibilidad."
        ],
        materials: [
          "Disilicato de litio monolítico.",
          "Cerámica reforzada con polímeros.",
          "Composite nanohíbrido de alta densidad."
        ],
        testimonial: {
          quote: "La precisión y ajuste de las incrustaciones es impresionante. Los pacientes aprecian la durabilidad y estética natural de estas restauraciones.",
          author: "Dr. Javier Ruiz"
        },
        additionalImages: [
          "/lovable-uploads/33f19cab-a7ba-41be-8791-7779d844bc96.png",
          "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png"
        ],
        galleryImages: [
          "/lovable-uploads/c261d174-eaa4-4b00-81ee-221648122b05.png",
          "/lovable-uploads/15f8619d-4aab-4958-a7a6-e842f5e60dae.png",
          "/lovable-uploads/a3a60322-55e9-40bf-9345-7efa3e1109c2.png"
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
        title: "Prótesis sobre Implantes",
        description: "Restauraciones unitarias sobre implantes con perfecta integración estética y funcional.",
        image: "/lovable-uploads/023de864-ad84-4b89-8f4e-942d8f3f4367.png",
        detailedDescription: "Las coronas sobre implantes representan el estándar más alto en la reposición de dientes unitarios. Diseñadas con precisión digital y fabricadas con materiales de última generación, estas restauraciones se integran perfectamente con la dentición natural, tanto en forma como en función. En ArtDental, prestamos especial atención al perfil de emergencia y la interfaz con el tejido gingival para lograr resultados que desafían la detección.",
        benefits: [
          "Reemplazo dental sin afectar dientes adyacentes.",
          "Preservación del hueso alveolar.",
          "Estética indistinguible del diente natural.",
          "Funcionalidad completa y duradera.",
          "Mantenimiento simple como un diente natural."
        ],
        materials: [
          "Pilares personalizados de titanio o zirconio.",
          "Coronas de disilicato de litio o zirconio multicapa.",
          "Sistemas de conexión de precisión."
        ],
        additionalImages: [
          "/lovable-uploads/023de864-ad84-4b89-8f4e-942d8f3f4367.png",
          "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png"
        ],
        galleryImages: [
          "/lovable-uploads/bca74c94-aa67-4872-8420-d0bfdb27b2f3.png",
          "/lovable-uploads/498b69ea-73bb-496b-8512-224a0e11da68.png",
          "/lovable-uploads/b9a35424-8b41-4dde-ba7f-348c2ebe7044.png",
          "/lovable-uploads/7eb7f152-098a-4b29-987c-f4862156b8b3.png"
        ]
      },
      {
        id: 7,
        title: "Rehabilitaciones Completas",
        description: "Reconstrucción total de la dentición con sistemas implantosoportados de última generación.",
        image: "/lovable-uploads/24dcc657-382e-4b26-98a0-40afbb400a15.png",
        detailedDescription: "Las rehabilitaciones completas sobre implantes representan la cumbre de la odontología restauradora moderna. Combinando planificación quirúrgica 3D, diseño digital avanzado y materiales de vanguardia, ofrecemos soluciones definitivas para pacientes con pérdida dental extensa. Cada caso es abordado como un proyecto integral donde función, estética y longevidad se consideran en cada detalle del proceso.",
        benefits: [
          "Restauración completa de función masticatoria.",
          "Estabilidad oclusal perfecta.",
          "Rejuvenecimiento facial integral.",
          "Prevención de reabsorción ósea.",
          "Solución definitiva y duradera."
        ],
        materials: [
          "Estructuras de titanio o zirconio monolítico.",
          "Cerámicas multicapa estratificadas.",
          "Sistemas de conexión de alta precisión."
        ],
        testimonial: {
          quote: "ArtDental ha sido mi socio clave en los casos más complejos. Su capacidad para coordinar la precisión técnica con la visión artística en rehabilitaciones completas es excepcional.",
          author: "Dr. Francisco Torres"
        },
        additionalImages: [
          "/lovable-uploads/24dcc657-382e-4b26-98a0-40afbb400a15.png",
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
        <section className="py-12 bg-cover bg-center relative" 
                style={{ 
                  backgroundImage: 'url(/lovable-uploads/64763ca7-0e44-40b1-9584-d0dd71db69ed.png)',
                  backgroundPosition: 'center 30%'
                }}>
          {/* Dark overlay for opacity */}
          <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
          
          <div className="container-custom relative z-10">
            <div className="mb-6">
              <BackButton className="text-white hover:text-dental-light" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-white">Nuestros Servicios</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto text-white">
                Soluciones dentales de precisión que combinan concepto tradicional con 
                tecnología avanzada para resultados excepcionales.
              </p>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {serviceCategories.map((category) => (
          <section key={category.id} className="py-8 md:py-10" id={`category-${category.id}`}>
            <div className="container-custom">
              <h2 className="text-3xl font-playfair font-semibold mb-6 text-white text-center">{category.title}</h2>
              
              <div className="space-y-8">
                {category.services.map((service, index) => (
                  <div 
                    key={service.id} 
                    id={getServiceId(service.title)}
                    className={`reveal flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                  >
                    <div className="lg:w-1/2">
                      <div className={`rounded-lg overflow-hidden shadow-2xl ${
                        service.id === 6 ? 'h-[320px]' : service.id === 7 ? 'h-[320px]' : service.id === 3 ? 'h-[320px]' : 'h-96'
                      }`}>
                        <TiltedCard
                          imageSrc={service.image}
                          altText={service.title}
                          captionText=""
                          containerWidth="100%"
                          containerHeight="100%"
                          imageWidth="100%"
                          imageHeight="100%"
                          scaleOnHover={1.08}
                          rotateAmplitude={12}
                          showTooltip={false}
                          objectFit="cover"
                          className={service.id === 6 ? 'object-cover object-center' : service.id === 7 ? 'object-cover object-[50%_35%]' : service.id === 3 ? 'object-cover object-center' : 'object-cover'}
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
        <section className="py-8 md:py-10 bg-black">
          <div className="container-custom">
            <h2 className="text-3xl font-playfair font-semibold mb-6 text-white text-center">Materiales Premium</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dental-dark rounded-lg overflow-hidden shadow-xl card-hover reveal">
                <div className="h-72 overflow-hidden">
                  <TiltedCard
                    imageSrc="/lovable-uploads/b4fb9586-9767-4aa4-85c0-edd9336d75ee.png"
                    altText="Carillas mínimamente invasivas"
                    captionText=""
                    containerWidth="100%"
                    containerHeight="100%"
                    imageWidth="100%"
                    imageHeight="100%"
                    scaleOnHover={1.1}
                    rotateAmplitude={10}
                    showTooltip={false}
                    objectFit="cover"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-white">Carillas mínimamente invasivas</h3>
                  <p className="text-gray-300 mb-4">
                    Material cerámico de alta resistencia que ofrece una estética excepcional. Ideal para restauraciones en zonas visibles.
                  </p>
                </div>
              </div>
              
              <div className="bg-dental-dark rounded-lg overflow-hidden shadow-xl card-hover reveal">
                <div className="h-72 overflow-hidden">
                  <TiltedCard
                    imageSrc="/lovable-uploads/b871d12e-500a-47e5-95dd-f3ccf2da0229.png"
                    altText="Prótesis sobre Implantes Blender"
                    captionText=""
                    containerWidth="100%"
                    containerHeight="100%"
                    imageWidth="100%"
                    imageHeight="100%"
                    scaleOnHover={1.1}
                    rotateAmplitude={10}
                    showTooltip={false}
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-white">Prótesis sobre Implantes Blender</h3>
                  <p className="text-gray-300 mb-4">
                    Material de última generación que combina resistencia superior con excelente estética. Perfecto para rehabilitaciones completas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-10 bg-black">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 text-white">
              ¿Necesita una solución personalizada?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctanos para discutir casos específicos y desarrollar juntos 
              la mejor solución para tus pacientes.
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

// Helper function to generate service IDs
function getServiceId(title: string): string {
  const serviceIds: { [key: string]: string } = {
    "Carillas mínimamente invasivas": "carillas-porcelana",
    "Zirconio": "incrustaciones",
    "Prótesis sobre Implantes": "coronas-implantes",
    "Rehabilitaciones Completas": "rehabilitaciones-completas"
  };
  
  return serviceIds[title] || title.toLowerCase().replace(/\s+/g, '-');
}

export default Servicios;


import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BackButton from "@/components/ui/back-button";

const cases = [
  {
    id: 1,
    title: "Rehabilitación completa con disilicato de litio",
    description: "Paciente con desgaste severo y pérdida de dimensión vertical. Se realizó una rehabilitación completa con coronas de disilicato de litio e.max para restaurar la función y la estética.",
    challenge: "Desgaste dental severo por bruxismo, compromiso estético significativo y pérdida de dimensión vertical.",
    solution: "Rehabilitación oral completa con coronas de disilicato de litio, previo análisis funcional y aumento de dimensión vertical.",
    materials: "Disilicato de litio e.max, sistema adhesivo de última generación.",
    before: "/lovable-uploads/d689cf97-8199-44bb-ae83-8f97311e4112.png",
    after: "/lovable-uploads/a42daec9-b827-4b51-b1bc-2f27dd0cdd9b.png",
  },
  {
    id: 2,
    title: "Carillas mínimamente invasivas",
    description: "Paciente con diastemas y discromía dental. Se realizaron 6 carillas de porcelana ultrafinas (0.3mm) para preservar al máximo la estructura dental y lograr una transformación estética natural.",
    challenge: "Diastemas, forma irregular de los dientes y tinción del esmalte resistente al blanqueamiento.",
    solution: "Carillas ultrafinas con mínima preparación dental, preservando la mayor cantidad de esmalte posible.",
    materials: "Porcelana feldespática estratificada a mano, espesor de 0.3mm.",
    before: "/lovable-uploads/c4cf566d-2328-48e1-b231-33556c92e7a1.png",
    after: "/lovable-uploads/ad874c0d-0400-46d7-adae-294ab063ef29.png",
  },
  {
    id: 3,
    title: "Implantes con carga inmediata",
    description: "Paciente con ausencia de múltiples piezas dentales. Se realizaron implantes con carga inmediata, permitiendo la recuperación estética desde el primer día.",
    challenge: "Pérdida de múltiples piezas dentales, estética comprometida y función masticatoria reducida.",
    solution: "Colocación estratégica de implantes con carga inmediata de coronas provisionales y posterior restauración definitiva.",
    materials: "Implantes de titanio grado 5, coronas de zirconio multicapa.",
    before: "/lovable-uploads/91cb8f91-073b-4419-b103-d825f23e1b20.png",
    after: "/lovable-uploads/58c86be2-0efc-4891-a35c-b7afa01b41c7.png",
  },
  {
    id: 4,
    title: "Rehabilitación de sonrisa sobre implantes",
    description: "Paciente con periodontitis avanzada y movilidad dental generalizada. Se realizó extracción de dientes no salvables, colocación inmediata de implantes y rehabilitación completa con prótesis fija de zirconio.",
    challenge: "Periodontitis avanzada, pronóstico desfavorable de dientes remanentes y pérdida ósea significativa.",
    solution: "Protocolo de extracción-implante inmediato con regeneración ósea guiada y rehabilitación fija completa.",
    materials: "Implantes con superficie tratada, estructura de zirconio multicapa y cerámica estratificada.",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1774&auto=format&fit=crop",
    after: "/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
  },
];

const Casos = () => {
  useEffect(() => {
    document.title = "Casos de Éxito - ArtDental";
    
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
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(/lovable-uploads/3184faca-9983-48ad-bda3-6a4f33b6f85f.png)' }}>
          <div className="container-custom">
            <div className="mb-6">
              <BackButton className="text-white hover:text-dental-light" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-white">Casos de Éxito</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto text-white">
                Transformaciones dentales reales que demuestran nuestra dedicación a la excelencia, 
                precisión y resultados estéticos excepcionales.
              </p>
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-24">
              {cases.map((caseItem, index) => (
                <div key={caseItem.id} className="reveal">
                  <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-white">{caseItem.title}</h2>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="relative rounded-lg overflow-hidden">
                      <span className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded-md">Antes</span>
                      <img 
                        src={caseItem.before} 
                        alt={`${caseItem.title} - Antes`}
                        className="w-full h-72 object-cover"
                      />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                      <span className="absolute top-4 right-4 bg-white text-black text-sm px-3 py-1 rounded-md">Después</span>
                      <img 
                        src={caseItem.after} 
                        alt={`${caseItem.title} - Después`}
                        className="w-full h-72 object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="max-w-4xl">
                    <p className="text-gray-300 mb-6">{caseItem.description}</p>
                    
                    <div className="bg-black bg-opacity-50 rounded-lg p-6 space-y-4 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">El Desafío</h4>
                        <p className="text-gray-300">{caseItem.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Nuestra Solución</h4>
                        <p className="text-gray-300">{caseItem.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Materiales Utilizados</h4>
                        <p className="text-gray-300">{caseItem.materials}</p>
                      </div>
                    </div>
                  </div>
                  
                  {index < cases.length - 1 && (
                    <hr className="border-gray-700 my-12" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-black">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
              ¿Tiene un caso similar?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctenos para discutir cómo podemos ayudarle a conseguir resultados 
              excepcionales en sus casos clínicos.
            </p>
            <Link to="/contacto" className="btn-primary">
              Consultar su caso
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Casos;

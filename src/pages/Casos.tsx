
import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
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
];

const reviews = [
  {
    id: 1,
    name: "Antonio Vidal",
    rating: 5,
    comment: "Trabajo excelente con tecnología de vanguardia, trabajando completamente digitalmente, sin necesidad de modelos y minimizando la posibilidad de error. Excelentes profesionales a un precio muy competitivo. ¡Su maquillaje es espectacular!",
    date: "Hace 3 semanas",
    position: { top: "20%", left: "15%" }
  },
  {
    id: 2,
    name: "Alicia Sánchez",
    rating: 5,
    comment: "Una clínica de 10. Para mí ha sido una experiencia que repetiré y la recomiendo al 100%. Todos muy cariñosos y atentos, especialmente Marta, Alicia y Natalia. Me salvaron una muela que otra clínica quería extraer. Si buscas una clínica dental, no dudes en ir a Artdental.",
    date: "Hace 1 mes",
    position: { top: "60%", right: "20%" }
  },
  {
    id: 3,
    name: "Ana Ruiz",
    rating: 5,
    comment: "Las carillas me cambiaron la vida. Trabajo impecable y atención de primera. Definitivamente volvería para otros tratamientos.",
    date: "Hace 3 semanas",
    position: { top: "40%", left: "25%" }
  },
  {
    id: 4,
    name: "Roberto Silva",
    rating: 5,
    comment: "Profesionales excepcionales. Mi rehabilitación completa fue un éxito total. Muy satisfecho con los resultados.",
    date: "Hace 2 meses",
    position: { top: "75%", right: "15%" }
  },
  {
    id: 5,
    name: "Patricia López",
    rating: 5,
    comment: "La mejor decisión fue elegir ArtDental. Calidad, profesionalismo y resultados extraordinarios. Mi sonrisa nunca se vio mejor.",
    date: "Hace 1 semana",
    position: { top: "30%", right: "30%" }
  }
];

const Casos = () => {
  const [visibleReviews, setVisibleReviews] = useState<number[]>([]);

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
    
    // Animation for floating reviews
    const showReviewsSequentially = () => {
      reviews.forEach((_, index) => {
        setTimeout(() => {
          setVisibleReviews(prev => [...prev, index]);
        }, index * 800);
      });
    };

    const timer = setTimeout(() => {
      showReviewsSequentially();
    }, 2000);
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      clearTimeout(timer);
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

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
                      <span className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded-md z-10">Antes</span>
                      <img 
                        src={caseItem.before} 
                        alt={`${caseItem.title} - Antes`}
                        className="w-full h-72 object-cover object-center"
                      />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                      <span className="absolute top-4 right-4 bg-white text-black text-sm px-3 py-1 rounded-md z-10">Después</span>
                      <img 
                        src={caseItem.after} 
                        alt={`${caseItem.title} - Después`}
                        className="w-full h-72 object-cover object-center"
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

        {/* Reviews Section */}
        <section className="section-padding bg-gradient-to-b from-dental-dark to-black relative overflow-hidden">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 text-white">
                Lo que dicen nuestros pacientes
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Testimonios reales de pacientes satisfechos que han transformado sus sonrisas con nosotros.
              </p>
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="flex">
                  {renderStars(5)}
                </div>
                <span className="text-white font-semibold">5.0</span>
                <span className="text-gray-300">• Google Reviews</span>
              </div>
            </div>

            {/* Floating Reviews Container */}
            <div className="relative h-96 w-full">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`absolute bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-4 max-w-xs shadow-lg transition-all duration-1000 ${
                    visibleReviews.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    ...review.position,
                    animationDelay: `${index * 0.8}s`
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <Quote className="w-6 h-6 text-white opacity-60 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-200 text-xs leading-relaxed mb-2">
                        "{review.comment}"
                      </p>
                      <span className="text-gray-400 text-xs">{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-300 mb-6">
                ¿Quieres ser nuestro próximo caso de éxito?
              </p>
              <a 
                href="https://maps.app.goo.gl/mhF5TiJ6WTngoVJa7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                Ver más reseñas en Google
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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

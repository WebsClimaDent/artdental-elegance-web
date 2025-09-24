
import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import BackButton from "@/components/ui/back-button";
import ImageComparison from "@/components/ui/image-comparison";

const cases = [
  {
    id: 1,
    title: "Carillas e implantes - Solución integral",
    description: "Carillas mínimamente invasivas combinadas con planificación digital integral para lograr una sonrisa armónica, natural y funcional, respetando al máximo la estructura dental.",
    challenge: "Dientes anteriores con desgaste significativo y compromiso estético. Se requería una solución conservadora que devolviera la forma, función y armonía de la sonrisa, minimizando la intervención sobre el tejido dental sano.",
    solution: "Se realizó una rehabilitación estética mediante carillas mínimamente invasivas, integrando una planificación digital completa para diseñar y previsualizar el resultado final, asegurando precisión y armonía con las características faciales del paciente.",
    materials: "Carillas de mínima invasión, seleccionadas por su alta estética, durabilidad y capacidad de mimetizarse con la dentición natural.",
    before: "/lovable-uploads/FAU_1052.JPG.png",
    after: "/lovable-uploads/FAU_1610coopy.jpg.png",
  },
  {
    id: 2,
    title: "Carillas mínimamente invasivas",
    description: "Paciente con diastemas y discromía dental. Se realizaron 6 carillas de porcelana ultrafinas (0.3mm) para preservar al máximo la estructura dental y lograr una transformación estética natural.",
    challenge: "Diastemas, forma irregular de los dientes y tinción del esmalte resistente al blanqueamiento.",
    solution: "Carillas ultrafinas con mínima preparación dental, preservando la mayor cantidad de esmalte posible.",
    materials: "Porcelana feldespática estratificada a mano, espesor de 0.3mm.",
    before: "/lovable-uploads/b2a89a74-e8b0-4ee4-bac8-7693d6f123b7.png",
    after: "/lovable-uploads/1dd61794-b5be-4910-b4e8-5ffb48b9e55b.png",
  },
  {
    id: 3,
    title: "Rehabilitación estética - Diseño de sonrisa",
    description: "Rehabilitación estética integral con diseño de sonrisa adaptado, utilizando carillas y rehabilitación en ausencias de molares con coronas de circonio para una transformación completa.",
    challenge: "Múltiples problemas estéticos y funcionales, ausencias de molares y necesidad de armonización completa de la sonrisa.",
    solution: "Diseño de sonrisa personalizado con carillas estéticas en dientes anteriores y coronas de circonio en molares ausentes.",
    materials: "Carillas de porcelana, coronas de circonio, planificación digital del diseño de sonrisa.",
    before: "/lovable-uploads/660ff1ba-b797-40cb-b113-1b1a216f345b.png",
    after: "/lovable-uploads/c7ce5a57-2e63-45bf-b2bc-6fceafe74898.png",
  },
];

const reviews = [
  {
    id: 1,
    name: "Antonio Vidal",
    rating: 5,
    comment: "Trabajo excelente con tecnología de vanguardia, trabajando completamente digitalmente, sin necesidad de modelos y minimizando la posibilidad de error. Excelentes profesionales a un precio muy competitivo. ¡Su maquillaje es espectacular!",
    date: "Hace 3 semanas",
  },
  {
    id: 2,
    name: "Alicia Sánchez",
    rating: 5,
    comment: "Una clínica de 10. Para mí ha sido una experiencia que repetiré y la recomiendo al 100%. Todos muy cariñosos y atentos, especialmente Marta, Alicia y Natalia. Me salvaron una muela que otra clínica quería extraer. Si buscas una clínica dental, no dudes en ir a Artdental.",
    date: "Hace 1 mes",
  },
  {
    id: 3,
    name: "Roger Solo Lo Hayuno",
    rating: 5,
    comment: "Trabajan muy rápido y bien. Tienen una tecnología extraordinaria. Son excelentes profesionales. Los recomiendo totalmente.",
    date: "Hace 2 semanas",
  },
  {
    id: 4,
    name: "Roberto Silva",
    rating: 5,
    comment: "Profesionales excepcionales. Mi rehabilitación completa fue un éxito total. Muy satisfecho con los resultados.",
    date: "Hace 2 meses",
  },
  {
    id: 5,
    name: "Patricia López",
    rating: 5,
    comment: "La mejor decisión fue elegir ArtDental. Calidad, profesionalismo y resultados extraordinarios. Mi sonrisa nunca se vio mejor.",
    date: "Hace 1 semana",
  }
];

const Casos = () => {
  const [visibleReviews, setVisibleReviews] = useState<number[]>([]);

  useEffect(() => {
    document.title = "Casos de Éxito - ArtDental - Laboratorio Dental en Valencia";
    
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
    
    // Animation for reviews
    const showReviewsSequentially = () => {
      reviews.forEach((_, index) => {
        setTimeout(() => {
          setVisibleReviews(prev => [...prev, index]);
        }, index * 200);
      });
    };

    const timer = setTimeout(() => {
      showReviewsSequentially();
    }, 1000);
    
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
        className={`w-4 h-4 transition-all duration-200 ${
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
        <section className="py-16 bg-cover bg-center relative" style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(/lovable-uploads/4e745d88-c07a-46fb-9fbd-92843f85df97.png)',
          backgroundSize: '120%',
          backgroundPosition: 'center 50%'
        }}>
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
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="space-y-20">
              {cases.map((caseItem, index) => (
                <div key={caseItem.id} className="reveal">
                  <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-white">{caseItem.title}</h2>
                  
                  {/* Usar componente especial solo para carillas (id: 2) */}
                  {caseItem.id === 2 ? (
                    <div className="mb-8">
                      <ImageComparison
                        beforeImage={caseItem.before}
                        afterImage={caseItem.after}
                        title={caseItem.title}
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="relative rounded-lg overflow-hidden">
                        <span className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded-md z-10">Antes</span>
                        <img 
                          src={caseItem.before} 
                          alt={`${caseItem.title} - Antes`}
                          className={`w-full h-72 object-cover ${caseItem.id === 1 ? 'object-[center_20%]' : 'object-center'}`}
                        />
                      </div>
                      <div className="relative rounded-lg overflow-hidden">
                        <span className="absolute top-4 right-4 bg-white text-black text-sm px-3 py-1 rounded-md z-10">Después</span>
                        <img 
                          src={caseItem.after} 
                          alt={`${caseItem.title} - Después`}
                          className={`w-full h-72 object-cover ${caseItem.id === 1 ? 'object-[center_20%]' : 'object-center'}`}
                        />
                      </div>
                    </div>
                  )}
                  
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
                    <hr className="border-gray-700 mt-16" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-dental-dark to-black relative overflow-hidden">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 text-white">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Testimonios reales de clientes satisfechos que han transformado sus trabajos con nosotros. 
                Como laboratorio dental en Valencia, nos enorgullecemos de brindar resultados excepcionales.
              </p>
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="flex">
                  {renderStars(5)}
                </div>
                <span className="text-white font-semibold">5.0</span>
                <span className="text-gray-300">• Google Reviews</span>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`group bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 shadow-lg transition-all duration-1000 hover:bg-opacity-15 hover:border-opacity-30 ${
                    visibleReviews.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  } ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <Quote className="w-6 h-6 text-white opacity-60 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">{review.name}</h4>
                        <div className="flex space-x-0.5">
                          {Array.from({ length: 5 }, (_, starIndex) => (
                            <Star
                              key={starIndex}
                              className={`w-4 h-4 transition-all duration-200 group-hover:animate-bounce ${
                                starIndex < review.rating 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "text-gray-300"
                              }`}
                              style={{
                                animationDelay: `${starIndex * 100}ms`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-3">
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
        <section className="py-16 md:py-20 bg-black">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
              ¿Tiene un caso similar?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctanos para discutir cómo podemos ayudarte a conseguir resultados 
              excepcionales en tus casos clínicos.
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

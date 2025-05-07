
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    id: 1,
    title: "Restauraciones Estéticas",
    services: [
      {
        id: 1,
        title: "Coronas de Disilicato de Litio",
        description: "Restauraciones completas que combinan estética y resistencia. Ideales para sectores anteriores y posteriores.",
        image: "public/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png",
      },
      {
        id: 2,
        title: "Carillas de Porcelana",
        description: "Finas láminas de porcelana que transforman la apariencia dental con mínima invasión.",
        image: "public/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
      },
      {
        id: 3,
        title: "Incrustaciones",
        description: "Restauraciones parciales para dientes posteriores con daño moderado que preservan estructura dental.",
        image: "https://images.unsplash.com/photo-1579683563183-ca9ce0f8adaa?q=80&w=1974&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1936&auto=format&fit=crop",
      },
      {
        id: 5,
        title: "Sobredentaduras",
        description: "Prótesis completas con sistemas de retención sobre implantes para mayor estabilidad y confort.",
        image: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=1770&auto=format&fit=crop",
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
        image: "public/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png",
      },
      {
        id: 7,
        title: "Rehabilitaciones Completas",
        description: "Reconstrucción total de la dentición con sistemas implantosoportados de última generación.",
        image: "public/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
      }
    ]
  }
];

const Servicios = () => {
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
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(public/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png)' }}>
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Soluciones dentales de precisión que combinan artesanía tradicional con 
              tecnología avanzada para resultados excepcionales.
            </p>
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
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <Link 
                        to="/contacto" 
                        className="inline-flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-dental-dark transition-colors"
                      >
                        Solicitar información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-padding bg-black">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
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
      </main>
      <Footer />
    </>
  );
};

export default Servicios;

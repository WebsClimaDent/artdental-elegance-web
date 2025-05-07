
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const technologies = [
  {
    id: 1,
    title: "Escáner 3D de Alta Precisión",
    description: "Nuestros escáneres intraorales y de laboratorio capturan modelos digitales con precisión micrométrica, eliminando las distorsiones propias de las impresiones físicas y mejorando los ajustes finales de las restauraciones.",
    features: [
      "Precisión de hasta 10 micras",
      "Captura en color para registro de detalles",
      "Reducción del tiempo de trabajo"
    ],
    image: "public/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png",
  },
  {
    id: 2,
    title: "Sistema CAD/CAM Avanzado",
    description: "Utilizamos software de diseño dental avanzado que permite crear restauraciones personalizadas con absoluta precisión, desde incrustaciones simples hasta rehabilitaciones completas sobre implantes.",
    features: [
      "Bibliotecas de dientes anatómicamente precisas",
      "Diseño de sonrisa digital",
      "Planificación de casos complejos"
    ],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Fresadoras de 5 Ejes",
    description: "Nuestras fresadoras de última generación trabajan con precisión excepcional en materiales como zirconio, disilicato de litio y resinas de alto rendimiento para garantizar restauraciones perfectas.",
    features: [
      "Precisión de mecanizado submilimétrica",
      "Procesado de todos los materiales modernos",
      "Producción rápida y consistente"
    ],
    image: "https://images.unsplash.com/photo-1633094167399-c53af8f24070?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Hornos de Sinterización Programables",
    description: "Equipos de última generación para la cocción y sinterización de cerámicas y zirconio, con curvas de temperatura precisas que garantizan resultados óptimos en resistencia y estética.",
    features: [
      "Control preciso de temperatura y tiempos",
      "Programas personalizados por material",
      "Resultados consistentes"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
  },
];

const Tecnologia = () => {
  useEffect(() => {
    document.title = "Nuestra Tecnología - ArtDental";
    
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
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(public/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png)' }}>
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">Nuestra Tecnología</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Equipamiento de vanguardia que nos permite alcanzar los más altos estándares 
              de precisión y calidad en cada trabajo dental.
            </p>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-20">
              {technologies.map((tech, index) => (
                <div 
                  key={tech.id} 
                  className={`reveal flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={tech.image} 
                        alt={tech.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-2xl font-playfair font-semibold mb-4 text-white">{tech.title}</h2>
                    <p className="text-gray-300 mb-6">{tech.description}</p>
                    <ul className="space-y-2 mb-6">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="mr-2 text-white">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory Tour Section */}
        <section className="section-padding bg-black">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
              Conozca Nuestro Laboratorio
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Le invitamos a visitar nuestras instalaciones y conocer de primera mano
              cómo nuestra tecnología avanzada transforma la odontología moderna.
            </p>
            <Link to="/contacto" className="btn-primary">
              Programar una visita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Tecnologia;

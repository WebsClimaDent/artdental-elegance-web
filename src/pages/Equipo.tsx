
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Carlos Martínez",
    role: "Director Técnico",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1770&auto=format&fit=crop",
    bio: "Con más de 15 años de experiencia en el sector dental, el Dr. Martínez lidera nuestro equipo técnico con un enfoque en la precisión y la excelencia. Especializado en restauraciones complejas y estética avanzada.",
  },
  {
    id: 2,
    name: "Dra. Laura Sánchez",
    role: "Especialista CAD/CAM",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop",
    bio: "Experta en tecnología digital y diseño asistido por ordenador. La Dra. Sánchez transforma conceptos en realidad con precisión micrométrica, especializándose en rehabilitaciones completas y sonrisas personalizadas.",
  },
  {
    id: 3,
    name: "Dr. Miguel Fernández",
    role: "Técnico de Cerámica",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    bio: "Artista de la cerámica dental con un ojo excepcional para el detalle y el color. El Dr. Fernández crea restauraciones que no solo funcionan perfectamente sino que son indistinguibles de los dientes naturales.",
  },
  {
    id: 4,
    name: "Dra. Elena Gómez",
    role: "Especialista en Implantología",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=1769&auto=format&fit=crop",
    bio: "Dedicada a soluciones sobre implantes con un enfoque multidisciplinario. La Dra. Gómez trabaja estrechamente con cirujanos para crear estructuras protésicas que combinan función y estética.",
  },
  {
    id: 5,
    name: "Dr. Javier Ruiz",
    role: "Técnico en Prótesis Removibles",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop",
    bio: "Especialista en soluciones removibles con un enfoque centrado en la comodidad del paciente y resultados naturales. El Dr. Ruiz aporta innovación a un campo tradicional con técnicas avanzadas de ajuste y caracterización.",
  },
  {
    id: 6,
    name: "Dra. Ana Martín",
    role: "Gestión de Calidad",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1770&auto=format&fit=crop",
    bio: "Supervisora de todos los procesos de control de calidad del laboratorio, asegurando que cada trabajo cumpla con nuestros exigentes estándares antes de llegar a la clínica.",
  }
];

const Equipo = () => {
  useEffect(() => {
    // Update the page title
    document.title = "Nuestro Equipo - ArtDental";
    
    // Reveal animation for elements when they enter viewport
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
    // Initial check in case elements are already in view when the page loads
    revealOnScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="bg-dental-dark min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1615109398623-41219dca10a3?q=80&w=1974&auto=format&fit=crop)' }}>
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">Nuestro Equipo</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Profesionales apasionados por la estética dental que combinan experiencia, talento artístico y 
              conocimientos técnicos para crear sonrisas perfectas.
            </p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="reveal bg-dental-dark border border-gray-700 rounded-lg overflow-hidden card-hover"
                >
                  <div className="h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 font-playfair text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 mb-4 font-medium">{member.role}</p>
                    <p className="text-gray-400 mb-4 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                Únete a Nuestro Equipo
              </h2>
              <p className="text-gray-300 mb-8">
                Buscamos constantemente talento apasionado por la excelencia en odontología estética. 
                Si te interesa formar parte de un equipo innovador, envíanos tu CV.
              </p>
              <Link to="/contacto" className="btn-primary">
                Contáctanos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Equipo;

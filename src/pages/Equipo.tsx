import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BackButton from "@/components/ui/back-button";
import InfiniteTeamCarousel from "@/components/ui/infinite-team-carousel";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Leopoldo Romance",
    role: "Director Técnico",
    image: "/lovable-uploads/4ff54fe0-8806-4880-8c6f-fb5b5cd34025.png",
    bio: "Dr. Leopoldo Romance lidera nuestro equipo técnico con un enfoque en la precisión y la excelencia. Especializado en restauraciones complejas y estética avanzada.",
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
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(/lovable-uploads/e86db206-2534-4707-a749-2b0034245c6b.png)' }}>
          <div className="container-custom">
            <div className="mb-6">
              <BackButton className="text-white hover:text-dental-light" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">Nuestro Equipo</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                Profesionales apasionados por la estética dental que combinan experiencia, talento artístico y 
                conocimientos técnicos para crear sonrisas perfectas.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Infinite Carousel */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="reveal">
              <InfiniteTeamCarousel members={teamMembers} />
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

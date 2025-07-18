
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import InfiniteTeamCarousel from "@/components/ui/infinite-team-carousel";

const teamMembers = [
  {
    id: 1,
    name: "Pol Romance",
    role: "Director Técnico",
    image: "/lovable-uploads/4ff54fe0-8806-4880-8c6f-fb5b5cd34025.png",
    bio: "Pol Romance lidera nuestro equipo técnico con un enfoque en la precisión y la excelencia. Especializado en restauraciones complejas y estética avanzada.",
  },
  {
    id: 2,
    name: "David Ruiz",
    role: "Director Técnico",
    image: "/lovable-uploads/51d98e14-17e8-4b54-924d-febf801ef8be.png",
    bio: "Experto en tecnología digital y diseño asistido por ordenador, así como en implantología. Transforma conceptos en realidades con precisión micrométrica, especializándose en rehabilitaciones completas y sonrisas personalizadas.",
  },
  {
    id: 3,
    name: "Natalia Moreno",
    role: "Responsable de Gestión Operativa",
    image: "/lovable-uploads/aff44a00-2a88-45fa-8be8-d1d1bb42bf9f.png",
    bio: "Responsable de gestión operativa y atención al cliente. Planificación de trabajos protésicos, coordinadora de los flujos internos del laboratorio y gestora administrativa, garantizando eficiencia en cada proceso y una comunicación fluida con las clínicas.",
  },
];

const TeamPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-dental-dark" id="equipo">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestro Equipo</h2>
        <p className="section-subtitle text-center">
          En nuestro laboratorio dental Valencia contamos con profesionales apasionados 
          y altamente cualificados, dedicados a crear sonrisas perfectas con precisión y elegancia.
        </p>

        <div className="reveal">
          <InfiniteTeamCarousel members={teamMembers} />
        </div>

        <div className="text-center mt-12">
          <Link to="/equipo" className="btn-primary">
            Conocer a todo el equipo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;

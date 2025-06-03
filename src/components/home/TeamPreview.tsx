
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    bio: "Experta en tecnología digital y diseño asistido por ordenador. La Dra. Sánchez transforma conceptos en realidad con precisión micrométrica.",
  },
  {
    id: 3,
    name: "Dr. Miguel Fernández",
    role: "Técnico de Cerámica",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    bio: "Artista de la cerámica dental con un ojo excepcional para el detalle y el color. Crea restauraciones indistinguibles de los dientes naturales.",
  },
];

const TeamPreview = () => {
  return (
    <section className="section-padding bg-dental-dark" id="equipo">
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

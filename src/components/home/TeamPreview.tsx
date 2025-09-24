import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import InfiniteTeamCarousel from "@/components/ui/infinite-team-carousel";
const teamMembers = [{
  id: 1,
  name: "Pol Romance",
  role: "Director Técnico",
  image: "/lovable-uploads/4ff54fe0-8806-4880-8c6f-fb5b5cd34025.png",
  bio: "Pol Romance Lidera nuestro equipo técnico con un enfoque en la precisión y la excelencia. Especializado en restauraciones complejas y estética avanzada."
}, {
  id: 2,
  name: "David Ruiz",
  role: "Director Técnico",
  image: "/lovable-uploads/b97c52bb-642b-45e4-ab36-4b1c861fc8e3.png",
  bio: "Experto en Digital Smile Designer e implantología avanzada. Especialista en restauraciones sobre implantes, donde la precisión digital y los principios clásicos se combinan para lograr rehabilitaciones completas y sonrisas únicas, diseñadas a medida de cada paciente."
}, {
  id: 3,
  name: "Natalia Moreno",
  role: "Responsable de Gestión Operativa",
  image: "/lovable-uploads/aff44a00-2a88-45fa-8be8-d1d1bb42bf9f.png",
  bio: "Responsable de gestión operativa y atención al cliente. Planificación de trabajos protésicos, coordinadora de los flujos internos del laboratorio y gestora administrativa, garantizando eficiencia en cada proceso y una comunicación fluida con las clínicas."
}];
const TeamPreview = () => {
  return <section className="py-8 md:py-10 lg:py-12 bg-dental-dark" id="equipo">
      <div className="container-custom">
        <h2 className="section-title text-center mb-2">Nuestro Equipo</h2>
        <p className="section-subtitle text-center mb-8">En nuestro laboratorio dental Artdental en Valencia contamos con profesionales apasionados y altamente cualificados, dedicados a crear con precisión sonrisas naturales.</p>

        <div className="reveal mt-8">
          <InfiniteTeamCarousel members={teamMembers} />
        </div>

        <div className="text-center mt-12">
          <Link to="/equipo" className="btn-primary">
            Conocer a todo el equipo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>;
};
export default TeamPreview;
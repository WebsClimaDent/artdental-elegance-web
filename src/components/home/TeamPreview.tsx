
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Carlos Martínez",
    role: "Director Técnico",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1770&auto=format&fit=crop",
    link: "/equipo",
  },
  {
    id: 2,
    name: "Dra. Laura Sánchez",
    role: "Especialista CAD/CAM",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop",
    link: "/equipo",
  },
  {
    id: 3,
    name: "Dr. Miguel Fernández",
    role: "Técnico de Cerámica",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    link: "/equipo",
  },
];

const TeamPreview = () => {
  return (
    <section className="section-padding bg-dental-dark" id="equipo">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestro Equipo</h2>
        <p className="section-subtitle text-center">
          Profesionales apasionados y altamente cualificados dedicados a crear
          sonrisas perfectas con precisión y elegancia.
        </p>

        <Carousel className="w-full reveal">
          <CarouselContent>
            {teamMembers.map((member) => (
              <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-black rounded-lg overflow-hidden shadow-sm card-hover">
                  <div className="h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1 font-playfair text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{member.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative -left-0 top-0 translate-y-0" />
            <CarouselNext className="relative -right-0 top-0 translate-y-0" />
          </div>
        </Carousel>

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

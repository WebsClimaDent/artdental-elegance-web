
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10 py-[13px]"></div>
        <img 
          src="/lovable-uploads/41871228-cb45-4ae4-bd7f-a4f7395c227b.png" 
          alt="Laboratorio dental ARTDENTAL - Tecnología avanzada" 
          className="w-full h-full object-cover object-center opacity-70" 
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-2xl md:max-w-3xl animate-fade-in">
          <div className="text-left mb-4">
            <span className="text-3xl md:text-4xl font-montserrat font-light text-white">
              ARTDENTAL
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
            Laboratorio de estética dental
          </h1>
          <h2 className="text-2xl md:text-3xl font-montserrat font-normal mb-6 text-dental-light">
            Aesthetics of high quality
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            En nuestro laboratorio dental en Valencia desarrollamos soluciones personalizadas para las sonrisas de tus pacientes, que permiten a los odontólogos ofrecer resultados naturales, funcionales y aesthetic high quality. Combinamos la precisión de los conceptos clásicos con la innovación de la tecnología dental más avanzada, logrando resultados excepcionales en cada trabajo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/servicios" className="btn-primary">
              Nuestros servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/casos" className="btn-secondary">
              Ver casos de éxito
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dental-dark/80 to-dental-dark/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1936&auto=format&fit=crop"
          alt="Laboratorio dental"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-2xl md:max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Elegancia y precisión en laboratorio dental
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Creamos sonrisas perfectas combinando artesanía tradicional y tecnología de vanguardia para resultados excepcionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/servicios" className="btn-primary">
              Nuestros servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/casos" className="btn-secondary border-white text-white hover:bg-white hover:text-dental-dark">
              Ver casos de éxito
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

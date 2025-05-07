
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80 z-10"></div>
        <img
          src="public/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png"
          alt="Carilla de porcelana"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-2xl md:max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Elegancia y precisión en laboratorio dental
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Creamos sonrisas perfectas combinando artesanía tradicional y tecnología de vanguardia para resultados excepcionales que impresionarán a sus pacientes.
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


import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section 
      className="py-20 bg-black text-white bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url(public/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            ¿Listo para colaborar en el siguiente caso?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Contáctenos hoy mismo para discutir cómo podemos ayudarle a conseguir los mejores resultados para sus pacientes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contacto" className="btn-primary">
              Contactar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+34911234567" className="btn-secondary">
              Llamar: +34 91 123 45 67
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

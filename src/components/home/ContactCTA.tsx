
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section 
      className="py-20 bg-dental-dark text-white bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1774&auto=format&fit=crop)',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(26, 31, 44, 0.85)'
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
            <Link to="/contacto" className="btn-primary bg-white text-dental-dark hover:bg-dental-light">
              Contactar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+34911234567" className="btn-secondary border-white text-white hover:bg-white hover:text-dental-dark">
              Llamar: +34 91 123 45 67
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

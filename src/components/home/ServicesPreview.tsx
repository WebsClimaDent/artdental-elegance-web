
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Coronas",
    description: "Restauraciones unitarias personalizadas con materiales de alta calidad y precisión inigualable.",
    image: "/lovable-uploads/c1bcb91a-1fa3-4566-a5b3-80f6435e153f.png",
    link: "/servicios",
  },
  {
    id: 2,
    title: "Puentes",
    description: "Estructuras fijas para reemplazar piezas dentales ausentes con alta estética y funcionalidad.",
    image: "/lovable-uploads/b733e484-2f98-47ad-861a-7651eaab8342.png",
    link: "/servicios",
  },
  {
    id: 3,
    title: "Carillas de Porcelana",
    description: "Láminas ultrafinas que transforman la estética dental con resultados naturales y duraderos.",
    image: "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png",
    link: "/servicios",
  },
  {
    id: 4,
    title: "Prótesis Removibles",
    description: "Soluciones funcionales y estéticas para reemplazar piezas dentales con comodidad y naturalidad.",
    image: "/lovable-uploads/af154a7d-1db9-44d6-9be8-0c11031d96e0.png",
    link: "/servicios",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding relative bg-cover bg-center" 
             style={{ backgroundImage: 'url(/lovable-uploads/e9ec3cb5-ecf6-462e-9300-2bb74b772644.png)' }}
             id="servicios">
      {/* Dark overlay for opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title text-center text-white">Nuestros Servicios</h2>
        <p className="section-subtitle text-center text-gray-300">
          Ofrecemos soluciones dentales avanzadas con un enfoque en la calidad,
          precisión y estética para resultados excepcionales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-dental-dark rounded-lg overflow-hidden shadow-md card-hover reveal"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full transition-transform duration-500 hover:scale-105 ${
                    service.id === 1 ? 'object-cover object-bottom' : 'object-cover'
                  }`}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-playfair text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/servicios" className="btn-primary">
            Ver todos los servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

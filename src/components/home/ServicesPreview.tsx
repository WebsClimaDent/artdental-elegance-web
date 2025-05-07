
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Coronas y Puentes",
    description: "Restauraciones dentales personalizadas con materiales de alta calidad y precisión inigualable.",
    image: "/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png",
    link: "/servicios",
  },
  {
    id: 2,
    title: "Carillas de Porcelana",
    description: "Láminas ultrafinas que transforman la estética dental con resultados naturales y duraderos.",
    image: "/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
    link: "/servicios",
  },
  {
    id: 3,
    title: "Prótesis Removibles",
    description: "Soluciones funcionales y estéticas para reemplazar piezas dentales con comodidad y naturalidad.",
    image: "/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png",
    link: "/servicios",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-black" id="servicios">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Nuestros Servicios</h2>
        <p className="section-subtitle text-center text-gray-300">
          Ofrecemos soluciones dentales avanzadas con un enfoque en la calidad,
          precisión y estética para resultados excepcionales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-dental-dark rounded-lg overflow-hidden shadow-md card-hover reveal"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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

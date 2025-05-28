
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Coronas",
    description: "Restauraciones unitarias personalizadas con materiales de alta calidad y precisión inigualable.",
    image: "/lovable-uploads/b4fb9586-9767-4aa4-85c0-edd9336d75ee.png",
    link: "/servicios",
  },
  {
    id: 2,
    title: "Puentes",
    description: "Estructuras fijas para reemplazar piezas dentales ausentes con alta estética y funcionalidad.",
    image: "/lovable-uploads/2d62c58a-c567-46f0-b750-87913a275b9e.png",
    link: "/servicios",
  },
  {
    id: 3,
    title: "Carillas de Porcelana",
    description: "Láminas ultrafinas que transforman la estética dental con resultados naturales y duraderos.",
    image: "/lovable-uploads/9c267ef9-0497-4708-9d11-9f6f0aadaf93.png",
    link: "/servicios",
  },
  {
    id: 4,
    title: "Prótesis Removibles",
    description: "Soluciones funcionales y estéticas para reemplazar piezas dentales con comodidad y naturalidad.",
    image: "/lovable-uploads/66ce2cfc-9580-4502-aa51-4a917444c38b.png",
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
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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

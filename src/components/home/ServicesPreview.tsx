
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Coronas y Puentes",
    description: "Restauraciones dentales personalizadas con materiales de alta calidad y precisión inigualable.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop",
    link: "/servicios",
  },
  {
    id: 2,
    title: "Carillas de Porcelana",
    description: "Láminas ultrafinas que transforman la estética dental con resultados naturales y duraderos.",
    image: "https://images.unsplash.com/photo-1606818716176-32fa6bbe222b?q=80&w=1772&auto=format&fit=crop",
    link: "/servicios",
  },
  {
    id: 3,
    title: "Prótesis Removibles",
    description: "Soluciones funcionales y estéticas para reemplazar piezas dentales con comodidad y naturalidad.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1770&auto=format&fit=crop",
    link: "/servicios",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-white" id="servicios">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestros Servicios</h2>
        <p className="section-subtitle text-center">
          Ofrecemos soluciones dentales avanzadas con un enfoque en la calidad,
          precisión y estética para resultados excepcionales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover reveal"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-playfair">
                  {service.title}
                </h3>
                <p className="text-dental-DEFAULT mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-dental-dark font-medium hover:underline"
                >
                  Más información
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

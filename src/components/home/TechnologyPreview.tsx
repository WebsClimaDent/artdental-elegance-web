
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const technologies = [
  {
    id: 1,
    title: "Escáner 3D de Alta Precisión",
    description: "Digitalización de modelos con precisión micrométrica para garantizar ajustes perfectos.",
    image: "public/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png",
  },
  {
    id: 2,
    title: "Sistema CAD/CAM Avanzado",
    description: "Diseño y fabricación asistidos por ordenador para resultados precisos y personalizados.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1770&auto=format&fit=crop",
  },
];

const TechnologyPreview = () => {
  return (
    <section className="section-padding bg-black" id="tecnologia">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestra Tecnología</h2>
        <p className="section-subtitle text-center">
          Utilizamos las tecnologías más avanzadas del sector para ofrecer
          resultados excepcionales con precisión micrométrica.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col md:flex-row bg-dental-dark rounded-lg overflow-hidden shadow-md reveal card-hover"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="md:w-3/5 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 font-playfair text-white">
                  {tech.title}
                </h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/tecnologia" className="btn-primary">
            Conocer nuestras instalaciones
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPreview;

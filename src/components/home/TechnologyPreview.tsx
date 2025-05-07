
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Zap } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    id: 1,
    title: "Escáner 3D de Alta Precisión",
    description: "Digitalización de modelos con precisión micrométrica para garantizar ajustes perfectos.",
    image: "public/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png",
    icon: <Zap className="h-5 w-5" />,
    color: "from-blue-600 to-indigo-800",
  },
  {
    id: 2,
    title: "Sistema CAD/CAM Avanzado",
    description: "Diseño y fabricación asistidos por ordenador para resultados precisos y personalizados.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1770&auto=format&fit=crop",
    icon: <Layers className="h-5 w-5" />,
    color: "from-purple-600 to-pink-800",
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
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className={`bg-gradient-to-r ${tech.color} p-1`}>
                <div className="flex flex-col md:flex-row bg-dental-dark rounded-lg overflow-hidden">
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-white bg-opacity-10 p-2 rounded-full">
                        {tech.icon}
                      </div>
                      <h3 className="text-xl font-semibold font-playfair text-white">
                        {tech.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                  </div>
                </div>
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


import { Monitor, Cpu, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const technologies = [
  {
    icon: Monitor,
    title: "Escáner intraoral 3D",
    description: "Captura digital precisa para impresiones perfectas sin molestias para el paciente.",
  },
  {
    icon: Cpu,
    title: "Fresado CAD/CAM",
    description: "Fabricación automatizada de alta precisión para restauraciones dentales perfectas.",
  },
  {
    icon: Zap,
    title: "Sinterización avanzada",
    description: "Procesos de cocción controlados digitalmente para máxima resistencia y estética.",
  },
  {
    icon: Shield,
    title: "Control de calidad digital",
    description: "Verificación automatizada en cada etapa del proceso de fabricación.",
  },
];

const TechnologyPreview = () => {
  return (
    <section className="section-padding bg-white" id="tecnologia">
      <div className="container-custom">
        <h2 className="section-title text-center">Descubra el Futuro del arte dental</h2>
        <p className="section-subtitle text-center">
          Utilizamos la tecnología más avanzada del mercado para garantizar precisión,
          rapidez y resultados excepcionales en cada trabajo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-gray-100 card-hover reveal"
            >
              <div className="w-16 h-16 bg-dental-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <tech.icon className="h-8 w-8 text-dental-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-playfair">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/tecnologia" className="btn-primary">
            Conocer nuestra tecnología
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPreview;

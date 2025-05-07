
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    id: 1,
    title: "Rehabilitación completa",
    description: "Restauración completa de la dentición con coronas de disilicato de litio para un resultado estético y funcional óptimo.",
    before: "https://images.unsplash.com/photo-1627483262769-04d0a1401487?q=80&w=1770&auto=format&fit=crop",
    after: "public/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png",
    link: "/casos",
  },
  {
    id: 2,
    title: "Carillas mínimamente invasivas",
    description: "Transformación estética con carillas ultra finas que respetan la estructura dental natural.",
    before: "https://images.unsplash.com/photo-1595005322046-2482839d80b7?q=80&w=1770&auto=format&fit=crop",
    after: "public/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
    link: "/casos",
  },
];

const CasesPreview = () => {
  return (
    <section className="section-padding bg-dental-dark" id="casos">
      <div className="container-custom">
        <h2 className="section-title text-center">Casos de Éxito</h2>
        <p className="section-subtitle text-center">
          Descubra transformaciones reales realizadas con nuestra combinación única de artesanía,
          tecnología de vanguardia y materiales de primera calidad.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-black rounded-lg overflow-hidden shadow-md card-hover reveal"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="h-64 overflow-hidden relative">
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    Antes
                  </span>
                  <img
                    src={caseItem.before}
                    alt={`${caseItem.title} - Antes`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 overflow-hidden relative">
                  <span className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded">
                    Después
                  </span>
                  <img
                    src={caseItem.after}
                    alt={`${caseItem.title} - Después`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-playfair text-white">
                  {caseItem.title}
                </h3>
                <p className="text-gray-300 mb-4">{caseItem.description}</p>
                <Link
                  to={caseItem.link}
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  Ver caso completo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/casos" className="btn-primary">
            Ver todos los casos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasesPreview;

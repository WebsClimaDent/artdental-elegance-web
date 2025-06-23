
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    id: 1,
    title: "Rehabilitación completa",
    description: "Restauración completa de la dentición con coronas de disilicato de litio para un resultado estético y funcional óptimo.",
    before: "/lovable-uploads/d689cf97-8199-44bb-ae83-8f97311e4112.png",
    after: "/lovable-uploads/a42daec9-b827-4b51-b1bc-2f27dd0cdd9b.png",
    link: "/casos",
  },
  {
    id: 2,
    title: "Carillas mínimamente invasivas",
    description: "Transformación estética con carillas ultra finas que respetan la estructura dental natural.",
    before: "/lovable-uploads/b2a89a74-e8b0-4ee4-bac8-7693d6f123b7.png",
    after: "/lovable-uploads/1dd61794-b5be-4910-b4e8-5ffb48b9e55b.png",
    link: "/casos",
  },
  {
    id: 3,
    title: "Implantes con circonio",
    description: "Solución permanente con implantes de titanio y coronas de circonio para una estética natural.",
    before: "/lovable-uploads/b44b9bcc-1d0d-43da-a6b6-c1525792fdc9.png",
    after: "/lovable-uploads/e2080422-f897-4e44-89cb-fe17b4ccecbc.png",
    link: "/casos",
  },
  {
    id: 4,
    title: "Carillas de porcelana estéticas",
    description: "Corrección de forma y color con carillas de porcelana feldespática para una sonrisa perfecta.",
    before: "/lovable-uploads/b2650b57-05ac-4db5-84d8-cd04602b37eb.png",
    after: "/lovable-uploads/b4fb9586-9767-4aa4-85c0-edd9336d75ee.png",
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
                  <span className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md z-10 border border-white/20">
                    Antes
                  </span>
                  <img
                    src={caseItem.before}
                    alt={`${caseItem.title} - Antes`}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="h-64 overflow-hidden relative">
                  <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-black text-xs px-3 py-1 rounded-md z-10 border border-black/20">
                    Después
                  </span>
                  <img
                    src={caseItem.after}
                    alt={`${caseItem.title} - Después`}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
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
                  className="inline-flex items-center text-white font-medium hover:underline transition-all duration-200 hover:text-gray-300"
                >
                  Ver caso completo
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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

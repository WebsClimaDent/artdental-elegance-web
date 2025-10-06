import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const cases = [{
  id: 1,
  title: "Carillas y Prótesis fija",
  description: "Carillas mínimamente invasivas y rehabilitación con implante en ausencias dentales para una solución integral y estética.",
  before: "/lovable-uploads/FAU_1052.JPG.png",
  after: "/lovable-uploads/FAU_1610coopy.jpg.png",
  link: "/casos"
}, {
  id: 2,
  title: "Carillas mínimamente invasivas",
  description: "Transformación estética con carillas ultra finas que respetan la estructura dental natural.",
  before: "/lovable-uploads/b2a89a74-e8b0-4ee4-bac8-7693d6f123b7.png",
  after: "/lovable-uploads/1dd61794-b5be-4910-b4e8-5ffb48b9e55b.png",
  link: "/casos"
}, {
  id: 3,
  title: "Rehabilitación estética - Diseño de sonrisa",
  description: "Rehabilitación estética integral con diseño de sonrisa adaptado, utilizando carillas y rehabilitación en ausencias de molares con coronas de circonio.",
  before: "/lovable-uploads/036303dc-8b5c-432b-b222-d800c2e5a509.png",
  after: "/lovable-uploads/c7ce5a57-2e63-45bf-b2bc-6fceafe74898.png",
  link: "/casos"
}, {
  id: 4,
  title: "Carillas de porcelana estéticas",
  description: "Corrección de forma y color con carillas de porcelana feldespática para una sonrisa perfecta.",
  before: "/lovable-uploads/debb49cd-f012-4e3a-8dae-31675e361477.png",
  after: "/lovable-uploads/ccadcdea-79b9-4d00-b33a-84e673e14c41.png",
  link: "/casos"
}];
const CasesPreview = () => {
  return <section className="py-8 md:py-10 lg:py-12 bg-dental-dark" id="casos">
      <div className="container-custom">
        <h2 className="section-title text-center mb-2">Casos de Éxito</h2>
        <p className="section-subtitle text-center mb-8">Descubre los cambios clínicos reales combinando conceptos clásicos, tecnología de vanguardia y materiales de primera calidad.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {cases.map(caseItem => <div key={caseItem.id} className="bg-black rounded-lg overflow-hidden shadow-md card-hover reveal">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-64 overflow-hidden relative">
                  <span className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md z-10 border border-white/20">
                    Antes
                  </span>
                  <img src={caseItem.before} alt={`${caseItem.title} - Antes`} className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${caseItem.id === 1 ? 'object-[center_20%]' : 'object-center'}`} />
                </div>
                <div className="h-64 overflow-hidden relative">
                  <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-black text-xs px-3 py-1 rounded-md z-10 border border-black/20">
                    Después
                  </span>
                  <img src={caseItem.after} alt={`${caseItem.title} - Después`} className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${caseItem.id === 1 ? 'object-[center_20%]' : 'object-center'}`} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-playfair text-white">
                  {caseItem.title}
                </h3>
                <p className="text-gray-300 mb-4">{caseItem.description}</p>
                {caseItem.id === 1 && (
                  <p className="text-gray-400 text-sm italic mb-4">
                    Caso realizado por Dr. Faus, en colaboración con ArtDental Laboratorio.
                  </p>
                )}
                {caseItem.id === 4 && (
                  <p className="text-gray-400 text-sm italic mb-4">
                    Caso realizado por Dr. Kike Cuñat, en colaboración con ArtDental Laboratorio.
                  </p>
                )}
                <Link to={caseItem.link} className="inline-flex items-center text-white font-medium hover:underline transition-all duration-200 hover:text-gray-300">
                  Ver caso completo
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <Link to="/casos" className="btn-primary">
            Ver todos los casos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>;
};
export default CasesPreview;
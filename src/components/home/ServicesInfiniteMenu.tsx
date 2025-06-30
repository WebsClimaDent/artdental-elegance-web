import InfiniteMenu from "../ui/InfiniteMenu";

const services = [
  {
    title: "Coronas de Zirconio",
    description: "Estructuras fijas para reemplazar piezas dentales ausentes con alta estética y funcionalidad.",
    image: "/lovable-uploads/b733e484-2f98-47ad-861a-7651eaab8342.png",
    link: "/servicios#puentes-dientes",
  },
  {
    title: "Carillas mínimamente invasivas",
    description: "Láminas ultrafinas que transforman la estética dental con resultados naturales y duraderos.",
    image: "/lovable-uploads/85bc05ab-82d5-4ae8-bbc0-405357796e59.png",
    link: "/servicios#carillas-porcelana",
    objectFit: "contain" as const,
    scale: 0.2,
  },
  {
    title: "Zirconio",
    description: "Restauraciones parciales para dientes posteriores con daño moderado que preservan estructura dental.",
    image: "/lovable-uploads/e6bd1da7-814e-4083-a2ab-7c7b9d5b94be.png",
    link: "/servicios#incrustaciones",
  },
  {
    title: "Prótesis sobre Implantes Blender",
    description: "Restauraciones unitarias sobre implantes con perfecta integración estética y funcional.",
    image: "/lovable-uploads/79c58425-63b9-4c29-968f-0a91936b1160.png",
    link: "/servicios#coronas-implantes",
  },
  {
    title: "Rehabilitaciones Completas",
    description: "Reconstrucción total de la dentición con sistemas implantosoportados de última generación.",
    image: "/lovable-uploads/b2650b57-05ac-4db5-84d8-cd04602b37eb.png",
    link: "/servicios#rehabilitaciones-completas",
  },
];

const ServicesInfiniteMenu = () => {
  return (
    <section className="section-padding bg-dental-dark" id="servicios">
      <div className="container-custom">
        <h2 className="section-title text-center text-white mb-4">Nuestros Servicios</h2>
        <p className="section-subtitle text-center text-gray-300 mb-12">
          Ofrecemos soluciones dentales avanzadas con un enfoque en la calidad,
          precisión y estética para resultados excepcionales.
        </p>

        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-dental-dark rounded-lg overflow-hidden">
          <InfiniteMenu items={services} />
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm mb-4">
            Arrastra para explorar nuestros servicios en 3D
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfiniteMenu;

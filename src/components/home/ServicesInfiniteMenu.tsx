
import InfiniteMenu from "../ui/InfiniteMenu";

const services = [
  {
    title: "Coronas",
    description: "Restauraciones unitarias personalizadas con materiales de alta calidad y precisión inigualable.",
    image: "/lovable-uploads/c1bcb91a-1fa3-4566-a5b3-80f6435e153f.png",
    link: "/servicios",
  },
  {
    title: "Puentes",
    description: "Estructuras fijas para reemplazar piezas dentales ausentes con alta estética y funcionalidad.",
    image: "/lovable-uploads/b733e484-2f98-47ad-861a-7651eaab8342.png",
    link: "/servicios",
  },
  {
    title: "Carillas de Porcelana",
    description: "Láminas ultrafinas que transforman la estética dental con resultados naturales y duraderos.",
    image: "/lovable-uploads/26355edf-566d-4fa7-8b05-f9367fc46a47.png",
    link: "/servicios",
  },
  {
    title: "Prótesis Removibles",
    description: "Soluciones funcionales y estéticas para reemplazar piezas dentales con comodidad y naturalidad.",
    image: "/lovable-uploads/af154a7d-1db9-44d6-9be8-0c11031d96e0.png",
    link: "/servicios",
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

        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-dental-dark rounded-lg overflow-hidden">
          <InfiniteMenu items={services} />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            Arrastra para explorar nuestros servicios en 3D
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfiniteMenu;

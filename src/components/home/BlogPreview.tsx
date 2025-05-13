
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredPosts = [
  {
    id: 1,
    title: "Avances en materiales cerámicos para restauraciones dentales",
    excerpt: "Exploramos cómo los nuevos materiales cerámicos están revolucionando la estética y durabilidad.",
    image: "/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png",
    category: "Materiales",
    date: "12 Mayo, 2025"
  },
  {
    id: 2,
    title: "La importancia del perfil de emergencia en prótesis sobre implantes",
    excerpt: "El perfil de emergencia es crucial para la estética y funcionalidad en restauraciones implantosoportadas.",
    image: "/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
    category: "Técnicas",
    date: "5 Mayo, 2025"
  },
  {
    id: 3,
    title: "Flujo digital completo: del escáner intraoral al laboratorio",
    excerpt: "La digitalización completa del flujo de trabajo permite precisión y eficiencia sin precedentes.",
    image: "/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png",
    category: "Tecnología",
    date: "28 Abril, 2025"
  }
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-dental-dark" id="blog">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Blog dental</h2>
        <p className="section-subtitle text-center text-gray-300">
          Artículos, casos clínicos y tendencias en laboratorio dental protésico.
          Conocimiento compartido para profesionales del sector.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-black rounded-lg overflow-hidden shadow-lg card-hover reveal"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-dental-accent/80 font-medium">{post.category}</span>
                  <span className="text-sm text-dental-accent/60">{post.date}</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3 text-white">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  Leer más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-primary">
            Ver todos los artículos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

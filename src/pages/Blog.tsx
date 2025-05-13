
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BackButton from "../components/ui/back-button";

const blogPosts = [
  {
    id: 1,
    title: "Avances en materiales cerámicos para restauraciones dentales",
    excerpt: "Exploramos cómo los nuevos materiales cerámicos están revolucionando la estética y durabilidad de las restauraciones dentales modernas.",
    image: "/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png",
    category: "Materiales",
    date: "12 Mayo, 2025",
    author: "Dr. Miguel Sánchez"
  },
  {
    id: 2,
    title: "La importancia del perfil de emergencia en prótesis sobre implantes",
    excerpt: "El perfil de emergencia es crucial para la estética y funcionalidad. Analizamos técnicas para conseguir resultados óptimos.",
    image: "/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
    category: "Técnicas",
    date: "5 Mayo, 2025",
    author: "Dra. Laura Martínez"
  },
  {
    id: 3,
    title: "Flujo digital completo: del escáner intraoral al laboratorio",
    excerpt: "La digitalización completa del flujo de trabajo permite precisión y eficiencia sin precedentes en la odontología restauradora.",
    image: "/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png",
    category: "Tecnología",
    date: "28 Abril, 2025",
    author: "Dr. Carlos Rodríguez"
  },
  {
    id: 4,
    title: "Estratificación de cerámica: arte y ciencia en la estética dental",
    excerpt: "La estratificación cerámica combina conocimientos técnicos precisos con sensibilidad artística para restauraciones naturales.",
    image: "/lovable-uploads/ce1c3f7d-1d21-43e8-a94f-9822f13d35fb.png",
    category: "Técnicas",
    date: "20 Abril, 2025",
    author: "Dra. Ana González"
  },
  {
    id: 5,
    title: "El futuro de los materiales híbridos en prótesis fija",
    excerpt: "Los materiales híbridos ofrecen una combinación única de propiedades que los hacen ideales para determinadas restauraciones.",
    image: "/lovable-uploads/e80c87be-4317-4b7f-bdc9-8ff7830a7b3c.png",
    category: "Materiales",
    date: "15 Abril, 2025",
    author: "Dr. Javier Ruiz"
  },
  {
    id: 6,
    title: "Comunicación clínica-laboratorio: la clave del éxito restaurador",
    excerpt: "Una comunicación efectiva entre el dentista y el laboratorio es fundamental para conseguir resultados predecibles.",
    image: "/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png",
    category: "Gestión",
    date: "10 Abril, 2025",
    author: "Dra. Elena Torres"
  }
];

const categories = [
  { name: "Materiales", count: 2 },
  { name: "Técnicas", count: 2 },
  { name: "Tecnología", count: 1 },
  { name: "Gestión", count: 1 },
  { name: "Casos Clínicos", count: 0 },
  { name: "Formación", count: 0 },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - ArtDental";
    
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="bg-dental-dark min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-cover bg-center relative" 
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png)' }}>
          <div className="container-custom">
            <div className="mb-6">
              <BackButton className="text-white hover:text-dental-light" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-white">Blog Dental</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto text-white">
                Artículos, casos clínicos y tendencias en laboratorio dental protésico.
                Conocimiento compartido para profesionales del sector.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Blog Posts */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="bg-dental-dark rounded-lg overflow-hidden shadow-lg card-hover reveal">
                      <div className="h-52 overflow-hidden">
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
                        <h3 className="text-xl font-playfair font-semibold mb-3 text-white hover:underline">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-dental-accent/80">{post.author}</span>
                          <button className="inline-flex items-center text-white font-medium hover:underline">
                            Leer más
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="flex justify-center mt-12">
                  <button className="btn-primary">
                    Cargar más artículos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3 space-y-8">
                {/* Categories */}
                <div className="bg-dental-dark rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-white">Categorías</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name} className="flex justify-between items-center">
                        <button className="text-gray-300 hover:text-white transition-colors">
                          {category.name}
                        </button>
                        <span className="bg-dental-accent/10 text-dental-accent text-sm px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-dental-dark rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-white">Suscríbete</h3>
                  <p className="text-gray-300 mb-4">Recibe nuestros artículos y novedades directamente en tu email.</p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Tu email"
                      className="w-full bg-black/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-white"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-black font-medium py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    >
                      Suscribirse
                    </button>
                  </form>
                </div>

                {/* Recent Posts */}
                <div className="bg-dental-dark rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-white">Foros dentales</h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="text-white hover:underline font-medium">Foro de materiales CAD/CAM</h4>
                      <p className="text-sm text-gray-400">32 participantes activos</p>
                    </li>
                    <li>
                      <h4 className="text-white hover:underline font-medium">Discusión sobre técnicas de estratificación</h4>
                      <p className="text-sm text-gray-400">18 participantes activos</p>
                    </li>
                    <li>
                      <h4 className="text-white hover:underline font-medium">Novedades en implantología 2025</h4>
                      <p className="text-sm text-gray-400">24 participantes activos</p>
                    </li>
                  </ul>
                  <button className="text-white font-medium hover:underline mt-4 inline-flex items-center">
                    Ver todos los foros
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-black">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-playfair font-semibold mb-6 text-white">
              ¿Quieres contribuir con tu conocimiento?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Invitamos a profesionales del sector a compartir sus experiencias, casos y conocimientos
              con nuestra comunidad dental.
            </p>
            <Link to="/contacto" className="btn-primary">
              Contactar para colaborar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;

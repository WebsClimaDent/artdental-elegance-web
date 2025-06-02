
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Layers, Zap, Gauge } from "lucide-react";
import BackButton from "@/components/ui/back-button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const technologies = [
  {
    id: 1,
    title: "Digitalización y Moldeado",
    description: "Utilizamos sistemas de escaneado 3D de alta precisión para realizar tomas digitales exactas, que nos permiten planificar cada caso con total fiabilidad. Gracias a nuestro proceso de encerado digital y planificación digital avanzada, conseguimos una reproducción fiel de la anatomía dental y una adaptación perfecta en restauraciones, sin las limitaciones de los métodos tradicionales. Innovación, precisión y estética, al servicio de tu sonrisa.",
    features: [
      "Precisión de hasta 10 micras",
      "Captura en color para registro de detalles",
      "Reducción del tiempo de trabajo"
    ],
    image: "/lovable-uploads/1a03ebf9-cc99-404d-a0d0-c58cb8360d8f.png",
    icon: <Zap className="h-12 w-12" />,
    color: "from-blue-500 to-indigo-700",
  },
  {
    id: 2,
    title: "Sistema CAD/CAM Avanzado",
    description: "Utilizamos software de diseño dental avanzado que permite crear restauraciones personalizadas con absoluta precisión, desde incrustaciones simples hasta rehabilitaciones completas sobre implantes.",
    features: [
      "Bibliotecas de dientes anatómicamente precisas",
      "Diseño de sonrisa digital",
      "Planificación de casos complejos"
    ],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1770&auto=format&fit=crop",
    icon: <Layers className="h-12 w-12" />,
    color: "from-purple-500 to-pink-700",
  },
  {
    id: 3,
    title: "Fresadoras de 5 Ejes",
    description: "Nuestras fresadoras de última generación trabajan con precisión excepcional en materiales como zirconio, disilicato de litio y resinas de alto rendimiento para garantizar restauraciones perfectas.",
    features: [
      "Precisión de mecanizado submilimétrica",
      "Procesado de todos los materiales modernos",
      "Producción rápida y consistente"
    ],
    image: "https://images.unsplash.com/photo-1633094167399-c53af8f24070?q=80&w=1932&auto=format&fit=crop",
    icon: <Gauge className="h-12 w-12" />,
    color: "from-green-500 to-emerald-700",
  },
  {
    id: 4,
    title: "Hornos de Sinterización Programables",
    description: "Equipos de última generación para la cocción y sinterización de cerámicas y zirconio, con curvas de temperatura precisas que garantizan resultados óptimos en resistencia y estética.",
    features: [
      "Control preciso de temperatura y tiempos",
      "Programas personalizados por material",
      "Resultados consistentes"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    icon: <Info className="h-12 w-12" />,
    color: "from-amber-500 to-orange-700",
  },
];

const TechnologyCard = ({ tech, index }: { tech: any; index: number }) => (
  <div 
    className={`flex flex-col overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
  >
    <div 
      className={`relative h-64 overflow-hidden bg-gradient-to-r ${tech.color}`}
    >
      <div className="absolute inset-0 opacity-30">
        <img 
          src={tech.image} 
          alt={tech.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center p-6">
        <div className="text-white text-center">
          <div className="mb-4 mx-auto bg-white bg-opacity-20 p-4 rounded-full">
            {tech.icon}
          </div>
          <h3 className="text-3xl font-playfair font-bold">{tech.title}</h3>
        </div>
      </div>
    </div>
    <div className="bg-dental-dark p-6 flex-grow">
      <p className="text-gray-300 mb-6">{tech.description}</p>
      <ul className="space-y-2">
        {tech.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-gray-300">
            <span className="mr-2 text-white">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Tecnologia = () => {
  useEffect(() => {
    document.title = "Nuestra Tecnología - ArtDental";
    
    // Animation for elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-24 overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: 'url(public/lovable-uploads/90f75264-f185-4388-b39e-1766dd53e321.png)',
              filter: 'blur(2px) brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10"></div>
          
          <div className="container-custom relative z-20">
            <div className="mb-6">
              <BackButton className="text-white hover:text-dental-light" />
            </div>
            <div className="text-center animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-gradient">
                Innovación Tecnológica
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                La excelencia de nuestro trabajo está cimentada en la combinación de artesanía 
                experta y tecnología de vanguardia.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-gradient-to-b from-black to-dental-dark">
          <div className="container-custom">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 animate-on-scroll opacity-0 transform translate-x-[-50px] transition-all duration-1000">
                <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                  Tecnología de Vanguardia para Resultados Excepcionales
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  En ArtDental hemos invertido en las más avanzadas tecnologías del sector odontológico 
                  para garantizar que cada pieza que sale de nuestro laboratorio cumple con los más 
                  altos estándares de precisión, estética y durabilidad.
                </p>
                <p className="text-gray-300 mb-8 text-lg">
                  Nuestro flujo de trabajo digital integra perfectamente todas las etapas del proceso 
                  de fabricación, desde el escaneo hasta el acabado final, asegurando resultados consistentes 
                  que superan las expectativas de clínicos y pacientes.
                </p>
              </div>
              <div className="lg:w-1/2 animate-on-scroll opacity-0 transform translate-x-[50px] transition-all duration-1000">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/1db6d1c9-9179-4b43-bc6c-b74bc7353c1d.png"
                    alt="Tecnología dental avanzada"
                    className="w-full h-auto transform transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Carousel Section */}
        <section className="py-24 bg-dental-dark">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
              <h2 className="text-3xl md:text-5xl font-playfair font-semibold mb-6">
                Nuestro Equipamiento
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubra las tecnologías que nos permiten ofrecer soluciones dentales 
                de precisión excepcional.
              </p>
            </div>
            
            <Tabs defaultValue="carousel" className="w-full">
              <TabsList className="w-full flex justify-center mb-8 bg-transparent">
                <TabsTrigger value="carousel" className="data-[state=active]:bg-white data-[state=active]:text-dental-dark px-8 py-3">
                  Carrusel
                </TabsTrigger>
                <TabsTrigger value="cards" className="data-[state=active]:bg-white data-[state=active]:text-dental-dark px-8 py-3">
                  Tarjetas
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="carousel" className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
                <Carousel className="w-full">
                  <CarouselContent>
                    {technologies.map((tech) => (
                      <CarouselItem key={tech.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                          <Card className="bg-black border-gray-800 overflow-hidden h-full">
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={tech.image}
                                alt={tech.title}
                                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                              />
                            </div>
                            <CardHeader>
                              <CardTitle className="text-white">{tech.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-300">{tech.description}</p>
                            </CardContent>
                            <CardFooter>
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <button className="text-white underline text-sm flex items-center gap-1">
                                    Ver características <Info className="h-3 w-3" />
                                  </button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80 bg-black text-white border-gray-800">
                                  <h4 className="font-bold mb-2">Características</h4>
                                  <ul className="space-y-1">
                                    {tech.features.map((feature: string, i: number) => (
                                      <li key={i} className="text-sm flex items-start">
                                        <span className="mr-2">•</span> {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </HoverCardContent>
                              </HoverCard>
                            </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-8 gap-4">
                    <CarouselPrevious className="relative static transform-none bg-white text-dental-dark hover:bg-gray-200" />
                    <CarouselNext className="relative static transform-none bg-white text-dental-dark hover:bg-gray-200" />
                  </div>
                </Carousel>
              </TabsContent>
              
              <TabsContent value="cards" className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {technologies.map((tech, index) => (
                    <TechnologyCard key={tech.id} tech={tech} index={index} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ 
              backgroundImage: "url(https://images.unsplash.com/photo-1606213050828-b7c66510ce51?q=80&w=2070&auto=format&fit=crop)",
              filter: "blur(3px)"
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="container-custom relative z-10 text-center">
            <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
              <h2 className="text-3xl md:text-5xl font-playfair font-semibold mb-6">
                Descubra el Futuro de la Odontología
              </h2>
              <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
                Le invitamos a visitar nuestras instalaciones para conocer de primera mano
                cómo nuestra tecnología puede transformar la experiencia de sus pacientes.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link to="/contacto" className="btn-primary">
                  Programar una visita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/casos" className="btn-secondary">
                  Ver casos clínicos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Tecnologia;

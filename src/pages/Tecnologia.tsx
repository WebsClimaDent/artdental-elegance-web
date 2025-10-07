import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Layers, Zap, Gauge } from "lucide-react";
import BackButton from "@/components/ui/back-button";
import TiltedCard from "@/components/ui/TiltedCard";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const technologies = [{
  id: 1,
  title: "Digitalización y Moldeado",
  description: "Utilizamos sistemas de escaneado 3D de alta precisión para realizar tomas digitales exactas, que nos permiten planificar cada caso con total fiabilidad. Gracias a nuestro proceso de encerado digital y planificación digital avanzada, conseguimos una reproducción fiel de la anatomía dental y una adaptación perfecta en restauraciones, sin las limitaciones de los métodos tradicionales. Innovación, precisión y estética, al servicio de tu sonrisa.",
  features: ["Precisión de hasta 4 micras", "Captura en color para registro de detalles"],
  image: "/lovable-uploads/94fb7b77-38b0-4501-8007-80e31ddc9775.png"
}, {
  id: 2,
  title: "Sistema CAD/CAM Avanzado",
  description: "Utilizamos software de diseño dental avanzado que permite crear restauraciones personalizadas con absoluta precisión, desde incrustaciones simples hasta rehabilitaciones completas sobre implantes.",
  features: ["Bibliotecas de dientes anatómicamente precisas", "Diseño de sonrisa digital", "Planificación de casos complejos"],
  image: "/lovable-uploads/83216622-92b0-432b-ab92-6b80d045b688.png"
}, {
  id: 3,
  title: "Fresadoras de 5 Ejes",
  description: "Nuestras fresadoras de última generación trabajan con precisión excepcional en materiales como zirconio, disilicato de litio y resinas de alto rendimiento para garantizar restauraciones perfectas.",
  features: ["Precisión de mecanizado submilimétrica", "Procesado de todos los materiales", "Producción rápida y consistente"],
  image: "/lovable-uploads/eb7a173d-0658-406c-b93e-14227c1f338b.png"
}];
const TechnologyCard = ({
  tech,
  index
}: {
  tech: any;
  index: number;
}) => <div className={`flex flex-col overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-dental-dark`}>
    {/* Image Section - Clean without overlays */}
    <div className="relative h-64 overflow-hidden">
      <TiltedCard imageSrc={tech.image} altText={tech.title} captionText="" containerWidth="100%" containerHeight="100%" imageWidth="100%" imageHeight="100%" scaleOnHover={1.05} rotateAmplitude={8} showTooltip={false} objectFit="cover" className="w-full h-full" />
    </div>
    
    {/* Content Section - Below the image */}
    <div className="p-6 flex-grow">
      {/* Title */}
      <div className="text-center mb-4">
        <h3 className="text-2xl font-playfair font-bold text-white mb-4">{tech.title}</h3>
      </div>
      
      {/* Description */}
      <p className="text-gray-300 mb-6">{tech.description}</p>
      
      {/* Features */}
      <ul className="space-y-2">
        {tech.features.map((feature: string, idx: number) => <li key={idx} className="flex items-center text-gray-300">
            <span className="mr-2 text-white">•</span> {feature}
          </li>)}
      </ul>
    </div>
  </div>;
const Tecnologia = () => {
  useEffect(() => {
    document.title = "Nuestra Tecnología - ArtDental";

    // Animation for elements
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return <>
      <Header />
      <main className="bg-black min-h-screen pt-32 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{
          backgroundImage: 'url(/lovable-uploads/ffcf0fe6-b58b-41ac-abbe-5a9d2a4f0fab.png)',
          backgroundPosition: 'center 60%',
          filter: 'blur(2px) brightness(0.6)'
        }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
          
          <div className="container-custom relative z-20 pt-8">
            <div className="mb-8">
              <BackButton className="text-white hover:text-dental-light" />
            </div>
            <div className="text-center animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-gradient">
                Innovación Tecnológica
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">Nuestro trabajo aesthetic hight quality de la mano de la innovación y expertos en tecnología de vanguardia.

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
                <p className="text-gray-300 mb-8 text-lg">En ArtDental hemos invertido en las más avanzadas tecnologías del sector odontológico para garantizar que cada pieza que sale de nuestro laboratorio con precisión, estética y durabilidad.</p>
                <p className="text-gray-300 mb-8 text-lg">Nuestro flujo de trabajo digital y conceptos clásicos integran perfectamente todas las etapas del proceso de fabricación, desde el escaneo hasta el acabado final, asegurando resultados consistentes que superan las expectativas de clínicos y pacientes.</p>
              </div>
              <div className="lg:w-1/2 animate-on-scroll opacity-0 transform translate-x-[50px] transition-all duration-1000">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <TiltedCard imageSrc="/lovable-uploads/1db6d1c9-9179-4b43-bc6c-b74bc7353c1d.png" altText="Tecnología dental avanzada" captionText="" containerWidth="100%" containerHeight="400px" imageWidth="100%" imageHeight="400px" scaleOnHover={1.08} rotateAmplitude={12} showTooltip={false} objectFit="cover" />
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
                    {technologies.map(tech => <CarouselItem key={tech.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                          <Card className="bg-black border-gray-800 overflow-hidden h-full flex flex-col">
                            {/* Image Section - Increased height and no overlays */}
                            <div className="h-64 overflow-hidden flex-shrink-0">
                              <TiltedCard imageSrc={tech.image} altText={tech.title} captionText="" containerWidth="100%" containerHeight="100%" imageWidth="100%" imageHeight="100%" scaleOnHover={1.1} rotateAmplitude={10} showTooltip={false} objectFit="cover" />
                            </div>
                            
                            {/* Content Section - All text below image */}
                            <div className="flex flex-col flex-grow">
                              
                              
                              
                              
                              <CardFooter className="pt-2">
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <button className="text-white underline text-sm flex items-center gap-1">
                                      Ver características <Info className="h-3 w-3" />
                                    </button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-80 bg-black text-white border-gray-800">
                                    <h4 className="font-bold mb-2">Características</h4>
                                    <ul className="space-y-1">
                                      {tech.features.map((feature: string, i: number) => <li key={i} className="text-sm flex items-start">
                                          <span className="mr-2">•</span> {feature}
                                        </li>)}
                                    </ul>
                                  </PopoverContent>
                                </Popover>
                              </CardFooter>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>)}
                  </CarouselContent>
                  <div className="flex justify-center mt-8 gap-4">
                    <CarouselPrevious className="relative static transform-none bg-white text-dental-dark hover:bg-gray-200" />
                    <CarouselNext className="relative static transform-none bg-white text-dental-dark hover:bg-gray-200" />
                  </div>
                </Carousel>
              </TabsContent>
              
              <TabsContent value="cards" className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {technologies.map((tech, index) => <TechnologyCard key={tech.id} tech={tech} index={index} />)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1606213050828-b7c66510ce51?q=80&w=2070&auto=format&fit=crop)",
          filter: "blur(3px)"
        }} />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="container-custom relative z-10 text-center">
            <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
              <h2 className="text-3xl md:text-5xl font-playfair font-semibold mb-6">
                Descubra el Futuro del arte dental
              </h2>
              <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
                Te invitamos a visitar nuestras instalaciones para conocer de primera mano
                cómo nuestra tecnología puede transformar la experiencia de tus pacientes.
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
    </>;
};
export default Tecnologia;
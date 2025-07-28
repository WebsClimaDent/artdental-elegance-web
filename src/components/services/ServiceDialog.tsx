
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

interface ServiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
    detailedDescription?: string;
    benefits?: string[];
    materials?: string[];
    testimonial?: {
      quote: string;
      author: string;
      clinic?: string;
    };
    additionalImages?: string[];
    galleryImages?: string[];
  };
}

const ServiceDialog = ({ isOpen, onClose, service }: ServiceDialogProps) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    onClose();
    navigate('/contacto');
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-dental-dark text-white border-gray-700 max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair font-semibold text-white">{service.title}</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Excelencia y precisión para resultados excepcionales.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          {/* Main image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Detailed description */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-3 text-white">Descripción</h3>
            <p className="text-gray-300 leading-relaxed">
              El zirconio es la máxima expresión de precisión y tecnología en odontología restauradora. Fabricado en su versión multicapa de última generación, este material combina resistencia, estética y biocompatibilidad, ofreciendo una solución avanzada y definitiva para restauraciones dentales de alta exigencia. El zirconio representa la evolución de la estética dental, gracias a su capacidad para imitar de forma natural la translucidez y el color de los dientes, logrando restauraciones altamente realistas. Mediante planificación quirúrgica 3D y diseño digital avanzado, cada caso se aborda como un proyecto personalizado, en el que cada detalle desde el ajuste oclusal hasta la armonía estética— se ejecuta con exactitud milimétrica para garantizar funcionalidad, durabilidad e integración perfecta.
            </p>
          </div>

          {/* Gallery of cases */}
          {service.galleryImages && service.galleryImages.length > 0 && (
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4 text-white">Galería de Casos</h3>
              <div className="relative">
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    {service.galleryImages.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="rounded-lg overflow-hidden shadow-md bg-black/20 border border-gray-700">
                          <img 
                            src={image} 
                            alt={`${service.title} - Caso ${index + 1}`}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-white/90 text-dental-dark hover:bg-white border-gray-300" />
                  <CarouselNext className="bg-white/90 text-dental-dark hover:bg-white border-gray-300" />
                </Carousel>
              </div>
            </div>
          )}
          
          {/* Materials used */}
          {service.materials && service.materials.length > 0 && (
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-white">Materiales Premium</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {service.materials.map((material, index) => (
                  <li key={index} className="leading-relaxed">{material}</li>
                ))}
              </ul>
              <p className="mt-3 text-gray-300 italic">
                Solo utilizamos los materiales de la más alta calidad para garantizar durabilidad y estética superior.
              </p>
            </div>
          )}
          
          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-white">Beneficios</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="leading-relaxed">{benefit}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Additional images */}
          {service.additionalImages && service.additionalImages.length > 0 && (
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-white">Galería</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.additionalImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={image} 
                      alt={`${service.title} - imagen ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Call to action */}
          <div className="text-center pt-4">
            <button 
              onClick={handleContactClick}
              className="bg-white text-dental-dark px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 inline-flex items-center"
            >
              Contactar para más información
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;

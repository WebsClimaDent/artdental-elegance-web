
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

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
  };
}

const ServiceDialog = ({ isOpen, onClose, service }: ServiceDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-dental-dark text-white border-gray-700 max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair font-semibold text-white">{service.title}</DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Excelencia y precisión para resultados excepcionales
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
              {service.detailedDescription || service.description}
            </p>
          </div>
          
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
          
          {/* Testimonial */}
          {service.testimonial && (
            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <p className="text-white italic text-lg mb-3">"{service.testimonial.quote}"</p>
              <div className="flex items-center">
                <div>
                  <p className="text-white font-medium">{service.testimonial.author}</p>
                  {service.testimonial.clinic && (
                    <p className="text-gray-400 text-sm">{service.testimonial.clinic}</p>
                  )}
                </div>
              </div>
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
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Call to action */}
          <div className="text-center pt-4">
            <button 
              onClick={onClose}
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

import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BackButton from "@/components/ui/back-button";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    message: "",
    type: "consulta"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success?: boolean; message?: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: "¡Gracias por contactarnos! Nos pondremos en contacto con usted a la mayor brevedad."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        clinic: "",
        message: "",
        type: "consulta"
      });
    }, 1500);
  };

  useEffect(() => {
    document.title = "Contacto - ArtDental";
    
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
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop)' }}>
          <div className="container-custom">
            <div className="mb-6">
              <BackButton className="text-white hover:text-dental-light" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">Contacto</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                Estamos aquí para responder a sus preguntas y ayudarle a conseguir los mejores resultados para sus pacientes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="reveal">
                <h2 className="text-2xl font-playfair font-semibold mb-6 text-white">Envíenos un mensaje</h2>
                
                {submitResult && (
                  <div className={`p-4 rounded-md mb-6 ${submitResult.success ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'}`}>
                    {submitResult.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Nombre completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">Teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="clinic" className="block text-white mb-2">Nombre de la Clínica</label>
                      <input
                        type="text"
                        id="clinic"
                        name="clinic"
                        value={formData.clinic}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-white mb-2">Tipo de consulta</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <option value="consulta">Consulta general</option>
                      <option value="presupuesto">Solicitar presupuesto</option>
                      <option value="caso">Consultar sobre un caso</option>
                      <option value="visita">Programar una visita</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="reveal">
                <h2 className="text-2xl font-playfair font-semibold mb-6 text-white">Información de Contacto</h2>
                
                <div className="bg-black bg-opacity-50 rounded-lg p-6 mb-8">
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <MapPin className="h-6 w-6 mr-3 text-white flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Dirección</h4>
                        <p className="text-gray-300">
                          Calle Principal 123<br/>
                          28001, Madrid<br/>
                          España
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="h-6 w-6 mr-3 text-white flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Teléfono</h4>
                        <p className="text-gray-300">
                          <a href="tel:+34963587411" className="hover:text-white transition-colors">+34 963 587 411</a><br/>
                          <a href="tel:+34609976027" className="hover:text-white transition-colors">+34 609 976 027</a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="h-6 w-6 mr-3 text-white flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Email</h4>
                        <p className="text-gray-300">
                          <a href="mailto:Info@artdentalvlc.com" className="hover:text-white transition-colors">Info@artdentalvlc.com</a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-6 w-6 mr-3 text-white flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Horario</h4>
                        <p className="text-gray-300">
                          Lunes - Viernes: 9:00 - 19:00<br/>
                          Sábados: 9:00 - 14:00<br/>
                          Domingos: Cerrado
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Google Map */}
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24304.523907688272!2d-3.7037974!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1sen!2ses!4v1618308992271!5m2!1sen!2ses" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                    title="Mapa de ubicación"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;

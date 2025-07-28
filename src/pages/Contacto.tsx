
import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BackButton from "@/components/ui/back-button";
import { useContactForm } from "@/hooks/useContactForm";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    message: "",
    type: "consulta"
  });

  const { submitForm, isSubmitting } = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Campo ${name} actualizado con valor:`, value);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Intentando enviar formulario con datos:', formData);
    
    // Validación básica en el frontend
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      console.error('Validación falló: campos obligatorios vacíos');
      return;
    }
    
    try {
      const result = await submitForm(formData);
      console.log('Resultado del envío:', result);
      
      if (result.success) {
        // Limpiar formulario solo si el envío fue exitoso
        console.log('Limpiando formulario después de envío exitoso');
        setFormData({
          name: "",
          email: "",
          phone: "",
          clinic: "",
          message: "",
          type: "consulta"
        });
      }
    } catch (error) {
      console.error('Error no capturado en handleSubmit:', error);
    }
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
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(/lovable-uploads/ea3b3169-84e8-488d-bb86-8cbccd04a985.png)' }}>
          <div className="container-custom">
            <div className="mb-6">
              <BackButton className="text-white hover:text-dental-light" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">Contacto</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                Estamos aquí para responder a tus preguntas y ayudarte a conseguir los mejores resultados para tus pacientes.
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
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Nombre completo *</label>
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
                      <label htmlFor="email" className="block text-white mb-2">Email *</label>
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
                    <label htmlFor="message" className="block text-white mb-2">Mensaje *</label>
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
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
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
                          Avda Juan XXIII, N° 48 B<br/>
                          46025, Valencia<br/>
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
                          Lunes - Viernes: 7:00 - 19:30<br/>
                          Sábado y Domingo: Cerrado
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Google Map */}
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.9987612829885!2d-0.3968932!3d39.4894676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06b%3A0x40929d4c9b7d3b26!2sAv.%20de%20Joan%20XXIII%2C%2048%2C%20bajo%2C%20Benicalap%2C%2046025%20Valencia!5e0!3m2!1sen!2ses!4v1618308992271!5m2!1sen!2ses" 
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

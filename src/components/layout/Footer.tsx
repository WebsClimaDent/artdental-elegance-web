
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-playfair font-bold text-white">
                ART<span className="text-dental-light">DENTAL</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300">
              Laboratorio de estética dental. Creamos sonrisas perfectas combinando artesanía tradicional con tecnología de vanguardia.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-dental-light" />
                <span className="text-sm">Avda Juan XXIII, N° 48 B, 46025, Valencia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-dental-light" />
                <div className="text-sm">
                  <div>+34 963 587 411</div>
                  <div>+34 609 976 027</div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-dental-light" />
                <span className="text-sm">Info@artdentalvlc.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-sm hover:text-dental-light transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/equipo" className="text-sm hover:text-dental-light transition-colors">
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link to="/tecnologia" className="text-sm hover:text-dental-light transition-colors">
                  Tecnología
                </Link>
              </li>
              <li>
                <Link to="/casos" className="text-sm hover:text-dental-light transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm hover:text-dental-light transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social and Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/people/Artdental/61577607320071/" target="_blank" rel="noopener noreferrer" className="hover:text-dental-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/polromanceartdental?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-dental-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-dental-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2 text-xs text-gray-400">
              <Link to="/legal" className="block hover:text-white transition-colors">
                Aviso Legal
              </Link>
              <Link to="/privacidad" className="block hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/cookies" className="block hover:text-white transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ArtDental. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

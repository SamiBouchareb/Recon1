import { Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import AppointmentButton from './AppointmentButton';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    closeMenu();
  };

  const navigateToBlog = () => {
    navigate('/blog');
    closeMenu();
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <button 
                onClick={() => navigate('/')} 
                className="flex items-center gap-2 focus:outline-none"
              >
                <img 
                  src={logo}
                  alt="Recon Logo" 
                  className="h-10 md:h-12 w-auto"
                />
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-red-600 transition"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-600 transition"
            >
              Über Uns
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-red-600 transition"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-600 transition"
            >
              Kontakt
            </button>
            <button 
              onClick={navigateToBlog}
              className={`text-gray-700 hover:text-red-600 transition ${
                location.pathname === '/blog' ? 'text-red-600' : ''
              }`}
            >
              Blog
            </button>
            <button 
              onClick={() => navigate('/borkum')}
              className={`text-gray-700 hover:text-red-600 transition flex items-center gap-1 ${
                location.pathname === '/borkum' ? 'text-red-600' : ''
              }`}
            >
              <MapPin className="w-4 h-4" />
              Borkum
            </button>
            <AppointmentButton className="bg-red-600 hover:bg-red-700" />
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition"
              >
                Leistungen
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition"
              >
                Über Uns
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition"
              >
                Kontakt
              </button>
              <button 
                onClick={navigateToBlog}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition ${
                  location.pathname === '/blog' 
                    ? 'text-red-600' 
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Blog
              </button>
              <button 
                onClick={() => navigate('/borkum')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/borkum' 
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                } transition flex items-center gap-2`}
              >
                <MapPin className="w-4 h-4" />
                Borkum
              </button>
              <div className="px-3 py-2">
                <AppointmentButton className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
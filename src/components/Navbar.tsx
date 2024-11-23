import { Menu, X, Ear, Eye } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2">
                <Ear className="h-8 w-8 text-red-600" />
                <Eye className="h-8 w-8 text-red-600" />
                <span className="text-xl font-bold text-gray-900">Recon</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-red-600 transition">Leistungen</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition">Über Uns</a>
            <a href="#team" className="text-gray-700 hover:text-red-600 transition">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Kontakt</a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
              Termin Vereinbaren
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-red-600">Leistungen</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-red-600">Über Uns</a>
            <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-red-600">Team</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Kontakt</a>
            <button className="w-full text-left px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Termin Vereinbaren
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
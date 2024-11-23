import { Ear, Eye } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Ear className="h-6 w-6 text-red-500" />
              <Eye className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold">Recon</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Ihr Spezialist für Sehen und Hören in Emden. Modernste Technologie und persönliche
              Beratung für Ihre Augen und Ohren.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Leistungen</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">Über Uns</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Datenschutz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Impressum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Recon Sehen und Hören. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
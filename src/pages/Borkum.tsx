import { MapPin, Phone, Mail, Clock, ArrowRight, Waves, Sun, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Borkum() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Recon Borkum
              </h1>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Ihr Spezialist für Augenoptik und Hörakustik <br className="hidden md:block" />
                auf der Insel Borkum
              </p>

              <div className="mt-12 flex justify-center gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col items-center text-white/90"
                >
                  <Waves className="w-8 h-8 mb-2" />
                  <span>Nordseeinsel</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col items-center text-white/90"
                >
                  <Sun className="w-8 h-8 mb-2" />
                  <span>Urlaubsparadies</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col items-center text-white/90"
                >
                  <Wind className="w-8 h-8 mb-2" />
                  <span>Meeresluft</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute left-0 right-0 bottom-0">
          <svg className="w-full h-16 text-gray-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Willkommen in unserer Filiale auf der wunderschönen Insel Borkum. Genießen Sie Ihren Urlaub 
            mit perfekter Sicht und optimalem Hörerlebnis. Unser Team freut sich darauf, Sie mit 
            fachkundiger Beratung und modernster Technik zu unterstützen.
          </motion.p>
        </div>
      </section>

      {/* Location Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                Kontakt & Öffnungszeiten
                <div className="flex-grow h-0.5 bg-red-600/10 rounded ml-4" />
              </h2>
              
              <div className="flex items-start gap-4 group cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-all">
                <MapPin className="w-6 h-6 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    Recon Borkum<br />
                    Neue Straße 15<br />
                    26757 Borkum
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-all">
                <Phone className="w-6 h-6 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-600">+49 4922 991 5888</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-all">
                <Mail className="w-6 h-6 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                  <p className="text-gray-600">info@recon-borkum.de</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-all">
                <Clock className="w-6 h-6 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Öffnungszeiten</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                    <p>Samstag: 9:00 - 13:00 Uhr</p>
                    <p>Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
                onClick={() => window.open('https://maps.app.goo.gl/HHDgmZPPQfzFGMDy7', '_blank')}
              >
                Route planen
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-700/5 rounded-2xl" />
              <div className="h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.7768508436366!2d6.749731776941685!3d53.58667897223171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6c1c3c1b46a3d%3A0x4c4c5c5c5c5c5c5c!2sNeue%20Stra%C3%9Fe%2015%2C%2026757%20Borkum!5e0!3m2!1sde!2sde!4v1629789123456!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

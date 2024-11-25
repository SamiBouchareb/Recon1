import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AppointmentButton from './AppointmentButton';

export default function Hero() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div className="relative bg-white pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-white/50" />
      </div>

      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="py-12 md:py-20">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6"
          >
            Ihr Spezialist für
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-red-600 mt-2"
            >
              Sehen und Hören
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl"
          >
            Modernste Technologie und persönliche Beratung für Ihre Augen und Ohren.
            Vertrauen Sie auf unsere Expertise in Emden.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <AppointmentButton className="w-full sm:w-auto bg-red-600 hover:bg-red-700" />
            <motion.a
              href="#services"
              className="w-full sm:w-auto text-center sm:text-left inline-flex items-center justify-center sm:justify-start gap-2 text-red-600 hover:text-red-700 font-medium"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Unsere Leistungen <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
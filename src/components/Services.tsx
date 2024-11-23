import { Ear, Eye, Stethoscope, HeartPulse, Glasses, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Eye,
    title: 'Augenuntersuchung',
    description: 'Umfassende Sehtests und Augendruckmessung mit modernster Technologie.'
  },
  {
    icon: Ear,
    title: 'Hörtests',
    description: 'Professionelle Hörtests in unserer schallisolierten Kabine.'
  },
  {
    icon: Glasses,
    title: 'Brillenanpassung',
    description: 'Individuelle Beratung und Anpassung von Brillen und Kontaktlinsen.'
  },
  {
    icon: Headphones,
    title: 'Hörgeräte',
    description: 'Modernste Hörgeräte und fachmännische Anpassung.'
  },
  {
    icon: Stethoscope,
    title: 'Nachsorge',
    description: 'Regelmäßige Kontrollen und Anpassungen Ihrer Sehhilfen und Hörgeräte.'
  },
  {
    icon: HeartPulse,
    title: 'Präventivmedizin',
    description: 'Vorsorgeuntersuchungen für langfristige Gesundheit Ihrer Augen und Ohren.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="services" className="py-16 bg-gray-50">
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir bieten Ihnen ein umfassendes Spektrum an Dienstleistungen für Ihre Augen und Ohren
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
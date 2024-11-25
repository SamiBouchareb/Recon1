import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Clock, Users, Award, Target } from 'lucide-react';

export default function AboutUs() {
  const { ref, isInView } = useScrollAnimation();

  const milestones = [
    {
      year: "2010",
      title: "Gründung",
      description: "Eröffnung unserer ersten Praxis in Emden mit dem Ziel, hochwertige Augen- und Hördienstleistungen anzubieten."
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Erweiterung unseres Teams und Einführung modernster Technologien für noch bessere Diagnostik und Behandlung."
    },
    {
      year: "2018",
      title: "Innovation",
      description: "Integration digitaler Hörsysteme und modernster Sehhilfen in unser Angebot."
    },
    {
      year: "2023",
      title: "Zukunft",
      description: "Kontinuierliche Weiterentwicklung und Investition in neueste Technologien für optimale Patientenversorgung."
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Zufriedene Kunden"
    },
    {
      icon: Clock,
      value: "13+",
      label: "Jahre Erfahrung"
    },
    {
      icon: Award,
      value: "100%",
      label: "Qualifiziertes Team"
    },
    {
      icon: Target,
      value: "24/7",
      label: "Kundenservice"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Geschichte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seit über einem Jahrzehnt setzen wir uns für die Gesundheit Ihrer Augen und Ohren ein. 
              Unsere Reise ist geprägt von Innovation, Expertise und dem Streben nach exzellenter Patientenversorgung.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (index % 2 === 0 ? -50 : 50) }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center`}
                >
                  <div className="hidden md:block md:w-5/12" />
                  <div className="mb-4 md:mb-0 md:w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg"
                  >
                    <div className="font-bold text-red-600 text-xl mb-2">{milestone.year}</div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-20 text-center bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Unsere Mission</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Wir streben danach, jedem unserer Patienten die bestmögliche Versorgung für Augen und Ohren zu bieten. 
              Mit modernster Technologie, persönlicher Beratung und jahrelanger Erfahrung helfen wir Ihnen, 
              besser zu sehen und zu hören – für mehr Lebensqualität im Alltag.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

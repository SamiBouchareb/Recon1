import { Mail, Phone } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Sophia Achoui',
      role: 'Hörgeräteakustik-Meisterin',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
      bio: 'Spezialisiert auf die Anpassung modernster Hörsysteme mit über 10 Jahren Erfahrung.',
      expertise: ['Hörsystemanpassung', 'Gehörschutz', 'Tinnitus-Beratung'],
      contact: {
        email: 'achoui@recon-emden.de',
        phone: '+49 4921 589632'
      }
    },
    {
      name: 'Ismail Bouchareb',
      role: 'Augenoptiker-Meister',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
      bio: 'Experte für individuelle Brillenanpassung und Kontaktlinsenoptimierung.',
      expertise: ['Brillenanpassung', 'Kontaktlinsen', 'Sehtest'],
      contact: {
        email: 'bouchareb@recon-emden.de',
        phone: '+49 4921 589633'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unser Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Erfahrene Spezialisten mit Leidenschaft für Ihre Gesundheit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="relative mb-8">
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {member.bio}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex justify-center space-x-4">
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">{member.contact.email}</span>
                        </a>
                        <a
                          href={`tel:${member.contact.phone}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{member.contact.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
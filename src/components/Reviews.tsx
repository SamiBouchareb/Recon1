import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Alan Khalil',
    image: '/avatars/male1.png',
    date: 'vor 2 Jahren',
    text: 'Ich trage seit ca. 4 Jahren eine Brille und war immer unzufrieden, da ich nachts dennoch erheblich Probleme hatte. Mir wurde Recon von meiner Frau empfohlen, ich bin echt zufrieden mit meiner neuen Brille. Die haben sich echt Zeit genommen und sind auf meine Bedürfnisse eingegangen. Preis-Leistung-Verhältnis ist definitiv gegeben. Sehr freundlich und professionell, kann ich persönlich sehr empfehlen.',
    stars: 5,
    reviews: ''
  },
  {
    name: 'Lasse',
    image: '/avatars/male2.png',
    date: 'vor 2 Jahren',
    text: 'Schnelle Terminvergabe, freundlich und flexibel am Telefon. Bei Ankunft prompte Bedienung mit kompetenter fachlicher Beratung. Ich hatte verschiedene Fragen nicht nur die Anpassung der Brille betreffend, sondern auch zu der fortschreitenden Verschlechterung meiner Augen, wo Ursachen liegen könnten. Die Werte haben mich noch im Auto auf dem Nachhauseweg per Mail erreicht. Ich kann diesen Optiker nur weiter empfehlen!',
    stars: 5,
    reviews: '4 Rezensionen'
  },
  {
    name: 'Jutta Nanninga',
    image: '/avatars/female1.png',
    date: 'vor einem Jahr',
    text: 'Ich würde eigentlich noch mehr Punkte geben🤣🤣🤣! Hörgeräte und Brillen perfekt. Messungen mit den neuesten Geräten, Anpassung geht nicht professioneller. Alled wird optimal erklärt. Ein Zeitlimit wird nicht gesetzt. Was bei anderen in 5 min erledigt ist, dauert hier bestimmt 1 Stunde. Anpassung akribisch durchgeführt. Nur zu empfehlen und das mache ich auch. Von der Freundlichkeit kann sich jedes Geschäft mal ne Scheibe abschneiden. Sensationell, danke!',
    stars: 5,
    reviews: '1 Rezension'
  },
  {
    name: 'Matthias Garburg',
    image: '/avatars/male3.png',
    date: 'vor einem Jahr',
    text: 'Moin, wenn Ihr Mal einen netten und kompetenten Optiker in Emden sucht, dann kann ich Recon tatsächlich empfehlen. Er nimmt sich für die Bestimmung der Dioptrien sehr viel Zeit und hat sich auch auf die Bestimmung der Prismendioptrie spezialisiert. Ich bin wirklich sehr zufrieden mit Recon.',
    stars: 5,
    reviews: '205 Rezensionen'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Was unsere Kunden sagen
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Erfahren Sie, was unsere zufriedenen Kunden über ihre Erfahrungen mit uns berichten
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-none w-[400px] p-6 mx-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(review.stars)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      {review.reviews && (
                        <span className="text-sm text-gray-500">
                          · {review.reviews}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

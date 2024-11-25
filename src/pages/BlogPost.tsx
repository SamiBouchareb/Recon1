import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Sample blog data (in a real app, this would come from a backend)
const blogPosts = {
  'moderne-brillenglaeser': {
    title: 'Moderne Brillengläser: Technologie und Innovation',
    date: '15. Januar 2024',
    author: 'Dr. Maria Schmidt',
    category: 'Brillen',
    imageUrl: 'https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?auto=format&fit=crop&q=80',
    content: `
      Die Entwicklung moderner Brillengläser hat in den letzten Jahren bemerkenswerte Fortschritte gemacht. 
      Heute stehen uns Technologien zur Verfügung, die noch vor einem Jahrzehnt undenkbar waren.

      ## Digitale Freiform-Technologie

      Die digitale Freiform-Technologie revolutioniert die Art und Weise, wie Brillengläser hergestellt werden. 
      Jedes Glas wird individuell berechnet und gefertigt, wobei verschiedene Faktoren berücksichtigt werden:

      - Individuelle Sehgewohnheiten
      - Brillenfassung und deren Position
      - Kopf- und Augenbewegungen
      - Arbeitsabstand zum Bildschirm

      ## Blaulichtfilter und digitaler Schutz

      In unserer zunehmend digitalen Welt verbringen wir immer mehr Zeit vor Bildschirmen. 
      Moderne Brillengläser bieten hier spezielle Schutzfunktionen:

      - Reduzierung von schädlichem Blaulicht
      - Entspiegelung für besseres Sehen
      - Ermüdungsfreies Arbeiten am Computer

      ## Phototrope Gläser

      Die neueste Generation phototroper Gläser passt sich schneller denn je an wechselnde Lichtverhältnisse an:

      - Schnellere Aufhellung in Innenräumen
      - Bessere Verdunkelung im Freien
      - UV-Schutz in allen Zuständen

      ## Individuelle Anpassung

      Bei Recon Optik legen wir besonderen Wert auf die individuelle Beratung. 
      Wir analysieren Ihren persönlichen Bedarf und empfehlen die optimale Lösung für Ihre Sehanforderungen.

      ### Unsere Empfehlungen

      1. Lassen Sie sich ausführlich beraten
      2. Testen Sie verschiedene Glastypen
      3. Berücksichtigen Sie Ihren Alltag bei der Wahl
      4. Investieren Sie in Qualität

      ## Fazit

      Moderne Brillengläser sind Hightech-Produkte, die Ihr Seherlebnis erheblich verbessern können. 
      Mit der richtigen Beratung und Anpassung finden Sie die perfekte Lösung für Ihre Bedürfnisse.
    `,
  },
  'hoergeraete-innovation': {
    title: 'Hörgeräte der Zukunft: Unsichtbar und Intelligent',
    date: '10. Januar 2024',
    author: 'Thomas Weber',
    category: 'Hörgeräte',
    imageUrl: 'https://images.unsplash.com/photo-1595859703065-2c5ea8f5d48d?auto=format&fit=crop&q=80',
    content: `
      Die neueste Generation von Hörgeräten verbindet modernste Technologie mit maximalem Tragekomfort. 
      Erfahren Sie, wie diese kleinen Wunderwerke Ihr Leben verändern können.

      ## Künstliche Intelligenz im Ohr

      Moderne Hörgeräte nutzen KI-Algorithmen für:

      - Automatische Situationserkennung
      - Optimierte Sprachverständlichkeit
      - Unterdrückung von Störgeräuschen
      - Personalisierte Klanganpassung

      ## Konnektivität und Smart Features

      Die Vernetzung mit anderen Geräten eröffnet neue Möglichkeiten:

      - Direktes Streaming von Smartphone und TV
      - App-Steuerung für individuelle Einstellungen
      - Automatische Updates
      - Telemedizinische Anpassungen

      ## Akkutechnologie und Nachhaltigkeit

      Nachhaltige Lösungen für den Alltag:

      - Wiederaufladbare Lithium-Ionen-Akkus
      - Lange Betriebszeiten
      - Schnellladefunktion
      - Umweltfreundliche Materialien

      ## Individuelle Anpassung

      Bei Recon Optik bieten wir:

      1. Ausführliche Hörtests
      2. Persönliche Beratung
      3. Probetragen verschiedener Modelle
      4. Regelmäßige Nachsorge

      ## Fazit

      Die Zukunft des Hörens ist bereits da. Mit den richtigen Hörgeräten können Sie wieder aktiv am Leben teilnehmen 
      und jedes Gespräch genießen.
    `,
  },
  'augengesundheit': {
    title: 'Augengesundheit im digitalen Zeitalter',
    date: '5. Januar 2024',
    author: 'Dr. Lisa Müller',
    category: 'Gesundheit',
    imageUrl: 'https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80',
    content: `
      In der heutigen digitalen Welt sind unsere Augen täglich extremen Belastungen ausgesetzt. 
      Lernen Sie, wie Sie Ihre Augengesundheit schützen können.

      ## Digitaler Stress für die Augen

      Moderne Herausforderungen für unsere Augen:

      - Lange Bildschirmzeiten
      - Künstliches Licht
      - Klimatisierte Räume
      - Unregelmäßige Pausen

      ## Präventive Maßnahmen

      So schützen Sie Ihre Augen effektiv:

      ### 1. Die 20-20-20 Regel
      - Alle 20 Minuten
      - 20 Sekunden Pause
      - 20 Meter in die Ferne schauen

      ### 2. Ergonomischer Arbeitsplatz
      - Richtige Bildschirmposition
      - Optimale Beleuchtung
      - Angemessener Abstand

      ### 3. Ernährung für die Augen
      - Vitamin A-reiche Lebensmittel
      - Omega-3-Fettsäuren
      - Antioxidantien

      ## Regelmäßige Vorsorge

      Wichtige Vorsorgeuntersuchungen:

      1. Jährlicher Sehtest
      2. Augendruckmessung
      3. Netzhautuntersuchung
      4. Hornhautanalyse

      ## Fazit

      Investieren Sie in Ihre Augengesundheit - sie ist ein kostbares Gut. 
      Bei Recon Optik beraten wir Sie gerne zu allen Aspekten der Augengesundheit.
    `,
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen pt-20 px-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Artikel nicht gefunden
        </h1>
        <button
          onClick={() => navigate('/blog')}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          Zurück zur Blog-Übersicht
        </button>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12"
    >
      {/* Hero Image */}
      <div className="w-full h-[400px] relative mb-8">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${post.imageUrl})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate('/blog')}
          className="text-red-600 hover:text-red-700 mb-8 flex items-center gap-2 font-medium"
        >
          ← Zurück zur Blog-Übersicht
        </button>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            // Main headings (##)
            if (paragraph.trim().startsWith('##')) {
              return (
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3"
                >
                  {paragraph.replace('##', '').trim()}
                  <div className="flex-grow h-0.5 bg-red-600/10 rounded ml-4" />
                </motion.h2>
              );
            }
            // Subheadings (###)
            else if (paragraph.trim().startsWith('###')) {
              return (
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="text-2xl font-bold text-gray-800 mt-8 mb-4"
                >
                  {paragraph.replace('###', '').trim()}
                </motion.h3>
              );
            }
            // Bullet points
            else if (paragraph.trim().startsWith('-')) {
              return (
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="text-gray-700 ml-4 mb-2 flex items-start gap-3"
                >
                  <span className="text-red-600 mt-1.5">•</span>
                  <span>{paragraph.replace('-', '').trim()}</span>
                </motion.li>
              );
            }
            // Numbered lists
            else if (paragraph.trim().startsWith('1.')) {
              return (
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="text-gray-700 ml-4 list-decimal mb-2 marker:text-red-600 marker:font-semibold"
                >
                  {paragraph.replace(/\d+\./, '').trim()}
                </motion.li>
              );
            }
            // Regular paragraphs
            else if (paragraph.trim()) {
              return (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="text-gray-700 mb-6 leading-relaxed"
                >
                  {paragraph.trim()}
                </motion.p>
              );
            }
            return null;
          })}
        </div>
      </div>
    </motion.article>
  );
}

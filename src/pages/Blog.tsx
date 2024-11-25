import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    slug: 'moderne-brillenglaeser',
    title: 'Moderne Brillengläser: Technologie und Innovation',
    excerpt: 'Entdecken Sie die neuesten Entwicklungen in der Brillenglastechnologie und wie sie Ihr Seherlebnis verbessern können.',
    date: '15. Januar 2024',
    category: 'Brillen',
    imageUrl: 'https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?auto=format&fit=crop&q=80',
    readTime: '5 min'
  },
  {
    slug: 'hoergeraete-innovation',
    title: 'Hörgeräte der Zukunft: Unsichtbar und Intelligent',
    excerpt: 'Die neueste Generation von Hörgeräten verbindet modernste Technologie mit maximalem Tragekomfort.',
    date: '10. Januar 2024',
    category: 'Hörgeräte',
    imageUrl: 'https://images.unsplash.com/photo-1595859703065-2c5ea8f5d48d?auto=format&fit=crop&q=80',
    readTime: '4 min'
  },
  {
    slug: 'augengesundheit',
    title: 'Augengesundheit im digitalen Zeitalter',
    excerpt: 'Tipps und Strategien zum Schutz Ihrer Augen in der digitalen Welt.',
    date: '5. Januar 2024',
    category: 'Gesundheit',
    imageUrl: 'https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80',
    readTime: '6 min'
  }
];

const categories = ['Alle', 'Brillen', 'Hörgeräte', 'Gesundheit'];

export default function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredPosts = selectedCategory === 'Alle'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-red-600 py-32 overflow-hidden">
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
                Unser Blog
              </h1>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Entdecken Sie spannende Einblicke in die Welt <br className="hidden md:block" />
                der Optik und Hörakustik
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 bottom-0">
          <svg className="w-full h-16 text-gray-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105
                ${selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 shadow-md'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${post.imageUrl})`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {post.title}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} Lesezeit</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors">
                  Weiterlesen 
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

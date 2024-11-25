import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ChatBot from './components/ChatBot';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Reviews from './components/Reviews';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Borkum from './pages/Borkum';

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Team />
      <Reviews />
      <AboutUs />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/borkum" element={<Borkum />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
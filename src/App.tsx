import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import TeachingApproach from './components/TeachingApproach';
import ParentsSection from './components/ParentsSection';
import Testimonials from './components/Testimonials';
import FreeTrialCTA from './components/FreeTrialCTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Courses />
        <WhyChooseUs />
        <HowItWorks />
        <TeachingApproach />
        <ParentsSection />
        <Testimonials />
        <FreeTrialCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

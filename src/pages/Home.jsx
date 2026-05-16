import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Comparison from '../components/sections/Comparison';
import Waitlist from '../components/sections/Waitlist';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-pink/30 overflow-x-hidden w-full">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <FeaturesSplit />
        <Comparison />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

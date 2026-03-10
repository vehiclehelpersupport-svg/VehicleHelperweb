import Hero from '../../components/Hero/Hero';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import CTASection from '../../components/CTASection/CTASection';
import TrustSection from './TrustSection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceSection />
      <HowItWorks />
      <TrustSection />
      <CTASection />
    </>
  );
};

export default Home;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Products from "../components/Products";
import ComparisonCTA from "../components/ComparisonCTA";
import ProjectsGallery from "../components/ProjectsGallery";
import Showcase from "../components/Showcase";
import { FeaturesSectionWithHoverEffects } from "../components/ui/FeatureSection";
import About from "../components/About";
import DistributorCTA from "../components/DistributorCTA";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <ComparisonCTA />
      <ProjectsGallery />
      <Showcase />
      <FeaturesSectionWithHoverEffects />
      <About />
      <DistributorCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;

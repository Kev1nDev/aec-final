import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Marquee } from "../components/Marquee";
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
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <Marquee direction="left" baseVelocity={2} className="green">
          MÁXIMO RENDIMIENTO · PRODUCTOS DE CALIDAD · GARANTÍA PROPIA AEC-VE · COMPATIBILIDAD OEM · CALIDAD CERTIFICADA · DISTRIBUIDOR OFICIAL SUPER HIDROMACK, C.A. · STOCK DISPONIBLE · ESTÁNDARES INTERNACIONALES
        </Marquee>
        <Marquee direction="right" baseVelocity={2} className="blue">
          GARANTÍA AEC-VE · RESPALDO DIRECTO · TRAZABILIDAD COMPLETA · SOPORTE TÉCNICO ESPECIALIZADO · LOGÍSTICA DIRECTA DESDE PLANTA · PRECIO COMPETITIVO · COBERTURA NACIONAL · REPUESTOS AUTOMOTRICES DE CONFIANZA
        </Marquee>
      </div>
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

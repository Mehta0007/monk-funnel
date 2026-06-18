import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WebsiteFactorySection from "@/components/WebsiteFactorySection";
import PixelSection from "@/components/PixelSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingNPC from "@/components/FloatingNPC";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WebsiteFactorySection />
      <PixelSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingNPC />
    </>
  );
}

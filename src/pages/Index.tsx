import { Header } from "@/components/valenty/Header";
import { HeroSection } from "@/components/valenty/HeroSection";
import { SocialProofBanner } from "@/components/valenty/SocialProofBanner";
import { InertiaSection } from "@/components/valenty/InertiaSection";
import { ProblemSection } from "@/components/valenty/ProblemSection";
import { ImpactSection } from "@/components/valenty/ImpactSection";
import { PhilosophySection } from "@/components/valenty/PhilosophySection";
import { TracksSection } from "@/components/valenty/TracksSection";
import { ProcessSection } from "@/components/valenty/ProcessSection";
import { ClientsSection } from "@/components/valenty/ClientsSection";
import { CTASection } from "@/components/valenty/CTASection";
import { Footer } from "@/components/valenty/Footer";
import GradientBackground from "@/components/GradientBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <GradientBackground />
      <Header />
      <HeroSection />
      <SocialProofBanner />
      <InertiaSection />
      <ProblemSection />
      <ImpactSection />
      <PhilosophySection />
      <TracksSection />
      <ProcessSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

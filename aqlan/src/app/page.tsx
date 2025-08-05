import HeroSection from "@/components/HeroSection";
import AICapabilitiesSection from "@/components/AICapabilitiesSection";
import AIPrivacySection from "@/components/AIPrivacySection";
import AIAgentCTA from "@/components/AIAgentCTA";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <AICapabilitiesSection />
      <AIPrivacySection />
      <AIAgentCTA />
    </main>
  );
}

import HeroSection from "@/app/(site)/HomeSection/page";
import AboutSection from "@/app/(site)/AboutSection/page";
import ContanctSection from "./(site)/ContactSection/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ContanctSection />
    </main>
  );
}

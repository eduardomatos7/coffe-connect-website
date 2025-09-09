import HeroSection from "@/app/(site)/HomeSection/page";
import AboutSection from "@/app/(site)/AboutSection/page";
import MenuSection from "./(site)/Menu/page";
import ContanctSection from "./(site)/ContactSection/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContanctSection />
    </main>
  );
}

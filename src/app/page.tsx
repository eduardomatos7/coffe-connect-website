import HeroSection from "@/app/(site)/HomeSection/page";
import AboutSection from "@/app/(site)/AboutSection/page"
import SpecialistsSection from "./(site)/SpecialistsSection/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection/>
      <SpecialistsSection/>
    </main>
  );
}

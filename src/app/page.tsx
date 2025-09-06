import HeroSection from "@/app/(site)/HomeSection/page";
import AboutSection from "@/app/(site)/AboutSection/page";
import MenuSection from "./(site)/Menu/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection />
    </main>
  );
}

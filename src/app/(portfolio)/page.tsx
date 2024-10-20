import { AboutMe } from "../components/sections/AboutMe";
import { Experience } from "../components/sections/Experience";
import { HeroSection } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";

export default function PortfolioPage() {
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto flex w-full flex-col gap-32 py-8">
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}

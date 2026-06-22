import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Timeline } from "@/components/sections/Timeline";
import { Team } from "@/components/sections/Team";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-0">
        <Hero />
        <Features />
        <PracticeAreas />
        <Timeline />
        <Team />
        <Stats />
        <Testimonials />
        <Insights />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

// src/pages/Home.jsx
import CTA from "@components/CTA";
import FAQ from "@components/FAQ";
import Hero from "@components/Hero";
import HowItWorks from "@components/HowItWorks";
import LogoMarquee from "@components/LogoMarquee";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="grow">
        <Hero />
        <LogoMarquee />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}

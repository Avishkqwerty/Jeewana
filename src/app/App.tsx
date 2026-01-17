import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { OurImpact } from "@/app/components/OurImpact";
import { WhatWeDo } from "@/app/components/WhatWeDo";
import { Statistics } from "@/app/components/Statistics";
import { Donate } from "@/app/components/Donate";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <OurImpact />
      <WhatWeDo />
      <Statistics />
      <Donate />
      <Footer />
    </div>
  );
}

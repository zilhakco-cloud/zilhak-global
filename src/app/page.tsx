import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { DigiNextSpotlight } from "@/components/sections/DigiNextSpotlight";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { InvestorCTA } from "@/components/sections/InvestorCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WorkGrid />
      <DigiNextSpotlight />
      <Process />
      <Testimonials />
      <InvestorCTA />
    </>
  );
}

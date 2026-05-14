import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AiEvaluationSection } from "@/components/home/AiEvaluationSection";
import { ConsultantsPanel } from "@/components/home/ConsultantsPanel";
import { CountriesSection } from "@/components/home/CountriesSection";
import { FaqPanel } from "@/components/home/FaqPanel";
import { FinalCtaPanel } from "@/components/home/FinalCtaPanel";
import { HeroSection } from "@/components/home/HeroSection";
import { OfferShowcaseSection } from "@/components/home/OfferShowcaseSection";
import { PartnerSchoolsSection } from "@/components/home/PartnerSchoolsSection";
import { ServicesPanel } from "@/components/home/ServicesPanel";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { TestimonialsPanel } from "@/components/home/TestimonialsPanel";
import { WhyUsSection } from "@/components/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="mx-auto grid max-w-[1440px] gap-6 px-5 py-6 md:px-8 lg:grid-cols-[minmax(0,64fr)_minmax(360px,36fr)]">
        <div className="min-w-0 space-y-6">
          <HeroSection />
          <WhyUsSection />
          <AiEvaluationSection />
          <CountriesSection />
          <OfferShowcaseSection />
          <PartnerSchoolsSection />
        </div>
        <aside className="min-w-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
          <ServicesPanel />
          <ConsultantsPanel />
          <TestimonialsPanel />
          <FaqPanel />
          <FinalCtaPanel />
          <Footer />
        </aside>
      </main>
    </>
  );
}

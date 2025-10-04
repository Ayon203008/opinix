// import AboutUsSection from '@/components/AboutUsSection/AboutUsSection';
import FAQSection from '@/components/FAQ/FAQ';
import HeroSection from '@/components/HeroSection/HeroSection';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import LandingServices from '@/components/LandingServices/LandingServices';
import MeetOurPartners from '@/components/MeetOurPartners/MeetOurPartners';
import StatsSection from '@/components/StatsSection/StatsSection';
import { Testimonial } from '@/components/Testimonial/Testimonial';
import React from 'react';

export default function page() {
  return (
    <div>
      <div>
        <HeroSection></HeroSection>
      </div>
      <div>
      <LandingServices></LandingServices>
      </div>
      <div>
        <HowItWorks></HowItWorks>
      </div>
      <div>
        <MeetOurPartners></MeetOurPartners>
      </div>
      <div>
        <StatsSection></StatsSection>
      </div>
      <div className="mt-20">
        <Testimonial />
      </div>
      <div>
        <FAQSection></FAQSection>
      </div>
    </div>
  );
}

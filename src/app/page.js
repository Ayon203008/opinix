// import AboutUsSection from '@/components/AboutUsSection/AboutUsSection';
import { Banner } from '@/components/Banner/Banner';
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
      <div className='mt-20'>
        <Banner></Banner>
      </div>
      <div className='mt-20'>
      <LandingServices></LandingServices>
      </div>
      <div className='mt-20'>
        <HowItWorks></HowItWorks>
      </div>
      <div className='mt-20'>
        <MeetOurPartners></MeetOurPartners>
      </div>
      <div className='mt-20'>
        <StatsSection></StatsSection>
      </div>
      <div className="mt-20">
        <Testimonial />
      </div>
      <div className='mt-20'>
        <FAQSection></FAQSection>
      </div>
    </div>
  );
}

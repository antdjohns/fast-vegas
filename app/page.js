"use client"
import {AboutSection} from '@/components/AboutSection';
import { Benefits } from '@/components/BenefitsSection';
import ComparisonSection from '@/components/ComparisonSection';
import ContactSection from '@/components/ContactFormSection';
import { CombinedHeader } from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import React from 'react';
import { AddressProvider } from '@/context/AddressContext';
import FAQSection from '@/components/FAQSection';

const HomePage = () => {
  return (
    <AddressProvider>
    <div className="w-full">
    
      <CombinedHeader/>
      <HeroSection/>
      <AboutSection/>
      <ProcessSection/>
      <Benefits/>
      <ComparisonSection/>
      <ContactSection/>
      <FAQSection/>
    </div>
    </AddressProvider>
  );
};

export default HomePage; 

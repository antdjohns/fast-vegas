'use client';

import React from 'react';
import Image from 'next/image';
import { CombinedHeader } from '@/components/Header';
import ContactSection from '@/components/ContactFormSection';

const HowItWorksStep = ({ stepNumber, stepTitle, description, imageUrl, reverse }) => {
  return (
    <section
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center py-16 px-4 bg-gray-100`}
    >
      {/* Image Section */}
      <div className="md:w-1/2 p-6 flex justify-center">
        <Image
          src={imageUrl}
          alt={stepTitle}
          width={300}
          height={300}
          className="rounded-full object-cover"
          quality={100}
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 p-6 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Step {stepNumber}</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{stepTitle}</h3>
        <p className="text-lg text-gray-600 mb-2">{description}</p>
      </div>
    </section>
  );
};

const HowItWorksPage = () => {
  return (
    <>
      {/* Header or Navigation can be placed here */}
      <CombinedHeader />

{/* How it Works Section */}
<section className="py-16 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <div className="text-left">
      <h2 className="text-4xl font-bold text-gray-800">How it Works</h2>
      <p className="mt-4 text-lg text-gray-600">
        At HomeGo, we don’t make blind offers over the phone or internet. Our licensed real estate agents come to your home to walk through your property and make an on-the-spot offer you can believe in.
      </p>
    </div>
  </div>
</section>
      
      {/* Step 1 */}
      <HowItWorksStep
        stepNumber="1"
        stepTitle="In-home walk-through."
        description="We will learn about your needs and assess your home by walking through the property with you, explaining the process as we go. Your 30-minute in-home walk-through and a simple same-day cash offer are all it takes to sell your home."
        imageUrl="/homes-background.svg"
      />

      {/* Step 2 */}
      <HowItWorksStep
        stepNumber="2"
        stepTitle="Get a cash offer on the spot."
        description="Based on our property analysis, we will give you a firm cash offer without the need for a scheduled inspection or appraisal. With HomeGo, there are no surprises, hidden fees, or bait-and-switch. You’ll know what we’ll pay on the first day so you won’t have to wait to see what our best offer will be."
        imageUrl="/homes-background.svg"
        reverse={true}
      />

      {/* Step 3 */}
      <HowItWorksStep
        stepNumber="3"
        stepTitle="Close in as little as 7 days, move when you’re ready."
        description="Your property will be purchased with cash, so you never have to worry about financing contingencies. Before closing, the agent will explain the entire process and help you prepare for the big day. You decide when you want to close and ultimately move out. Everything happens on your schedule. You can even stay longer, with cash in hand, with our leaseback program."
        imageUrl="/homes-background.svg"
      />

      {/* Footer or Contact Form can be placed here */}
      <ContactSection/>
    </>
  );
};

export default HowItWorksPage;


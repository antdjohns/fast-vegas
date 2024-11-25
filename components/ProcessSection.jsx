import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const steps = [
  {
    id: 1,
    title: 'Speak with Us',
    description: `Speak with one of our team members so they can best understand your situation and schedule a viewing.`,
  },
  {
    id: 2,
    title: 'View the Property',
    description: `One of our team members will come to your home to evaluate the home and if you're ready give an offer.`,
  },
  {
    id: 3,
    title: 'Cash Close',
    description: `Closings are normally 7-10 days from the first phone call. Cash will be on its way to your bank account.`,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 px-4 font-serif bg-golden ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-steel  mb-8">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-steel text-golden drop-shadow-lg rounded-lg p-6 shadow-lg">
              <div className="flex justify-center mb-4">
                <CheckCircleIcon className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold text-golden mb-4">{step.title}</h3>
              <p className="text-golden">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

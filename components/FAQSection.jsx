import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What types of properties do you buy?",
    answer: "We buy houses in any condition, regardless of their age, location, or needed repairs. Whether your property is pristine or in disrepair, we're interested."
  },
  {
    question: "Are there any fees or commissions?",
    answer: "No, there are absolutely no fees or commissions when you sell your property to us. We cover all costs involved in the transaction."
  },
  {
    question: "How quickly can I get a cash offer?",
    answer: "You can receive a no-obligation cash offer within 24 hours after we evaluate your property."
  },
  {
    question: "How soon can I close the sale?",
    answer: "We can close the sale as quickly as 7 days, or on a timeline that works best for you."
  },
  {
    question: "Do I need to make repairs or clean up before selling?",
    answer: "No, you don't need to do any repairs or cleaning. We buy houses as-is, so you can sell without the hassle."
  },
  {
    question: "What is the process for selling my property to you?",
    answer: "The process is simple: Contact us, get a cash offer, and if you accept, we'll handle the rest, including closing costs."
  },
  {
    question: "Are there any hidden costs?",
    answer: "No, there are no hidden costs or surprises. The offer we make is the amount you will receive at closing."
  },
  {
    question: "Why should I choose your service over listing with a real estate agent?",
    answer: "Unlike traditional listings, we offer a fast, hassle-free sale with no fees, commissions, or waiting for buyers. You get cash directly without the delays."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-golden py-40 px-4 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-bold text-black text-center mb-8 font-serif">
          Frequently Asked Questions
        </h2>

        {/* Main Points FAQ */}
        <div className="divide-y divide-gray-300">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-golden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="text-lg font-semibold text-black w-full text-left py-4 px-2"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <motion.p
                  className="text-gray-700 px-2 pb-4"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

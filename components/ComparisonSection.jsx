import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ThumbDownIcon } from '@heroicons/react/solid';

export default function ComparisonSection() {
  // InView hook to detect if the section is visible
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the section is in view
    triggerOnce: true, // Trigger only once
  });

  // Framer Motion variants for animating list items
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 bg-golden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Card 1 - Fast Vegas Cash Offer */}
        <div className="bg-white shadow-lg rounded-lg flex-1 overflow-hidden drop-shadow-lg">
          {/* Title Section */}
          <div className="bg-blue-300 p-8 text-center  drop-shadow-lg">
            <h3 className="text-2xl font-bold text-black font-serif">Fast Vegas Cash Offer</h3>
          </div>

          {/* List Section */}
          <div className="bg-white p-8">
            <ul ref={ref} className="space-y-4">
              {inView && (
                <>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0 }}
                    className="text-gray-700 flex items-center"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                    No Commissions
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-gray-700 flex items-center"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                    No long term purchase contracts.
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-gray-700 flex items-center"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                    120 homes purchased per year. We buy in volume, no low ball offer.
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-gray-700 flex items-center"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                    Cover all closing costs.
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="text-gray-700 flex items-center"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                    AS-IS. Drop the broom, we buy your house as it.
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-gray-700 flex items-center"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                    7-day-a-week availability.
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="text-gray-700 flex items-center"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
                    A team of full-time licensed agents.
                  </motion.li>
                </>
              )}
            </ul>
          </div>

          {/* Overview Section */}
          <div className="bg-white p-8">
            <h4 className="text-lg font-semibold">Overview</h4>
            <p className="text-gray-600 mt-2">
              We provide fast cash offers with no hidden fees, no commissions, and no long contracts.
              Our team is dedicated to making the selling process as easy and quick as possible, with
              a 7-day-a-week availability.
            </p>
          </div>
        </div>

        {/* Card 2 - Others */}
        <div className="bg-white shadow-lg rounded-lg flex-1 overflow-hidden drop-shadow-lg">
          {/* Title Section */}
          <div className="bg-red-300 p-8 drop-shadow-lg">
            <h3 className="text-2xl font-bold text-black text-center drop-shadow-lg font-serif">The Other Guys</h3>
          </div>

          {/* List Section */}
          <div className="bg-white p-8">
            <ul className="space-y-4">
              {inView && (
                <>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0 }}
                    className="text-gray-700 flex items-center"
                  >
                    <ThumbDownIcon className="h-6 w-6 text-red-500 mr-2" />
                    Hidden Commissions
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-gray-700 flex items-center"
                  >
                    <ThumbDownIcon className="h-6 w-6 text-red-500 mr-2" />
                    30-90 day purchase contracts. They aren't actually buying your home.
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-gray-700 flex items-center"
                  >
                    <ThumbDownIcon className="h-6 w-6 text-red-500 mr-2" />
                    Low Ball Offers
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-gray-700 flex items-center"
                  >
                    <ThumbDownIcon className="h-6 w-6 text-red-500 mr-2" />
                    Out of State.
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-gray-700 flex items-center"
                  >
                    <ThumbDownIcon className="h-6 w-6 text-red-500 mr-2" />
                    Only cover some closing costs.
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="text-gray-700 flex items-center"
                  >
                    <ThumbDownIcon className="h-6 w-6 text-red-500 mr-2" />
                    No communication after signing contracts.
                  </motion.li>
                  <motion.li
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-gray-700 flex items-center"
                  >
                    <ThumbDownIcon className="h-6 w-6 text-red-500 mr-2" />
                    Unlicensed wholesalers.
                  </motion.li>
                </>
              )}
            </ul>
          </div>

          {/* Overview Section */}
          <div className="bg-white p-8">
            <h4 className="text-lg font-semibold">Overview</h4>
            <p className="text-gray-600 mt-2">
              Other buyers may use deceptive practices like hidden commissions or long contracts.
              Many of them provide lowball offers and lack proper communication, making the selling process
              frustrating and unprofessional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

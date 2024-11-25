import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const Benefits = () => {
  // InView hook to detect if the section is visible
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the section is in view
    triggerOnce: true, // Trigger only once
  });

  return (
    <section id="benefits" className="flex py-16 bg-black text-center px-3">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-5xl font-bold font-serif text-golden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Benefits
        </motion.h2>
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col items-center text-golden">
            <Image src="/fast-cash.png" alt="Fast Cash" className='bg-golden rounded-full' width={80} height={80} />
            <h3 className="mt-4 text-xl font-semibold ">Fast Cash Offers</h3>
            <p className="mt-2 text-golden">Get a competitive cash offer within 12 hours.</p>
          </div>
          <div className="flex flex-col items-center text-golden">
            <Image src="/no-repairs.png" alt="No Repairs Needed" className='bg-golden rounded-full' width={80} height={80} />
            <h3 className="mt-4 text-xl font-semibold">No Repairs Needed</h3>
            <p className="mt-2 text-golden">We buy houses as-is, so you don’t have to worry about repairs.</p>
          </div>
          <div className="flex flex-col items-center text-golden">
            <Image src="/no-fees.png" alt="No Fees" className='bg-golden rounded-full' width={80} height={80} />
            <h3 className="mt-4 text-xl font-semibold">No Fees or Commissions</h3>
            <p className="mt-2 text-golden">No hidden fees, and no realtor commissions.</p>
          </div>
          <div className="flex flex-col items-center text-golden">
            <Image src="/fast-cash.png" alt="Fast Cash" className='bg-golden rounded-full' width={80} height={80} />
            <h3 className="mt-4 text-xl font-semibold">No Long Agreements</h3>
            <p className="mt-2 text-golden">Unlike many "Home Buyers" We will be buying your house cash in as little as 7days</p>
          </div>
          <div className="flex flex-col items-center text-golden">
            <Image src="/no-repairs.png" alt="No Repairs Needed" className='bg-golden rounded-full' width={80} height={80} />
            <h3 className="mt-4 text-xl font-semibold">Custom Solutions</h3>
            <p className="mt-2 text-golden">We will be working closley with you to solve what ever problems you may be dealing with.</p>
          </div>
          <div className="flex flex-col items-center text-golden">
            <Image src="/no-fees.png" alt="No Fees" className='bg-golden rounded-full' width={80} height={80} />
            <h3 className="mt-4 text-xl font-semibold">Licensed Professionals</h3>
            <p className="mt-2 text-golden">All of our staff are licensed professionals and are held to the highest standard.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

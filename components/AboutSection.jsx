import { motion } from "framer-motion";
import { UserGroupIcon, StarIcon, BadgeCheckIcon } from "@heroicons/react/solid";


export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-golden mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-lg text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          At Fast Vegas Cash Offers, we’re more than just property buyers; we’re a dedicated team that’s invested in helping people transition to a new chapter with ease and understanding. Over the past five years, we’ve purchased more than 600 properties across Las Vegas, North Las Vegas, Henderson, Pahrump, Boulder City, and nearby areas.
        </motion.p>

        <motion.p
          className="text-lg text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We understand that selling a home can be emotional and challenging, especially when life presents unexpected obstacles. Whether you’re facing foreclosure, managing an inherited property, or simply need to sell quickly, we’re here to provide a compassionate, hassle-free solution. From fire-damaged homes to properties in need of extensive repairs, we’ve helped individuals in all sorts of situations find the support they need.
        </motion.p>

        <motion.p
          className="text-lg text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Our experienced team knows how to handle each transaction with care and efficiency, buying over 100 properties annually and treating each one as more than just a sale. Behind every home is a personal story, and we’re committed to respecting yours, ensuring you feel supported every step of the way. At Fast Vegas Cash Offers, we don’t just buy houses—we’re here to advocate for you and make this transition as smooth as possible.
        </motion.p>

        {/* Logos Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
          <motion.div
            className="flex flex-col items-center justify-center w-48 h-48 bg-white text-black rounded-full shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <UserGroupIcon className="w-12 h-12 text-golden mb-2" />
            <p className="text-center text-sm">600+ People Helped</p>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center justify-center w-48 h-48 bg-white text-black rounded-full shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <StarIcon className="w-12 h-12 text-golden mb-2" />
            <p className="text-center text-sm">4.9 • 57 Google Reviews</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center w-48 h-48 bg-white text-black rounded-full shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <BadgeCheckIcon className="w-12 h-12 text-golden mb-2" />
            <p className="text-center text-sm">10+ Licensed Real Estate Professionals</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="dark:bg-neutral-900 min-h-screen relative overflow-hidden"
    >
      <div className="relative z-10 p-8 md:p-16">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div variants={fadeIn}>
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white leading-tight">
              SCALING{" "}
              <span className="text-orange-500 font-serif italic font-normal">
                the
              </span>
              <br />
              FUTURE WEB3.
            </h1>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col justify-center">
            <p className="text-lg mb-8 text-neutral-700 dark:text-neutral-300">
              Brickchain is a scalable and secure blockchain platform designed
              to revolutionize decentralized applications. With cutting-edge
              smart contracts, lightning-fast transactions.
            </p>
            <motion.button
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="w-fit border border-neutral-300 dark:border-neutral-700 rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              onClick={() =>
                toast("Thank You For Visiting!", {
                  description: "Explore our new blockchain app now.",
                  action: {
                    label: "Go",
                  },
                })
              }
            >
              Let&apos;s discuss <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>

        {/* Featured Image */}
        <motion.div
          variants={scaleUp}
          className="w-full h-[500px] md:h-[600px] relative overflow-hidden rounded-sm"
        >
          <motion.img
            src="/image.png"
            alt="Modern blockchain concept"
            className="absolute top-1/2 left-1/2 -translate-1/2 object-cover rounded-sm rotate-90"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

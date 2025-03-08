import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    image: "/f2.png",
    title: "Decentralized Security",
    description: "Ensuring trustless and tamper-proof transactions with blockchain encryption.",
  },
  {
    image: "/f1.jpg",
    title: "Custom Smart Contracts",
    description: "Automate agreements with flexible, self-executing smart contracts tailored to your needs.",
  },
  {
    image: "/f3.jpg",
    title: "Scalability & Speed",
    description: "Optimized for high-performance transactions without compromising security.",
  },
  {
    image: "/f3.jpg",
    title: "Transparent Ledger",
    description: "Every transaction is publicly verifiable, enhancing trust and accountability.",
  },
  {
    image: "/f1.jpg",
    title: "Interoperability",
    description: "Seamlessly connect with other blockchain networks for enhanced functionality.",
  },
  {
    image: "/f2.png",
    title: "Low-Cost Transactions",
    description: "Minimize fees while maximizing efficiency with Brickchain’s optimized architecture.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function ImageCard({ image, title, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-lg group aspect-[4/5] h-full shadow-lg"
    >
      {/* Image Container */}
      <motion.div className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:blur-none">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
      </motion.div>

      {/* Overlay (Visible by default on mobile, fades in on hover for desktop) */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-6 
          bg-gradient-to-t from-black/80 to-transparent 
          opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
      >
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/90">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="dark:bg-neutral-900 p-8 md:p-16 container mx-auto px-4 py-12"
      id="features"
    >
      <motion.h1
        variants={fadeInUp}
        className="mb-12 text-center text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white leading-tight"
      >
        OUR{" "}
        <span className="text-orange-500 font-serif italic font-normal">
          spotlight
        </span>
      </motion.h1>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {cards.map((card, index) => (
          <ImageCard key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </motion.div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { Heart, Star, Music, Sun } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { icon: Heart, color: "text-rasta-red-600", size: 24 },
    { icon: Star, color: "text-rasta-gold-400", size: 20 },
    { icon: Music, color: "text-rasta-green-600", size: 22 },
    { icon: Sun, color: "text-rasta-gold-500", size: 26 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className={`absolute ${Element.color} opacity-10`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          <Element.icon size={Element.size} />
        </motion.div>
      ))}

      {/* Floating rastafari flag elements */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`flag-${index}`}
          className="absolute w-12 h-8 opacity-5"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            rotate: 0,
          }}
          animate={{
            y: -50,
            x: Math.random() * window.innerWidth,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 25 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 15,
          }}
        >
          <div className="w-full h-full flex flex-col rounded">
            <div className="flex-1 bg-rasta-red-600"></div>
            <div className="flex-1 bg-rasta-gold-400"></div>
            <div className="flex-1 bg-rasta-green-600"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;

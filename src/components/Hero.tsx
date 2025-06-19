import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50 min-h-screen flex items-center">
      {/* Enhanced Jamaican Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            #dc2626 0px,
            #dc2626 15px,
            #fcd34d 15px,
            #fcd34d 30px,
            #16a34a 30px,
            #16a34a 45px,
            transparent 45px,
            transparent 90px
          )`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? "#dc2626" : i % 3 === 1 ? "#fcd34d" : "#16a34a"}, 
                ${i % 3 === 0 ? "#fcd34d" : i % 3 === 1 ? "#16a34a" : "#dc2626"})`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            initial={{
              x: `${(i % 4) * 25}%`,
              y: `${Math.floor(i / 4) * 33}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <AnimatedSection delay={0.2}>
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(22, 163, 74, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 mr-2 text-rasta-red-600" />
                </motion.div>
                One Love - Especialistas en Rastas Auténticas
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <motion.span
                  className="text-rasta-red-600"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Rastas
                </motion.span>{" "}
                <motion.span
                  className="text-rasta-gold-400"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Auténticas
                </motion.span>
                <br />
                <motion.span
                  className="text-rasta-green-600"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                >
                  Jah Bless
                </motion.span>{" "}
                <motion.span
                  className="text-rasta-black-800"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                >
                  Style
                </motion.span>
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <p className="text-xl text-rasta-black-600 mb-8 max-w-2xl leading-relaxed">
                Conecta con tus raíces rastafari. Creamos rastas auténticas que
                honran la tradición jamaicana y reflejan tu espiritualidad. One
                Love, One Heart en cada trabajo.
              </p>
            </AnimatedSection>

            {/* Enhanced Rastafari Stats */}
            <AnimatedSection delay={1.0}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    number: "500+",
                    label: "Rastas Blessed",
                    color: "text-rasta-red-600",
                  },
                  {
                    number: "5",
                    label: "Years of Irie",
                    color: "text-rasta-gold-500",
                  },
                  {
                    number: "100%",
                    label: "Natural Vibes",
                    color: "text-rasta-green-600",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{
                      scale: 1.1,
                      rotateY: 5,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`text-2xl font-bold mb-1 ${stat.color}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.2, type: "spring" }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-rasta-black-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Enhanced CTA Buttons with perfect contrast */}
            <AnimatedSection delay={1.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-rasta-green-600 to-rasta-green-700 hover:from-rasta-green-700 hover:to-rasta-green-800 text-white shadow-lg hover:shadow-xl px-8 py-3 text-lg border-0 font-semibold"
                  >
                    <Link to="/reservas">
                      <motion.span
                        className="flex items-center"
                        whileHover={{ x: 2 }}
                      >
                        Bless Up - Reservar
                        <Calendar className="ml-2 h-5 w-5" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-rasta-gold-400 text-rasta-gold-700 bg-white hover:bg-rasta-gold-50 hover:border-rasta-gold-500 hover:text-rasta-gold-800 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Link to="/galeria">
                      <motion.span
                        className="flex items-center"
                        whileHover={{ x: 2 }}
                      >
                        Ver Irie Works
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* Enhanced Image/Visual Content */}
          <AnimatedSection delay={0.6} direction="right">
            <div className="relative">
              <motion.div
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-rasta-red-200 via-rasta-gold-200 to-rasta-green-200 aspect-[4/5] shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Enhanced placeholder with animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center text-rasta-black-500"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Users size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Irie Dreadlocks</p>
                    <p className="text-sm">Authentic Jamaican Style</p>
                  </motion.div>
                </div>

                {/* Enhanced Rastafari decorative elements */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <div className="h-full flex">
                      <div className="flex-1 bg-rasta-red-600"></div>
                      <div className="flex-1 bg-rasta-gold-400"></div>
                      <div className="flex-1 bg-rasta-green-600"></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/80">
                    <div className="h-full flex flex-col">
                      <div className="flex-1 bg-rasta-green-600"></div>
                      <div className="flex-1 bg-rasta-gold-400"></div>
                      <div className="flex-1 bg-rasta-red-600"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced floating testimonial card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs border-l-4 border-rasta-green-600"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  shadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
              >
                <div className="flex items-center mb-3">
                  <div className="flex text-rasta-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.8 + i * 0.1 }}
                      >
                        <Star size={16} fill="currentColor" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-rasta-black-600">
                    (4.9/5)
                  </span>
                </div>
                <p className="text-sm text-rasta-black-700 mb-2">
                  "Jah bless! Mis rastas están perfectas. One Love para este
                  trabajo increíble! 🇯🇲"
                </p>
                <p className="text-xs text-rasta-black-500">- Ital Sister</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;

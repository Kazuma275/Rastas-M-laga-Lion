import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scissors,
  Palette,
  RefreshCw,
  Sparkles,
  Clock,
  Euro,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Rastas Naturales Ital",
      description:
        "Creación completa de rastas blessed con técnicas tradicionales jamaicanas.",
      duration: "4-6 horas",
      price: "Desde 120€",
      features: [
        "Consulta personalizada one-on-one",
        "Técnica traditional roots",
        "Blessed with natural oils",
      ],
      badge: "Most Blessed",
      badgeColor: "bg-rasta-gold-300 text-rasta-gold-800",
      gradient: "from-rasta-red-100 to-rasta-gold-100",
    },
    {
      icon: RefreshCw,
      title: "Mantenimiento Irie",
      description:
        "Cuidado blessed para mantener tus rastas con good vibes siempre.",
      duration: "2-3 horas",
      price: "Desde 60€",
      features: [
        "Root maintenance natural",
        "Limpieza con aceites ital",
        "Hidratación blessed",
      ],
      badge: "Regular Vibes",
      badgeColor: "bg-rasta-green-100 text-rasta-green-800",
      gradient: "from-rasta-green-100 to-rasta-gold-100",
    },
    {
      icon: Palette,
      title: "Colores Rastafari",
      description:
        "Dale vida rasta con los colores sagrados: rojo, dorado y verde blessed.",
      duration: "5-7 horas",
      price: "Desde 150€",
      features: [
        "Colores rastafari tradicionales",
        "Tintes naturales blessed",
        "Tratamiento protector ital",
      ],
      badge: "Rasta Colors",
      badgeColor: "bg-rasta-red-100 text-rasta-red-800",
      gradient: "from-rasta-red-100 to-rasta-green-100",
    },
    {
      icon: Sparkles,
      title: "Rastas Sintéticas",
      description:
        "Extensiones blessed para un cambio temporal con estilo rastafari.",
      duration: "3-4 horas",
      price: "Desde 80€",
      features: [
        "Colores rasta disponibles",
        "Instalación quick & blessed",
        "Mantenimiento easy",
      ],
      badge: "Temporal Irie",
      badgeColor: "bg-rasta-gold-100 text-rasta-gold-800",
      gradient: "from-rasta-gold-100 to-rasta-red-100",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 rounded-full"
            style={{
              background: `linear-gradient(45deg,
                ${i % 3 === 0 ? "#dc2626" : i % 3 === 1 ? "#fcd34d" : "#16a34a"},
                transparent)`,
              left: `${(i % 3) * 40}%`,
              top: `${Math.floor(i / 3) * 40}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(22, 163, 74, 0.3)",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 mr-2 text-rasta-red-600" />
              </motion.div>
              Servicios Blessed con One Love
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold text-rasta-black-800 mb-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Nuestros{" "}
              <motion.span
                className="text-rasta-red-600"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Servicios
              </motion.span>{" "}
              <motion.span
                className="text-rasta-gold-400"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Ital
              </motion.span>
            </motion.h2>
            <p className="text-xl text-rasta-black-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos servicios auténticos rastafari, blessed con técnicas
              tradicionales jamaicanas y good vibes naturales para tu
              transformación ital.
            </p>
          </div>
        </AnimatedSection>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pt-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="relative group pt-3"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative border-rasta-green-200 hover:border-rasta-green-300 transition-all duration-500 h-full overflow-visible shadow-lg">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}
                      initial={false}
                    />

                    {/* Enhanced Badge - Fixed positioning */}
                    <motion.div
                      className="absolute -top-3 left-6 z-20"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <Badge
                        className={`${service.badgeColor} shadow-md border border-white`}
                      >
                        {service.badge}
                      </Badge>
                    </motion.div>

                    <CardHeader className="text-center pt-8">
                      <motion.div
                        className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-rasta-gold-100 via-rasta-green-100 to-rasta-red-100 w-fit"
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-8 h-8 text-rasta-black-700" />
                      </motion.div>
                      <CardTitle className="text-xl text-rasta-black-800 mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-rasta-black-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Duration & Price with animation */}
                      <motion.div
                        className="flex justify-between items-center text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <div className="flex items-center text-rasta-black-600">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                        <div className="flex items-center font-semibold text-rasta-gold-700">
                          <Euro className="w-4 h-4 mr-1" />
                          {service.price}
                        </div>
                      </motion.div>

                      {/* Enhanced Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center text-sm text-rasta-black-600"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.8 + index * 0.1 + idx * 0.1,
                            }}
                          >
                            <motion.div
                              className="w-1.5 h-1.5 bg-rasta-green-500 rounded-full mr-3"
                              animate={{
                                scale: [1, 1.3, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: idx * 0.2,
                              }}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Enhanced CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            asChild
                            className="w-full mt-6 bg-rasta-green-600 hover:bg-rasta-green-700 text-white group-hover:bg-rasta-gold-500 group-hover:hover:bg-rasta-gold-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                          >
                            <Link to="/reservas">
                              <motion.span
                                className="flex items-center justify-center"
                                whileHover={{ x: 2 }}
                              >
                                Bless Up - Reservar
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </motion.span>
                            </Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <AnimatedSection delay={0.8}>
          <motion.div
            className="text-center bg-gradient-to-r from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50 rounded-2xl p-8 md:p-12 border border-rasta-green-200 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 rounded-full bg-white/20"
                  animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${(i % 2) * 80}%`,
                    top: `${Math.floor(i / 2) * 60}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-rasta-black-800 mb-4">
                ¿No estás seguro qué servicio{" "}
                <span className="text-rasta-green-600">blessed</span> necesitas?
              </h3>
              <p className="text-rasta-black-600 mb-6 max-w-2xl mx-auto">
                Agenda una consulta ital gratuita y te ayudaremos a elegir el
                mejor tratamiento rastafari para tu tipo de cabello y vibe
                personal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-rasta-gold-500 hover:bg-rasta-gold-600 text-white font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Link to="/contacto">
                      <motion.span
                        className="flex items-center"
                        whileHover={{ x: 2 }}
                      >
                        Consulta Ital Gratuita
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-rasta-green-300 text-rasta-green-700 bg-white hover:bg-rasta-green-50 hover:border-rasta-green-400 font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Link to="/galeria">Ver Nuestros Blessed Works</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FloatingElements from "@/components/FloatingElements";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  TrendingUp,
  Users,
  Award,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const testimonials = [
    {
      name: "Ital Sister María",
      rating: 5,
      text: "Jah bless! Increíble trabajo rastafari, mis rastas quedaron perfectas. El ambiente es pura good vibes.",
      service: "Rastas Naturales Ital",
    },
    {
      name: "Rasta Brother Carlos",
      rating: 5,
      text: "Llevo 3 años viniendo para el mantenimiento irie. Siempre quedo blessed con el resultado.",
      service: "Mantenimiento Irie",
    },
    {
      name: "Ras Ana Lion Heart",
      rating: 5,
      text: "Las rastas con colores rastafari que me hicieron son espectaculares. ¡One Love!",
      service: "Colores Rastafari",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Experiencia Rastafari Blessed",
      description:
        "Más de 5 años especializándonos en rastas auténticas jamaicanas",
    },
    {
      icon: Heart,
      title: "One Love Treatment",
      description: "Cada cliente recibe amor y atención personalizada ital",
    },
    {
      icon: TrendingUp,
      title: "Técnicas Traditional Roots",
      description: "Formación continua en técnicas rastafari tradicionales",
    },
    {
      icon: Users,
      title: "Irie Community",
      description: "Formamos parte de la comunidad rastafari de Málaga",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <FloatingElements />
      <Navigation />
      <Hero />
      <Services />

      {/* Enhanced About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(22, 163, 74, 0.3)",
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 mr-2 text-rasta-red-600" />
                  </motion.div>
                  Nuestra Historia Rastafari
                </motion.div>

                <motion.h2 className="text-3xl md:text-5xl font-bold text-rasta-black-800 mb-6">
                  Pasión por las{" "}
                  <motion.span
                    className="text-rasta-red-600"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Rastas
                  </motion.span>{" "}
                  <motion.span
                    className="text-rasta-gold-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Ital
                  </motion.span>
                </motion.h2>

                <p className="text-xl text-rasta-black-600 mb-6 leading-relaxed">
                  Soy una emprendedora blessed con pasión por el arte rastafari
                  de las rastas. Comenzé este journey hace más de 5 años y desde
                  entonces he ayudado a cientos de personas a expresar su
                  spirituality única a través de este hermoso peinado blessed.
                </p>
                <p className="text-rasta-black-600 mb-8 leading-relaxed">
                  En Rastas Málaga Lions creemos que cada rasta cuenta una story
                  blessed by Jah. Utilizamos técnicas traditional jamaicanas
                  combinadas con love natural para crear peinados que no solo se
                  ven incredible, sino que también respetan la esencia cultural
                  rastafari. One Love, One Heart.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{
                          scale: 1.05,
                          x: 10,
                        }}
                      >
                        <motion.div
                          className="p-2 rounded-lg bg-white shadow-sm border border-rasta-green-200"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <IconComponent className="w-5 h-5 text-rasta-gold-600" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-rasta-black-800 mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-rasta-black-600">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <motion.div
                  className="rounded-2xl overflow-hidden bg-gradient-to-br from-rasta-red-200 via-rasta-gold-200 to-rasta-green-200 aspect-[4/5] shadow-xl border-4 border-white"
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-center text-rasta-black-500"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Users size={64} className="mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">Ital Sister Working</p>
                      <p className="text-sm">Blessed Rastafari Artist</p>
                    </motion.div>
                  </div>

                  {/* Enhanced rastafari decorative elements */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity }}
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
                    className="absolute bottom-4 left-4"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-rasta-black-800 mb-6">
                Lo que dicen nuestros{" "}
                <span className="text-rasta-green-600">Ital</span>{" "}
                <span className="text-rasta-gold-400">Clients</span>
              </h2>
              <p className="text-xl text-rasta-black-600 max-w-2xl mx-auto">
                La satisfacción blessed de nuestros clientes rastafari es
                nuestra mayor recompensa. One Love testimonials.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-rasta-green-200 hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <motion.div
                        className="flex items-center mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex text-rasta-gold-500 mr-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              transition={{
                                delay: 0.7 + index * 0.1 + i * 0.05,
                                type: "spring",
                              }}
                            >
                              <Star size={16} fill="currentColor" />
                            </motion.div>
                          ))}
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-rasta-green-100 text-rasta-green-800"
                        >
                          {testimonial.service}
                        </Badge>
                      </motion.div>
                      <p className="text-rasta-black-700 mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <p className="font-semibold text-rasta-black-800">
                        {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-r from-rasta-red-600 via-rasta-gold-500 to-rasta-green-600 relative overflow-hidden"
        whileInView={{ scale: [0.98, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-white/5"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${(i % 3) * 33}%`,
                top: `${Math.floor(i / 3) * 50}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              ¿Listo para tu nueva{" "}
              <span className="text-rasta-black-800">Transformación</span>{" "}
              <span className="text-white">Ital?</span>
            </motion.h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda tu cita blessed hoy mismo y comienza tu journey hacia un
              nuevo estilo rastafari único y auténtico. Jah Bless!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-rasta-green-700 hover:bg-gray-100 hover:text-rasta-green-800 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  <Link to="/reservas">Bless Up - Reservar Ahora</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-rasta-green-700 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  <Link to="/contacto">One Love Contact</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <footer className="bg-rasta-black-900 text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Enhanced Brand */}
            <AnimatedSection>
              <div className="col-span-2 md:col-span-1">
                <motion.div
                  className="flex items-center space-x-2 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xl font-bold text-rasta-red-400">
                    Rastas
                  </span>
                  <span className="text-xl font-bold text-rasta-gold-400">
                    Málaga
                  </span>
                  <span className="text-xl font-bold text-rasta-green-400">
                    Lions
                  </span>
                  <motion.div
                    className="flex flex-col w-1 h-6 ml-2"
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 10, repeat: Infinity }}
                  >
                    <div className="flex-1 bg-rasta-red-600"></div>
                    <div className="flex-1 bg-rasta-gold-400"></div>
                    <div className="flex-1 bg-rasta-green-600"></div>
                  </motion.div>
                </motion.div>
                <p className="text-gray-300 mb-4">
                  Especializados en rastas auténticas rastafari en el corazón de
                  Málaga. One Love, One Heart en cada trabajo blessed.
                </p>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: MessageCircle,
                      href: "https://wa.me/34666777888",
                      color: "hover:text-rasta-green-400",
                    },
                    {
                      icon: Instagram,
                      href: "https://instagram.com/rastasmalagalions",
                      color: "hover:text-rasta-red-400",
                    },
                    {
                      icon: Facebook,
                      href: "https://facebook.com/rastasmalagalions",
                      color: "hover:text-rasta-gold-400",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`text-gray-300 ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Services */}
            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="font-semibold mb-4 text-white">
                  Servicios Blessed
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {[
                    "Rastas Naturales Ital",
                    "Mantenimiento Irie",
                    "Colores Rastafari",
                    "Rastas Sintéticas",
                  ].map((service, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <Link
                        to="/reservas"
                        className="hover:text-rasta-gold-400 transition-colors"
                      >
                        {service}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Quick Links */}
            <AnimatedSection delay={0.4}>
              <div>
                <h3 className="font-semibold mb-4 text-white">Ital Links</h3>
                <ul className="space-y-2 text-gray-300">
                  {[
                    { label: "Galería Blessed", href: "/galeria" },
                    { label: "Ital Shop", href: "/tienda" },
                    { label: "Book Session", href: "/reservas" },
                    { label: "One Love Contact", href: "/contacto" },
                  ].map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <Link
                        to={link.href}
                        className="hover:text-rasta-gold-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection delay={0.6}>
              <div>
                <h3 className="font-semibold mb-4 text-white">
                  Contacto Rastafari
                </h3>
                <div className="space-y-2 text-gray-300">
                  {[
                    { icon: Phone, text: "+34 666 777 888" },
                    { icon: Mail, text: "ital@rastasmalagalions.com" },
                    { icon: MapPin, text: "Centro de Málaga, España" },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <contact.icon size={16} className="mr-2" />
                      <span>{contact.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <motion.div
            className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>
              © 2024 Rastas Málaga Lions. Jah Bless - Todos los derechos
              reservados. One Love ❤️💛💚
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

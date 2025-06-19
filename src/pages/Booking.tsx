import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Calendar from "@/components/Calendar";
import FloatingElements from "@/components/FloatingElements";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle,
  Phone,
  MessageCircle,
  Heart,
  Star,
  Euro,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState<{
    date: Date;
    time: string;
  } | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const services = [
    {
      id: "rastas-nuevas",
      name: "Rastas Naturales Nuevas",
      duration: "4-6 horas",
      price: 120,
      description:
        "Creación completa de rastas desde cero con técnicas tradicionales jamaicanas",
      popular: true,
      includes: [
        "Consulta personalizada blessed",
        "Preparación del cabello ital",
        "Técnica traditional roots",
        "Cuidados post-servicio natural",
      ],
      icon: "🌿",
    },
    {
      id: "mantenimiento",
      name: "Mantenimiento Irie",
      duration: "2-3 horas",
      price: 60,
      description:
        "Cuidado y retoque profesional para mantener tus rastas irie",
      popular: false,
      includes: [
        "Root maintenance blessed",
        "Limpieza profunda ital",
        "Aceites naturales",
        "Palm rolling traditional",
      ],
      icon: "🔄",
    },
    {
      id: "rastas-color",
      name: "Rastas con Colores Rastafari",
      duration: "5-7 horas",
      price: 150,
      description:
        "Añade los colores sagrados rasta (rojo, dorado, verde) a tus rastas",
      popular: false,
      includes: [
        "Decoloración natural blessed",
        "Tintes vegetales ital",
        "Colores rastafari sagrados",
        "Tratamiento protector",
      ],
      icon: "🎨",
    },
    {
      id: "rastas-sinteticas",
      name: "Rastas Sintéticas",
      duration: "3-4 horas",
      price: 80,
      description: "Extensiones sintéticas para un look temporal blessed",
      popular: false,
      includes: [
        "Variedad de colores blessed",
        "Instalación rápida ital",
        "Mantenimiento fácil",
        "Look temporal natural",
      ],
      icon: "✨",
    },
    {
      id: "consulta",
      name: "Consulta Ital Gratuita",
      duration: "30 minutos",
      price: 0,
      description:
        "Conversación blessed sobre el mejor estilo rastafari para ti",
      popular: true,
      includes: [
        "Análisis del cabello natural",
        "Recomendaciones personalizadas",
        "Plan de cuidados ital",
        "Presupuesto detallado blessed",
      ],
      icon: "💬",
    },
  ];

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDateTime({ date, time });
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setBookingStep(2);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted blessed:", {
      service: selectedService,
      dateTime: selectedDateTime,
      customer: customerInfo,
    });
    setBookingStep(4);
  };

  const selectedServiceData = services.find((s) => s.id === selectedService);

  const renderStepIndicator = () => (
    <AnimatedSection>
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((step) => (
          <motion.div key={step} className="flex items-center">
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                bookingStep >= step
                  ? "bg-rasta-green-600 text-white"
                  : "bg-rasta-black-200 text-rasta-black-500"
              }`}
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: step * 0.2, type: "spring" }}
            >
              {bookingStep > step ? (
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring" }}
                >
                  <CheckCircle size={20} />
                </motion.div>
              ) : (
                step
              )}
            </motion.div>
            {step < 3 && (
              <motion.div
                className={`w-16 h-1 mx-2 rounded-full ${
                  bookingStep > step
                    ? "bg-rasta-green-600"
                    : "bg-rasta-black-200"
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: bookingStep > step ? 1 : 0.3 }}
                transition={{ delay: step * 0.2 + 0.3, duration: 0.5 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <FloatingElements />
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? "#dc2626" : i % 3 === 1 ? "#fcd34d" : "#16a34a"
                }, transparent)`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -80, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              initial={{
                x: `${(i % 3) * 33}%`,
                y: `${Math.floor(i / 3) * 40}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
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
              Bless Up - Reserva tu Transformación
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <motion.span
                className="text-rasta-red-600"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Book
              </motion.span>{" "}
              <motion.span
                className="text-rasta-gold-400"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Your
              </motion.span>
              <br />
              <motion.span
                className="text-rasta-green-600"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Ital
              </motion.span>{" "}
              <motion.span
                className="text-rasta-black-800"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Session
              </motion.span>
            </motion.h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-xl text-rasta-black-600 max-w-3xl mx-auto leading-relaxed">
              Agenda tu cita para una transformación auténtica rastafari. Cada
              sesión es blessed with love y técnicas tradicionales jamaicanas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking System */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {renderStepIndicator()}

          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {bookingStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedSection>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-rasta-black-800 mb-4">
                      Selecciona tu{" "}
                      <span className="text-rasta-green-600">
                        Servicio Ital
                      </span>
                    </h2>
                    <p className="text-rasta-black-600">
                      Elige el servicio que mejor se adapte a tu vibe rastafari
                    </p>
                  </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                  {services.map((service, index) => (
                    <AnimatedSection key={service.id} delay={index * 0.1}>
                      <motion.div
                        className="pt-3"
                        whileHover={{
                          y: -10,
                          scale: 1.02,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card
                          className={`cursor-pointer transition-all duration-500 h-full border-2 relative overflow-visible shadow-lg ${
                            service.popular
                              ? "border-rasta-gold-300 bg-gradient-to-br from-rasta-gold-50 to-white shadow-xl"
                              : "border-rasta-green-200 hover:border-rasta-green-300 hover:shadow-lg"
                          }`}
                          onClick={() => handleServiceSelect(service.id)}
                        >
                          {/* Enhanced background animation */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-transparent via-rasta-green-50 to-rasta-gold-50 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg"
                            initial={false}
                          />

                          {service.popular && (
                            <motion.div
                              className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                              initial={{ scale: 0, rotate: -45 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                delay: 0.3 + index * 0.1,
                                type: "spring",
                              }}
                            >
                              <Badge className="bg-rasta-gold-500 text-white font-bold shadow-lg border border-white">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            </motion.div>
                          )}

                          <CardHeader className="text-center pt-8 relative z-10">
                            <motion.div
                              className="text-4xl mb-4"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: index * 0.5,
                              }}
                            >
                              {service.icon}
                            </motion.div>
                            <CardTitle className="text-xl text-rasta-black-800 mb-2">
                              {service.name}
                            </CardTitle>
                            <CardDescription className="text-rasta-black-600 mb-4">
                              {service.description}
                            </CardDescription>

                            <div className="flex items-center justify-center space-x-4 mb-4">
                              <div className="flex items-center text-rasta-green-700">
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">
                                  {service.duration}
                                </span>
                              </div>
                              <div className="flex items-center text-rasta-gold-600 font-bold">
                                <Euro className="w-4 h-4 mr-1" />
                                <span>
                                  {service.price === 0
                                    ? "Gratis"
                                    : `${service.price}€`}
                                </span>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="relative z-10">
                            <ul className="space-y-2 mb-6">
                              {service.includes.map((include, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-center text-sm text-rasta-black-600"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + idx * 0.1 }}
                                >
                                  <CheckCircle className="w-4 h-4 text-rasta-green-600 mr-2 flex-shrink-0" />
                                  {include}
                                </motion.li>
                              ))}
                            </ul>

                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                className={`w-full font-semibold shadow-lg hover:shadow-xl ${
                                  service.popular
                                    ? "bg-rasta-gold-500 hover:bg-rasta-gold-600 text-white"
                                    : "bg-rasta-green-600 hover:bg-rasta-green-700 text-white"
                                }`}
                              >
                                Seleccionar Servicio Blessed
                              </Button>
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </AnimatedSection>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time Selection */}
            {bookingStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedSection>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-rasta-black-800 mb-4">
                      Selecciona{" "}
                      <span className="text-rasta-green-600">Fecha</span> y{" "}
                      <span className="text-rasta-gold-500">Hora</span>
                    </h2>
                    <p className="text-rasta-black-600">
                      Servicio seleccionado:{" "}
                      <strong>{selectedServiceData?.name}</strong>
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <Calendar onSelectDateTime={handleDateTimeSelect} />
                </AnimatedSection>

                {selectedDateTime && (
                  <AnimatedSection delay={0.4}>
                    <div className="mt-8 flex justify-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={() => setBookingStep(1)}
                          variant="outline"
                          size="lg"
                          className="border-2 border-rasta-green-300 text-rasta-green-700 bg-white hover:bg-rasta-green-50 font-semibold"
                        >
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          Volver
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={() => setBookingStep(3)}
                          size="lg"
                          className="bg-rasta-green-600 hover:bg-rasta-green-700 text-white px-8 font-semibold shadow-lg"
                        >
                          Continuar con Datos
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </motion.div>
                    </div>
                  </AnimatedSection>
                )}
              </motion.div>
            )}

            {/* Step 3: Customer Information */}
            {bookingStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <AnimatedSection>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-rasta-black-800 mb-4">
                      Datos{" "}
                      <span className="text-rasta-green-600">Personales</span>
                    </h2>
                    <p className="text-rasta-black-600">
                      Completa tus datos para confirmar la reserva blessed
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <Card className="border-rasta-green-200 shadow-xl">
                    <CardContent className="p-8">
                      <form
                        onSubmit={handleBookingSubmit}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <Label
                              htmlFor="name"
                              className="text-rasta-black-700 font-medium"
                            >
                              Nombre Ital *
                            </Label>
                            <Input
                              id="name"
                              required
                              value={customerInfo.name}
                              onChange={(e) =>
                                setCustomerInfo({
                                  ...customerInfo,
                                  name: e.target.value,
                                })
                              }
                              className="mt-2 border-rasta-green-200 focus:border-rasta-green-500 shadow-sm"
                              placeholder="Tu nombre blessed"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <Label
                              htmlFor="phone"
                              className="text-rasta-black-700 font-medium"
                            >
                              Teléfono Blessed *
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              value={customerInfo.phone}
                              onChange={(e) =>
                                setCustomerInfo({
                                  ...customerInfo,
                                  phone: e.target.value,
                                })
                              }
                              className="mt-2 border-rasta-green-200 focus:border-rasta-green-500 shadow-sm"
                              placeholder="+34 666 777 888"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Label
                            htmlFor="email"
                            className="text-rasta-black-700 font-medium"
                          >
                            Email Ital *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={customerInfo.email}
                            onChange={(e) =>
                              setCustomerInfo({
                                ...customerInfo,
                                email: e.target.value,
                              })
                            }
                            className="mt-2 border-rasta-green-200 focus:border-rasta-green-500 shadow-sm"
                            placeholder="tu@email.ital"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Label
                            htmlFor="message"
                            className="text-rasta-black-700 font-medium"
                          >
                            Mensaje Blessed (Opcional)
                          </Label>
                          <Textarea
                            id="message"
                            rows={4}
                            value={customerInfo.message}
                            onChange={(e) =>
                              setCustomerInfo({
                                ...customerInfo,
                                message: e.target.value,
                              })
                            }
                            className="mt-2 border-rasta-green-200 focus:border-rasta-green-500 shadow-sm"
                            placeholder="Cuéntanos sobre tu vibe rastafari o cualquier detail especial blessed..."
                          />
                        </motion.div>

                        {/* Enhanced Booking Summary */}
                        <motion.div
                          className="bg-gradient-to-r from-rasta-green-50 to-rasta-gold-50 rounded-lg p-6 border-2 border-rasta-green-200"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          <h4 className="font-semibold text-rasta-green-800 mb-4 flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5" />
                            Resumen de tu Reserva Blessed:
                          </h4>
                          <div className="space-y-2 text-rasta-green-700">
                            <p>
                              <strong>Servicio:</strong>{" "}
                              {selectedServiceData?.name}
                            </p>
                            <p>
                              <strong>Fecha:</strong>{" "}
                              {selectedDateTime?.date.toLocaleDateString(
                                "es-ES",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </p>
                            <p>
                              <strong>Hora:</strong> {selectedDateTime?.time}
                            </p>
                            <p>
                              <strong>Duración:</strong>{" "}
                              {selectedServiceData?.duration}
                            </p>
                            <p>
                              <strong>Precio:</strong>{" "}
                              {selectedServiceData?.price === 0
                                ? "Gratis"
                                : `€${selectedServiceData?.price}`}
                            </p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <motion.div
                            className="flex-1"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setBookingStep(2)}
                              className="w-full border-2 border-rasta-green-300 text-rasta-green-700 bg-white hover:bg-rasta-green-50 font-semibold"
                            >
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              Volver
                            </Button>
                          </motion.div>
                          <motion.div
                            className="flex-1"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="submit"
                              className="w-full bg-rasta-green-600 hover:bg-rasta-green-700 text-white font-semibold shadow-lg hover:shadow-xl"
                            >
                              Confirmar Reserva Blessed
                              <CheckCircle className="ml-2 h-4 w-4" />
                            </Button>
                          </motion.div>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {bookingStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="max-w-2xl mx-auto text-center"
              >
                <AnimatedSection>
                  <div className="mb-8">
                    <motion.div
                      className="w-20 h-20 bg-rasta-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 2, repeat: 1 }}
                    >
                      <CheckCircle className="w-10 h-10 text-rasta-green-600" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-rasta-black-800 mb-4">
                      <span className="text-rasta-green-600">Jah Bless!</span>{" "}
                      Reserva Confirmed
                    </h2>
                    <p className="text-xl text-rasta-black-600 mb-8">
                      Tu cita ital ha sido agendada successfully blessed. Te
                      contactaremos pronto para confirmar todos los detalles.
                      One Love!
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <Card className="border-rasta-green-200 mb-8 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="font-semibold text-rasta-black-800 mb-4">
                        Próximos Pasos Blessed:
                      </h3>
                      <ul className="text-left space-y-3 text-rasta-black-600">
                        {[
                          "Recibirás un email de confirmación blessed en los próximos minutos",
                          "Te contactaremos por WhatsApp ital para confirmar detalles",
                          "Prepárate para una sesión blessed con good vibes rastafari",
                        ].map((step, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.2 }}
                          >
                            <CheckCircle className="w-5 h-5 text-rasta-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            {step}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={0.6}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => {
                          setBookingStep(1);
                          setSelectedService("");
                          setSelectedDateTime(null);
                          setCustomerInfo({
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                          });
                        }}
                        variant="outline"
                        className="border-2 border-rasta-green-300 text-rasta-green-700 bg-white hover:bg-rasta-green-50 font-semibold"
                      >
                        Hacer Otra Reserva Blessed
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-rasta-green-600 hover:bg-rasta-green-700 text-white font-semibold shadow-lg">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        One Love WhatsApp
                      </Button>
                    </motion.div>
                  </div>
                </AnimatedSection>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Booking;

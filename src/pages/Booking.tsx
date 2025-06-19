import { useState } from "react";
import Navigation from "@/components/Navigation";
import Calendar from "@/components/Calendar";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        "Consulta personalizada",
        "Preparación del cabello",
        "Técnica traditional roots",
        "Cuidados post-servicio",
      ],
    },
    {
      id: "mantenimiento",
      name: "Mantenimiento Ital",
      duration: "2-3 horas",
      price: 60,
      description:
        "Cuidado y retoque profesional para mantener tus rastas irie",
      popular: false,
      includes: [
        "Root maintenance",
        "Limpieza profunda",
        "Aceites naturales",
        "Palm rolling",
      ],
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
        "Decoloración natural",
        "Tintes vegetales",
        "Colores rastafari",
        "Tratamiento protector",
      ],
    },
    {
      id: "rastas-sinteticas",
      name: "Rastas Sintéticas",
      duration: "3-4 horas",
      price: 80,
      description: "Extensiones sintéticas para un look temporal blessed",
      popular: false,
      includes: [
        "Variedad de colores",
        "Instalación rápida",
        "Mantenimiento fácil",
        "Look temporal",
      ],
    },
    {
      id: "consulta",
      name: "Consulta Ital Gratuita",
      duration: "30 minutos",
      price: 0,
      description: "Conversación sobre el mejor estilo rastafari para ti",
      popular: true,
      includes: [
        "Análisis del cabello",
        "Recomendaciones personalizadas",
        "Plan de cuidados",
        "Presupuesto detallado",
      ],
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
    console.log("Booking submitted:", {
      service: selectedService,
      dateTime: selectedDateTime,
      customer: customerInfo,
    });
    setBookingStep(4);
  };

  const selectedServiceData = services.find((s) => s.id === selectedService);

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              bookingStep >= step
                ? "bg-rasta-green-600 text-white"
                : "bg-rasta-black-200 text-rasta-black-500"
            }`}
          >
            {bookingStep > step ? <CheckCircle size={16} /> : step}
          </div>
          {step < 3 && (
            <div
              className={`w-16 h-1 mx-2 ${
                bookingStep > step ? "bg-rasta-green-600" : "bg-rasta-black-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200">
            <Heart className="w-4 h-4 mr-2 text-rasta-red-600" />
            Bless Up - Reserva tu Transformación
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-rasta-red-600">Book</span>{" "}
            <span className="text-rasta-gold-400">Your</span>
            <br />
            <span className="text-rasta-green-600">Ital</span>{" "}
            <span className="text-rasta-black-800">Session</span>
          </h1>
          <p className="text-xl text-rasta-black-600 max-w-3xl mx-auto leading-relaxed">
            Agenda tu cita para una transformación auténtica rastafari. Cada
            sesión es blessed with love y técnicas tradicionales jamaicanas.
          </p>
        </div>
      </section>

      {/* Booking System */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {renderStepIndicator()}

          {/* Step 1: Service Selection */}
          {bookingStep === 1 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-rasta-black-800 mb-4">
                  Selecciona tu{" "}
                  <span className="text-rasta-green-600">Servicio Ital</span>
                </h2>
                <p className="text-rasta-black-600">
                  Elige el servicio que mejor se adapte a tu vibe rastafari
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                      service.popular
                        ? "border-rasta-gold-300 bg-gradient-to-br from-rasta-gold-50 to-white"
                        : "border-rasta-green-200 hover:border-rasta-green-300"
                    }`}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    {service.popular && (
                      <div className="relative">
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rasta-gold-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pt-8">
                      <CardTitle className="text-xl text-rasta-black-800 mb-2">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-rasta-black-600 mb-4">
                        {service.description}
                      </CardDescription>

                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="flex items-center text-rasta-green-700">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{service.duration}</span>
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

                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.includes.map((include, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-rasta-black-600"
                          >
                            <CheckCircle className="w-4 h-4 text-rasta-green-600 mr-2 flex-shrink-0" />
                            {include}
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full ${
                          service.popular
                            ? "bg-rasta-gold-500 hover:bg-rasta-gold-600"
                            : "bg-rasta-green-600 hover:bg-rasta-green-700"
                        } text-white`}
                      >
                        Seleccionar Servicio
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {bookingStep === 2 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-rasta-black-800 mb-4">
                  Selecciona <span className="text-rasta-green-600">Fecha</span>{" "}
                  y <span className="text-rasta-gold-500">Hora</span>
                </h2>
                <p className="text-rasta-black-600">
                  Servicio seleccionado:{" "}
                  <strong>{selectedServiceData?.name}</strong>
                </p>
              </div>

              <Calendar onSelectDateTime={handleDateTimeSelect} />

              {selectedDateTime && (
                <div className="mt-8 text-center">
                  <Button
                    onClick={() => setBookingStep(3)}
                    size="lg"
                    className="bg-rasta-green-600 hover:bg-rasta-green-700 text-white px-8"
                  >
                    Continuar con Datos
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Customer Information */}
          {bookingStep === 3 && (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-rasta-black-800 mb-4">
                  Datos <span className="text-rasta-green-600">Personales</span>
                </h2>
                <p className="text-rasta-black-600">
                  Completa tus datos para confirmar la reserva
                </p>
              </div>

              <Card className="border-rasta-green-200">
                <CardContent className="p-8">
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-rasta-black-700 font-medium"
                        >
                          Nombre Completo *
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
                          className="mt-2 border-rasta-green-200 focus:border-rasta-green-500"
                          placeholder="Tu nombre ital"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-rasta-black-700 font-medium"
                        >
                          Teléfono *
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
                          className="mt-2 border-rasta-green-200 focus:border-rasta-green-500"
                          placeholder="+34 666 777 888"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-rasta-black-700 font-medium"
                      >
                        Email *
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
                        className="mt-2 border-rasta-green-200 focus:border-rasta-green-500"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-rasta-black-700 font-medium"
                      >
                        Mensaje (Opcional)
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
                        className="mt-2 border-rasta-green-200 focus:border-rasta-green-500"
                        placeholder="Cuéntanos sobre tu vibe rastafari o cualquier detail especial..."
                      />
                    </div>

                    {/* Booking Summary */}
                    <div className="bg-rasta-green-50 rounded-lg p-6 border border-rasta-green-200">
                      <h4 className="font-semibold text-rasta-green-800 mb-4">
                        Resumen de tu Reserva:
                      </h4>
                      <div className="space-y-2 text-rasta-green-700">
                        <p>
                          <strong>Servicio:</strong> {selectedServiceData?.name}
                        </p>
                        <p>
                          <strong>Fecha:</strong>{" "}
                          {selectedDateTime?.date.toLocaleDateString("es-ES", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
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
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setBookingStep(2)}
                        className="flex-1 border-rasta-green-300 text-rasta-green-700"
                      >
                        Volver
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-rasta-green-600 hover:bg-rasta-green-700 text-white"
                      >
                        Confirmar Reserva
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {bookingStep === 4 && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-rasta-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-rasta-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-rasta-black-800 mb-4">
                  <span className="text-rasta-green-600">Jah Bless!</span>{" "}
                  Reserva Confirmada
                </h2>
                <p className="text-xl text-rasta-black-600 mb-8">
                  Tu cita ital ha sido agendada successfully. Te contactaremos
                  pronto para confirmar todos los detalles.
                </p>
              </div>

              <Card className="border-rasta-green-200 mb-8">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-rasta-black-800 mb-4">
                    Próximos Pasos:
                  </h3>
                  <ul className="text-left space-y-3 text-rasta-black-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-rasta-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Recibirás un email de confirmación en los próximos minutos
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-rasta-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Te contactaremos por WhatsApp para confirmar detalles
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-rasta-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Prepárate para una sesión blessed con good vibes
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  className="border-rasta-green-300 text-rasta-green-700"
                >
                  Hacer Otra Reserva
                </Button>
                <Button className="bg-rasta-green-600 hover:bg-rasta-green-700 text-white">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Booking;

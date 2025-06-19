import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-earth-50 via-sage-50 to-gold-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold-100 text-gold-800 mb-6">Próximamente</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-earth-800 mb-6">
            Sistema de <span className="text-gold-600">Reservas</span>
          </h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Estamos desarrollando un sistema de reservas online para que puedas
            agendar tu cita de forma rápida y sencilla las 24 horas del día.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-earth-200">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-earth-700 font-medium">
              Mientras tanto, contáctanos directamente
            </span>
          </div>
        </div>
      </section>

      {/* Current Booking Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              Cómo <span className="text-gold-600">Reservar</span> Ahora
            </h2>
            <p className="text-xl text-earth-600 max-w-2xl mx-auto">
              Mientras implementamos nuestro sistema online, puedes reservar
              fácilmente a través de estos métodos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                icon: MessageCircle,
                title: "WhatsApp",
                description: "La forma más rápida",
                action: "Enviar mensaje",
                color: "bg-green-600 hover:bg-green-700",
                details: [
                  "Respuesta inmediata",
                  "Fotos de referencia",
                  "Confirmación directa",
                ],
              },
              {
                step: "02",
                icon: Phone,
                title: "Llamada",
                description: "Habla directamente con nosotros",
                action: "Llamar ahora",
                color: "bg-blue-600 hover:bg-blue-700",
                details: [
                  "Atención personalizada",
                  "Resolución de dudas",
                  "Disponibilidad inmediata",
                ],
              },
              {
                step: "03",
                icon: User,
                title: "Presencial",
                description: "Visítanos en nuestro local",
                action: "Ver ubicación",
                color: "bg-earth-600 hover:bg-earth-700",
                details: [
                  "Consulta presencial",
                  "Ver trabajos en vivo",
                  "Conocer el espacio",
                ],
              },
            ].map((method, index) => (
              <Card
                key={index}
                className="text-center border-earth-100 hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="text-4xl font-bold text-gold-600 mb-2">
                    {method.step}
                  </div>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-gold-100 to-sage-100 w-fit group-hover:scale-110 transition-transform">
                    <method.icon className="w-8 h-8 text-earth-700" />
                  </div>
                  <CardTitle className="text-xl text-earth-800">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-earth-600">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-earth-600">
                    {method.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center"
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full text-white ${method.color}`}>
                    {method.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Future Features Preview */}
          <div className="bg-gradient-to-br from-sage-50 to-earth-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">
                Funciones del Sistema Online
              </h3>
              <p className="text-earth-600">
                Estas son las características que tendrá nuestro sistema de
                reservas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Calendario Interactivo",
                  description: "Ve disponibilidad en tiempo real",
                },
                {
                  icon: Clock,
                  title: "Horarios Flexibles",
                  description: "Elige el horario que mejor te convenga",
                },
                {
                  icon: User,
                  title: "Perfil Personal",
                  description: "Historial de citas y preferencias",
                },
                {
                  icon: CheckCircle,
                  title: "Confirmación Automática",
                  description: "Notificaciones por email y WhatsApp",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl border border-earth-200 opacity-75"
                >
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-gold-100 to-sage-100 w-fit">
                    <feature.icon className="w-6 h-6 text-earth-700" />
                  </div>
                  <h4 className="font-semibold text-earth-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-earth-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-800 mb-4">
              Servicios Disponibles para{" "}
              <span className="text-gold-600">Reservar</span>
            </h2>
            <p className="text-earth-600">
              Estos son los servicios que podrás agendar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                service: "Rastas Nuevas",
                duration: "4-6 horas",
                price: "Desde 120€",
                popular: true,
              },
              {
                service: "Mantenimiento",
                duration: "2-3 horas",
                price: "Desde 60€",
                popular: false,
              },
              {
                service: "Rastas con Color",
                duration: "5-7 horas",
                price: "Desde 150€",
                popular: false,
              },
              {
                service: "Consulta Gratuita",
                duration: "30 min",
                price: "Gratis",
                popular: true,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`text-center border-earth-100 ${
                  service.popular ? "ring-2 ring-gold-200" : ""
                }`}
              >
                {service.popular && (
                  <div className="relative">
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-600 text-white">
                      Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 pt-8">
                  <h3 className="font-bold text-earth-800 text-lg mb-2">
                    {service.service}
                  </h3>
                  <div className="text-2xl font-bold text-gold-600 mb-1">
                    {service.price}
                  </div>
                  <div className="text-sm text-earth-600 mb-4">
                    {service.duration}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-earth-300 text-earth-700 hover:bg-earth-50"
                  >
                    Contactar para Reservar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-earth-800 to-sage-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para <span className="text-gold-400">Reservar?</span>
          </h2>
          <p className="text-xl text-earth-100 mb-8 max-w-2xl mx-auto">
            Contáctanos ahora y agenda tu transformación. Estamos aquí para
            ayudarte a conseguir el look perfecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;

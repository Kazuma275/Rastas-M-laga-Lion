import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+34 666 777 888", "Llamadas y WhatsApp"],
      href: "tel:+34666777888",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@rastasmalagalions.com", "Respuesta en 24h"],
      href: "mailto:info@rastasmalagalions.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Centro de Málaga", "Cita previa requerida"],
      href: "#map",
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 10:00 - 20:00", "Sáb: 10:00 - 18:00"],
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "+34 666 777 888",
      href: "https://wa.me/34666777888",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@rastasmalagalions",
      href: "https://instagram.com/rastasmalagalions",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Rastas Málaga Lions",
      href: "https://facebook.com/rastasmalagalions",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-earth-50 via-sage-50 to-gold-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold-100 text-gold-800 mb-6">
            Ponte en Contacto
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-earth-800 mb-6">
            Hablemos de tu <span className="text-gold-600">Transformación</span>
          </h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para responder todas tus preguntas y ayudarte a
            planificar tu nuevo look. ¡Contacta con nosotros!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-earth-800 mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-earth-600 mb-8">
                Completa el formulario y te responderemos lo antes posible para
                agendar tu consulta gratuita.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-earth-700">
                      Nombre *
                    </Label>
                    <Input
                      id="name"
                      required
                      className="mt-2 border-earth-200 focus:border-gold-500"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-earth-700">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="mt-2 border-earth-200 focus:border-gold-500"
                      placeholder="+34 666 777 888"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-earth-700">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2 border-earth-200 focus:border-gold-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-earth-700">
                    Servicio de Interés
                  </Label>
                  <select
                    id="service"
                    className="mt-2 w-full px-3 py-2 border border-earth-200 rounded-md focus:outline-none focus:border-gold-500"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="rastas-nuevas">Rastas Nuevas</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="rastas-color">Rastas con Color</option>
                    <option value="rastas-sinteticas">Rastas Sintéticas</option>
                    <option value="consulta">Consulta General</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-earth-700">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 border-earth-200 focus:border-gold-500"
                    placeholder="Cuéntanos sobre el estilo que buscas, tus expectativas, o cualquier pregunta que tengas..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-earth-800">
                Información de Contacto
              </h2>

              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border-earth-100">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-lg bg-gold-100">
                            <IconComponent className="w-6 h-6 text-gold-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-earth-800 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-earth-700 mb-1">
                              {info.details[0]}
                            </p>
                            <p className="text-sm text-earth-500">
                              {info.details[1]}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-earth-800 mb-4">
                  Síguenos en Redes Sociales
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg border border-earth-200 hover:bg-earth-50 transition-colors"
                      >
                        <div
                          className={`p-2 rounded text-white ${social.color}`}
                        >
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-earth-800">
                            {social.name}
                          </p>
                          <p className="text-sm text-earth-600">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div id="map" className="mt-16">
            <h2 className="text-3xl font-bold text-earth-800 mb-6 text-center">
              Nuestra Ubicación
            </h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[16/9] bg-gradient-to-br from-earth-200 to-sage-200 flex items-center justify-center">
                  <div className="text-center text-earth-500">
                    <MapPin size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Mapa Interactivo</p>
                    <p className="text-sm">Google Maps - Centro de Málaga</p>
                    <p className="text-xs mt-2 max-w-md mx-auto">
                      La ubicación exacta se proporcionará al confirmar la cita
                      por motivos de privacidad
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-sage-50 to-earth-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Aquí tienes respuestas a las consultas más comunes de nuestros
              clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-earth-100">
              <CardHeader>
                <CardTitle className="text-earth-800">
                  ¿Cuánto tiempo lleva hacer rastas?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-earth-600">
                  Depende del tipo de rasta y largo del cabello. Rastas nuevas
                  pueden tomar entre 4-8 horas, mientras que el mantenimiento
                  suele ser 2-3 horas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-earth-100">
              <CardHeader>
                <CardTitle className="text-earth-800">
                  ¿Qué tipo de cabello funciona mejor?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-earth-600">
                  Trabajamos con todo tipo de cabello. Cada textura tiene sus
                  ventajas y adaptamos nuestras técnicas según tus necesidades
                  específicas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-earth-100">
              <CardHeader>
                <CardTitle className="text-earth-800">
                  ¿Ofrecen servicios a domicilio?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-earth-600">
                  Sí, para ciertos servicios y bajo condiciones especiales.
                  Contacta con nosotros para consultar disponibilidad y
                  condiciones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-earth-100">
              <CardHeader>
                <CardTitle className="text-earth-800">
                  ¿Cómo mantengo mis rastas?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-earth-600">
                  Te proporcionamos instrucciones detalladas y productos
                  recomendados. También ofrecemos servicios de mantenimiento
                  regulares.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

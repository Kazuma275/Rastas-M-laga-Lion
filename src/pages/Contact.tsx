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
  Heart,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted blessed");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Ital Phone",
      details: ["+34 666 777 888", "Calls & WhatsApp blessed"],
      href: "tel:+34666777888",
      color: "text-rasta-green-600",
    },
    {
      icon: Mail,
      title: "Blessed Email",
      details: ["ital@rastasmalagalions.com", "Response in 24h blessed"],
      href: "mailto:ital@rastasmalagalions.com",
      color: "text-rasta-gold-500",
    },
    {
      icon: MapPin,
      title: "Ital Location",
      details: ["Centro de Málaga", "Cita previa blessed required"],
      href: "#map",
      color: "text-rasta-red-600",
    },
    {
      icon: Clock,
      title: "Blessed Hours",
      details: ["Lun - Vie: 10:00 - 20:00", "Sáb: 10:00 - 18:00"],
      href: "#",
      color: "text-rasta-black-700",
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      name: "WhatsApp Ital",
      handle: "+34 666 777 888",
      href: "https://wa.me/34666777888",
      color: "bg-rasta-green-600 hover:bg-rasta-green-700",
    },
    {
      icon: Instagram,
      name: "Instagram Blessed",
      handle: "@rastasmalagalions",
      href: "https://instagram.com/rastasmalagalions",
      color: "bg-rasta-red-600 hover:bg-rasta-red-700",
    },
    {
      icon: Facebook,
      name: "Facebook Rastafari",
      handle: "Rastas Málaga Lions",
      href: "https://facebook.com/rastasmalagalions",
      color: "bg-rasta-gold-600 hover:bg-rasta-gold-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200">
            <Heart className="w-4 h-4 mr-2 text-rasta-red-600" />
            One Love Contact - Ponte en Contacto
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-rasta-black-800 mb-6">
            <span className="text-rasta-red-600">Hablemos</span> de tu
            <br />
            <span className="text-rasta-gold-400">Transformación</span>{" "}
            <span className="text-rasta-green-600">Ital</span>
          </h1>
          <p className="text-xl text-rasta-black-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para responder todas tus questions blessed y ayudarte a
            planificar tu nuevo look rastafari. ¡One Love contact con nosotros!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-rasta-black-800 mb-6">
                Envíanos un{" "}
                <span className="text-rasta-green-600">Mensaje</span> Blessed
              </h2>
              <p className="text-rasta-black-600 mb-8">
                Completa el form blessed y te responderemos lo antes posible
                para agendar tu consulta ital gratuita. Jah bless!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-rasta-black-700">
                      Ital Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      className="mt-2 border-rasta-green-200 focus:border-rasta-green-500"
                      placeholder="Tu nombre blessed"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-rasta-black-700">
                      Phone Blessed *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="mt-2 border-rasta-green-200 focus:border-rasta-green-500"
                      placeholder="+34 666 777 888"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-rasta-black-700">
                    Email Ital *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2 border-rasta-green-200 focus:border-rasta-green-500"
                    placeholder="tu@email.ital"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-rasta-black-700">
                    Servicio Rastafari de Interés
                  </Label>
                  <select
                    id="service"
                    className="mt-2 w-full px-3 py-2 border border-rasta-green-200 rounded-md focus:outline-none focus:border-rasta-green-500"
                  >
                    <option value="">Selecciona un servicio blessed</option>
                    <option value="rastas-naturales">
                      Rastas Naturales Ital
                    </option>
                    <option value="mantenimiento">Mantenimiento Irie</option>
                    <option value="rastas-color">Colores Rastafari</option>
                    <option value="rastas-sinteticas">Rastas Sintéticas</option>
                    <option value="consulta">Consulta Ital General</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-rasta-black-700">
                    Mensaje Blessed *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 border-rasta-green-200 focus:border-rasta-green-500"
                    placeholder="Cuéntanos sobre el estilo rastafari que buscas, tus expectations ital, o cualquier question blessed que tengas... One Love!"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-rasta-green-600 hover:bg-rasta-green-700 text-white"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Blessed Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-rasta-black-800">
                Información{" "}
                <span className="text-rasta-red-600">Rastafari</span> Contact
              </h2>

              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border-rasta-green-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-rasta-gold-100 to-rasta-green-100">
                            <IconComponent
                              className={`w-6 h-6 ${info.color}`}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-rasta-black-800 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-rasta-black-700 mb-1">
                              {info.details[0]}
                            </p>
                            <p className="text-sm text-rasta-black-500">
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
                <h3 className="text-xl font-semibold text-rasta-black-800 mb-4">
                  Follow Us - <span className="text-rasta-green-600">Ital</span>{" "}
                  Social
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
                        className="flex items-center space-x-3 p-3 rounded-lg border border-rasta-green-200 hover:bg-rasta-green-50 transition-colors"
                      >
                        <div
                          className={`p-2 rounded text-white ${social.color}`}
                        >
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-rasta-black-800">
                            {social.name}
                          </p>
                          <p className="text-sm text-rasta-black-600">
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
            <h2 className="text-3xl font-bold text-rasta-black-800 mb-6 text-center">
              Nuestra <span className="text-rasta-green-600">Ubicación</span>{" "}
              <span className="text-rasta-gold-400">Ital</span>
            </h2>
            <Card className="overflow-hidden border-rasta-green-200">
              <CardContent className="p-0">
                <div className="aspect-[16/9] bg-gradient-to-br from-rasta-red-200 via-rasta-gold-200 to-rasta-green-200 flex items-center justify-center">
                  <div className="text-center text-rasta-black-500">
                    <MapPin size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">
                      Blessed Interactive Map
                    </p>
                    <p className="text-sm">
                      Google Maps - Centro de Málaga Ital
                    </p>
                    <p className="text-xs mt-2 max-w-md mx-auto">
                      La ubicación exact se proporcionará al confirmar la cita
                      blessed por motivos de privacy rastafari
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-rasta-green-50 to-rasta-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rasta-black-800 mb-4">
              <span className="text-rasta-red-600">Preguntas</span>{" "}
              <span className="text-rasta-gold-500">Frecuentes</span>{" "}
              <span className="text-rasta-green-600">Ital</span>
            </h2>
            <p className="text-rasta-black-600 max-w-2xl mx-auto">
              Aquí tienes respuestas blessed a las consultas más common de
              nuestros clients rastafari.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-rasta-green-200">
              <CardHeader>
                <CardTitle className="text-rasta-black-800">
                  ¿Cuánto tiempo lleva hacer rastas blessed?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-rasta-black-600">
                  Depende del tipo de rasta ital y largo del cabello. Rastas
                  nuevas blessed pueden tomar entre 4-8 horas, mientras que el
                  mantenimiento irie suele ser 2-3 horas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-rasta-green-200">
              <CardHeader>
                <CardTitle className="text-rasta-black-800">
                  ¿Qué tipo de cabello funciona better for rastas?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-rasta-black-600">
                  Trabajamos con todo tipo de cabello blessed. Cada textura
                  tiene sus ventajas ital y adaptamos nuestras técnicas
                  rastafari según tus needs específicas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-rasta-green-200">
              <CardHeader>
                <CardTitle className="text-rasta-black-800">
                  ¿Ofrecen servicios blessed a domicilio?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-rasta-black-600">
                  Sí, para ciertos servicios ital y bajo condiciones especiales
                  blessed. Contacta con nosotros para consultar availability y
                  condiciones rastafari.
                </p>
              </CardContent>
            </Card>

            <Card className="border-rasta-green-200">
              <CardHeader>
                <CardTitle className="text-rasta-black-800">
                  ¿Cómo mantengo mis rastas blessed?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-rasta-black-600">
                  Te proporcionamos instructions detalladas ital y productos
                  recomendados blessed. También ofrecemos servicios de
                  mantenimiento regulares rastafari.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* One Love CTA */}
      <section className="py-16 bg-gradient-to-r from-rasta-red-600 via-rasta-gold-500 to-rasta-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Ready para conectar con{" "}
            <span className="text-rasta-black-800">One Love</span>?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            No hesites en contactarnos blessed. Estamos aquí para hacer tu
            journey rastafari unforgettable. Jah bless!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-rasta-green-700 hover:bg-gray-100 px-8 py-3"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Blessed
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-rasta-green-700 px-8 py-3"
            >
              Call Ital Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

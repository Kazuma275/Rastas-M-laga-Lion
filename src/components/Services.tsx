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
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200">
            <Heart className="w-4 h-4 mr-2 text-rasta-red-600" />
            Servicios Blessed con One Love
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-rasta-black-800 mb-6">
            Nuestros <span className="text-rasta-red-600">Servicios</span>{" "}
            <span className="text-rasta-gold-400">Ital</span>
          </h2>
          <p className="text-xl text-rasta-black-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios auténticos rastafari, blessed con técnicas
            tradicionales jamaicanas y good vibes naturales para tu
            transformación ital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 border-rasta-green-200 hover:border-rasta-green-300"
              >
                {/* Badge */}
                <div className="absolute -top-3 left-6 z-10">
                  <Badge className={service.badgeColor}>{service.badge}</Badge>
                </div>

                <CardHeader className="text-center pt-8">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-rasta-gold-100 via-rasta-green-100 to-rasta-red-100 w-fit">
                    <IconComponent className="w-8 h-8 text-rasta-black-700" />
                  </div>
                  <CardTitle className="text-xl text-rasta-black-800 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-rasta-black-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Duration & Price */}
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-rasta-black-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="flex items-center font-semibold text-rasta-gold-700">
                      <Euro className="w-4 h-4 mr-1" />
                      {service.price}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-rasta-black-600"
                      >
                        <div className="w-1.5 h-1.5 bg-rasta-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full mt-6 bg-rasta-green-600 hover:bg-rasta-green-700 text-white group-hover:bg-rasta-gold-500 group-hover:hover:bg-rasta-gold-600 transition-all"
                  >
                    <Link to="/reservas">
                      Bless Up - Reservar
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50 rounded-2xl p-8 md:p-12 border border-rasta-green-200">
          <h3 className="text-2xl md:text-3xl font-bold text-rasta-black-800 mb-4">
            ¿No estás seguro qué servicio{" "}
            <span className="text-rasta-green-600">blessed</span> necesitas?
          </h3>
          <p className="text-rasta-black-600 mb-6 max-w-2xl mx-auto">
            Agenda una consulta ital gratuita y te ayudaremos a elegir el mejor
            tratamiento rastafari para tu tipo de cabello y vibe personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rasta-gold-500 hover:bg-rasta-gold-600 text-white"
            >
              <Link to="/contacto">
                Consulta Ital Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-rasta-green-300 text-rasta-green-700 hover:bg-rasta-green-50"
            >
              <Link to="/galeria">Ver Nuestros Blessed Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

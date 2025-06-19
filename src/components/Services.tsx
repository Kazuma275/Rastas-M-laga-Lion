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
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Rastas Nuevas",
      description:
        "Creación completa de rastas desde cero con técnicas profesionales.",
      duration: "4-6 horas",
      price: "Desde 120€",
      features: [
        "Consulta personalizada",
        "Técnica tradicional",
        "Cuidado post-servicio",
      ],
      badge: "Más Popular",
      badgeColor: "bg-gold-100 text-gold-800",
    },
    {
      icon: RefreshCw,
      title: "Mantenimiento",
      description:
        "Cuidado y retoque de tus rastas existentes para mantenerlas perfectas.",
      duration: "2-3 horas",
      price: "Desde 60€",
      features: ["Reapretado de raíces", "Limpieza profunda", "Hidratación"],
      badge: "Recomendado",
      badgeColor: "bg-sage-100 text-sage-800",
    },
    {
      icon: Palette,
      title: "Rastas con Color",
      description:
        "Dale vida a tus rastas con colores vibrantes y técnicas de teñido.",
      duration: "5-7 horas",
      price: "Desde 150€",
      features: [
        "Colores naturales/fantasia",
        "Decoloración incluida",
        "Tratamiento protector",
      ],
      badge: "Especial",
      badgeColor: "bg-earth-100 text-earth-800",
    },
    {
      icon: Sparkles,
      title: "Rastas Sintéticas",
      description:
        "Extensiones de rastas sintéticas para un cambio rápido y temporal.",
      duration: "3-4 horas",
      price: "Desde 80€",
      features: [
        "Múltiples colores",
        "Instalación rápida",
        "Fácil mantenimiento",
      ],
      badge: "Temporal",
      badgeColor: "bg-gold-100 text-gold-800",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-earth-800 mb-6">
            Nuestros <span className="text-gold-600">Servicios</span>
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios profesionales para crear y
            mantener tus rastas perfectas, adaptándonos a tu estilo y
            necesidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 border-earth-100"
              >
                {/* Badge */}
                <div className="absolute -top-3 left-6 z-10">
                  <Badge className={service.badgeColor}>{service.badge}</Badge>
                </div>

                <CardHeader className="text-center pt-8">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-gold-100 to-sage-100 w-fit">
                    <IconComponent className="w-8 h-8 text-earth-700" />
                  </div>
                  <CardTitle className="text-xl text-earth-800 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-earth-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Duration & Price */}
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-earth-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="flex items-center font-semibold text-gold-700">
                      <Euro className="w-4 h-4 mr-1" />
                      {service.price}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-earth-600"
                      >
                        <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full mt-6 bg-earth-700 hover:bg-earth-800 text-white group-hover:bg-gold-600 group-hover:hover:bg-gold-700 transition-all"
                  >
                    <Link to="/reservas">
                      Reservar
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-earth-50 to-sage-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">
            ¿No estás seguro qué servicio necesitas?
          </h3>
          <p className="text-earth-600 mb-6 max-w-2xl mx-auto">
            Agenda una consulta gratuita y te ayudaremos a elegir el mejor
            tratamiento para tu tipo de cabello y estilo personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white"
            >
              <Link to="/contacto">
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-earth-300 text-earth-700 hover:bg-earth-50"
            >
              <Link to="/galeria">Ver Nuestro Trabajo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

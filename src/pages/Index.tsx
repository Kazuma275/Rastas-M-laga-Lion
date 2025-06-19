import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200">
                <Heart className="w-4 h-4 mr-2 text-rasta-red-600" />
                Nuestra Historia Rastafari
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-rasta-black-800 mb-6">
                Pasión por las{" "}
                <span className="text-rasta-red-600">Rastas</span>{" "}
                <span className="text-rasta-gold-400">Ital</span>
              </h2>
              <p className="text-xl text-rasta-black-600 mb-6 leading-relaxed">
                Soy una emprendedora blessed con pasión por el arte rastafari de
                las rastas. Comenzé este journey hace más de 5 años y desde
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
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-white shadow-sm border border-rasta-green-200">
                        <IconComponent className="w-5 h-5 text-rasta-gold-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-rasta-black-800 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-rasta-black-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-rasta-red-200 via-rasta-gold-200 to-rasta-green-200 aspect-[4/5] shadow-xl border-4 border-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-rasta-black-500">
                    <Users size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Ital Sister Working</p>
                    <p className="text-sm">Blessed Rastafari Artist</p>
                  </div>
                </div>

                {/* Rastafari decorative elements */}
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <div className="h-full flex">
                      <div className="flex-1 bg-rasta-red-600"></div>
                      <div className="flex-1 bg-rasta-gold-400"></div>
                      <div className="flex-1 bg-rasta-green-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-rasta-black-800 mb-6">
              Lo que dicen nuestros{" "}
              <span className="text-rasta-green-600">Ital</span>{" "}
              <span className="text-rasta-gold-400">Clients</span>
            </h2>
            <p className="text-xl text-rasta-black-600 max-w-2xl mx-auto">
              La satisfacción blessed de nuestros clientes rastafari es nuestra
              mayor recompensa. One Love testimonials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-rasta-green-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-rasta-gold-500 mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-rasta-green-100 text-rasta-green-800"
                    >
                      {testimonial.service}
                    </Badge>
                  </div>
                  <p className="text-rasta-black-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-rasta-black-800">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-rasta-red-600 via-rasta-gold-500 to-rasta-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para tu nueva{" "}
            <span className="text-rasta-black-800">Transformación</span>{" "}
            <span className="text-white">Ital?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda tu cita blessed hoy mismo y comienza tu journey hacia un
            nuevo estilo rastafari único y auténtico. Jah Bless!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-rasta-green-700 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              <Link to="/reservas">Bless Up - Reservar Ahora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-rasta-green-700 px-8 py-3 text-lg"
            >
              <Link to="/contacto">One Love Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rasta-black-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-rasta-red-400">
                  Rastas
                </span>
                <span className="text-xl font-bold text-rasta-gold-400">
                  Málaga
                </span>
                <span className="text-xl font-bold text-rasta-green-400">
                  Lions
                </span>
                <div className="flex flex-col w-1 h-6 ml-2">
                  <div className="flex-1 bg-rasta-red-600"></div>
                  <div className="flex-1 bg-rasta-gold-400"></div>
                  <div className="flex-1 bg-rasta-green-600"></div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Especializados en rastas auténticas rastafari en el corazón de
                Málaga. One Love, One Heart en cada trabajo blessed.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/34666777888"
                  className="text-gray-300 hover:text-rasta-green-400 transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="https://instagram.com/rastasmalagalions"
                  className="text-gray-300 hover:text-rasta-red-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com/rastasmalagalions"
                  className="text-gray-300 hover:text-rasta-gold-400 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-white">
                Servicios Blessed
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/reservas" className="hover:text-rasta-gold-400">
                    Rastas Naturales Ital
                  </Link>
                </li>
                <li>
                  <Link to="/reservas" className="hover:text-rasta-gold-400">
                    Mantenimiento Irie
                  </Link>
                </li>
                <li>
                  <Link to="/reservas" className="hover:text-rasta-gold-400">
                    Colores Rastafari
                  </Link>
                </li>
                <li>
                  <Link to="/reservas" className="hover:text-rasta-gold-400">
                    Rastas Sintéticas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Ital Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/galeria" className="hover:text-rasta-gold-400">
                    Galería Blessed
                  </Link>
                </li>
                <li>
                  <Link to="/tienda" className="hover:text-rasta-gold-400">
                    Ital Shop
                  </Link>
                </li>
                <li>
                  <Link to="/reservas" className="hover:text-rasta-gold-400">
                    Book Session
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="hover:text-rasta-gold-400">
                    One Love Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-white">
                Contacto Rastafari
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+34 666 777 888</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>ital@rastasmalagalions.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-1" />
                  <span>Centro de Málaga, España</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © 2024 Rastas Málaga Lions. Jah Bless - Todos los derechos
              reservados. One Love ❤️💛💚
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

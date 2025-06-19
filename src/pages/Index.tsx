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
      name: "María García",
      rating: 5,
      text: "Increíble trabajo, mis rastas quedaron perfectas. El trato fue súper profesional y el ambiente muy agradable.",
      service: "Rastas Nuevas",
    },
    {
      name: "Carlos Ruiz",
      rating: 5,
      text: "Llevo 3 años viniendo para el mantenimiento. Siempre quedo satisfecho con el resultado.",
      service: "Mantenimiento",
    },
    {
      name: "Ana López",
      rating: 5,
      text: "Las rastas con color que me hicieron son espectaculares. ¡Recibo cumplidos todos los días!",
      service: "Rastas con Color",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Experiencia Profesional",
      description: "Más de 5 años especializándonos en todo tipo de rastas",
    },
    {
      icon: Heart,
      title: "Trato Personalizado",
      description: "Cada cliente es único y merece un servicio adaptado",
    },
    {
      icon: TrendingUp,
      title: "Técnicas Actualizadas",
      description: "Formación continua en las últimas tendencias",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Formamos parte de la comunidad rasta de Málaga",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sage-50 via-earth-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-sage-100 text-sage-800 mb-6">
                Nuestra Historia
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-earth-800 mb-6">
                Pasión por las <span className="text-gold-600">Rastas</span>
              </h2>
              <p className="text-xl text-earth-600 mb-6 leading-relaxed">
                Soy una emprendedora apasionada por el arte de las rastas.
                Comenzé este camino hace más de 5 años y desde entonces he
                ayudado a cientos de personas a expresar su personalidad única a
                través de este hermoso peinado.
              </p>
              <p className="text-earth-600 mb-8 leading-relaxed">
                En Rastas Málaga Lions creemos que cada rasta cuenta una
                historia. Utilizamos técnicas tradicionales combinadas con
                innovación moderna para crear peinados que no solo se ven
                increíbles, sino que también respetan la esencia cultural de las
                rastas.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-white shadow-sm">
                        <IconComponent className="w-5 h-5 text-gold-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-earth-800 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-earth-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-earth-200 to-sage-200 aspect-[4/5] shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-earth-500">
                    <Users size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Foto Personal</p>
                    <p className="text-sm">Imagen de la artista trabajando</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-earth-800 mb-6">
              Lo que dicen nuestros{" "}
              <span className="text-gold-600">Clientes</span>
            </h2>
            <p className="text-xl text-earth-600 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa.
              Aquí algunas de sus experiencias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-earth-100 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-gold-500 mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-sage-100 text-sage-800"
                    >
                      {testimonial.service}
                    </Badge>
                  </div>
                  <p className="text-earth-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-earth-800">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-earth-800 to-sage-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para tu nueva{" "}
            <span className="text-gold-400">Transformación?</span>
          </h2>
          <p className="text-xl text-earth-100 mb-8 max-w-2xl mx-auto">
            Agenda tu cita hoy mismo y comienza tu viaje hacia un nuevo estilo
            único y auténtico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 text-lg"
            >
              <Link to="/reservas">Reservar Ahora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-earth-800 px-8 py-3 text-lg"
            >
              <Link to="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">Rastas</span>
                <span className="text-xl font-bold text-gold-400">Málaga</span>
                <span className="text-xl font-bold text-sage-400">Lions</span>
              </div>
              <p className="text-earth-300 mb-4">
                Especializados en rastas auténticas en el corazón de Málaga.
                Transforma tu estilo con nosotros.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/34666777888"
                  className="text-earth-300 hover:text-gold-400 transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="https://instagram.com/rastasmalagalions"
                  className="text-earth-300 hover:text-gold-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com/rastasmalagalions"
                  className="text-earth-300 hover:text-gold-400 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Servicios</h3>
              <ul className="space-y-2 text-earth-300">
                <li>
                  <Link to="/reservas" className="hover:text-gold-400">
                    Rastas Nuevas
                  </Link>
                </li>
                <li>
                  <Link to="/reservas" className="hover:text-gold-400">
                    Mantenimiento
                  </Link>
                </li>
                <li>
                  <Link to="/reservas" className="hover:text-gold-400">
                    Rastas con Color
                  </Link>
                </li>
                <li>
                  <Link to="/reservas" className="hover:text-gold-400">
                    Rastas Sintéticas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Enlaces</h3>
              <ul className="space-y-2 text-earth-300">
                <li>
                  <Link to="/galeria" className="hover:text-gold-400">
                    Galería
                  </Link>
                </li>
                <li>
                  <Link to="/tienda" className="hover:text-gold-400">
                    Tienda
                  </Link>
                </li>
                <li>
                  <Link to="/reservas" className="hover:text-gold-400">
                    Reservas
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="hover:text-gold-400">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Contacto</h3>
              <div className="space-y-2 text-earth-300">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+34 666 777 888</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>info@rastasmalagalions.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-1" />
                  <span>Centro de Málaga, España</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-earth-700 mt-8 pt-8 text-center text-earth-400">
            <p>© 2024 Rastas Málaga Lions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

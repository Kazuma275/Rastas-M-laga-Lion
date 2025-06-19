import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-earth-50 via-sage-50 to-gold-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiLz4KICAgICAgPGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkyNDAwZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+Cjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Especialistas en Rastas en Málaga
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-earth-800 mb-6 leading-tight">
              Rastas <span className="text-gold-600">Auténticas</span>
              <br />
              <span className="text-sage-700">Estilo Natural</span>
            </h1>

            <p className="text-xl text-earth-600 mb-8 max-w-2xl leading-relaxed">
              Transforma tu cabello con rastas profesionales. Más de 5 años
              creando peinados únicos que reflejan tu personalidad y estilo en
              el corazón de Málaga.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-earth-600">
                  Clientes Satisfechos
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sage-600 mb-1">5</div>
                <div className="text-sm text-earth-600">
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center md:block hidden">
                <div className="text-2xl font-bold text-earth-600 mb-1">
                  100%
                </div>
                <div className="text-sm text-earth-600">Natural</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 text-lg"
              >
                <Link to="/reservas">
                  Reservar Cita
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-earth-300 text-earth-700 hover:bg-earth-50 px-8 py-3 text-lg"
              >
                <Link to="/galeria">
                  Ver Trabajos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-earth-200 to-sage-200 aspect-[4/5] shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-earth-500">
                  <Users size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Imagen Principal</p>
                  <p className="text-sm">Foto de rastas profesionales</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gold-400 rounded-full opacity-20"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-sage-400 rounded-full opacity-30"></div>
            </div>

            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center mb-3">
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-earth-600">(4.9/5)</span>
              </div>
              <p className="text-sm text-earth-700 mb-2">
                "Increíble trabajo, mis rastas quedaron perfectas. ¡Totalmente
                recomendado!"
              </p>
              <p className="text-xs text-earth-500">- María, Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

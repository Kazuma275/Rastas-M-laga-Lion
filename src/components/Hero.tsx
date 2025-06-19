import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50">
      {/* Jamaican Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            #dc2626 0px,
            #dc2626 10px,
            #fcd34d 10px,
            #fcd34d 20px,
            #16a34a 20px,
            #16a34a 30px,
            transparent 30px,
            transparent 60px
          )`,
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200">
              <Heart className="w-4 h-4 mr-2 text-rasta-red-600" />
              One Love - Especialistas en Rastas Auténticas
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-rasta-red-600">Rastas</span>{" "}
              <span className="text-rasta-gold-400">Auténticas</span>
              <br />
              <span className="text-rasta-green-600">Jah Bless</span>{" "}
              <span className="text-rasta-black-800">Style</span>
            </h1>

            <p className="text-xl text-rasta-black-600 mb-8 max-w-2xl leading-relaxed">
              Conecta con tus raíces rastafari. Creamos rastas auténticas que
              honran la tradición jamaicana y reflejan tu espiritualidad. One
              Love, One Heart en cada trabajo.
            </p>

            {/* Rastafari Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-rasta-red-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-rasta-black-600">
                  Rastas Blessed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rasta-gold-500 mb-1">
                  5
                </div>
                <div className="text-sm text-rasta-black-600">
                  Years of Irie
                </div>
              </div>
              <div className="text-center md:block hidden">
                <div className="text-2xl font-bold text-rasta-green-600 mb-1">
                  100%
                </div>
                <div className="text-sm text-rasta-black-600">
                  Natural Vibes
                </div>
              </div>
            </div>

            {/* CTA Buttons with Rastafari Colors */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-rasta-green-600 to-rasta-green-700 hover:from-rasta-green-700 hover:to-rasta-green-800 text-white px-8 py-3 text-lg border-0"
              >
                <Link to="/reservas">
                  Bless Up - Reservar
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-rasta-gold-400 text-rasta-gold-600 hover:bg-rasta-gold-50 px-8 py-3 text-lg"
              >
                <Link to="/galeria">
                  Ver Irie Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-rasta-red-200 via-rasta-gold-200 to-rasta-green-200 aspect-[4/5] shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-rasta-black-500">
                  <Users size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Irie Dreadlocks</p>
                  <p className="text-sm">Authentic Jamaican Style</p>
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
              <div className="absolute bottom-8 left-8">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/80">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 bg-rasta-green-600"></div>
                    <div className="flex-1 bg-rasta-gold-400"></div>
                    <div className="flex-1 bg-rasta-red-600"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating testimonial card with Rastafari theme */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs border-l-4 border-rasta-green-600">
              <div className="flex items-center mb-3">
                <div className="flex text-rasta-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-rasta-black-600">
                  (4.9/5)
                </span>
              </div>
              <p className="text-sm text-rasta-black-700 mb-2">
                "Jah bless! Mis rastas están perfectas. One Love para este
                trabajo increíble! 🇯🇲"
              </p>
              <p className="text-xs text-rasta-black-500">- Ital Sister</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

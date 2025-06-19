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
import { ShoppingBag, Package, Truck, Shield, ArrowRight } from "lucide-react";

const Store = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-earth-50 via-sage-50 to-gold-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold-100 text-gold-800 mb-6">Próximamente</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-earth-800 mb-6">
            Tienda <span className="text-gold-600">Online</span>
          </h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Estamos preparando una experiencia de compra única con los mejores
            productos para el cuidado y mantenimiento de tus rastas.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-earth-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-earth-700 font-medium">En Desarrollo</span>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              ¿Qué encontrarás en nuestra{" "}
              <span className="text-gold-600">Tienda?</span>
            </h2>
            <p className="text-xl text-earth-600 max-w-2xl mx-auto">
              Una selección cuidadosa de productos premium para el cuidado
              integral de tus rastas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Package,
                title: "Productos de Cuidado",
                description:
                  "Champús, acondicionadores y aceites especiales para rastas",
                items: ["Champú residue-free", "Aceites naturales", "Sprays"],
              },
              {
                icon: ShoppingBag,
                title: "Accesorios",
                description:
                  "Abalorios, cuentas, hilos y decoraciones para personalizar",
                items: ["Cuentas de madera", "Hilos de colores", "Abalorios"],
              },
              {
                icon: Truck,
                title: "Envío Rápido",
                description: "Entrega en 24-48h en península",
                items: [
                  "Envío gratuito +50€",
                  "Embalaje ecológico",
                  "Tracking",
                ],
              },
              {
                icon: Shield,
                title: "Calidad Garantizada",
                description: "Solo productos probados y recomendados",
                items: ["100% naturales", "Testado por expertos", "Garantía"],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center border-earth-100 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-gold-100 to-sage-100 w-fit">
                    <feature.icon className="w-8 h-8 text-earth-700" />
                  </div>
                  <CardTitle className="text-xl text-earth-800">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-earth-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-earth-600">
                    {feature.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center"
                      >
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Preview Products */}
          <div className="bg-gradient-to-br from-sage-50 to-earth-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">
                Vista Previa de Productos
              </h3>
              <p className="text-earth-600">
                Algunos de los productos que estarán disponibles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kit de Inicio para Rastas",
                  price: "39,99€",
                  description: "Todo lo necesario para empezar",
                },
                {
                  name: "Aceite de Coco Premium",
                  price: "19,99€",
                  description: "100% orgánico y natural",
                },
                {
                  name: "Set de Cuentas Artesanales",
                  price: "24,99€",
                  description: "Colección única de madera",
                },
              ].map((product, index) => (
                <Card
                  key={index}
                  className="border-earth-200 opacity-75 hover:opacity-100 transition-opacity"
                >
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-earth-200 to-sage-200 rounded-lg mb-4 flex items-center justify-center">
                      <Package className="w-12 h-12 text-earth-500 opacity-50" />
                    </div>
                    <h4 className="font-semibold text-earth-800 mb-2">
                      {product.name}
                    </h4>
                    <p className="text-sm text-earth-600 mb-3">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gold-600">
                        {product.price}
                      </span>
                      <Badge variant="secondary" className="bg-earth-100">
                        Próximamente
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-earth-800 to-sage-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sé el primero en{" "}
            <span className="text-gold-400">conocer la apertura</span>
          </h2>
          <p className="text-xl text-earth-100 mb-8 max-w-2xl mx-auto">
            Suscríbete y recibe un descuento exclusivo del 15% en tu primera
            compra cuando abramos la tienda.
          </p>

          <div className="max-w-md mx-auto flex gap-3 mb-6">
            <input
              type="email"
              placeholder="Tu email aquí..."
              className="flex-1 px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:border-gold-500"
            />
            <Button className="bg-gold-600 hover:bg-gold-700 text-white px-6">
              Suscribirse
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-earth-800"
            >
              Contactar por WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-earth-800"
            >
              Visitar Nuestro Salón
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;

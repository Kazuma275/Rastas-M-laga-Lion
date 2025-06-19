import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard, { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShoppingBag,
  Search,
  Filter,
  ShoppingCart,
  Heart,
  Package,
  Truck,
  Shield,
  Star,
} from "lucide-react";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});

  // Authentic Jamaican/Rastafari products
  const products: Product[] = [
    {
      id: "1",
      name: "Aceite de Canela Jamaicano",
      description:
        "Aceite natural de canela de Jamaica para fortalecer y dar brillo a tus rastas",
      price: 24.99,
      originalPrice: 29.99,
      category: "cuidado",
      status: "available",
      rating: 4.8,
      reviews: 127,
      isOrganic: true,
      stock: 15,
    },
    {
      id: "2",
      name: "Manteca de Karité Pura",
      description:
        "Manteca de karité 100% natural de Ghana para hidratar rastas secas",
      price: 19.99,
      category: "cuidado",
      status: "available",
      rating: 4.9,
      reviews: 203,
      isOrganic: true,
      stock: 8,
    },
    {
      id: "3",
      name: "Aceite de Coco Virgen",
      description:
        "Aceite de coco extra virgen para nutrición profunda del cabello",
      price: 16.99,
      category: "cuidado",
      status: "available",
      rating: 4.7,
      reviews: 89,
      isOrganic: true,
      stock: 25,
    },
    {
      id: "4",
      name: "Champú de Castilla Natural",
      description: "Champú libre de residuos con ingredientes 100% naturales",
      price: 22.99,
      category: "cuidado",
      status: "available",
      rating: 4.6,
      reviews: 156,
      isOrganic: true,
    },
    {
      id: "5",
      name: "Cuentas de Madera Africana",
      description:
        "Set de 20 cuentas artesanales de madera de ébano talladas a mano",
      price: 34.99,
      category: "accesorios",
      status: "available",
      rating: 4.9,
      reviews: 94,
      stock: 12,
    },
    {
      id: "6",
      name: "Hilos Rastafari (Rasta Colors)",
      description:
        "Hilos en colores rastafari (rojo, dorado, verde) para decorar rastas",
      price: 12.99,
      category: "accesorios",
      status: "available",
      rating: 4.5,
      reviews: 67,
      stock: 30,
    },
    {
      id: "7",
      name: "Abalorios de Cowrie Shells",
      description:
        "Conchas cowrie auténticas, símbolo de prosperidad en cultura africana",
      price: 28.99,
      category: "accesorios",
      status: "available",
      rating: 4.8,
      reviews: 112,
      stock: 18,
    },
    {
      id: "8",
      name: "Aceite de Jojoba Dorado",
      description: "Aceite de jojoba para sellado y protección de las rastas",
      price: 27.99,
      category: "cuidado",
      status: "out_of_stock",
      rating: 4.7,
      reviews: 78,
    },
    {
      id: "9",
      name: "Gorro Rasta Tam",
      description:
        "Gorro tradicional rastafari tejido a mano en colores auténticos",
      price: 39.99,
      category: "accesorios",
      status: "available",
      rating: 4.9,
      reviews: 145,
      stock: 7,
    },
    {
      id: "10",
      name: "Spray de Agua de Rosas",
      description:
        "Spray hidratante natural con agua de rosas para refrescar rastas",
      price: 18.99,
      category: "cuidado",
      status: "coming_soon",
      rating: 0,
      reviews: 0,
    },
    {
      id: "11",
      name: "Kit Starter Rastas Naturales",
      description:
        "Kit completo con todo lo necesario para empezar tus rastas naturales",
      price: 69.99,
      originalPrice: 89.99,
      category: "kits",
      status: "available",
      rating: 4.8,
      reviews: 234,
      isOrganic: true,
      stock: 10,
    },
    {
      id: "12",
      name: "Sal del Mar Muerto",
      description:
        "Sal pura del Mar Muerto para exfoliación del cuero cabelludo",
      price: 21.99,
      category: "cuidado",
      status: "available",
      rating: 4.6,
      reviews: 89,
      isOrganic: true,
      stock: 20,
    },
  ];

  const categories = [
    { id: "todos", label: "Todos los Productos", count: products.length },
    {
      id: "cuidado",
      label: "Cuidado Natural",
      count: products.filter((p) => p.category === "cuidado").length,
    },
    {
      id: "accesorios",
      label: "Accesorios Rastafari",
      count: products.filter((p) => p.category === "accesorios").length,
    },
    {
      id: "kits",
      label: "Kits Completos",
      count: products.filter((p) => p.category === "kits").length,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "todos" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (productId: string, quantity: number) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity,
    }));
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200">
            <ShoppingBag className="w-4 h-4 mr-2 text-rasta-green-600" />
            Productos Auténticos de Jamaica
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-rasta-red-600">Ital</span>{" "}
            <span className="text-rasta-gold-400">Shop</span>
            <br />
            <span className="text-rasta-green-600">Natural Vibes</span>
          </h1>
          <p className="text-xl text-rasta-black-600 max-w-3xl mx-auto leading-relaxed">
            Productos naturales y auténticos para el cuidado de tus rastas.
            Ingredientes blessed by Jah, directos de Jamaica y África.
          </p>
        </div>
      </section>

      {/* Store Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Cart Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rasta-black-400 h-4 w-4" />
                <Input
                  placeholder="Buscar productos naturales..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-rasta-green-200 focus:border-rasta-green-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-rasta-green-300 text-rasta-green-700 hover:bg-rasta-green-50"
              >
                <Heart className="mr-2 h-4 w-4" />
                Favoritos
              </Button>
              <Button className="bg-rasta-green-600 hover:bg-rasta-green-700 text-white relative">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Carrito
                {getTotalCartItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-rasta-red-600 text-white text-xs">
                    {getTotalCartItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-rasta-black-800 mb-6">
                Categorías{" "}
                <span className="text-rasta-green-600">Naturales</span>
              </h2>

              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto p-1 bg-rasta-green-100">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center p-3 data-[state=active]:bg-rasta-green-600 data-[state=active]:text-white"
                  >
                    <span className="font-medium text-sm">
                      {category.label}
                    </span>
                    <span className="text-xs opacity-80">
                      {category.count} productos
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Products Grid */}
            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Package className="mx-auto h-16 w-16 text-rasta-black-300 mb-4" />
                  <h3 className="text-xl font-semibold text-rasta-black-600 mb-2">
                    No se encontraron productos
                  </h3>
                  <p className="text-rasta-black-500">
                    Intenta con otros términos de búsqueda o categoría
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Store Features */}
      <section className="py-16 bg-gradient-to-br from-rasta-green-50 to-rasta-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rasta-black-800 mb-4">
              <span className="text-rasta-red-600">One Love</span> Service
            </h2>
            <p className="text-xl text-rasta-black-600 max-w-2xl mx-auto">
              Comprometidos con la calidad natural y el servicio excellent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "100% Natural & Organic",
                description:
                  "Todos nuestros productos son naturales y libres de químicos",
                color: "text-rasta-green-600",
              },
              {
                icon: Truck,
                title: "Envío Gratis +50€",
                description: "Envío gratuito en península para pedidos +50€",
                color: "text-rasta-gold-600",
              },
              {
                icon: Shield,
                title: "Calidad Garantizada",
                description:
                  "Productos testados y aprobados por especialistas rastafari",
                color: "text-rasta-red-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center border-rasta-green-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div
                    className={`mx-auto mb-4 p-4 rounded-full bg-white shadow-sm w-fit ${feature.color}`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-rasta-black-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-rasta-black-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & CTA */}
      <section className="py-16 bg-gradient-to-r from-rasta-red-600 via-rasta-gold-500 to-rasta-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Jah Bless Savings - 15% OFF
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Suscríbete y recibe descuentos exclusivos en productos naturales
            rastafari
          </p>

          <div className="max-w-md mx-auto flex gap-3 mb-6">
            <Input
              type="email"
              placeholder="tu.email@ital.com"
              className="bg-white border-white"
            />
            <Button className="bg-rasta-black-800 hover:bg-rasta-black-900 text-white px-6">
              Bless Up!
            </Button>
          </div>

          <div className="flex items-center justify-center text-white/80 text-sm">
            <Star className="w-4 h-4 mr-1" />
            <span>Más de 1000 rastas blessed con nuestros productos</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;

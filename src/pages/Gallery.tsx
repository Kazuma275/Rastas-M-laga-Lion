import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Filter, Grid, Star } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const categories = [
    { id: "todas", label: "Todas", count: 45 },
    { id: "naturales", label: "Naturales", count: 18 },
    { id: "sinteticas", label: "Sintéticas", count: 12 },
    { id: "colores", label: "Con Colores", count: 10 },
    { id: "mantenimiento", label: "Mantenimiento", count: 5 },
  ];

  // Mock gallery data - in real app, this would come from API
  const galleryItems = [
    {
      id: 1,
      category: "naturales",
      title: "Rastas Naturales Clásicas",
      description: "Cliente satisfecha con sus nuevas rastas naturales",
      likes: 24,
      featured: true,
    },
    {
      id: 2,
      category: "colores",
      title: "Rastas con Mechas Doradas",
      description: "Combinación perfecta de natural y color",
      likes: 31,
      featured: false,
    },
    {
      id: 3,
      category: "sinteticas",
      title: "Rastas Sintéticas Coloridas",
      description: "Look vibrante y temporal",
      likes: 19,
      featured: false,
    },
    {
      id: 4,
      category: "naturales",
      title: "Rastas Finas Naturales",
      description: "Estilo elegante y sofisticado",
      likes: 27,
      featured: true,
    },
    {
      id: 5,
      category: "colores",
      title: "Degradado Azul y Verde",
      description: "Técnica avanzada de coloración",
      likes: 35,
      featured: true,
    },
    {
      id: 6,
      category: "mantenimiento",
      title: "Antes y Después",
      description: "Mantenimiento profesional",
      likes: 22,
      featured: false,
    },
  ];

  const filteredItems =
    selectedCategory === "todas"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-earth-50 via-sage-50 to-gold-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold-100 text-gold-800 mb-6">
            Nuestros Trabajos
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-earth-800 mb-6">
            Galería de <span className="text-gold-600">Transformaciones</span>
          </h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Explora nuestra colección de trabajos realizados. Cada imagen cuenta
            la historia de una transformación única y el comienzo de un nuevo
            estilo de vida.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-2">
                  Filtra por Categoría
                </h2>
                <p className="text-earth-600">
                  Encuentra el estilo que más te inspire
                </p>
              </div>

              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 h-auto p-1 bg-earth-100">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center p-3 data-[state=active]:bg-gold-600 data-[state=active]:text-white"
                  >
                    <span className="font-medium">{category.label}</span>
                    <span className="text-xs opacity-80">
                      {category.count} fotos
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Gallery Grid */}
            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="group overflow-hidden border-earth-100 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image Placeholder */}
                    <div className="relative aspect-[4/5] bg-gradient-to-br from-earth-200 to-sage-200 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-earth-500">
                          <Camera
                            size={48}
                            className="mx-auto mb-3 opacity-50"
                          />
                          <p className="text-sm font-medium">Imagen</p>
                          <p className="text-xs">{item.title}</p>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gold-600 text-white">
                            <Star size={12} className="mr-1" />
                            Destacado
                          </Badge>
                        </div>
                      )}

                      {/* Likes Overlay */}
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm flex items-center">
                        <span className="mr-1">❤️</span>
                        {item.likes}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <Button
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-earth-800 hover:bg-earth-50"
                        >
                          Ver Detalle
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-earth-800">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-earth-600">
                            {item.description}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-sage-100 text-sage-800 capitalize"
                        >
                          {
                            categories.find((c) => c.id === item.category)
                              ?.label
                          }
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-earth-300 text-earth-700 hover:bg-earth-50"
                >
                  <Grid className="mr-2 h-5 w-5" />
                  Cargar Más Imágenes
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-earth-800 to-sage-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Te Inspiraste con Algún{" "}
            <span className="text-gold-400">Estilo?</span>
          </h2>
          <p className="text-xl text-earth-100 mb-8 max-w-2xl mx-auto">
            Agenda tu cita y hagamos realidad tu transformación. Cada trabajo es
            único y personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3"
            >
              Reservar Consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-earth-800 px-8 py-3"
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

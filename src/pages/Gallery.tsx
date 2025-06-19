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
import { Camera, Filter, Grid, Star, Heart } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const categories = [
    { id: "todas", label: "All Blessed Works", count: 45 },
    { id: "naturales", label: "Natural Ital", count: 18 },
    { id: "sinteticas", label: "Synthetic Vibes", count: 12 },
    { id: "colores", label: "Rasta Colors", count: 10 },
    { id: "mantenimiento", label: "Irie Maintenance", count: 5 },
  ];

  // Mock gallery data with rastafari vibes
  const galleryItems = [
    {
      id: 1,
      category: "naturales",
      title: "Rastas Naturales Ital Blessed",
      description: "Sister blessed con rastas naturales tradicionales",
      likes: 24,
      featured: true,
      rastaBless: true,
    },
    {
      id: 2,
      category: "colores",
      title: "Rasta Colors - Red Gold Green",
      description: "Combinación blessed de colores rastafari sagrados",
      likes: 31,
      featured: false,
      rastaBless: true,
    },
    {
      id: 3,
      category: "sinteticas",
      title: "Synthetic Vibes Colorful",
      description: "Look irie vibrante y temporal blessed",
      likes: 19,
      featured: false,
      rastaBless: false,
    },
    {
      id: 4,
      category: "naturales",
      title: "Fine Ital Dreadlocks",
      description: "Estilo elegant y sophisticated blessed",
      likes: 27,
      featured: true,
      rastaBless: true,
    },
    {
      id: 5,
      category: "colores",
      title: "Rastafari Sunset Gradient",
      description: "Técnica blessed de coloración rastafari tradicional",
      likes: 35,
      featured: true,
      rastaBless: true,
    },
    {
      id: 6,
      category: "mantenimiento",
      title: "Before & After Irie",
      description: "Mantenimiento professional blessed transformation",
      likes: 22,
      featured: false,
      rastaBless: true,
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rasta-red-100 via-rasta-gold-100 to-rasta-green-100 text-rasta-black-800 text-sm font-medium mb-6 border border-rasta-green-200">
            <Heart className="w-4 h-4 mr-2 text-rasta-red-600" />
            Nuestros Blessed Works
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-rasta-black-800 mb-6">
            Galería <span className="text-rasta-red-600">Rastafari</span>
            <br />
            <span className="text-rasta-gold-400">Transformations</span>{" "}
            <span className="text-rasta-green-600">Blessed</span>
          </h1>
          <p className="text-xl text-rasta-black-600 max-w-3xl mx-auto leading-relaxed">
            Explora nuestra colección blessed de trabajos rastafari realizados.
            Cada imagen cuenta la story de una transformación ital única y el
            beginning de un nuevo lifestyle blessed by Jah.
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
                <h2 className="text-2xl md:text-3xl font-bold text-rasta-black-800 mb-2">
                  Filtra por <span className="text-rasta-green-600">Vibe</span>{" "}
                  Rastafari
                </h2>
                <p className="text-rasta-black-600">
                  Encuentra el estilo ital que más inspire tu soul
                </p>
              </div>

              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 h-auto p-1 bg-gradient-to-r from-rasta-green-100 via-rasta-gold-100 to-rasta-red-100">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center p-3 data-[state=active]:bg-rasta-green-600 data-[state=active]:text-white"
                  >
                    <span className="font-medium">{category.label}</span>
                    <span className="text-xs opacity-80">
                      {category.count} blessed
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
                    className="group overflow-hidden border-rasta-green-200 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image Placeholder */}
                    <div className="relative aspect-[4/5] bg-gradient-to-br from-rasta-red-200 via-rasta-gold-200 to-rasta-green-200 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-rasta-black-500">
                          <Camera
                            size={48}
                            className="mx-auto mb-3 opacity-50"
                          />
                          <p className="text-sm font-medium">Blessed Image</p>
                          <p className="text-xs">{item.title}</p>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-rasta-gold-500 text-white">
                            <Star size={12} className="mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* Rasta Blessed Badge */}
                      {item.rastaBless && (
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                            <div className="h-full flex flex-col">
                              <div className="flex-1 bg-rasta-red-600"></div>
                              <div className="flex-1 bg-rasta-gold-400"></div>
                              <div className="flex-1 bg-rasta-green-600"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Likes Overlay */}
                      <div className="absolute bottom-4 right-4 bg-rasta-black-800/70 text-white px-2 py-1 rounded-full text-sm flex items-center">
                        <span className="mr-1">❤️</span>
                        {item.likes}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-rasta-black-800/0 group-hover:bg-rasta-black-800/20 transition-all duration-300 flex items-center justify-center">
                        <Button
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-rasta-black-800 hover:bg-gray-100"
                        >
                          Ver Blessed Detail
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-rasta-black-800">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-rasta-black-600">
                            {item.description}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-rasta-green-100 text-rasta-green-800 capitalize"
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
                  className="border-rasta-green-300 text-rasta-green-700 hover:bg-rasta-green-50"
                >
                  <Grid className="mr-2 h-5 w-5" />
                  Load More Blessed Works
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Rastafari Stats Section */}
      <section className="py-16 bg-gradient-to-r from-rasta-green-50 to-rasta-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rasta-black-800 mb-4">
              <span className="text-rasta-red-600">Blessed</span>{" "}
              <span className="text-rasta-gold-500">Statistics</span>{" "}
              <span className="text-rasta-green-600">Ital</span>
            </h2>
            <p className="text-xl text-rasta-black-600 max-w-2xl mx-auto">
              Números que reflejan nuestro commitment con la comunidad rastafari
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Rastas Blessed",
                color: "text-rasta-red-600",
              },
              {
                number: "5",
                label: "Years of Irie",
                color: "text-rasta-gold-500",
              },
              {
                number: "100%",
                label: "Natural Vibes",
                color: "text-rasta-green-600",
              },
              {
                number: "∞",
                label: "One Love",
                color: "text-rasta-black-800",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
                >
                  {stat.number}
                </div>
                <div className="text-rasta-black-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-rasta-red-600 via-rasta-gold-500 to-rasta-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Te Inspiraste con Algún{" "}
            <span className="text-rasta-black-800">Estilo</span>{" "}
            <span className="text-white">Blessed?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda tu cita rastafari y hagamos realidad tu transformación ital.
            Cada trabajo es único y blessed by Jah con One Love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-rasta-green-700 hover:bg-gray-100 px-8 py-3"
            >
              Bless Up - Reservar Consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-rasta-green-700 px-8 py-3"
            >
              One Love WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

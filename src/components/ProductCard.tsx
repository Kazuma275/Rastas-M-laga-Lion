import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, ShoppingCart, Minus, Plus, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  status: "available" | "out_of_stock" | "coming_soon";
  rating: number;
  reviews: number;
  image?: string;
  isOrganic?: boolean;
  isFavorite?: boolean;
  stock?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string, quantity: number) => void;
  onToggleFavorite?: (productId: string) => void;
}

const ProductCard = ({
  product,
  onAddToCart,
  onToggleFavorite,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(product.isFavorite || false);

  const handleAddToCart = () => {
    if (onAddToCart && product.status === "available") {
      onAddToCart(product.id, quantity);
    }
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
    if (onToggleFavorite) {
      onToggleFavorite(product.id);
    }
  };

  const getStatusBadge = () => {
    switch (product.status) {
      case "available":
        return (
          <Badge className="bg-rasta-green-100 text-rasta-green-800">
            Disponible
          </Badge>
        );
      case "out_of_stock":
        return (
          <Badge className="bg-rasta-red-100 text-rasta-red-800">Agotado</Badge>
        );
      case "coming_soon":
        return (
          <Badge className="bg-rasta-gold-100 text-rasta-gold-800">
            Próximamente
          </Badge>
        );
    }
  };

  const isDiscounted =
    product.originalPrice && product.originalPrice > product.price;

  return (
    <Card className="group overflow-hidden border-rasta-green-200 hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-rasta-green-100 to-rasta-gold-100 overflow-hidden">
        {/* Product Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-rasta-black-400">
            <ShoppingCart size={48} className="mx-auto mb-3 opacity-50" />
            <p className="text-sm font-medium">{product.name}</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">{getStatusBadge()}</div>

        {/* Organic Badge */}
        {product.isOrganic && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-rasta-green-600 text-white text-xs">
              100% Natural
            </Badge>
          </div>
        )}

        {/* Discount Badge */}
        {isDiscounted && (
          <div className="absolute top-12 left-3">
            <Badge className="bg-rasta-red-600 text-white">
              -
              {Math.round(
                ((product.originalPrice! - product.price) /
                  product.originalPrice!) *
                  100,
              )}
              %
            </Badge>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          <Heart
            size={18}
            className={cn(
              "transition-colors",
              isFavorited
                ? "fill-rasta-red-600 text-rasta-red-600"
                : "text-rasta-black-400",
            )}
          />
        </button>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-rasta-black-800/0 group-hover:bg-rasta-black-800/20 transition-all duration-300" />
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg text-rasta-black-800 line-clamp-2">
              {product.name}
            </CardTitle>
            <CardDescription className="text-rasta-black-600 line-clamp-2 mt-1">
              {product.description}
            </CardDescription>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex text-rasta-gold-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? "fill-current" : ""}
              />
            ))}
          </div>
          <span className="text-sm text-rasta-black-500 ml-2">
            ({product.reviews})
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-rasta-green-700">
              €{product.price.toFixed(2)}
            </span>
            {isDiscounted && (
              <span className="text-lg text-rasta-black-400 line-through">
                €{product.originalPrice!.toFixed(2)}
              </span>
            )}
          </div>
          {product.stock && product.stock < 10 && (
            <Badge
              variant="outline"
              className="border-rasta-red-300 text-rasta-red-700"
            >
              ¡Solo {product.stock} left!
            </Badge>
          )}
        </div>

        {/* Quantity & Add to Cart */}
        {product.status === "available" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-rasta-black-700">
                Cantidad:
              </span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-rasta-green-300"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-rasta-green-300"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full bg-rasta-green-600 hover:bg-rasta-green-700 text-white"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Añadir al Carrito
            </Button>
          </div>
        )}

        {product.status === "out_of_stock" && (
          <Button disabled className="w-full">
            Agotado
          </Button>
        )}

        {product.status === "coming_soon" && (
          <Button
            variant="outline"
            className="w-full border-rasta-gold-300 text-rasta-gold-700 hover:bg-rasta-gold-50"
          >
            Notificarme
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;

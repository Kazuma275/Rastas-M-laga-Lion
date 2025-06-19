import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (onAddToCart && product.status === "available") {
      setIsAdding(true);
      setTimeout(() => {
        onAddToCart(product.id, quantity);
        setIsAdding(false);
      }, 500);
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
          <Badge className="bg-rasta-green-100 text-rasta-green-800 border border-rasta-green-200">
            Disponible
          </Badge>
        );
      case "out_of_stock":
        return (
          <Badge className="bg-rasta-red-100 text-rasta-red-800 border border-rasta-red-200">
            Agotado
          </Badge>
        );
      case "coming_soon":
        return (
          <Badge className="bg-rasta-gold-100 text-rasta-gold-800 border border-rasta-gold-200">
            Próximamente
          </Badge>
        );
    }
  };

  const isDiscounted =
    product.originalPrice && product.originalPrice > product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="group overflow-hidden border-rasta-green-200 hover:border-rasta-green-300 hover:shadow-xl transition-all duration-500 h-full">
        {/* Enhanced Image Container */}
        <div className="relative aspect-square bg-gradient-to-br from-rasta-green-100 to-rasta-gold-100 overflow-hidden">
          {/* Product Image Placeholder with animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="text-center text-rasta-black-400">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <ShoppingCart size={48} className="mx-auto mb-3 opacity-50" />
              </motion.div>
              <p className="text-sm font-medium">{product.name}</p>
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            className="absolute top-3 left-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            {getStatusBadge()}
          </motion.div>

          {/* Organic Badge */}
          {product.isOrganic && (
            <motion.div
              className="absolute top-3 right-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Badge className="bg-rasta-green-600 text-white text-xs font-semibold">
                100% Natural
              </Badge>
            </motion.div>
          )}

          {/* Discount Badge */}
          {isDiscounted && (
            <motion.div
              className="absolute top-12 left-3"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <Badge className="bg-rasta-red-600 text-white font-bold">
                -
                {Math.round(
                  ((product.originalPrice! - product.price) /
                    product.originalPrice!) *
                    100,
                )}
                %
              </Badge>
            </motion.div>
          )}

          {/* Enhanced Favorite Button */}
          <motion.button
            onClick={handleToggleFavorite}
            className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isFavorited ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart
                size={18}
                className={cn(
                  "transition-colors",
                  isFavorited
                    ? "fill-rasta-red-600 text-rasta-red-600"
                    : "text-rasta-black-400 hover:text-rasta-red-500",
                )}
              />
            </motion.div>
          </motion.button>

          {/* Enhanced Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-rasta-black-800/0 group-hover:bg-rasta-black-800/10 transition-all duration-500"
            initial={false}
          />
        </div>

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <CardTitle className="text-lg text-rasta-black-800 line-clamp-2 mb-2">
                {product.name}
              </CardTitle>
              <CardDescription className="text-rasta-black-600 line-clamp-2">
                {product.description}
              </CardDescription>
            </div>
          </div>

          {/* Enhanced Rating */}
          <motion.div
            className="flex items-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex text-rasta-gold-400">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                >
                  <Star
                    size={14}
                    className={
                      i < Math.floor(product.rating) ? "fill-current" : ""
                    }
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-sm text-rasta-black-500 ml-2">
              ({product.reviews})
            </span>
          </motion.div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Enhanced Price */}
          <motion.div
            className="flex items-center justify-between mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-rasta-green-700">
                €{product.price.toFixed(2)}
              </span>
              {isDiscounted && (
                <motion.span
                  className="text-lg text-rasta-black-400 line-through"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  €{product.originalPrice!.toFixed(2)}
                </motion.span>
              )}
            </div>
            {product.stock && product.stock < 10 && (
              <Badge
                variant="outline"
                className="border-rasta-red-300 text-rasta-red-700 bg-rasta-red-50"
              >
                ¡Solo {product.stock} left!
              </Badge>
            )}
          </motion.div>

          {/* Enhanced Quantity & Add to Cart */}
          {product.status === "available" && (
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-rasta-black-700">
                  Cantidad:
                </span>
                <div className="flex items-center space-x-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-rasta-green-300 hover:bg-rasta-green-50"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.span
                    key={quantity}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="w-8 text-center font-medium"
                  >
                    {quantity}
                  </motion.span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-rasta-green-300 hover:bg-rasta-green-50"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full bg-rasta-green-600 hover:bg-rasta-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <AnimatePresence mode="wait">
                    {isAdding ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Añadiendo...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="button"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Añadir al Carrito
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </motion.div>
          )}

          {product.status === "out_of_stock" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                disabled
                className="w-full bg-rasta-black-200 text-rasta-black-500 cursor-not-allowed"
              >
                Agotado
              </Button>
            </motion.div>
          )}

          {product.status === "coming_soon" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full border-2 border-rasta-gold-300 text-rasta-gold-700 bg-rasta-gold-50 hover:bg-rasta-gold-100 hover:border-rasta-gold-400 font-semibold"
                >
                  Notificarme
                </Button>
              </motion.div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;

import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rasta-green-50 via-rasta-gold-50 to-rasta-red-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? "#dc2626" : i % 3 === 1 ? "#fcd34d" : "#16a34a"
              }, transparent)`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            initial={{
              x: `${(i % 3) * 33}%`,
              y: `${Math.floor(i / 3) * 40}%`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold mb-4">
            <span className="text-rasta-red-600">4</span>
            <span className="text-rasta-gold-400">0</span>
            <span className="text-rasta-green-600">4</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-rasta-black-800 mb-4">
            ¡Irie! Página no encontrada
          </h1>
          <p className="text-lg text-rasta-black-600 mb-2">
            Esta página no existe en nuestro ital universe, blessed soul.
          </p>
          <p className="text-sm text-rasta-black-500">
            Ruta intentada:{" "}
            <code className="bg-rasta-black-100 px-2 py-1 rounded">
              {location.pathname}
            </code>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-rasta-green-600 hover:bg-rasta-green-700 text-white font-semibold shadow-lg"
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              className="border-2 border-rasta-gold-400 text-rasta-gold-700 bg-white hover:bg-rasta-gold-50 font-semibold"
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ir Atrás
              </button>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-rasta-black-500 text-sm flex items-center justify-center">
            <Heart className="w-4 h-4 mr-1 text-rasta-red-500" />
            One Love - Rastas Málaga Lions
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

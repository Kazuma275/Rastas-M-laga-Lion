import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
  X,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Galería", href: "/galeria" },
    { label: "Tienda", href: "/tienda" },
    { label: "Reservas", href: "/reservas" },
    { label: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const NavLink = ({
    href,
    label,
    mobile = false,
  }: {
    href: string;
    label: string;
    mobile?: boolean;
  }) => (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={href}
        className={`font-medium transition-all duration-300 relative ${
          mobile ? "block py-3 text-lg" : "text-sm"
        } ${
          isActive(href)
            ? "text-rasta-gold-600"
            : "text-rasta-black-700 hover:text-rasta-gold-600"
        }`}
        onClick={() => mobile && setIsOpen(false)}
      >
        {label}
        {isActive(href) && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rasta-gold-600 rounded-full"
            layoutId={mobile ? "mobile-indicator" : "indicator"}
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-rasta-green-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Enhanced Logo with Jamaican Colors */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                className="flex items-center"
                whileHover={{ rotateY: 10 }}
              >
                <span className="text-xl font-bold text-rasta-red-600">
                  Rastas
                </span>
                <span className="ml-1 text-xl font-bold text-rasta-gold-400">
                  Málaga
                </span>
                <span className="ml-1 text-xl font-bold text-rasta-green-600">
                  Lions
                </span>
              </motion.div>
              <motion.div
                className="flex flex-col w-1 h-6"
                animate={{ rotateZ: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="flex-1 bg-rasta-red-600"></div>
                <div className="flex-1 bg-rasta-gold-400"></div>
                <div className="flex-1 bg-rasta-green-600"></div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <NavLink {...item} />
              </motion.div>
            ))}
          </motion.nav>

          {/* Enhanced Desktop Actions */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              {[
                {
                  icon: MessageCircle,
                  href: "https://wa.me/34666777888",
                  color: "text-rasta-green-600 hover:text-rasta-green-700",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/rastasmalagalions",
                  color: "text-rasta-red-600 hover:text-rasta-red-700",
                },
                {
                  icon: Facebook,
                  href: "https://facebook.com/rastasmalagalions",
                  color: "text-rasta-gold-600 hover:text-rasta-gold-700",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-rasta-red-600 via-rasta-gold-500 to-rasta-green-600 hover:from-rasta-red-700 hover:via-rasta-gold-600 hover:to-rasta-green-700 text-white border-0 shadow-lg hover:shadow-xl font-semibold">
                <Phone size={16} className="mr-2" />
                Llamar Ahora
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="relative">
                  <AnimatePresence mode="wait">
                    {!isOpen ? (
                      <motion.div
                        key="menu"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="close"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-gradient-to-br from-white to-rasta-green-50"
            >
              <motion.div
                className="flex flex-col space-y-4 mt-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="flex items-center space-x-2 mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <span className="text-lg font-bold text-rasta-red-600">
                    Rastas
                  </span>
                  <span className="text-lg font-bold text-rasta-gold-400">
                    Málaga
                  </span>
                  <span className="text-lg font-bold text-rasta-green-600">
                    Lions
                  </span>
                  <div className="flex flex-col w-1 h-6 ml-2">
                    <div className="flex-1 bg-rasta-red-600"></div>
                    <div className="flex-1 bg-rasta-gold-400"></div>
                    <div className="flex-1 bg-rasta-green-600"></div>
                  </div>
                </motion.div>

                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <NavLink {...item} mobile />
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="pt-6 border-t border-rasta-green-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-rasta-red-600 via-rasta-gold-500 to-rasta-green-600 hover:from-rasta-red-700 hover:via-rasta-gold-600 hover:to-rasta-green-700 text-white border-0 mb-4 shadow-lg font-semibold">
                      <Phone size={16} className="mr-2" />
                      Llamar Ahora
                    </Button>
                  </motion.div>

                  <div className="flex justify-center space-x-4">
                    {[
                      {
                        icon: MessageCircle,
                        href: "https://wa.me/34666777888",
                        color: "text-rasta-green-600",
                      },
                      {
                        icon: Instagram,
                        href: "https://instagram.com/rastasmalagalions",
                        color: "text-rasta-red-600",
                      },
                      {
                        icon: Facebook,
                        href: "https://facebook.com/rastasmalagalions",
                        color: "text-rasta-gold-600",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-all duration-300 ${social.color} hover:scale-125`}
                        whileHover={{ y: -3, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;

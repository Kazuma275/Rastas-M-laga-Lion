import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

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
    <Link
      to={href}
      className={`font-medium transition-colors ${
        mobile ? "block py-2 text-lg" : "text-sm"
      } ${
        isActive(href) ? "text-gold-600" : "text-earth-700 hover:text-gold-600"
      }`}
      onClick={() => mobile && setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-xl font-bold text-earth-800">Rastas</span>
              <span className="ml-1 text-xl font-bold text-gold-600">
                Málaga
              </span>
              <span className="ml-1 text-xl font-bold text-sage-700">
                Lions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a
                href="https://wa.me/34666777888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/rastasmalagalions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/rastasmalagalions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
            <Button className="bg-gold-600 hover:bg-gold-700 text-white">
              <Phone size={16} className="mr-2" />
              Llamar Ahora
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-lg font-bold text-earth-800">
                    Rastas
                  </span>
                  <span className="text-lg font-bold text-gold-600">
                    Málaga
                  </span>
                  <span className="text-lg font-bold text-sage-700">Lions</span>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <NavLink key={item.href} {...item} mobile />
                  ))}
                </nav>

                <div className="pt-6 border-t">
                  <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white mb-4">
                    <Phone size={16} className="mr-2" />
                    Llamar Ahora
                  </Button>

                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://wa.me/34666777888"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 hover:text-sage-700 transition-colors"
                    >
                      <MessageCircle size={24} />
                    </a>
                    <a
                      href="https://instagram.com/rastasmalagalions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 hover:text-sage-700 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="https://facebook.com/rastasmalagalions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage-600 hover:text-sage-700 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

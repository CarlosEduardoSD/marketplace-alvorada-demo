import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, Menu, X, User, Heart, ShoppingBag } from "lucide-react";
import alvoradaLogo from "@/assets/alvorada-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Imóveis",
    "Carros",
    "Relógios", 
    "Iates",
    "Jatos",
    "Motocicletas",
    "Helicópteros",
    "Joias",
    "Colecionáveis",
    "Locações"
  ];

  return (
    <header className="nav-luxury sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={alvoradaLogo} 
              alt="Alvorada" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Procurar por imóveis de luxo, carros exclusivos..."
                className="pl-12 pr-4 py-3 w-full bg-background/50 border-border rounded-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden lg:flex">
              <Heart className="h-5 w-5 mr-2" />
              Favoritos
            </Button>
            <Button variant="ghost" size="sm" className="hidden lg:flex">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Carrinho
            </Button>
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <User className="h-5 w-5 mr-2" />
                Entrar
              </Button>
            </Link>
            <Link to="/vender">
              <Button className="btn-luxury hidden md:flex">
                Vender Conosco
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Categories navigation - desktop */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 py-4 border-t border-border">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/produtos/${category.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
            >
              {category}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Buscar produtos de luxo..."
              className="pl-12 pr-4 py-3 w-full bg-background/50 border-border rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/produtos/${category.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/\s+/g, '-')}`}
                  className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {category}
                </Link>
              ))}
              <div className="border-t border-border pt-4 space-y-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-5 w-5 mr-2" />
                    Entrar
                  </Button>
                </Link>
                <Link to="/vender">
                  <Button className="btn-luxury w-full">
                    Vender Conosco
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
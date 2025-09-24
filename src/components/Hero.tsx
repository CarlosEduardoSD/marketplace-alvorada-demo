import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, TrendingUp, Globe, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-darker via-luxury-dark to-background">
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-primary/10"></div>
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main hero content */}
        <div className="animate-fade-up">
          <h1 className="hero-title mb-6">
            O Marketplace
            <br />
            do <span className="italic">Luxo</span>
          </h1>
          
          <p className="hero-subtitle mb-8 max-w-3xl mx-auto">
            Descubra uma coleção exclusiva de imóveis extraordinários, 
            veículos de coleção e objetos de luxo selecionados especialmente para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/produtos/imoveis">
              <Button className="btn-luxury text-lg px-8 py-4">
                Explorar Coleção
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/vender">
              <Button variant="outline" className="btn-luxury-outline text-lg px-8 py-4">
                Vender seu Item
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-up delay-300">
          <div className="card-luxury p-6 text-center">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-luxury-dark" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">+580.000</h3>
            <p className="text-muted-foreground">Produtos Exclusivos</p>
          </div>

          <div className="card-luxury p-6 text-center">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-luxury-dark" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">+120</h3>
            <p className="text-muted-foreground">Países Atendidos</p>
          </div>

          <div className="card-luxury p-6 text-center">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-luxury-dark" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">21.000+</h3>
            <p className="text-muted-foreground">Vendedores Verificados</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 animate-fade-up delay-500">
          <p className="text-lg text-muted-foreground mb-6">
            "Uma busca • +580.000 itens • 21.000+ vendedores verificados • +120 países"
          </p>
          
          {/* Floating action elements */}
          <div className="flex justify-center space-x-4 opacity-60">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
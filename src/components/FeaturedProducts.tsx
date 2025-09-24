import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Heart, Eye, ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const products = [
    {
      id: 1,
      title: "Villa Moderna em Marbella",
      price: "€12.500.000",
      location: "Marbella, Espanha",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Imóveis",
      features: ["6 Quartos", "8 Banheiros", "Piscina", "Vista para o Mar"],
      isNew: true,
      views: 1234
    },
    {
      id: 2,
      title: "Ferrari 250 GTO 1962",
      price: "$48.000.000",
      location: "Monaco",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Carros",
      features: ["Restaurado", "Números Originais", "Histórico Completo"],
      isNew: false,
      views: 2567
    },
    {
      id: 3,
      title: "Patek Philippe Nautilus",
      price: "$1.200.000",
      location: "Genebra, Suíça",
      image: "https://images.unsplash.com/photo-1548171915-e79a380a874a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Relógios",
      features: ["Ouro Rosa", "Edição Limitada", "Certificado"],
      isNew: true,
      views: 891
    },
    {
      id: 4,
      title: "Iate Sunseeker 86",
      price: "$5.800.000",
      location: "Côte d'Azur, França",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Iates",
      features: ["26m", "4 Cabines", "Flybridge", "2023"],
      isNew: false,
      views: 456
    },
    {
      id: 5,
      title: "Gulfstream G650ER",
      price: "$70.000.000",
      location: "Miami, EUA",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Jatos",
      features: ["14 Passageiros", "Alcance 7.500nm", "Interior Customizado"],
      isNew: true,
      views: 789
    },
    {
      id: 6,
      title: "Picasso - Les Demoiselles",
      price: "$179.000.000",
      location: "Nova York, EUA",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Arte",
      features: ["Óleo sobre Tela", "1907", "Proveniência Certificada"],
      isNew: false,
      views: 3421
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Produtos em <span className="text-transparent bg-clip-text bg-gradient-gold">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção exclusiva dos itens mais extraordinários disponíveis hoje, 
            cada um representando o auge da excelência e exclusividade.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Link key={product.id} to={`/produto/${product.id}`}>
              <div
                className="card-luxury group cursor-pointer overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Top badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-primary text-primary-foreground">
                      Novo
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {product.category}
                  </Badge>
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0 rounded-full bg-background/90 hover:bg-background"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        favorites.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-foreground'
                      }`} 
                    />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0 rounded-full bg-background/90 hover:bg-background"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Views counter */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-foreground">{product.views}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{product.location}</span>
                </div>

                <p className="text-2xl font-bold text-primary mb-4">
                  {product.price}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {feature}
                    </Badge>
                  ))}
                  {product.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{product.features.length - 3}
                    </Badge>
                  )}
                </div>

                <Button 
                  variant="ghost" 
                  className="group-hover:text-primary p-0 h-auto font-medium w-full justify-start"
                >
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Link to="/produtos/imoveis">
            <Button className="btn-luxury text-lg px-8 py-4">
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
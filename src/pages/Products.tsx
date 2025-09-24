import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Heart, Eye, MapPin, Search, Grid3X3, List } from "lucide-react";

const Products = () => {
  const { category } = useParams();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const categoryData: Record<string, any> = {
    'imoveis': {
      title: 'Imóveis de Luxo',
      description: 'Propriedades exclusivas ao redor do mundo',
      count: '12.500+'
    },
    'carros': {
      title: 'Carros Clássicos',
      description: 'Veículos raros e de coleção',
      count: '8.900+'
    },
    'relogios': {
      title: 'Relógios de Luxo',
      description: 'Peças únicas e atemporais',
      count: '15.200+'
    },
    'iates': {
      title: 'Iates & Embarcações',
      description: 'Experiências náuticas exclusivas',
      count: '3.400+'
    },
    'jatos': {
      title: 'Jatos Privados',
      description: 'Aviação executiva de ponta',
      count: '890+'
    },
    'arte': {
      title: 'Arte & Colecionáveis',
      description: 'Obras raras e investimentos',
      count: '25.600+'
    }
  };

  const products = [
    {
      id: 1,
      title: "Villa Moderna em Marbella",
      price: "€12.500.000",
      location: "Marbella, Espanha",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "imoveis",
      features: ["6 Quartos", "8 Banheiros", "Piscina", "Vista para o Mar"],
      isNew: true,
      views: 1234,
      description: "Uma villa moderna excepcional localizada em uma das áreas mais prestigiadas de Marbella."
    },
    {
      id: 2,
      title: "Ferrari 250 GTO 1962",
      price: "$48.000.000",
      location: "Monaco",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "carros",
      features: ["Restaurado", "Números Originais", "Histórico Completo"],
      isNew: false,
      views: 2567,
      description: "Uma das Ferrari mais raras e valiosas já produzidas, com histórico de corrida completo."
    },
    {
      id: 3,
      title: "Patek Philippe Nautilus",
      price: "$1.200.000",
      location: "Genebra, Suíça",
      image: "https://images.unsplash.com/photo-1548171915-e79a380a874a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "relogios",
      features: ["Ouro Rosa", "Edição Limitada", "Certificado"],
      isNew: true,
      views: 891,
      description: "Relógio icônico da Patek Philippe em ouro rosa, edição limitada com certificado de autenticidade."
    },
    {
      id: 4,
      title: "Iate Sunseeker 86",
      price: "$5.800.000",
      location: "Côte d'Azur, França",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "iates",
      features: ["26m", "4 Cabines", "Flybridge", "2023"],
      isNew: false,
      views: 456,
      description: "Iate Sunseeker 86 em perfeitas condições, ideal para cruzeiros mediterrâneos."
    },
    {
      id: 5,
      title: "Gulfstream G650ER",
      price: "$70.000.000",
      location: "Miami, EUA",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "jatos",
      features: ["14 Passageiros", "Alcance 7.500nm", "Interior Customizado"],
      isNew: true,
      views: 789,
      description: "Jato executivo Gulfstream G650ER com interior totalmente customizado e alcance intercontinental."
    },
    {
      id: 6,
      title: "Picasso - Les Demoiselles",
      price: "$179.000.000",
      location: "Nova York, EUA",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "arte",
      features: ["Óleo sobre Tela", "1907", "Proveniência Certificada"],
      isNew: false,
      views: 3421,
      description: "Obra-prima de Pablo Picasso com proveniência totalmente certificada."
    }
  ];

  const currentCategory = categoryData[category || 'imoveis'];
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = !category || product.category === category;
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.location.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-luxury-dark to-background py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
                {currentCategory?.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                {currentCategory?.description}
              </p>
              <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                {currentCategory?.count} produtos disponíveis
              </Badge>
            </div>
          </div>
        </section>

        {/* Filters and controls */}
        <section className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-20 z-40">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e: any) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Em Destaque</SelectItem>
                    <SelectItem value="price-high">Maior Preço</SelectItem>
                    <SelectItem value="price-low">Menor Preço</SelectItem>
                    <SelectItem value="newest">Mais Recentes</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Faixa de preço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os preços</SelectItem>
                    <SelectItem value="0-1m">Até $1M</SelectItem>
                    <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                    <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                    <SelectItem value="10m+">$10M+</SelectItem>
                  </SelectContent>
                </Select>

                {/* View mode toggle */}
                <div className="flex border border-border rounded-lg overflow-hidden">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <Link key={product.id} to={`/produto/${product.id}`}>
                  <div
                    className={`card-luxury group cursor-pointer overflow-hidden relative ${
                      viewMode === 'list' ? 'flex flex-row h-64' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image container */}
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-80 flex-shrink-0' : 'h-64'
                    }`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Top badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {product.isNew && (
                          <Badge className="bg-primary text-primary-foreground">
                            Novo
                          </Badge>
                        )}
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
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-2">
                        {product.title}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{product.location}</span>
                      </div>

                      <p className="text-2xl font-bold text-primary mb-4">
                        {product.price}
                      </p>

                      {viewMode === 'list' && (
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      )}

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
                      </Button>
                    </div>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-12">
              <Button className="btn-luxury">
                Carregar Mais Produtos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Products;
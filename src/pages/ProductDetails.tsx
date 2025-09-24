import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Heart, Share2, Eye, MapPin, Calendar, ArrowLeft, Star, Phone, Mail, MessageCircle } from "lucide-react";

const ProductDetail = () => {
  // const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = {
    id: 1,
    title: "Villa Moderna em Marbella",
    price: "€12.500.000",
    location: "Marbella, Espanha",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    category: "Imóveis",
    features: ["6 Quartos", "8 Banheiros", "Piscina", "Vista para o Mar", "Garagem", "Jardim"],
    isNew: true,
    views: 1234,
    description: "Uma villa moderna excepcional localizada em uma das áreas mais prestigiadas de Marbella. Esta propriedade única oferece vistas deslumbrantes do Mediterrâneo e foi projetada com os mais altos padrões de luxo e conforto.",
    fullDescription: `Esta extraordinária villa moderna representa o auge do luxo mediterrâneo, situada em uma localização privilegiada em Marbella com vistas panorâmicas do mar. A propriedade foi meticulosamente projetada por arquitetos renomados, combinando design contemporâneo com funcionalidade excepcional.

A residência oferece 6 quartos principais, todos com suítes privativas e varandas com vista para o mar. O quarto principal conta com closet duplo e banheiro spa com banheira de hidromassagem. A área social é dominada por um conceito aberto que integra sala de estar, jantar e cozinha gourmet totalmente equipada com eletrodomésticos de última geração.

O exterior da propriedade é igualmente impressionante, com uma piscina infinita que se funde com o horizonte do mar, áreas de entretenimento ao ar livre, churrasqueira gourmet e jardins paisagísticos que garantem privacidade total.`,
    specifications: {
      "Área Total": "1.200 m²",
      "Área Construída": "800 m²",
      "Quartos": "6",
      "Banheiros": "8",
      "Garagem": "4 vagas",
      "Ano de Construção": "2021",
      "Tipo": "Villa Moderna",
      "Condição": "Novo"
    },
    seller: {
      name: "Premium Properties Marbella",
      rating: 4.9,
      reviews: 156,
      phone: "+34 952 123 456",
      email: "contact@premiummarbella.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link to="/produtos/imoveis" className="hover:text-primary transition-colors">
                Imóveis
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.title}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Back button */}
              <Link to="/produtos/imoveis">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar aos Produtos
                </Button>
              </Link>

              {/* Image gallery */}
              <div className="card-luxury overflow-hidden mb-8">
                <div className="relative">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.title}
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Image navigation */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-full bg-background/90 hover:bg-background"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          isFavorite ? 'fill-red-500 text-red-500' : 'text-foreground'
                        }`} 
                      />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-full bg-background/90 hover:bg-background"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Thumbnail strip */}
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product info */}
              <div className="card-luxury p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {product.isNew && (
                        <Badge className="bg-primary text-primary-foreground">
                          Novo
                        </Badge>
                      )}
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                    
                    <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
                      {product.title}
                    </h1>
                    
                    <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{product.views} visualizações</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Publicado hoje</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {product.price}
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Descrição</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {product.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Specifications */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Especificações</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="border border-border rounded-lg p-3">
                        <div className="text-sm text-muted-foreground">{key}</div>
                        <div className="font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Features */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Características</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact seller */}
              <div className="card-luxury p-6 mb-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Contactar Vendedor</h3>
                
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{product.seller.name}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">
                        {product.seller.rating} ({product.seller.reviews} avaliações)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="btn-luxury w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar Agora
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar E-mail
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>

                <Separator className="my-4" />

                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>Telefone:</strong> {product.seller.phone}
                  </p>
                  <p>
                    <strong>E-mail:</strong> {product.seller.email}
                  </p>
                </div>
              </div>

              {/* Similar products */}
              <div className="card-luxury p-6">
                <h3 className="text-lg font-semibold mb-4">Produtos Similares</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex space-x-3">
                      <img
                        src={`https://images.unsplash.com/photo-160059654281${item}?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80`}
                        alt="Produto similar"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm line-clamp-2">
                          Villa Exclusiva Costa del Sol
                        </div>
                        <div className="text-primary font-semibold text-sm">
                          €8.900.000
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link to="/produtos/imoveis">
                  <Button variant="outline" className="w-full mt-4">
                    Ver Mais Produtos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetail;
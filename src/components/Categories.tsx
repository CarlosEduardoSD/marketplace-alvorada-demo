import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "Imóveis de Luxo",
      description: "Mansões e propriedades exclusivas",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: "12.500+",
      gradient: "from-blue-500/20 to-blue-700/40",
      slug: "imoveis"
    },
    {
      title: "Carros Clássicos",
      description: "Veículos raros e de coleção", 
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: "8.900+",
      gradient: "from-red-500/20 to-red-700/40",
      slug: "carros"
    },
    {
      title: "Relógios de Luxo",
      description: "Peças únicas e atemporais",
      image: "https://images.unsplash.com/photo-1548171915-e79a380a874a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: "15.200+",
      gradient: "from-amber-500/20 to-amber-700/40",
      slug: "relogios"
    },
    {
      title: "Iates & Embarcações",
      description: "Experiências náuticas exclusivas",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: "3.400+",
      gradient: "from-cyan-500/20 to-cyan-700/40",
      slug: "iates"
    },
    {
      title: "Jatos Privados",
      description: "Aviação executiva de ponta",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: "890+",
      gradient: "from-purple-500/20 to-purple-700/40",
      slug: "jatos"
    },
    {
      title: "Arte & Colecionáveis",
      description: "Obras raras e investimentos",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: "25.600+",
      gradient: "from-emerald-500/20 to-emerald-700/40",
      slug: "arte"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Categorias em <span className="text-transparent bg-clip-text bg-gradient-gold">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossa curadoria exclusiva de produtos de luxo, 
            cada categoria cuidadosamente selecionada para atender os padrões mais exigentes.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Link key={category.title} to={`/produtos/${category.slug}`}>
              <div
                className="card-luxury group cursor-pointer overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Count badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-foreground">{category.count}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" className="group-hover:text-primary p-0 h-auto font-medium">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
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
              Ver Todas as Categorias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
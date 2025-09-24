import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import alvoradaLogo from "@/assets/alvorada-logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Categorias",
      links: [
        "Imóveis de Luxo",
        "Carros Clássicos",
        "Relógios Premium",
        "Iates & Embarcações",
        "Jatos Privados",
        "Arte & Colecionáveis",
        "Joias Exclusivas",
        "Motocicletas"
      ]
    },
    {
      title: "Serviços",
      links: [
        "Avaliação Gratuita",
        "Consultoria Especializada",
        "Financiamento Exclusivo",
        "Seguro Premium",
        "Transporte Seguro",
        "Autenticação",
        "Manutenção VIP",
        "Concierge Service"
      ]
    },
    {
      title: "Suporte",
      links: [
        "Central de Ajuda",
        "Como Comprar",
        "Como Vender",
        "Políticas de Privacidade",
        "Termos de Uso",
        "Garantias",
        "Devoluções",
        "Contato Direto"
      ]
    },
    {
      title: "Empresa",
      links: [
        "Sobre a Alvorada",
        "Nossa História",
        "Equipe Especializada",
        "Parcerias Globais",
        "Responsabilidade Social",
        "Sustentabilidade",
        "Carreiras",
        "Imprensa"
      ]
    }
  ];

  return (
    <footer className="bg-luxury-dark text-foreground">
      {/* Newsletter section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Mantenha-se <span className="text-transparent bg-clip-text bg-gradient-gold">Informado</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Receba em primeira mão as novidades sobre produtos exclusivos, 
              leilões especiais e oportunidades únicas de investimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-background/10 border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button className="btn-luxury sm:px-8">
                Inscrever-se
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Ao se inscrever, você concorda com nossa política de privacidade.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={alvoradaLogo} alt="Alvorada" className="h-16 w-auto" />
            </div>
            
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              A Alvorada é o marketplace premium que conecta colecionadores, investidores 
              e entusiastas aos itens de luxo mais exclusivos do mundo. 
              Sua nova jornada começa aqui.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>São Paulo, Brasil & Monaco</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+55 11 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@alvorada.luxury</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-primary/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-primary/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="border-border" />

      {/* Bottom section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Alvorada Luxury Marketplace. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Serviço
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
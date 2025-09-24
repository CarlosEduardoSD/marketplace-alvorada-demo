import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Upload, CheckCircle, Star, Users, TrendingUp, Shield, Camera, FileText, Phone } from "lucide-react";

const SellWithUs = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    price: '',
    location: '',
    contact: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const categories = [
    "Imóveis de Luxo",
    "Carros Clássicos", 
    "Relógios Premium",
    "Iates & Embarcações",
    "Jatos Privados",
    "Arte & Colecionáveis",
    "Joias Exclusivas",
    "Motocicletas"
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Audiência Global",
      description: "Acesso a mais de 500.000 compradores qualificados em 120+ países"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Consultoria Especializada",
      description: "Equipe dedicada de especialistas para maximizar o valor do seu item"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Preço Premium",
      description: "Nossa expertise garante que você obtenha o melhor preço do mercado"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Transações Seguras",
      description: "Processo totalmente seguro com verificação de compradores"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Colecionador de Carros Clássicos",
      content: "Vendi minha Ferrari 250 GT através da Alvorada. O processo foi impecável e consegui um preço acima do esperado.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marina Silva",
      role: "Investidora em Arte",
      content: "A equipe da Alvorada me ajudou a vender uma obra de arte em apenas 2 semanas. Profissionalismo excepcional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Roberto Costa",
      role: "Proprietário de Iate",
      content: "Experiência incrível. Desde a avaliação até a venda final, tudo foi conduzido com transparência total.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith('contact.')) {
      const contactField = field.replace('contact.', '');
      setFormData(prev => ({
        ...prev,
        contact: {
          ...prev.contact,
          [contactField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-luxury-dark to-background py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Link to="/">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Início
                </Button>
              </Link>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Venda com a <span className="text-transparent bg-clip-text bg-gradient-gold">Alvorada</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transforme seus itens de luxo em oportunidades exclusivas. 
                Nossa plataforma conecta você aos compradores mais qualificados do mundo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-luxury text-lg px-8 py-4">
                  Começar Agora
                </Button>
                <Button variant="outline" className="btn-luxury-outline text-lg px-8 py-4">
                  Avaliação Gratuita
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-gold">Alvorada</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mais de 10 anos conectando vendedores a compradores de luxo ao redor do mundo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-luxury p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sell Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                  Liste seu Item
                </h2>
                <p className="text-xl text-muted-foreground">
                  Processo simples em 3 etapas para começar a vender
                </p>

                {/* Progress bar */}
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-4">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          step <= currentStep 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                        </div>
                        {step < 3 && (
                          <div className={`w-16 h-1 mx-2 ${
                            step < currentStep ? 'bg-primary' : 'bg-muted'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="card-luxury">
                <CardContent className="p-8">
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <CardHeader className="p-0">
                        <CardTitle className="text-2xl">Informações Básicas</CardTitle>
                        <CardDescription>
                          Conte-nos sobre o item que você deseja vender
                        </CardDescription>
                      </CardHeader>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="category">Categoria *</Label>
                          <Select value={formData.category} onValueChange={(value: any) => handleInputChange('category', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="price">Preço Estimado *</Label>
                          <Input
                            id="price"
                            placeholder="Ex: R$ 1.500.000"
                            value={formData.price}
                            onChange={(e: any) => handleInputChange('price', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="title">Título do Anúncio *</Label>
                        <Input
                          id="title"
                          placeholder="Ex: Ferrari 250 GTO 1962 - Números Originais"
                          value={formData.title}
                          onChange={(e: any) => handleInputChange('title', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Localização *</Label>
                        <Input
                          id="location"
                          placeholder="Ex: São Paulo, SP - Brasil"
                          value={formData.location}
                          onChange={(e: any) => handleInputChange('location', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Descrição Detalhada *</Label>
                        <Textarea
                          id="description"
                          placeholder="Descreva seu item em detalhes: estado de conservação, histórico, características especiais..."
                          rows={6}
                          value={formData.description}
                          onChange={(e: any) => handleInputChange('description', e.target.value)}
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button onClick={nextStep} className="btn-luxury">
                          Próximo Passo
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Photos and Documents */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <CardHeader className="p-0">
                        <CardTitle className="text-2xl">Fotos e Documentos</CardTitle>
                        <CardDescription>
                          Adicione imagens de alta qualidade e documentos relevantes
                        </CardDescription>
                      </CardHeader>

                      <div className="space-y-6">
                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                          <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-lg font-semibold mb-2">Adicionar Fotos</h3>
                          <p className="text-muted-foreground mb-4">
                            Adicione até 20 fotos em alta resolução (mínimo 5 fotos obrigatórias)
                          </p>
                          <Button variant="outline">
                            <Upload className="h-4 w-4 mr-2" />
                            Selecionar Fotos
                          </Button>
                        </div>

                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-lg font-semibold mb-2">Documentos</h3>
                          <p className="text-muted-foreground mb-4">
                            Certificados de autenticidade, histórico de manutenção, etc.
                          </p>
                          <Button variant="outline">
                            <Upload className="h-4 w-4 mr-2" />
                            Adicionar Documentos
                          </Button>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button onClick={prevStep} variant="outline">
                          Voltar
                        </Button>
                        <Button onClick={nextStep} className="btn-luxury">
                          Próximo Passo
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Information */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <CardHeader className="p-0">
                        <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                        <CardDescription>
                          Como os compradores interessados podem entrar em contato
                        </CardDescription>
                      </CardHeader>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="contactName">Nome Completo *</Label>
                          <Input
                            id="contactName"
                            placeholder="Seu nome completo"
                            value={formData.contact.name}
                            onChange={(e: any) => handleInputChange('contact.name', e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contactPhone">Telefone *</Label>
                          <Input
                            id="contactPhone"
                            placeholder="+55 (11) 99999-9999"
                            value={formData.contact.phone}
                            onChange={(e: any) => handleInputChange('contact.phone', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">E-mail *</Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.contact.email}
                          onChange={(e: any) => handleInputChange('contact.email', e.target.value)}
                        />
                      </div>

                      <div className="bg-muted/50 rounded-lg p-6">
                        <h3 className="font-semibold mb-2">Próximos Passos:</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Nossa equipe fará uma análise completa do seu item</li>
                          <li>• Entraremos em contato em até 24 horas</li>
                          <li>• Criaremos um anúncio profissional otimizado</li>
                          <li>• Seu item será promovido para nossa rede global</li>
                        </ul>
                      </div>

                      <div className="flex items-start space-x-2">
                        <input type="checkbox" id="terms" className="rounded border-border mt-1" />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          Concordo com os termos de serviço e autorizo a Alvorada a promover meu item conforme descrito
                        </label>
                      </div>

                      <div className="flex justify-between">
                        <Button onClick={prevStep} variant="outline">
                          Voltar
                        </Button>
                        <Button className="btn-luxury">
                          Enviar para Análise
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                O que dizem nossos <span className="text-transparent bg-clip-text bg-gradient-gold">Vendedores</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-luxury p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="card-luxury p-12 text-center max-w-4xl mx-auto">
              <Phone className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold mb-4">
                Precisa de Ajuda?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para ajudá-lo a maximizar o valor do seu item de luxo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-luxury">
                  <Phone className="h-4 w-4 mr-2" />
                  Falar com Especialista
                </Button>
                <Button variant="outline" className="btn-luxury-outline">
                  Agendar Consultoria
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SellWithUs;
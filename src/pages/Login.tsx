import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import alvoradaLogo from "@/assets/alvorada-logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Back button */}
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>

            {/* Logo */}
            <div className="text-center mb-8">
              <img src={alvoradaLogo} alt="Alvorada" className="h-16 mx-auto mb-4" />
              <h1 className="text-2xl font-serif font-bold text-foreground">
                Bem-vindo à <span className="text-transparent bg-clip-text bg-gradient-gold">Alvorada</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                Acesse sua conta ou crie uma nova para começar
              </p>
            </div>

            <Card className="card-luxury">
              <CardContent className="p-6">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login">Entrar</TabsTrigger>
                    <TabsTrigger value="register">Cadastrar</TabsTrigger>
                  </TabsList>

                  {/* Login Form */}
                  <TabsContent value="login" className="space-y-4">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-xl">Entre em sua conta</CardTitle>
                      <CardDescription>
                        Acesse produtos exclusivos e ofertas especiais
                      </CardDescription>
                    </CardHeader>

                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Sua senha"
                            className="pl-10 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded border-border" />
                          <span>Lembrar-me</span>
                        </label>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Esqueci minha senha
                        </Button>
                      </div>

                      <Button className="btn-luxury w-full">
                        Entrar
                      </Button>
                    </form>

                    <Separator className="my-6" />

                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Entrar com Google
                      </Button>
                      
                      <Button variant="outline" className="w-full">
                        <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Entrar com Facebook
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Register Form */}
                  <TabsContent value="register" className="space-y-4">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-xl">Criar conta</CardTitle>
                      <CardDescription>
                        Junte-se à comunidade de luxo da Alvorada
                      </CardDescription>
                    </CardHeader>

                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Nome</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                              id="firstName"
                              placeholder="Seu nome"
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Sobrenome</Label>
                          <Input
                            id="lastName"
                            placeholder="Seu sobrenome"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="registerEmail">E-mail</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="registerEmail"
                            type="email"
                            placeholder="seu@email.com"
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="phone"
                            placeholder="+55 (11) 99999-9999"
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="registerPassword">Senha</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="registerPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Crie uma senha segura"
                            className="pl-10 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirme sua senha"
                            className="pl-10 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <input 
                          type="checkbox" 
                          id="terms" 
                          className="rounded border-border mt-1" 
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          Eu aceito os{" "}
                          <Button variant="link" className="p-0 h-auto text-sm">
                            Termos de Uso
                          </Button>
                          {" "}e{" "}
                          <Button variant="link" className="p-0 h-auto text-sm">
                            Política de Privacidade
                          </Button>
                        </label>
                      </div>

                      <Button className="btn-luxury w-full">
                        Criar Conta
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Problemas para acessar?{" "}
              <Button variant="link" className="p-0 h-auto text-sm">
                Entre em contato conosco
              </Button>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Login;
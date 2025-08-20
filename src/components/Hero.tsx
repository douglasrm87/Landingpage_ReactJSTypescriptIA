import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-hero overflow-hidden">
      <div className="container-corporate">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Achievement Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-primary-light text-primary border-primary/20">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Google Partner Premier - Hero.tsx
              </Badge>
            </div>

            {/* Headlines */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Transforme Visitantes</span>
                <br />
                em Clientes Pagantes
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Estratégias de marketing digital que realmente geram resultados para seu negócio
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="corporate" size="lg" className="text-lg px-8 py-4">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="corporate-outline" size="lg" className="text-lg px-8 py-4">
                Baixar Case de Sucesso
              </Button>
            </div>

            {/* Social Metric */}
            <div className="text-center lg:text-left">
              <p className="text-lg font-semibold text-primary">
                +500 empresas transformadas
              </p>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="relative animate-scale-in">
            <div className="relative shadow-hero rounded-2xl overflow-hidden hover-lift">
              <img
                src={heroMockup}
                alt="Marketing Pro Dashboard - Analytics e ROI"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg animate-bounce">
              <span className="text-sm font-bold">300% ROI</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border border-border px-4 py-2 rounded-lg shadow-lg">
              <span className="text-sm font-semibold text-primary">+1M leads gerados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
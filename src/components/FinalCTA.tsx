import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import ctaMockup from "@/assets/cta-mockup.jpg";

const FinalCTA = () => {
  return (
    <section className="section-spacing bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern 
      Este trecho cria um efeito visual de fundo suave e translúcido.
      Aqui está o que cada parte faz:
  
      className="absolute inset-0 opacity-10":
      Posiciona o elemento para ocupar todo o espaço do seu contêiner pai (absolute inset-0) e o deixa quase transparente (opacity-10).
    
      Dentro dele, há outro div também ocupando todo o espaço (absolute inset-0), com duas classes de fundo:

      bg-white/5: Aplica uma cor branca com baixa opacidade.
      bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]: Adiciona um gradiente radial, do centro para as bordas, que começa com branco translúcido e termina transparente.

      Finalidade:
      Criar um efeito de brilho ou iluminação suave no fundo, tornando o conteúdo mais atraente visualmente sem interferir na legibilidade. É um recurso comum em interfaces modernas para dar profundidade e destaque.

      */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>
      
      <div className="container-corporate relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - CTA Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                FinalCTA.tsx - Quero Multiplicar Meu Faturamento
              </h2>
              
              <p className="text-xl opacity-90 max-w-2xl mx-auto lg:mx-0">
                Agende uma conversa gratuita e descubra como podemos transformar seus resultados em 90 dias
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Agendar Ligação Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold transition-all duration-300"
              >
                Ver Cases de Sucesso
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-2 opacity-90">
              <p className="text-sm font-semibold">✓ Consulta 100% gratuita</p>
              <p className="text-sm font-semibold">✓ Diagnóstico personalizado</p>
              <p className="text-sm font-semibold">✓ Estratégia sob medida</p>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="relative animate-scale-in">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src={ctaMockup}
                  alt="Marketing Pro App - Resultados em tempo real"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating Success Metrics */}
              <div className="absolute -top-4 -right-4 bg-white text-primary px-4 py-2 rounded-lg shadow-lg animate-bounce">
                <span className="text-sm font-bold">+500 clientes</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white text-primary px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-bold">98% satisfação - FinalCTA.tsx</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
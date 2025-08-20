import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Headphones } from "lucide-react";

const WhyChoose = () => {
  const pillars = [
    {
      icon: CheckCircle,
      title: "Metodologia Comprovada",
      description: "Sistema próprio testado em mais de 500 empresas",
      color: "text-green-600"
    },
    {
      icon: Award,
      title: "Certificações Oficiais", 
      description: "Time certificado Google, Meta e principais plataformas",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Garantia de Resultados",
      description: "ROI mínimo garantido ou reembolso integral",
      color: "text-blue-600"
    },
    {
      icon: Headphones,
      title: "Suporte Premium",
      description: "WhatsApp direto com especialistas, resposta em até 2h",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="section-spacing bg-corporate-light/30">
      <div className="container-corporate">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Por que escolher a <span className="text-gradient">Marketing Pro</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="card-corporate text-center hover-lift group">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-gradient-card group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <CardTitle className="text-lg font-bold">{pillar.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
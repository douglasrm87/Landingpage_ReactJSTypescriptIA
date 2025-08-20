import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target } from "lucide-react";
import featureStrategy from "@/assets/feature-strategy.jpg";
import featureRoi from "@/assets/feature-roi.jpg";
import featureTeam from "@/assets/feature-team.jpg";

const Features = () => {
  const mainFeature = {
    title: "Estratégia Completa",
    description: "Análise, planejamento e execução de campanhas multicanal",
    image: featureStrategy,
    badge: "Metodologia Própria"
  };

  const secondaryFeatures = [
    {
      title: "ROI Garantido",
      description: "Aumento médio de 300% no faturamento em 6 meses",
      icon: TrendingUp,
      image: featureRoi,
      highlight: "300% ROI"
    },
    {
      title: "Acompanhamento Semanal", 
      description: "Relatórios detalhados e reuniões de alinhamento",
      icon: Target,
      image: featureTeam,
      highlight: "Relatórios Semanais"
    },
    {
      title: "Time Dedicado",
      description: "Especialistas em copy, design, mídia paga e SEO",
      icon: Users,
      image: featureTeam,
      highlight: "Especialistas"
    }
  ];

  return (
    <section id="services" className="section-spacing">
      <div className="container-corporate">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Features</span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Main Feature Card */}
          <Card className="card-corporate overflow-hidden hover-glow">
            <div className="grid lg:grid-cols-2 gap-8 p-0">
              <div className="p-8 flex flex-col justify-center">
                <CardHeader className="p-0 space-y-4">
                  <Badge variant="secondary" className="w-fit bg-primary-light text-primary">
                    {mainFeature.badge}
                  </Badge>
                  <CardTitle className="text-3xl font-bold">{mainFeature.title}</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {mainFeature.description}
                  </CardDescription>
                </CardHeader>
              </div>
              
              <div className="relative overflow-hidden lg:min-h-[300px]">
                <img
                  src={mainFeature.image}
                  alt={mainFeature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>

          {/* Secondary Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryFeatures.map((feature, index) => (
              <Card key={index} className="card-corporate hover-lift group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {feature.highlight}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-light">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
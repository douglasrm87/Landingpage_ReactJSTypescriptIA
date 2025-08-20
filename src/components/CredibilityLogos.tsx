import { Badge } from "@/components/ui/badge";

const CredibilityLogos = () => {
  const partners = [
    "Google Partner",
    "Meta Business Partner", 
    "RD Station Partner"
  ];

  return (
    <section className="py-12 border-b border-border">
      <div className="container-corporate">
        <div className="text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            CredibilityLogos.tsx - 
          </h1>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
             Parceiros oficiais das principais plataformas
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-6 py-3 text-sm font-semibold border-primary/20 text-primary bg-primary-light hover:bg-primary/5 transition-colors duration-200"
              >
                {partner}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityLogos;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo para ver resultados?",
      answer: "Primeiros resultados em 30 dias, transformação completa em 3-6 meses."
    },
    {
      question: "Funciona para meu nicho?", 
      answer: "Sim! Temos cases em mais de 50 nichos diferentes."
    },
    {
      question: "Qual o investimento mínimo?",
      answer: "Planos a partir de R$ 2.500/mês + investimento em mídia."
    },
    {
      question: "E se não der resultado?",
      answer: "Garantimos ROI mínimo de 200% ou devolvemos seu investimento."
    }
  ];

  return (
    <section className="section-spacing bg-corporate-light/30">
      <div className="container-corporate">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 shadow-card hover:shadow-hero transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
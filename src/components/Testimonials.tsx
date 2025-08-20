import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatarRicardo from "@/assets/avatar-ricardo.jpg";
import avatarFernanda from "@/assets/avatar-fernanda.jpg";
import avatarMarcos from "@/assets/avatar-marcos.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: avatarRicardo,
      name: "Ricardo Gomes",
      position: "CEO da TechStore",
      content: "Em 6 meses triplicamos o faturamento. O time é excepcional!",
      initials: "RG"
    },
    {
      avatar: avatarFernanda,
      name: "Fernanda Costa", 
      position: "Diretora da BeautyPro",
      content: "Finalmente marketing que traz resultado real. ROI de 450% no primeiro ano.",
      initials: "FC"
    },
    {
      avatar: avatarMarcos,
      name: "Marcos Oliveira",
      position: "Fundador da EduTech",
      content: "Pararam de vender serviço e viraram parceiros do nosso negócio.",
      initials: "MO"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-corporate">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-corporate hover-lift">
              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-medium leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
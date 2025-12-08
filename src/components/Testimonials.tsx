import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina",
    age: 28,
    image: "/imagens/ana.jpg",
    text: "Finalmente um app que entende minha rotina! As missões curtas me ajudaram a criar consistência sem me sentir sobrecarregada.",
    rating: 5,
    result: "Perdeu 8kg em 3 meses",
  },
  {
    name: "Juliana Santos",
    age: 34,
    image: "/imagens/juliana.jpg",
    text: "As receitas são incríveis e super práticas. Minha família toda está comendo mais saudável agora.",
    rating: 5,
    result: "7 dias consecutivos de missões",
  },
  {
    name: "Mariana Costa",
    age: 31,
    image: "/imagens/mariana.jpg",
    text: "O sistema de recompensas é viciante no bom sentido! Me sinto motivada a completar cada missão.",
    rating: 5,
    result: "21 dias de sequência ativa",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
  Histórias de{" "}
  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
    transformação real
  </span>
</h2>

          <p className="text-muted-foreground">
            Veja o que nossas usuárias estão conquistando
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-soft"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.age} anos</p>
                </div>
              </div>
              
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                "{testimonial.text}"
              </p>
              
              <div className="bg-secondary/50 rounded-lg px-3 py-2">
                <p className="text-xs font-medium text-primary">
                  ✨ {testimonial.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

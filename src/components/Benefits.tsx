import { motion } from "framer-motion";
import { Target, Utensils, Trophy, ArrowRight } from "lucide-react";
import homeWorkout from "@/assets/home-workout.webp";
import recipeBowl from "@/assets/recipe-bowl.webp";
import celebration from "@/assets/celebration.webp";

const benefits = [
  {
    icon: Target,
    title: "Missões Diárias",
    description: "Treinos de 10-30 min adaptados à sua rotina. Sem desculpas, só resultados.",
    color: "bg-primary/10",
    iconColor: "text-primary",
    image: homeWorkout,
  },
  {
    icon: Utensils,
    title: "Receitas Personalizadas",
    description: "+200 receitas fáceis e gostosas. Sem dietas malucas, só alimentação real.",
    color: "bg-accent/30",
    iconColor: "text-primary",
    image: recipeBowl,
  },
  {
    icon: Trophy,
    title: "Recompensas Reais",
    description: "Gamificação que funciona. Ganhe pontos, desbloqueie conquistas e celebre vitórias.",
    color: "bg-secondary",
    iconColor: "text-primary",
    image: celebration,
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
  Tudo que você precisa para{" "}
  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
    ser consistente
  </span>
</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Ciência do comportamento aplicada à sua rotina de treinos e alimentação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-soft group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center backdrop-blur-sm`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {benefit.description}
              </p>
              
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Saiba mais</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

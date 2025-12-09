import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Target, Utensils, Trophy } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import celebrationImg from "@/assets/celebration.webp";

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero = ({ onStartQuiz }: HeroProps) => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 px-4 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm text-muted-foreground">+12.000 mulheres já transformaram sua rotina</span>
            </motion.div>
            
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight mb-4">
  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
    Você não precisa tentar algo novo.
  </span>{" "}
  <span className="text-foreground/90">
    Só precisa conseguir continuar.
  </span>
</h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              O SlimFit Pro é o app que faz você ter consistência mesmo quando a motivação acaba.
            </p>
            
            {/* Mini features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {[
                { icon: Target, label: "Missões diárias" },
                { icon: Utensils, label: "Receitas fáceis" },
                { icon: Trophy, label: "Recompensas" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.button
              onClick={onStartQuiz}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2 text-base py-4 px-8"
            >
              <Play className="w-5 h-5" />
              Descobrir minha rotina
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Teste rápido de 60 segundos — 100% gratuito
            </p>
          </motion.div>
          
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
        
        {/* Celebration image decorative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="hidden lg:block absolute bottom-10 left-10 w-32 h-32 rounded-2xl overflow-hidden shadow-card border-2 border-card"
        >
          <img src={celebrationImg} alt="Conquista fitness" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

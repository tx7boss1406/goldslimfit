import { motion } from "framer-motion";
import { ClipboardList, Smartphone, Sparkles, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onStartQuiz: () => void;
}

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Responda o Quiz",
    description: "7 perguntas rápidas sobre seus objetivos e rotina.",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Veja a Simulação",
    description: "Prévia interativa da sua rotina personalizada no app.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Comece Hoje",
    description: "Acesse suas missões e receitas imediatamente.",
  },
];

const HowItWorks = ({ onStartQuiz }: HowItWorksProps) => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
  Como funciona em{" "}
  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
    30 segundos
  </span>
</h2>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
              )}
              
              <div className="relative text-center">
                <div className="relative inline-flex mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-card shadow-card flex items-center justify-center border border-border/50">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button onClick={onStartQuiz} className="btn-primary inline-flex items-center gap-2">
            Começar agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

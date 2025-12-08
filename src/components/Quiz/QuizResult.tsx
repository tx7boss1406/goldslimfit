import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles, Target, Utensils } from "lucide-react";

interface QuizResultProps {
  answers: Record<string, string>;
  onContinue: () => void;
}

const QuizResult = ({ answers, onContinue }: QuizResultProps) => {
  const getProfileTitle = () => {
    if (answers.barrier === "motivation" || answers.commitment === "unsure") {
      return "Motivação — precisa de recompensas";
    } else if (answers.barrier === "time" || answers.time === "10-20") {
      return "Tempo limitado — rotina compacta";
    } else if (answers.barrier === "confused") {
      return "Precisa de estrutura clara";
    }
    return "Disciplina — só falta personalização";
  };

  const getFeatures = () => {
    const features = [];
    
    if (answers.time === "10-20") {
      features.push({
        icon: Clock,
        text: "Missões de 10-15 min adaptadas à sua rotina",
      });
    } else if (answers.time === "20-40") {
      features.push({
        icon: Clock,
        text: "Missões de 20-30 min para resultados otimizados",
      });
    } else {
      features.push({
        icon: Clock,
        text: "Treinos completos de 40+ min para máximo resultado",
      });
    }
    
    if (answers.diet === "vegetarian") {
      features.push({
        icon: Utensils,
        text: "Receitas 100% vegetarianas, fáceis e gostosas",
      });
    } else {
      features.push({
        icon: Utensils,
        text: "Receitas fáceis e gostosas, sem sacrifícios",
      });
    }
    
    if (answers.barrier === "motivation") {
      features.push({
        icon: Target,
        text: "Sistema de recompensas para manter sua motivação alta",
      });
    } else {
      features.push({
        icon: Target,
        text: "Recompensas reais para celebrar cada conquista",
      });
    }
    
    return features;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 overflow-hidden"
>
  <img
    src="public/perfil2.jpg"
    alt="Ícone do perfil"
    className="w-full h-full object-cover"
  />
</motion.div>


      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
        Seu perfil:
      </h2>
      
      <p className="text-lg text-primary font-semibold mb-6">
        {getProfileTitle()}
      </p>
      
      <div className="card-soft text-left mb-8">
        <p className="text-sm text-muted-foreground mb-4">
          Em 30 segundos você verá uma rotina prática criada especialmente para você:
        </p>
        
        <div className="space-y-3">
          {getFeatures().map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <feature.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
        className="btn-primary w-full inline-flex items-center justify-center gap-2"
      >
        Ver minha rotina no app
        <ArrowRight className="w-5 h-5" />
      </motion.button>
      
      <p className="text-xs text-muted-foreground mt-4">
        100% gratuito • Sem cartão de crédito
      </p>
    </motion.div>
  );
};

export default QuizResult;

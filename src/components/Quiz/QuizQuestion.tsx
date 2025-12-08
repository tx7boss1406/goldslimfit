import { motion } from "framer-motion";
import { Check } from "lucide-react";
import quizWoman from "@/assets/quiz-woman.webp";
import quizMan from "@/assets/quiz-man.webp";

interface QuizQuestionProps {
  question: {
    id: string;
    question: string;
    options: Array<{ value: string; label: string; emoji: string; image?: string }>;
  };
  onAnswer: (questionId: string, value: string) => void;
  selectedValue?: string;
}

const genderImages: Record<string, string> = {
  female: quizWoman,
  male: quizMan,
};

const QuizQuestion = ({ question, onAnswer, selectedValue }: QuizQuestionProps) => {
  const isGenderQuestion = question.id === "gender";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
        {question.question}
      </h2>
      
      {isGenderQuestion ? (
        <div className="grid grid-cols-2 gap-4">
          {question.options.map((option, index) => {
            const isSelected = selectedValue === option.value;
            const imageSrc = genderImages[option.value];
            
            return (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAnswer(question.id, option.value)}
                className={`relative rounded-2xl overflow-hidden border-2 transition-all ${
                  isSelected
                    ? "border-primary shadow-glow"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={imageSrc}
                    alt={option.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-lg font-semibold text-primary-foreground">
                      {option.label}
                    </span>
                  </div>
                  
                  {/* Selected indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                    >
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedValue === option.value;
            
            return (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAnswer(question.id, option.value)}
                className={`quiz-option w-full ${isSelected ? "selected" : ""}`}
              >
                <span className="text-2xl">{option.emoji}</span>
                <span className="flex-1 text-left font-medium text-foreground">
                  {option.label}
                </span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-primary border-primary"
                      : "border-border"
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                </div>
              </motion.button>
            );
          })}
        </div>
      )}
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-muted-foreground mt-6"
      >
        Clique para selecionar e avançar automaticamente
      </motion.p>
    </motion.div>
  );
};

export default QuizQuestion;

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface QuizQuestionProps {
  question: {
    id: string;
    question: string;
    options: Array<{ value: string; label: string; image: string }>;
  };
  onAnswer: (questionId: string, value: string) => void;
  selectedValue?: string;
}

const QuizQuestion = ({ question, onAnswer, selectedValue }: QuizQuestionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="max-h-[75vh] overflow-y-auto px-1 pb-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
        {question.question}
      </h2>

      {/* GRID RESPONSIVO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {question.options.map((option, index) => {
          const isSelected = selectedValue === option.value;

          return (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onAnswer(question.id, option.value)}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 group ${
                isSelected
                  ? "border-primary shadow-glow scale-[1.02]"
                  : "border-border hover:border-primary/40 hover:scale-[1.01]"
              }`}
            >
              {/* IMAGEM PROPORCIONAL */}
              <div className="w-full h-56 sm:h-64 md:h-60 overflow-hidden bg-muted rounded-2xl">
                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* LABEL */}
              <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-foreground/80 via-transparent to-transparent">
                <span className="text-background font-semibold text-lg drop-shadow-md text-center">
                  {option.label}
                </span>
              </div>

              {/* CHECK */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                >
                  <Check className="w-5 h-5 text-primary-foreground" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-sm text-muted-foreground mt-6"
      >
        Clique para selecionar e avançar automaticamente
      </motion.p>
    </motion.div>
  );
};

export default QuizQuestion;

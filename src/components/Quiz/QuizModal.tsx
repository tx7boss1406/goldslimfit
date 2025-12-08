import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (result: QuizResult) => void;
}

export interface QuizResult {
  gender: string;
  time: string;
  goal: string;
  barrier: string;
  workout: string;
  diet: string;
  commitment: string;
  profile: string;
  tags: string[];
}

const questions = [
  {
    id: "gender",
    question: "Qual seu gênero?",
    options: [
      { value: "female", label: "Mulher", emoji: "👩" },
      { value: "male", label: "Homem", emoji: "👨" },
    ],
  },
  {
    id: "time",
    question: "Quanto tempo por dia você tem pra treinar?",
    options: [
      { value: "10-20", label: "10-20 min", emoji: "⚡" },
      { value: "20-40", label: "20-40 min", emoji: "💪" },
      { value: "40+", label: "40+ min", emoji: "🔥" },
    ],
  },
  {
    id: "goal",
    question: "Qual seu objetivo principal hoje?",
    options: [
      { value: "consistency", label: "Consistência e energia", emoji: "✨" },
      { value: "weight", label: "Perder peso", emoji: "🎯" },
      { value: "tone", label: "Tonificar", emoji: "💎" },
      { value: "selfcare", label: "Autocuidado", emoji: "🌸" },
    ],
  },
  {
    id: "barrier",
    question: "O que te impede de ser consistente?",
    options: [
      { value: "time", label: "Falta de tempo", emoji: "⏰" },
      { value: "motivation", label: "Falta de motivação", emoji: "😔" },
      { value: "quit", label: "Tentar e parar", emoji: "🔄" },
      { value: "confused", label: "Sem ideia do que fazer", emoji: "🤷" },
    ],
  },
  {
    id: "workout",
    question: "Prefere treinos em casa ou academia?",
    options: [
      { value: "home", label: "Em casa", emoji: "🏠" },
      { value: "gym", label: "Academia", emoji: "🏋️" },
      { value: "mixed", label: "Misto", emoji: "🔀" },
    ],
  },
  {
    id: "diet",
    question: "Você tem restrições alimentares?",
    options: [
      { value: "none", label: "Não tenho", emoji: "🍽️" },
      { value: "vegetarian", label: "Vegetariana", emoji: "🥗" },
      { value: "intolerance", label: "Intolerância", emoji: "⚠️" },
    ],
  },
  {
    id: "commitment",
    question: "Se tivesse um sistema que te recompensa, quanto seguiria?",
    options: [
      { value: "daily", label: "Todos os dias", emoji: "🏆" },
      { value: "3x", label: "3x por semana", emoji: "📅" },
      { value: "unsure", label: "Não sei ainda", emoji: "🤔" },
    ],
  },
];

const determineProfile = (answers: Record<string, string>): { profile: string; tags: string[] } => {
  const tags: string[] = [];
  
  if (answers.barrier === "time") tags.push("lack_time");
  if (answers.barrier === "motivation") tags.push("motivation_issue");
  if (answers.workout === "home") tags.push("home_workout");
  if (answers.diet === "vegetarian") tags.push("veg");
  if (answers.time === "10-20") tags.push("quick_sessions");
  
  let profile = "Disciplina — só falta personalização";
  
  if (answers.barrier === "motivation" || answers.commitment === "unsure") {
    profile = "Motivação — precisa de recompensas";
  } else if (answers.barrier === "time" || answers.time === "10-20") {
    profile = "Tempo limitado — rotina compacta";
  } else if (answers.barrier === "confused") {
    profile = "Precisa de estrutura clara";
  }
  
  return { profile, tags };
};

const QuizModal = ({ isOpen, onClose, onComplete }: QuizModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    // Track event
    console.log("quiz_answered", { question: questionId, answer: value });
    
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Quiz completed
        console.log("quiz_completed", newAnswers);
        const { profile, tags } = determineProfile(newAnswers);
        setShowResult(true);
      }
    }, 400);
  };

  const handleViewResult = () => {
    const { profile, tags } = determineProfile(answers);
    onComplete({
      ...answers,
      profile,
      tags,
    } as QuizResult);
    onClose();
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background"
      >
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">
                Pergunta {currentStep + 1} de {questions.length}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-24 pb-8 px-4 min-h-screen flex items-center">
          <div className="container mx-auto max-w-lg">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <QuizQuestion
                  key={currentStep}
                  question={questions[currentStep]}
                  onAnswer={handleAnswer}
                  selectedValue={answers[questions[currentStep].id]}
                />
              ) : (
                <QuizResult
                  key="result"
                  answers={answers}
                  onContinue={handleViewResult}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizModal;

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

// TODAS AS PERGUNTAS COM IMAGENS IGUAL AO MODELO PREMIUM
const questions = [
  {
    id: "gender",
    question: "Qual seu gênero?",
    options: [
      { value: "female", label: "Mulher", image: "/quiz/1.jpg" },
      { value: "male", label: "Homem", image: "/quiz/2.jpg" },
    ],
  },
  {
    id: "time",
    question: "Quanto tempo por dia você tem pra treinar?",
    options: [
      { value: "10-20", label: "10–20 min", image: "/quiz/3.jpg" },
      { value: "20-40", label: "20–40 min", image: "/quiz/4.jpg" },
      { value: "40+", label: "40+ min", image: "/quiz/5.jpg" },
    ],
  },
  {
    id: "goal",
    question: "Qual seu objetivo principal hoje?",
    options: [
      { value: "consistency", label: "Consistência", image: "/quiz/6.jpg" },
      { value: "weight", label: "Perder peso", image: "/quiz/7.jpg" },
      { value: "tone", label: "Tonificar", image: "/quiz/8.jpg" },
      { value: "selfcare", label: "Autocuidado", image: "/quiz/9.jpg" },
    ],
  },
  {
    id: "barrier",
    question: "O que te impede de ser consistente?",
    options: [
      { value: "time", label: "Falta de tempo", image: "/quiz/10.jpg" },
      { value: "motivation", label: "Motivação baixa", image: "/quiz/11.jpg" },
      { value: "quit", label: "Desiste fácil", image: "/quiz/12.jpg" },
      { value: "confused", label: "Sem direção", image: "/quiz/13.jpg" },
    ],
  },
  {
    id: "workout",
    question: "Prefere treinar onde?",
    options: [
      { value: "home", label: "Em casa", image: "/quiz/14.jpg" },
      { value: "gym", label: "Academia", image: "/quiz/15.jpg" },
      { value: "mixed", label: "Misto", image: "/quiz/16.jpg" },
    ],
  },
  {
    id: "diet",
    question: "Você tem restrições alimentares?",
    options: [
      { value: "none", label: "Não tenho", image: "/quiz/17.jpg" },
      { value: "vegetarian", label: "Vegetariana", image: "/quiz/18.jpg" },
      { value: "intolerance", label: "Intolerância", image: "/quiz/19.jpg" },
    ],
  },
  {
    id: "commitment",
    question: "Se tivesse recompensas, quanto seguiria?",
    options: [
      { value: "daily", label: "Todos os dias", image: "/quiz/20.jpg" },
      { value: "3x", label: "3× por semana", image: "/quiz/21.jpg" },
      { value: "unsure", label: "Não sei ainda", image: "/quiz/22.jpg" },
    ],
  },
];

const determineProfile = (answers: Record<string, string>) => {
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

    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResult(true);
      }
    }, 450);
  };

  const handleViewResult = () => {
    const { profile, tags } = determineProfile(answers);
    onComplete({ ...answers, profile, tags } as QuizResult);
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
        {/* HEADER */}
        <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">
                Pergunta {currentStep + 1} de {questions.length}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition"
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

        {/* CONTENT */}
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
                <QuizResult key="result" answers={answers} onContinue={handleViewResult} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizModal;

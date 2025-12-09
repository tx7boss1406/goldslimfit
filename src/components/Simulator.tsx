import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Flame, Star, Trophy, Utensils, Zap, Clock,Sparkles, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import type { QuizResult } from "./Quiz/QuizModal";
import recipeBowl from "@/assets/recipe-bowl.webp";

interface SimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  quizResult: QuizResult | null;
  onViewOffer: () => void;
}

const Simulator = ({ isOpen, onClose, quizResult, onViewOffer }: SimulatorProps) => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [activeScreen, setActiveScreen] = useState(0);

  const getMissionDuration = () => {
    if (!quizResult) return "15-20";
    if (quizResult.time === "10-20") return "10-15";
    if (quizResult.time === "20-40") return "20-30";
    return "40-50";
  };

  const getRecipeType = () => {
    if (!quizResult) return "Proteico";
    if (quizResult.diet === "vegetarian") return "Vegetariano";
    return "Proteico";
  };

  const screens = [
    { id: "missions", label: "Missões" },
    { id: "recipes", label: "Receitas" },
    { id: "progress", label: "Progresso" },
  ];

  const handleSaveEmail = () => {
    if (email) {
      console.log("email_optin", { email });
    }
    setShowEmailModal(false);
    onViewOffer();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background overflow-y-auto"
      >
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Simulação</p>
                <p className="font-semibold text-foreground">Sua Rotina Personalizada</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-24 pb-32 px-4">
          <div className="container mx-auto max-w-lg">
            {/* Recommendation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/10 rounded-xl p-4 mb-6 text-center"
            >
              <p className="text-sm text-primary font-medium">
                ✨ Plano recomendado: Rotina Compacta — {getMissionDuration()} min/dia
              </p>
            </motion.div>

            {/* Screen Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {screens.map((screen, index) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeScreen === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {screen.label}
                </button>
              ))}
            </div>

            {/* Phone Preview */}
            <div className="relative mx-auto w-full max-w-[320px]">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              
              <motion.div
                className="relative phone-mockup"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
               <div className="phone-screen w-full min-h-[560px] rounded-[32px] bg-background relative overflow-y-auto overflow-x-hidden">
                  <AnimatePresence mode="wait">
                    {activeScreen === 0 && (
                      <motion.div
                        key="missions"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full"
                      >
                        {/* Missions Screen - NOVA VERSÃO PREMIUM */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="bg-gradient-to-b from-primary to-primary/80 p-5 pb-8"
>
  {/* HEADER */}
  <div className="flex items-center justify-between text-primary-foreground">
    <div>
      <p className="text-xs opacity-80">Bom dia!</p>
      <p className="font-semibold text-lg">Suas missões de hoje</p>
    </div>

    {/* Indicador de streak */}
    <div className="flex items-center gap-2 bg-primary-foreground/20 rounded-xl px-4 py-1.5 shadow-inner">
      <Flame className="w-4 h-4" />
      <span className="font-medium text-sm">Streak: 1</span>
    </div>
  </div>

  {/* Barra de progresso diária */}
  <div className="mt-5">
    <p className="text-primary-foreground text-xs mb-1">Progresso diário</p>
    <div className="w-full h-2 rounded-full bg-primary-foreground/20 overflow-hidden">
      <div
        className="h-2 bg-primary-foreground rounded-full transition-all"
        style={{ width: "20%" }}
      />
    </div>
    <p className="text-primary-foreground/80 text-[11px] mt-1">1 de 5 missões concluídas</p>
  </div>
</motion.div>

{/* LISTA DE MISSÕES */}
<div className="p-4 -mt-6 space-y-4">

  {/* CARD 1 */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="bg-card rounded-2xl p-5 shadow-lg border border-primary/30 relative
"
  >
    <div className="absolute top-0 right-0 bg-primary/10 w-20 h-20 rounded-bl-full opacity-40" />
    
    <div className="flex items-start gap-4 relative z-10">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Zap className="w-6 h-6 text-primary" />
      </div>

      <div className="flex-1">
        <p className="font-semibold text-foreground text-sm">Treino Express</p>
        <p className="text-xs text-muted-foreground">{getMissionDuration()} min • Corpo inteiro</p>

        {/* Pontuação */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-lg">
            <Trophy className="w-3 h-3" />
            <span>+50 pts</span>
          </div>
        </div>
      </div>
    </div>

    {/* Botão iniciar */}
    <button className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded-xl font-medium text-sm shadow hover:opacity-90 transition">
      Iniciar missão
    </button>
  </motion.div>

  
  {/* CARD — Alongamento Matinal */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
  className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-5 border border-primary/30 shadow-lg"
>
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
      <Sparkles className="w-6 h-6 text-primary" />
    </div>

    <div className="flex-1">
      <p className="font-semibold text-foreground text-sm">Alongamento Matinal</p>
      <p className="text-xs text-muted-foreground">5 min • Flexibilidade</p>
    </div>
  </div>

  {/* Botão iniciar */}
    <button className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded-xl font-medium text-sm shadow hover:opacity-90 transition">
      Iniciar missão
    </button>
</motion.div>


</div>

                      </motion.div>
                    )}
                    
                    {activeScreen === 1 && (
                      <motion.div
                        key="recipes"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full"
                      >
                        {/* Recipes Screen */}
<div className="bg-accent p-4 pb-6 rounded-b-3xl shadow-md">
  <p className="font-semibold text-foreground text-lg">Receitas do dia</p>
  <p className="text-xs text-muted-foreground">Personalizadas para você</p>
</div>

<div className="p-4 -mt-4 space-y-4">

  {/* RECEITA 1 */}
  <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/40 hover:shadow-xl transition-all duration-300">
    {/* IMAGEM */}
    <div className="relative h-32">
      <img
        src="/images/recipes/mango.jpg"
        alt="Receita 1"
        className="w-full h-full object-cover"
      />

      {/* TAG */}
      <div className="absolute top-2 left-2 bg-primary/90 backdrop-blur-md text-primary-foreground text-[10px] px-2 py-0.5 rounded-full shadow">
        Recomendado
      </div>
    </div>

    {/* CONTEÚDO */}
    <div className="p-4">
      <p className="font-semibold text-foreground text-sm">mango smoothie bowl</p>
      <p className="text-xs text-muted-foreground mt-0.5">320 kcal • 2g proteina • Baixo açúcar</p>

      {/* PONTUAÇÃO */}
      <div className="flex items-center gap-1 text-xs text-primary mt-3 font-medium">
        <Star className="w-3 h-3 fill-primary" />
        <span>+30 pts ao preparar</span>
      </div>

      {/* BOTÃO */}
      <button className="mt-3 w-full bg-primary text-primary-foreground text-xs py-2 rounded-xl hover:opacity-90 transition">
        Ver receita completa
      </button>
    </div>
  </div>

  {/* RECEITA 2 */}
  <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/40 hover:shadow-xl transition-all duration-300">
    {/* IMAGEM */}
    <div className="relative h-32">
      <img
        src="/images/recipes/bolo.jpg"
        alt="Receita 2"
        className="w-full h-full object-cover"
      />

      {/* TAG */}
      <div className="absolute top-2 left-2 bg-blue-500/90 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
        Rápido • 10 min
      </div>
    </div>

    {/* CONTEÚDO */}
    <div className="p-4">
      <p className="font-semibold text-foreground text-sm">bolo de cenoura</p>
      <p className="text-xs text-muted-foreground mt-0.5">210 kcal • 7g proteína • Sem glúten</p>

      {/* PONTUAÇÃO */}
      <div className="flex items-center gap-1 text-xs text-primary mt-3 font-medium">
        <Star className="w-3 h-3 fill-primary" />
        <span>+20 pts ao preparar</span>
      </div>

      {/* BOTÃO */}
      <button className="mt-3 w-full bg-primary text-primary-foreground text-xs py-2 rounded-xl hover:opacity-90 transition">
        Ver receita completa
      </button>
    </div>
  </div>

</div>

                      </motion.div>
                    )}
                    
                    {activeScreen === 2 && (
                      <motion.div
                        key="progress"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full p-4"
                      >
                       {/* Progress Screen */}
<p className="font-semibold text-foreground mb-4 text-lg">Seu progresso</p>

{/* CARD PRINCIPAL — PROGRESSO SEMANAL */}
<div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-5 shadow-lg border border-primary/20 mb-5">
  
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <div>
      <p className="text-sm font-semibold text-foreground">Progresso da Semana</p>
      <p className="text-xs text-muted-foreground">Complete missões diariamente</p>
    </div>

    <div className="flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full">
      <Star className="w-4 h-4 fill-primary" />
      <span className="text-sm font-semibold">0 pts</span>
    </div>
  </div>

  {/* Barra de progresso premium */}
  <div className="w-full h-3 rounded-full bg-primary/10 overflow-hidden">
    <div
      className="h-full bg-primary rounded-full transition-all duration-500"
      style={{ width: "0%" }}
    />
  </div>

  {/* Info */}
  <p className="text-xs text-muted-foreground mt-3">
    0 de 7 missões — Comece hoje e ganhe seu primeiro troféu!
  </p>

  {/* Mini badges motivacionais */}
  <div className="flex items-center gap-2 mt-4">
    <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary">Conquiste XP</span>
    <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary">Progresso diário</span>
    <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary">Rumo ao nível 1</span>
  </div>
</div>



{/* CARD SECUNDÁRIO — PRÓXIMA CONQUISTA */}
<div className="bg-gradient-to-br from-secondary/70 to-secondary/40 rounded-3xl p-5 border border-primary/20 shadow-md">
  <div className="flex items-center gap-4">

    {/* Ícone */}
    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
      <Trophy className="w-6 h-6 text-primary" />
    </div>

    {/* Textos */}
    <div>
      <p className="font-medium text-foreground text-sm">Próxima conquista</p>
      <p className="text-xs text-muted-foreground">Complete 7 dias consecutivos e desbloqueie uma recompensa</p>
    </div>
  </div>

  {/* Barra de progresso da conquista */}
  <div className="w-full h-2 rounded-full bg-primary/10 overflow-hidden mt-4">
    <div
      className="h-full bg-primary rounded-full transition-all duration-500"
      style={{ width: "0%" }}
    />
  </div>

  {/* Rodapé motivacional */}
  <p className="text-[11px] text-muted-foreground mt-3 italic">
    Continue avançando — cada missão te deixa mais perto!
  </p>
</div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Fixed CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border p-4">
          <div className="container mx-auto max-w-lg">
            <button
              onClick={() => setShowEmailModal(true)}
              className="btn-primary w-full inline-flex items-center justify-center gap-2"
            >
              Quero salvar minha rotina
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Email Modal */}
        <AnimatePresence>
          {showEmailModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
             className="fixed inset-0 z-[9999] bg-foreground/50 flex items-end sm:items-center justify-center p-4"
              onClick={() => setShowEmailModal(false)}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-t-3xl sm:rounded-3xl p-6 w-full max-w-md shadow-2xl"
              >
                <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-6 sm:hidden" />
                
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Quer salvar sua rotina?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Enviaremos por email e você poderá acessá-la no app. (Usamos só para isso)
                  </p>
                </div>
                
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                
                <button
                  onClick={handleSaveEmail}
                  className="btn-primary w-full mb-3"
                >
                  Salvar por email
                </button>
                
                <button
                  onClick={() => {
                    setShowEmailModal(false);
                    onViewOffer();
                  }}
                  className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ver oferta sem salvar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Simulator;

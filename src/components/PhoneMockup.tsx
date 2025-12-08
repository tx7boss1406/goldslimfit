// src/components/PhoneMockup.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Check,
  Flame,
  Home,
  Star,
  Trophy,
  Utensils,
  Zap,
  Bell,
  Settings,
  ListChecks,
  BarChart2,
} from "lucide-react";
import {
  ScreenReceitas,
  ScreenMissoes,
  ScreenRelatorios,
  ScreenTreinos,
} from "./AppScreens";

type ScreenType = "home" | "missoes" | "receitas" | "progresso" | "treinos";

const PhoneMockup: React.FC = () => {
  const [screen, setScreen] = useState<ScreenType>("home");

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-75" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative phone-mockup w-[280px] md:w-[300px]"
      >
       <div className="phone-screen aspect-[9/19] relative overflow-hidden rounded-[32px]
     bg-gradient-to-br from-[#dbeafe] via-[#c7d2fe] to-[#f5d0fe]
     animate-[gradientShift_6s_ease-in-out_infinite]
     bg-[length:200%_200%]
     shadow-2xl">

         {/* HEADER PROFISSIONAL */}
<div
  className="
    px-4 py-3
    bg-gradient-to-r from-[#1e1b2e] via-[#252039] to-[#1d1a2d]
    rounded-t-[28px]
    shadow-lg shadow-black/30
    backdrop-blur-xl
  "
>
  <div className="flex items-center justify-between">
    
    {/* LADO ESQUERDO — PERFIL */}
<div className="flex items-center gap-3">
  <div
    className="
      w-9 h-9 rounded-full 
      bg-white/10 
      flex items-center justify-center
      shadow-md backdrop-blur-lg
      border border-white/20
    "
  >
    <img
      src="/images/perfil/slimfit.jpg"  // coloque aqui o nome do arquivo
      className="w-8 h-8 rounded-full object-cover"
      alt="perfil"
    />
  </div>

  <div className="leading-tight text-white">
    <p className="text-xs opacity-70">Bem-vindo(a)</p>
    <p className="text-sm font-semibold">Ana</p>
  </div>
</div>


    {/* LADO DIREITO — NOTIFICAÇÕES */}
    <div className="flex items-center gap-3">
      
      {/* NOTIFICAÇÕES */}
      <button
        className="
          relative w-9 h-9 
          rounded-full bg-white/10 
          flex items-center justify-center
          border border-white/20
          shadow-md backdrop-blur-md
          hover:bg-white/20 transition
        "
      >
        <Bell className="w-5 h-5 text-white" />
        <span
          className="
            absolute -top-1 -right-1
            w-4 h-4 bg-red-500 
            text-[10px] font-bold 
            flex items-center justify-center 
            rounded-full text-white
            shadow-md
          "
        >
          3
        </span>
      </button>

      {/* CONFIGURAÇÕES */}
      <button
        className="
          w-9 h-9 rounded-full 
          bg-white/10 flex items-center justify-center
          border border-white/20
          shadow-md backdrop-blur-md
          hover:bg-white/20 transition
        "
      >
        <Settings className="w-5 h-5 text-white" />
      </button>

    </div>

  </div>
</div>

          {/* ÁREA DE CONTEÚDO - troca entre telas */}
         <div className="p-4 h-[calc(100%-56px-60px)] overflow-y-auto">

            {/* container animado que troca conforme 'screen' */}
            <motion.div
              key={screen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {screen === "home" && (
                <>
                  {/* PROGRESS CARD NOVO */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="
    rounded-2xl p-5 shadow-lg border border-white/10 
    bg-white/5 backdrop-blur-xl
  "
>
  {/* Topo */}
  <div className="flex items-center justify-between mb-4">
    <div>
      <p className="text-xs text-muted-foreground">Seu progresso</p>
      <p className="text-sm font-semibold text-foreground">Semana atual</p>
    </div>

    {/* Badge de pontos */}
    <div className="
      flex items-center gap-1 
      bg-primary/20 text-primary 
      px-3 py-1.5 rounded-full
    ">
      <Star className="w-4 h-4 fill-primary" />
      <span className="text-sm font-semibold">420 pts</span>
    </div>
  </div>

  {/* Barra de Progresso Moderna */}
  <div className="relative w-full h-3 bg-muted/40 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "72%" }}
      transition={{ duration: 1 }}
      className="
        h-full bg-gradient-to-r 
        from-primary to-primary/60 
        rounded-full shadow-inner
      "
    />
  </div>

  {/* Texto */}
  <p className="text-xs text-muted-foreground mt-3">
    5 de 7 missões completas
  </p>
</motion.div>


                  {/* MISSÃO DO DIA — PREMIUM NOVO */}
<p className="text-sm font-semibold text-white/90 mt-4">
  Missão do dia
</p>

<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="
    rounded-2xl p-5 
    bg-white/5 
    backdrop-blur-xl 
    border border-white/10 
    shadow-[0_8px_30px_rgba(0,0,0,0.35)]
  "
>
  <div className="flex items-start gap-4">
    
    {/* ÍCONE COM AURA PREMIUM */}
    <div
      className="
        w-12 h-12 rounded-2xl 
        flex items-center justify-center
        bg-gradient-to-br from-blue-500/20 to-indigo-500/20
        border border-white/10
        shadow-[0_0_18px_-4px_rgba(0,119,255,0.5)]
      "
    >
      <Zap className="w-5 h-5 text-blue-400" />
    </div>

    {/* TEXTO */}
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-zinc-700 text-[16px]">
  Treino Express
</p>


       <span className="
  px-2 py-0.5 
  text-[11px] 
  rounded-full 
  bg-zinc-800/30
  text-zinc-500
  border border-zinc-700/40
">
  15 min
</span>

      </div>

      <p className="text-xs text-zinc-500 mt-0.5">
  Corpo inteiro • Nível iniciante
</p>


      {/* Linha divisória suave */}
      <div className="w-full h-px bg-white/10 my-3" />

      {/* PONTOS */}
      <div className="flex items-center gap-1 text-blue-400 font-medium text-xs">
        <Trophy className="w-3 h-3" />
        <span>+50 pts</span>
      </div>
    </div>

    {/* BOTÃO CHECK PREMIUM */}
    <button
      className="
        w-10 h-10 rounded-full 
        bg-gradient-to-br from-blue-500 to-indigo-500
        hover:brightness-110 
        active:scale-95
        transition-all 
        flex items-center justify-center
        shadow-[0_8px_20px_rgba(0,119,255,0.4)]
      "
      aria-label="Completar missão"
    >
      <Check className="w-5 h-5 text-white" />
    </button>

  </div>
</motion.div>


                  {/* RECEITAS DO DIA — CARROSSEL PREMIUM */}
                  <p className="text-sm font-semibold text-white/90 mt-4">
                    Receitas do dia
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 }}
                  >
                    <div className="flex gap-4 overflow-x-auto no-scrollbar mt-2 pb-2">
                      {[
                        {
                          title: "Lasanha de Berinjela",
                          desc: "320 kcal • Intermediário",
                          img: "/images/lasanha.jpg",
                        },
                        {
                          title: "Legumes Assados",
                          desc: "180 kcal • Fácil",
                          img: "/images/legumes.jpg",
                        },
                        {
                          title: "Panqueca Fit",
                          desc: "180 kcal • Rápida",
                          img: "/images/panqueca.jpg",
                        },
                      ].map((r, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.15 }}
                          className="
                            relative
                            min-w-[180px]
                            h-40
                            rounded-2xl
                            overflow-hidden
                            shadow-[0_4px_18px_rgba(0,0,0,0.35)]
                            border border-white/10
                          "
                        >
                          {/* IMAGEM */}
                          <img
                            src={r.img}
                            alt={r.title}
                            className="w-full h-full object-cover"
                          />

                          {/* OVERLAY ESCURO */}
                          <div className="absolute inset-0 bg-black/40" />

                          {/* TEXTO SOBREPOSTO */}
                          <div className="absolute bottom-3 left-3">
                            <p className="font-semibold text-white text-sm leading-tight">
                              {r.title}
                            </p>
                            <p className="text-xs text-white/80">{r.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                 {/* SUAS MISSÕES — VERSÃO PREMIUM */}
<p className="text-sm font-semibold mt-6 mb-2 
  text-white tracking-wide 
  bg-gradient-to-r from-primary/40 to-primary/10 
  px-3 py-1 rounded-lg inline-block shadow-sm">
  ⭐ Suas Missões
</p>

{/* LISTA HORIZONTAL IGUAL ÀS RECEITAS */}
<div className="flex overflow-x-auto gap-4 scrollbar-hide pb-2">
  {[
    {
      name: "Beber água",
      pts: 10,
      icon: "💧",
      img: "/missoes/beberagua.jpg",
      progress: 60,
    },
    {
      name: "Caminhada",
      pts: 15,
      icon: "👟",
      img: "/missoes/caminhada.jpg",
      progress: 20,
    },
    {
      name: "Lanche saudável",
      pts: 20,
      icon: "🥗",
      img: "/missoes/lanche.jpg",
      progress: 40,
    },
    {
      name: "Alongamento",
      pts: 5,
      icon: "🧘",
      img: "/missoes/alongamento.jpg",
      progress: 90,
    },
  ].map((m, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + i * 0.1 }}
      className="min-w-[140px] h-[180px] rounded-2xl relative overflow-hidden shadow-lg bg-zinc-800/40 border border-white/10"
    >
      {/* IMAGEM DE FUNDO */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${m.img})` }}
      />

      {/* CONTEÚDO */}
      <div className="relative z-10 p-3 flex flex-col h-full justify-between">
        
        {/* ÍCONE */}
        <div className="text-xl">{m.icon}</div>

        {/* TÍTULO */}
        <span className="text-sm font-semibold text-white drop-shadow">
          {m.name}
        </span>

        {/* PROGRESSO */}
        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${m.progress}%` }}
          />
        </div>

        {/* XP */}
        <div className="text-xs text-primary font-semibold">
          +{m.pts} XP
        </div>

        {/* BOTÃO */}
        <button
          className="mt-1 w-full text-xs py-1 rounded-lg bg-primary/30 text-primary font-medium hover:bg-primary/40 transition-all"
        >
          Completar
        </button>
      </div>
    </motion.div>
  ))}
</div>
                </>
              )}

              {screen === "missoes" && <ScreenMissoes />}
              {screen === "receitas" && <ScreenReceitas />}
              {screen === "progresso" && <ScreenRelatorios />}
              {screen === "treinos" && <ScreenTreinos />}
            </motion.div>
          </div>

          {/* BOTTOM BAR */}
          <div className="absolute bottom-0 left-0 w-full bg-background/90 backdrop-blur-md p-2 border-t border-border flex justify-around">
            <button
              onClick={() => setScreen("home")}
              className={`flex flex-col items-center ${
                screen === "home" ? "text-primary" : "opacity-60"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-[10px] mt-0.5">Home</span>
            </button>

            <button
              onClick={() => setScreen("missoes")}
              className={`flex flex-col items-center ${
                screen === "missoes" ? "text-primary" : "opacity-60"
              }`}
            >
              <ListChecks className="w-5 h-5" />
              <span className="text-[10px] mt-0.5">Missões</span>
            </button>

            <button
              onClick={() => setScreen("receitas")}
              className={`flex flex-col items-center ${
                screen === "receitas" ? "text-primary" : "opacity-60"
              }`}
            >
              <Utensils className="w-5 h-5" />
              <span className="text-[10px] mt-0.5">Receitas</span>
            </button>

            <button
              onClick={() => setScreen("progresso")}
              className={`flex flex-col items-center ${
                screen === "progresso" ? "text-primary" : "opacity-60"
              }`}
            >
              <BarChart2 className="w-5 h-5" />
              <span className="text-[10px] mt-0.5">Progresso</span>
            </button>

            <button
              onClick={() => setScreen("treinos")}
              className={`flex flex-col items-center ${
                screen === "treinos" ? "text-primary" : "opacity-60"
              }`}
            >
              <Zap className="w-5 h-5" />
              <span className="text-[10px] mt-0.5">Treinos</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneMockup;

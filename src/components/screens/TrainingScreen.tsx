import React from "react";
import { Dumbbell, Flame, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// TREINOS
const trainings = [
  { title: "Pernas — Força & Estabilidade", duration: "35 min", difficulty: "Intermediário" },
  { title: "Braços — Resistência Progressiva", duration: "25 min", difficulty: "Fácil" },
  { title: "Abdômen — Core Power", duration: "20 min", difficulty: "Difícil" },
  { title: "HIIT — Queima Rápida", duration: "15 min", difficulty: "Difícil" },
  { title: "Alongamento — Relax & Flex", duration: "10 min", difficulty: "Leve" },
  { title: "Full Body — Corpo Inteiro", duration: "40 min", difficulty: "Intermediário" },
];

export default function TrainingScreen() {
  return (
    <div
      className="
        p-5 pb-24 max-w-md mx-auto
        h-[calc(100%-88px)]
        overflow-y-auto
        rounded-[28px]
        bg-gradient-to-b from-[#1a2337] via-[#2d1f47] to-[#1b1a2d]
        shadow-inner shadow-black/40
      "
    >

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-extrabold text-[#E4C574] flex items-center gap-2 drop-shadow-xl">
          <Sparkles className="text-[#F5E3A8]" /> Treinos
        </h1>

        <p className="text-sm text-[#B9D7FF] mt-1">
          Evolua diariamente com treinos personalizados.
        </p>
      </motion.div>

      {/* GRID — 2 CARDS POR LINHA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trainings.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="
              relative
              p-4
              rounded-xl 
              bg-gradient-to-br from-[#2a2a3f] via-[#1e1e2d] to-[#161622]
              border border-white/10
              shadow-lg shadow-black/70
              backdrop-blur-md
              overflow-hidden
              hover:scale-[1.03]
              transition-transform
              active:scale-[0.98]
            "
          >

            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none"></div>

            {/* Conteúdo */}
            <div className="relative z-10">
              <h2 className="font-extrabold text-white text-sm leading-tight mb-1 drop-shadow">
                {t.title}
              </h2>

              <div className="flex items-center gap-2 text-gray-300 text-[11px] mb-3 mt-1">
                <Clock size={12} /> {t.duration}
                <Flame size={12} />

                <span
                  className={`
                    ${
                      t.difficulty === "Difícil"
                        ? "text-red-400"
                        : t.difficulty === "Intermediário"
                        ? "text-yellow-300"
                        : "text-green-400"
                    }
                    font-semibold
                  `}
                >
                  {t.difficulty}
                </span>
              </div>

              {/* Barra de animação */}
              <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: ["30%", "90%", "60%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-lime-400 rounded-full shadow-lg"
                ></motion.div>
              </div>

              {/* Botão — neon */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="
                  w-full 
                  bg-gradient-to-r from-lime-400 to-lime-500
                  text-black 
                  font-bold 
                  rounded-lg 
                  py-2 
                  flex items-center justify-center gap-2
                  shadow-[0_0_12px_rgba(120,255,120,0.7)]
                  hover:shadow-[0_0_18px_rgba(120,255,120,1)]
                  transition-all
                "
              >
                <Dumbbell size={14} /> Iniciar
              </motion.button>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

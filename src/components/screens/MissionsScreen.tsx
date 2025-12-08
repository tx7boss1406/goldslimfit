import React from "react";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionsScreen() {
  const missions = [
    {
      id: 1,
      title: "Beber 2L de água",
      desc: "Hidratação diária mínima",
      reward: 20,
      image: "/images/missions/agua.jpg",
      completed: false,
    },
    {
      id: 2,
      title: "Completar 1 treino",
      desc: "Faça qualquer treino do dia",
      reward: 40,
      image: "/images/missions/treino.jpg",
      completed: true,
    },
    {
      id: 3,
      title: "Ler 1 receita",
      desc: "Conheça uma nova refeição saudável",
      reward: 10,
      image: "/images/missions/receita.jpg",
      completed: false,
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-xl font-bold">Missões do Dia</h2>
      </motion.div>

      {/* MISSIONS LIST */}
      <div className="space-y-4 pb-6">
        {missions.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: m.id * 0.05 }}
            className="relative h-40 rounded-2xl overflow-hidden shadow-md group"
          >
            {/* BACKGROUND IMAGE */}
            <img
              src={m.image}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* CONTENT */}
            <div className="relative z-10 p-4 flex flex-col justify-between h-full text-white">
              <div>
                <h3 className="text-lg font-bold drop-shadow-md">{m.title}</h3>
                <p className="text-xs opacity-90 drop-shadow-sm">{m.desc}</p>
              </div>

              <div className="flex justify-between items-center">
                {/* REWARD */}
                <div className="flex items-center gap-1 text-yellow-300 font-semibold text-sm drop-shadow">
                  <Trophy className="w-4 h-4" /> {m.reward} XP
                </div>

                {/* COMPLETE BUTTON */}
                <button
                  className={`px-3 py-1.5 text-xs rounded-full font-semibold backdrop-blur-md transition-all shadow-md ${
                    m.completed
                      ? "bg-green-500/80 text-white"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {m.completed ? "Concluída ✓" : "Completar Missão"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
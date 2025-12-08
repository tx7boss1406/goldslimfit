import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  PieChart,
  TrendingUp,
  CalendarDays,
  Award,
  Activity,
  Zap,
  Star,
} from "lucide-react";

/**
 * ReportsScreen - Dark Premium (ready to paste)
 * File: src/components/screens/ReportsScreen.tsx
 */

export default function ReportsScreen(): JSX.Element {
  const [period, setPeriod] = useState<"7d" | "30d" | "90d">("7d");

  // fake data (replace with real data later)
  const kpis = {
    xp: 1240,
    daysActive: 7,
    missions: 14,
    level: 8,
  };

  const weekly = [40, 70, 100, 60, 80, 30, 90]; // visual heights
  const trend = [20, 30, 45, 60, 75, 90, 110]; // fake trend

  const habits = [
    { label: "Treinos", value: 45, color: "bg-primary" },
    { label: "Receitas", value: 30, color: "bg-accent" },
    { label: "Hábitos", value: 25, color: "bg-amber-400/80" },
  ];

  return (
    <div className="space-y-5 pb-10 text-white">
      {/* Header */}
<div className="flex items-start justify-between gap-4">
  <div>
    <motion.h2
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-xl font-semibold text-gray-900"
    >
      Seu Progresso
    </motion.h2>

    <p className="text-xs mt-1 text-gray-700">
      Visão geral — acompanhe seu desempenho e conquistas
    </p>
        </div>

        {/* Period selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPeriod("7d")}
            className={`text-xs px-3 py-1 rounded-lg font-medium ${
              period === "7d"
                ? "bg-white/6 text-white ring-1 ring-white/10"
                : "text-white/60 hover:bg-white/3"
            }`}
          >
            7 dias
          </button>
          <button
            onClick={() => setPeriod("30d")}
            className={`text-xs px-3 py-1 rounded-lg font-medium ${
              period === "30d"
                ? "bg-white/6 text-white ring-1 ring-white/10"
                : "text-white/60 hover:bg-white/3"
            }`}
          >
            30 dias
          </button>
          <button
            onClick={() => setPeriod("90d")}
            className={`text-xs px-3 py-1 rounded-lg font-medium ${
              period === "90d"
                ? "bg-white/6 text-white ring-1 ring-white/10"
                : "text-white/60 hover:bg-white/3"
            }`}
          >
            90 dias
          </button>
        </div>
      </div>

      {/* GRID: Left charts / Right small cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* LEFT: Charts column (span 2 on lg) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Weekly Bars Card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-b from-zinc-900/60 to-zinc-800/40 p-5 rounded-2xl border border-white/6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <BarChart2 className="w-5 h-5 text-primary" />
                <p className="font-medium">Atividade da Semana</p>
              </div>

              <div className="text-xs text-white/60">Últimos 7 dias</div>
            </div>

            <div className="relative">
              <div className="flex items-end gap-3 h-36 px-2">
                {weekly.map((h, i) => {
                  const colorClass =
                    h >= 80 ? "bg-primary" : h >= 50 ? "bg-blue-500" : "bg-white/30";
                  return (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.7, delay: i * 0.08 }}
                      className={`flex-1 rounded-xl ${colorClass} flex items-end justify-center`}
                      style={{ minWidth: 18, maxWidth: 28 }}
                    >
                      <div className="text-[10px] text-white/90 mb-1">{/* value placeholder */}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex justify-between text-[11px] text-white/60 mt-2 px-2">
                <span>Dom</span>
                <span>Seg</span>
                <span>Ter</span>
                <span>Qua</span>
                <span>Qui</span>
                <span>Sex</span>
                <span>Sáb</span>
              </div>
            </div>
          </motion.div>

          {/* Trend + Donut row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Trend Card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-800/40 border border-white/6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <p className="font-medium">Tendência</p>
                </div>
                <div className="text-xs text-white/60">Comparado ao mês</div>
              </div>

              {/* Fake line chart (SVG) */}
              <div className="w-full h-28">
                <svg viewBox="0 0 200 60" className="w-full h-full">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.12" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 40 C 30 20, 60 10, 90 22 C 120 34, 150 18, 180 14 C 190 12, 200 8, 200 8"
                    fill="url(#g1)"
                    stroke="transparent"
                  />
                  <path
                    d="M0 40 C 30 20, 60 10, 90 22 C 120 34, 150 18, 180 14"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="text-xs text-white/60">Crescimento</p>
                  <p className="font-semibold text-white">+12%</p>
                </div>
                <div>
                  <p className="text-xs text-white/60">Meta</p>
                  <p className="font-semibold text-white">Alcançada</p>
                </div>
              </div>
            </motion.div>

            {/* Donut Card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-800/40 border border-white/6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  <p className="font-medium">Distribuição</p>
                </div>
                <div className="text-xs text-white/60">Resumo</div>
              </div>

              <div className="flex items-center gap-3">
                {/* fake donut */}
                <div className="relative w-28 h-28">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="6" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="6"
                      strokeDasharray="45 100"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="10"
                      fill="#0f172a"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                    45%
                  </div>
                </div>

                {/* legend */}
                <div className="flex-1">
                  {habits.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full ${h.color}`} />
                      <div>
                        <p className="text-sm font-semibold">{h.label}</p>
                        <p className="text-xs text-white/60">{h.value}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Small panels */}
        <div className="space-y-4">
          {/* Weekly summary small card */}
          <motion.div className="p-4 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-zinc-800/30 border border-white/6 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">Resumo rápido</p>
              <CalendarDays className="w-4 h-4 text-white/60" />
            </div>

            <div className="space-y-2 text-xs text-white/60">
              <div className="flex items-center justify-between">
                <span>Treinos</span>
                <span className="font-semibold text-white">4</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Receitas</span>
                <span className="font-semibold text-white">6</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Consistência</span>
                <span className="font-semibold text-white">82%</span>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div className="p-4 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-zinc-800/30 border border-white/6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium">Conquistas</p>
              <div className="text-xs text-white/60">6 desbloqueadas</div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {["🏅", "🔥", "💧", "⭐", "🏃‍♂️", "🥗"].map((icon, i) => (
                <div key={i} className="flex flex-col items-center gap-1 text-center">
                  <div className="w-10 h-10 rounded-lg bg-white/6 flex items-center justify-center text-lg">
                    {icon}
                  </div>
                  <p className="text-[10px] text-white/60">Badge {i + 1}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA: Share / Export */}
          <motion.div className="p-4 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-zinc-800/30 border border-white/6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Compartilhar Progresso</p>
                <p className="text-xs text-white/60">Exportar relatório PDF</p>
              </div>
              <button className="px-3 py-2 rounded-lg bg-primary text-black text-sm font-semibold">
                Exportar
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

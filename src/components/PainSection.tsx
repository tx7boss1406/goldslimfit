import { motion } from "framer-motion";

const PainSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">

      {/* BG Premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light" />

      {/* Glow principal */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-primary/25 blur-3xl rounded-full opacity-40" />

      {/* Glow secundário */}
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-accent/10 blur-2xl rounded-full opacity-30" />

      {/* CONTEÚDO */}
      <div className="relative container mx-auto max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-card/50 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Shine leve */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          {/* TÍTULO */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-10"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Você sabe o que precisa fazer,
            </span>
            <br />
            <span className="text-foreground/90 text-lg sm:text-xl">
              mas não consegue manter.
            </span>
          </motion.h2>

          {/* DORES (badges premium) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-4 text-lg md:text-xl text-muted-foreground mb-12"
          >
            <p className="inline-block px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
              🔥 Começa animada e para no meio.
            </p>
            <p className="inline-block px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
              🐢 Recomeça… e sente que está sempre do zero.
            </p>
            <p className="inline-block px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
              ♻️ Se culpa, tenta de novo… e nada muda.
            </p>
          </motion.div>

          {/* FRASE FINAL */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-foreground font-semibold text-xl md:text-2xl"
          >
           <p className="text-foreground font-semibold text-xl md:text-2xl">
  Seu corpo não muda porque sua rotina não muda.
</p>

          </motion.p>

        </motion.div>

      </div>
    </section>
  );
};

export default PainSection;

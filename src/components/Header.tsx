import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LADO ESQUERDO */}
        <div className="flex items-center gap-2">

          {/* IMAGEM DIRETO DO public */}
          <img
            src="/images/perfil/imgperfil.jpg"
            alt="Logo"
            className="w-9 h-9 rounded-xl object-cover"
          />

          <span className="font-semibold text-lg text-foreground">
            SlimFitPro
          </span>
        </div>

        {/* LADO DIREITO — BOTÃO QUE VOCÊ PEDIU */}
       <button
  className="
    px-4 py-2 rounded-xl 
    bg-primary/70 text-primary-foreground 
    font-medium text-sm shadow-md
    hover:opacity-90 transition
  "
>
  Já sou cliente
</button>


      </div>
    </motion.header>
  );
};

export default Header;

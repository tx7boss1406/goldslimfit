import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

// 🔥 Tela de Receitas — Grid 2x2 Premium
// As imagens devem ser colocadas em: public/images/receitas/
// Basta adicionar as imagens com estes nomes:
// receita-bowl.jpg
// receita-frango.jpg
// receita-overnight.jpg
// receita-panq.jpg
// receita-wrap.jpg
// receita-salada.jpg
// receita-arrozfit.jpg
// receita-tapioca.jpg

const recipes = [
  { name: "Bowl Proteico", img: "/images/receitas/receita-bowl.jpg" },
  { name: "Frango Grelhado Fit", img: "/images/receitas/receita-frango.jpg" },
  { name: "Overnight de Banana", img: "/images/receitas/receita-overnight.jpg" },
  { name: "Panqueca Fit", img: "/images/receitas/receita-panq.jpg" },
  { name: "Wrap Saudável", img: "/images/receitas/receita-wrap.jpg" },
  { name: "Salada Detox", img: "/images/receitas/receita-salada.jpg" },
  { name: "Arroz Fit Cremoso", img: "/images/receitas/receita-arrozfit.jpg" },
  { name: "Tapioca Proteica", img: "/images/receitas/receita-tapioca.jpg" },
];

export default function RecipesScreen() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-lg font-bold mb-4 flex items-center gap-2"
      >
        <Utensils className="w-5 h-5 text-primary" /> Receitas
      </motion.h2>

      {/* GRID 2x2 RESPONSIVO */}
      <div className="grid grid-cols-2 gap-3 pb-10">
        {recipes.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
            className="bg-card rounded-xl overflow-hidden shadow-md border border-border/40"
          >
            {/* Imagem */}
            <div className="w-full h-24 overflow-hidden">
              <img
                src={r.img}
                alt={r.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nome */}
            <div className="p-2 text-center">
              <p className="text-xs font-semibold text-foreground leading-tight">
                {r.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

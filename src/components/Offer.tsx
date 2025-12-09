import { motion } from "framer-motion";
import { 
  Check,
  Shield,
  Star,
  CreditCard,
  Sparkles,
  Zap,
  Utensils,
  BarChart3,
  Gift,
  ArrowRight,
  Flame, // extra
  HeartPulse // extra
} from "lucide-react";

interface OfferProps {
  onCheckout: () => void;
}

// NOVA LISTA DE BENEFÍCIOS – Agora mais chamativa, visual estilo “mensagem recebida”, neon e mais valor
const features = [
  { icon: Zap, text: "Missões diárias personalizadas para acelerar seus resultados" },
  { icon: Utensils, text: "+200 receitas fáceis, rápidas e feitas para emagrecer" },
  { icon: BarChart3, text: "Relatórios semanais + métricas de evolução" },
  { icon: Gift, text: "Desafios com recompensas exclusivas dentro do app" },
  { icon: Flame, text: "Acesso ao Protocolo Turbo de emergência (perca peso em 72h)" },
  { icon: HeartPulse, text: "Rotina matinal guiada para desinchar e aumentar disposição" },
];


const Offer = ({ onCheckout }: OfferProps) => {
  return (
    <section id="offer" className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
  SlimFitPro — Disciplina que gera{" "}
  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
    resultados reais
  </span>
</h2>

         <p className="text-muted-foreground max-w-lg mx-auto">
  Missões diárias, receitas personalizadas e recompensas <br /> 
  tudo por um pagamento único.
</p>

        </motion.div>

        {/* Price Card — Versão Premium com urgência */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="relative max-w-md mx-auto mb-10 p-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10 shadow-xl overflow-hidden"
>
  {/* Faixa de Urgência */}
  <div className="absolute top-0 left-0 w-full bg-red-600 text-white text-xs font-bold py-1 text-center animate-pulse">
    🔥 ÚLTIMA CHANCE — Oferta expira hoje!
  </div>

  {/* Glow decorativo */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 blur-2xl rounded-full" />

  <div className="relative z-10 text-center mt-6">
    {/* Selo Premium */}
    <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-semibold px-4 py-1 rounded-full mb-3">
      <Sparkles className="w-3 h-3" /> Acesso PRO
    </span>

    {/* Preço */}
    <div className="mb-4">
      <span className="text-sm text-muted-foreground line-through block">R$ 97,00</span>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-5xl md:text-6xl font-extrabold text-foreground leading-none">
          R$ 29
        </span>
        <span className="text-3xl font-bold text-foreground">,90</span>
      </div>
      <span className="text-sm text-muted-foreground block mt-1">
        Pagamento único • Acesso vitalício
      </span>
    </div>

    {/* Botão super chamativo */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={() =>
        window.location.href =
          "https://pay.kirvano.com/5aa76f19-eecf-452d-8379-d51f695884ca"
      }
      className="
        w-full py-4 text-base font-semibold rounded-xl
        bg-gradient-to-r from-primary to-purple-600
        text-white shadow-primary/40 shadow-lg
        relative overflow-hidden
      "
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        Quero garantir agora
        <ArrowRight className="w-5 h-5" />
      </span>

      {/* Efeito de brilho */}
      <div className="absolute inset-0 opacity-20 bg-white blur-xl animate-pulse" />
    </motion.button>

    {/* Aviso de urgência */}
    <p className="text-xs text-red-600 font-semibold mt-3">
      ⚠️ Essa é sua única oportunidade<br />
       o preço volta ao normal a qualquer momento.
    </p>

    {/* Garantias */}
    <div className="flex items-center justify-center gap-4 mt-5 text-xs text-muted-foreground">
      <div className="flex items-center gap-1">
        <Shield className="w-3 h-3" />
        <span>Pagamento seguro</span>
      </div>
      <div className="flex items-center gap-1">
        <CreditCard className="w-3 h-3" />
        <span>Pix ou cartão</span>
      </div>
    </div>
  </div>
</motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 bg-card/50 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feature.text}</span>
            </div>
          ))}
        </motion.div>

      {/* Guarantee — Premium Button Style */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="
    max-w-md mx-auto p-7 rounded-3xl text-center
    bg-neutral-900/90
    border border-neutral-700
    shadow-[0_8px_25px_rgba(0,0,0,0.35)]
    hover:shadow-[0_12px_35px_rgba(0,0,0,0.45)]
    transition-all duration-300
  "
>

 <div className="w-40 h-40 mx-auto mb-7 rounded-2xl overflow-hidden">
  <img 
    src="/garantia/30dias.jpg"
    alt="Garantia"
    className="w-full h-full object-contain"
  />
</div>



  {/* Título */}
  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
    Garantia Premium de Transformação
  </h3>

  {/* Texto */}
  <p className="text-sm text-neutral-300 leading-relaxed">
    Você tem 30 dias para testar.  
    Se não ver progresso real seguindo as missões,  
    devolvemos <span className="font-semibold text-white">50% do valor</span> sem burocracia.
  </p>
</motion.div>


      </div>
    </section>
  );
};

export default Offer;

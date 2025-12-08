import { motion } from "framer-motion";
import { Check, Shield, Star, CreditCard, Zap, Utensils, BarChart3, Gift, ArrowRight } from "lucide-react";

interface OfferProps {
  onCheckout: () => void;
}

const features = [
  { icon: Zap, text: "Missões diárias personalizadas" },
  { icon: Utensils, text: "+200 receitas fáceis e saudáveis" },
  { icon: BarChart3, text: "Relatórios de progresso semanais" },
  { icon: Gift, text: "Recompensas por progresso" },
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
            Missões diárias, receitas personalizadas e recompensas — tudo por um pagamento único.
          </p>
        </motion.div>

        {/* Price Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-soft max-w-md mx-auto mb-10"
        >
          <div className="text-center">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1 rounded-full mb-4">
              🎉 Oferta de lançamento
            </span>
            
            <div className="mb-4">
              <span className="text-sm text-muted-foreground line-through">R$ 97,00</span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-foreground">R$ 29</span>
                <span className="text-xl font-bold text-foreground">,90</span>
              </div>
              <span className="text-sm text-muted-foreground">Pagamento único • Acesso vitalício</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = "https://pay.kirvano.com/5aa76f19-eecf-452d-8379-d51f695884ca"}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 text-base py-4"
            >
              Eu quero o SlimFitPro
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
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

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card rounded-2xl p-6 border border-primary/20 max-w-md mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">
            Garantia de Execução Premium
          </h3>
          <p className="text-sm text-muted-foreground">
            Complete as missões do primeiro mês e não ver melhoria? Devolvemos 100% do valor. Sem perguntas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;

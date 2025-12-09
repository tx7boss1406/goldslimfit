import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de equipamentos para os treinos?",
    answer: "Não! Todas as missões podem ser feitas em casa, sem equipamentos. Se preferir usar pesos ou ir à academia, também temos opções para você.",
  },
  {
    question: "As receitas são difíceis de fazer?",
    answer: "Nossas receitas foram desenvolvidas para serem práticas e rápidas. A maioria leva menos de 20 minutos e usa ingredientes fáceis de encontrar.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Se você completar as missões do primeiro mês e não perceber melhoria na sua rotina, devolvemos 50% do valor pago. Sem burocracia.",
  },
  {
    question: "Posso usar em mais de um dispositivo?",
    answer: "Sim! Seu acesso é vinculado à sua conta, então você pode usar no celular, tablet ou computador.",
  },
  {
    question: "Quanto tempo duram as missões diárias?",
    answer: "As missões variam de 10 a 40 minutos, dependendo do seu perfil e disponibilidade. Você define o que funciona melhor para você.",
  },
  {
    question: "O app funciona offline?",
    answer: "Algumas funcionalidades estão disponíveis offline, como consultar receitas já salvas e ver seu histórico de missões.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre o SlimFitPro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-4 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

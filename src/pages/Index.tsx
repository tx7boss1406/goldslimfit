import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import QuizModal from "@/components/Quiz/QuizModal";
import Simulator from "@/components/Simulator";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import type { QuizResult } from "@/components/Quiz/QuizModal";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    // Log page view
    console.log("page_view", { page: "landing" });
  }, []);

  const handleStartQuiz = () => {
    console.log("quiz_started");
    setShowQuiz(true);
  };

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
    setShowQuiz(false);
    setShowSimulator(true);
    console.log("view_simulator", result);
  };

  const handleViewOffer = () => {
    setShowSimulator(false);
    console.log("offer_viewed");
    
    // Scroll to offer section
    setTimeout(() => {
      const offerSection = document.getElementById("offer");
      if (offerSection) {
        offerSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleCheckout = () => {
    console.log("checkout_initiated");
    toast({
      title: "Redirecionando para checkout...",
      description: "Você será redirecionado em instantes.",
    });
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero onStartQuiz={handleStartQuiz} />
      
      <Benefits />
      
      <HowItWorks onStartQuiz={handleStartQuiz} />
      
      <Offer onCheckout={handleCheckout} />
      
      <Testimonials />
      
      <FAQ />
      
      <Footer />

      {/* Quiz Modal */}
      <QuizModal
        isOpen={showQuiz}
        onClose={() => setShowQuiz(false)}
        onComplete={handleQuizComplete}
      />

      {/* Simulator Modal */}
      <Simulator
        isOpen={showSimulator}
        onClose={() => setShowSimulator(false)}
        quizResult={quizResult}
        onViewOffer={handleViewOffer}
      />
    </main>
  );
};

export default Index;

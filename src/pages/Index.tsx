import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategorySection } from "@/components/sections/CategorySection";
import { BestSellersSection } from "@/components/sections/BestSellersSection";
import { TrademarksSection } from "@/components/sections/TrademarksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CategorySection />
        <BestSellersSection />
        <TrademarksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

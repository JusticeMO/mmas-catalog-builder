import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategorySection } from "@/components/sections/CategorySection";

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              All Categories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our complete range of high-quality locks and accessories
            </p>
          </div>
          <CategorySection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
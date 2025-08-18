import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/sections/ProductGrid";

const BathroomLocks = () => {
  const products = [
    {
      id: "bath-001",
      name: "Privacy Thumb Turn Lock",
      price: "₦8,500",
      image: "/placeholder.svg",
      description: "Water-resistant thumb turn lock ideal for bathrooms"
    },
    {
      id: "bath-002",
      name: "Indicator Bolt Lock",
      price: "₦6,500",
      image: "/placeholder.svg",
      description: "Bathroom indicator bolt with occupied/vacant display"
    },
    {
      id: "bath-003",
      name: "Emergency Release Lock",
      price: "₦12,000",
      image: "/placeholder.svg",
      description: "Safety lock with emergency release mechanism"
    },
    {
      id: "bath-004",
      name: "Sliding Door Latch",
      price: "₦5,500",
      image: "/placeholder.svg",
      description: "Compact sliding latch for bathroom pocket doors"
    },
    {
      id: "bath-005",
      name: "Turn & Release Lock",
      price: "₦9,000",
      image: "/placeholder.svg",
      description: "Modern turn and release lock with chrome finish"
    },
    {
      id: "bath-006",
      name: "Magnetic Privacy Lock",
      price: "₦14,500",
      image: "/placeholder.svg",
      description: "Silent magnetic privacy lock for modern bathrooms"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Bathroom Locks
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized locks designed for privacy and safety in bathroom environments
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BathroomLocks;
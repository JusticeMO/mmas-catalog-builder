import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/sections/ProductGrid";

const Deadlocks = () => {
  const products = [
    {
      id: "dead-001",
      name: "5-Lever Deadlock",
      price: "₦28,000",
      image: "/placeholder.svg",
      description: "Insurance-approved 5-lever deadlock with anti-drill protection"
    },
    {
      id: "dead-002",
      name: "Euro Cylinder Deadlock", 
      price: "₦32,000",
      image: "/placeholder.svg",
      description: "High-security euro cylinder deadlock with anti-snap technology"
    },
    {
      id: "dead-003",
      name: "Double Cylinder Deadbolt",
      price: "₦24,500",
      image: "/placeholder.svg",
      description: "Double cylinder deadbolt requiring key from both sides"
    },
    {
      id: "dead-004",
      name: "Single Cylinder Deadbolt",
      price: "₦19,000",
      image: "/placeholder.svg", 
      description: "Standard single cylinder deadbolt with thumb turn inside"
    },
    {
      id: "dead-005",
      name: "Mortice Deadlock",
      price: "₦26,500",
      image: "/placeholder.svg",
      description: "Heavy-duty mortice deadlock for maximum security"
    },
    {
      id: "dead-006",
      name: "Rim Deadlock",
      price: "₦21,000",
      image: "/placeholder.svg",
      description: "Surface-mounted rim deadlock for quick installation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Deadlocks
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium deadlocks providing the highest level of door security
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deadlocks;
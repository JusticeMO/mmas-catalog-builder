import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/sections/ProductGrid";

const ExteriorLocks = () => {
  const products = [
    {
      id: "ext-001",
      name: "Security Mortice Lock",
      price: "₦25,000",
      image: "/placeholder.svg",
      description: "Heavy-duty mortice lock for external doors with anti-pick technology"
    },
    {
      id: "ext-002", 
      name: "Cylinder Rim Lock",
      price: "₦18,500",
      image: "/placeholder.svg",
      description: "High-security cylinder rim lock with hardened steel construction"
    },
    {
      id: "ext-003",
      name: "Digital Door Lock",
      price: "₦45,000",
      image: "/placeholder.svg", 
      description: "Smart digital lock with keypad and backup key access"
    },
    {
      id: "ext-004",
      name: "Lever Handle Lock",
      price: "₦22,000",
      image: "/placeholder.svg",
      description: "Premium lever handle lock with weather-resistant finish"
    },
    {
      id: "ext-005",
      name: "Padlock Heavy Duty",
      price: "₦8,500",
      image: "/placeholder.svg",
      description: "Weather-resistant padlock for gates and outdoor applications"
    },
    {
      id: "ext-006",
      name: "Multi-Point Lock",
      price: "₦35,000",
      image: "/placeholder.svg",
      description: "Advanced multi-point locking system for maximum security"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Exterior Locks
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure your property with our premium range of exterior door locks and security systems
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExteriorLocks;
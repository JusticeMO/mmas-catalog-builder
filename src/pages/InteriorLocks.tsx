import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/sections/ProductGrid";

const InteriorLocks = () => {
  const products = [
    {
      id: "int-001",
      name: "Privacy Door Knob",
      price: "₦12,000",
      image: "/placeholder.svg",
      description: "Elegant privacy door knob for bedrooms and offices"
    },
    {
      id: "int-002",
      name: "Passage Door Handle",
      price: "₦9,500",
      image: "/placeholder.svg", 
      description: "Modern passage handle for hallways and common areas"
    },
    {
      id: "int-003",
      name: "Magnetic Door Lock",
      price: "₦15,000",
      image: "/placeholder.svg",
      description: "Silent magnetic lock perfect for interior applications"
    },
    {
      id: "int-004",
      name: "Thumb Turn Lock",
      price: "₦7,500",
      image: "/placeholder.svg",
      description: "Easy-to-use thumb turn lock for interior doors"
    },
    {
      id: "int-005",
      name: "Lever Lock Set",
      price: "₦14,000",
      image: "/placeholder.svg",
      description: "Complete lever lock set with matching hardware"
    },
    {
      id: "int-006",
      name: "Sliding Door Lock",
      price: "₦11,500",
      image: "/placeholder.svg",
      description: "Specialized lock system for sliding interior doors"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Interior Locks
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stylish and functional interior door locks for privacy and convenience
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InteriorLocks;
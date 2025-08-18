import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/sections/ProductGrid";

const WardrobeAccessories = () => {
  const products = [
    {
      id: "ward-001",
      name: "Wardrobe Door Locks",
      price: "₦6,800",
      image: "/placeholder.svg",
      description: "Secure locks for wardrobe and closet doors"
    },
    {
      id: "ward-002",
      name: "Sliding Door Rails",
      price: "₦12,500",
      image: "/placeholder.svg",
      description: "Heavy-duty rails for sliding wardrobe doors"
    },
    {
      id: "ward-003",
      name: "Door Handles Set",
      price: "₦4,200",
      image: "/placeholder.svg",
      description: "Matching handle sets for wardrobe doors"
    },
    {
      id: "ward-004",
      name: "Magnetic Catches",
      price: "₦1,800",
      image: "/placeholder.svg",
      description: "Strong magnetic catches for wardrobe doors"
    },
    {
      id: "ward-005",
      name: "Pivot Hinges",
      price: "₦8,500",
      image: "/placeholder.svg",
      description: "Heavy-duty pivot hinges for large wardrobe doors"
    },
    {
      id: "ward-006",
      name: "Door Bumpers",
      price: "₦950",
      image: "/placeholder.svg",
      description: "Soft door bumpers to protect wardrobe walls"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Wardrobe Accessories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete hardware solutions for wardrobe and closet systems
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WardrobeAccessories;
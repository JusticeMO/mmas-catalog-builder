import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/sections/ProductGrid";

const KitchenAccessories = () => {
  const products = [
    {
      id: "kit-001",
      name: "Cabinet Door Locks",
      price: "₦4,500",
      image: "/placeholder.svg",
      description: "Child-safe cabinet locks for kitchen storage"
    },
    {
      id: "kit-002",
      name: "Drawer Slide Locks",
      price: "₦3,200",
      image: "/placeholder.svg",
      description: "Invisible drawer locks with smooth sliding mechanism"
    },
    {
      id: "kit-003",
      name: "Pantry Door Lock",
      price: "₦7,800",
      image: "/placeholder.svg",
      description: "Keyed lock for pantry and storage room doors"
    },
    {
      id: "kit-004",
      name: "Glass Door Handles",
      price: "₦6,500",
      image: "/placeholder.svg",
      description: "Elegant handles for glass kitchen cabinet doors"
    },
    {
      id: "kit-005",
      name: "Push-to-Open Latches",
      price: "₦2,800",
      image: "/placeholder.svg",
      description: "Modern push-to-open cabinet latches"
    },
    {
      id: "kit-006",
      name: "Soft-Close Hinges",
      price: "₦5,200",
      image: "/placeholder.svg",
      description: "Premium soft-close hinges for kitchen cabinets"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Kitchen Accessories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Functional and stylish hardware solutions for modern kitchens
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KitchenAccessories;
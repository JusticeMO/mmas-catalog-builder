import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import exteriorLocksImg from "@/assets/exterior-locks.jpg";

const ExteriorLocks = () => {
  const products = [
    {
      id: 1,
      name: "Premium Security Door Lock",
      price: "£45.99",
      image: exteriorLocksImg,
      description: "High-security cylinder lock with anti-pick technology"
    },
    {
      id: 2,
      name: "Weather Resistant Lock Set",
      price: "£32.50",
      image: exteriorLocksImg,
      description: "Durable exterior lock with weather protection"
    },
    {
      id: 3,
      name: "Smart Entry Lock System",
      price: "£89.99",
      image: exteriorLocksImg,
      description: "Electronic lock with keypad entry and backup key"
    },
    {
      id: 4,
      name: "Heavy Duty Deadbolt",
      price: "£28.75",
      image: exteriorLocksImg,
      description: "Reinforced deadbolt for maximum security"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Exterior Locks</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium quality exterior locks designed for maximum security and durability. 
              Protect your property with our professional-grade locking solutions.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-accent/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExteriorLocks;
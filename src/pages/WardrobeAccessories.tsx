import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/ui/BackButton";
import wardrobeAccessoriesImg from "@/assets/wardrobe-accessories.jpg";

const WardrobeAccessories = () => {
  const products = [
    {
      id: 1,
      name: "Wardrobe Door Handles",
      price: "KES 1,949",
      image: wardrobeAccessoriesImg,
      description: "Elegant long handles perfect for wardrobe doors"
    },
    {
      id: 2,
      name: "Sliding Door Track",
      price: "KES 4,615",
      image: wardrobeAccessoriesImg,
      description: "Heavy-duty sliding door track system for wardrobes"
    },
    {
      id: 3,
      name: "Wardrobe Lock Set",
      price: "KES 2,438",
      image: wardrobeAccessoriesImg,
      description: "Security lock set for wardrobe doors with key"
    },
    {
      id: 4,
      name: "Soft Close Runners",
      price: "KES 3,640",
      image: wardrobeAccessoriesImg,
      description: "Premium soft-close drawer runners for wardrobe drawers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Wardrobe Accessories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your wardrobe with our comprehensive range of accessories and hardware.
              From handles and hinges to sliding systems and organizational solutions.
            </p>
          </div>

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

export default WardrobeAccessories;
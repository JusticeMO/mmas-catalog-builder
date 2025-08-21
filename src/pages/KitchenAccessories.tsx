import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import kitchenAccessoriesImg from "@/assets/kitchen-accessories.jpg";

const KitchenAccessories = () => {
  const products = [
    {
      id: 1,
      name: "Cabinet Door Handles",
      price: "£8.99",
      image: kitchenAccessoriesImg,
      description: "Modern stainless steel cabinet handles for kitchen doors"
    },
    {
      id: 2,
      name: "Drawer Pull Set",
      price: "£12.50",
      image: kitchenAccessoriesImg,
      description: "Contemporary drawer pulls in brushed chrome finish"
    },
    {
      id: 3,
      name: "Magnetic Cabinet Locks",
      price: "£15.75",
      image: kitchenAccessoriesImg,
      description: "Child-safe magnetic locks for kitchen cabinets"
    },
    {
      id: 4,
      name: "Soft Close Hinges",
      price: "£6.50",
      image: kitchenAccessoriesImg,
      description: "Premium soft-close hinges for smooth cabinet operation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Kitchen Accessories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete your kitchen with our range of high-quality handles, pulls, and hardware.
              From modern minimalist designs to classic traditional styles.
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

export default KitchenAccessories;
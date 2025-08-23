import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/ui/BackButton";
import deadlocksImg from "@/assets/deadlocks.jpg";

const Deadlocks = () => {
  const products = [
    {
      id: 1,
      name: "5-Lever Mortice Deadlock",
      price: "KES 5,590",
      image: deadlocksImg,
      description: "BS3621 approved 5-lever mortice deadlock for maximum security"
    },
    {
      id: 2,
      name: "Euro Cylinder Deadlock",
      price: "KES 5,005",
      image: deadlocksImg,
      description: "High-security euro cylinder deadlock with anti-snap technology"
    },
    {
      id: 3,
      name: "Rim Deadlock",
      price: "KES 3,869",
      image: deadlocksImg,
      description: "Surface mounted rim deadlock for quick installation"
    },
    {
      id: 4,
      name: "Digital Deadlock",
      price: "KES 16,250",
      image: deadlocksImg,
      description: "Electronic deadlock with keypad and mechanical key backup"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Deadlocks</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade deadlocks offering superior security for residential and commercial properties.
              All our deadlocks meet or exceed British Standards for security.
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

export default Deadlocks;
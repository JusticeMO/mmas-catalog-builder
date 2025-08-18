import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {products.map((product, index) => (
        <Card 
          key={product.id} 
          className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-primary">
                {product.price}
              </span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add to Cart
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  "High Quality Materials",
  "Stylish Design", 
  "Wide Range of Locks",
  "Nation-wide Availability"
];

export const BestSellersSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-slide-in">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-muted-foreground">
              Some of our best selling products
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={feature}
                className="flex items-center space-x-3 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-success-foreground" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Featured Products Grid */}
        <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-medium">
                    Product {item}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-foreground mb-1">
                  Featured Lock #{item}
                </h4>
                <p className="text-xs text-muted-foreground">
                  High quality design
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Card } from "@/components/ui/card";
import exteriorLocks from "@/assets/exterior-locks.jpg";
import interiorLocks from "@/assets/interior-locks.jpg";
import deadlocks from "@/assets/deadlocks.jpg";
import bathroomLocks from "@/assets/bathroom-locks.jpg";
import kitchenAccessories from "@/assets/kitchen-accessories.jpg";
import wardrobeAccessories from "@/assets/wardrobe-accessories.jpg";

interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  {
    id: "exterior-locks",
    name: "Exterior Locks",
    image: exteriorLocks,
    href: "/category/exterior-locks"
  },
  {
    id: "interior-locks", 
    name: "Interior Locks",
    image: interiorLocks,
    href: "/category/interior-locks"
  },
  {
    id: "deadlocks",
    name: "Deadlocks", 
    image: deadlocks,
    href: "/category/deadlocks"
  },
  {
    id: "bathroom-locks",
    name: "Bathroom Locks",
    image: bathroomLocks,
    href: "/category/bathroom-locks"
  },
  {
    id: "kitchen-accessories",
    name: "Kitchen Accessories",
    image: kitchenAccessories,
    href: "/category/kitchen-accessories"
  },
  {
    id: "wardrobe-accessories",
    name: "Wardrobe Accessories", 
    image: wardrobeAccessories,
    href: "/category/wardrobe-accessories"
  }
];

export const CategorySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Shop by Category
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find what you are looking for in these categories.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
        {categories.map((category, index) => (
          <a 
            key={category.id}
            href={category.href}
            className="group animate-slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/20">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-2 border-border group-hover:border-primary/30 transition-colors duration-300">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                {category.name}
              </h3>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};
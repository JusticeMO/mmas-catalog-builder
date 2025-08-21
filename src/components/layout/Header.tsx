import { useState } from "react";
import * as React from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import mmasLogo from "@/assets/mmas-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const categories: { name: string; href: string; description: string }[] = [
  {
    name: "Locks",
    href: "/categories/locks",
    description: "High-quality locks for all your security needs.",
  },
  {
    name: "Exterior Locks",
    href: "/categories/exterior-locks",
    description: "Durable locks for external doors.",
  },
  {
    name: "Interior Locks",
    href: "/categories/interior-locks",
    description: "Stylish and secure locks for inside your home.",
  },
  {
    name: "Deadlocks",
    href: "/categories/deadlocks",
    description: "Extra security with our range of deadlocks.",
  },
  {
    name: "Bathroom Locks",
    href: "/categories/bathroom-locks",
    description: "Privacy and security for your bathroom.",
  },
  {
    name: "Wardrobe Accessories",
    href: "/categories/wardrobe-accessories",
    description: "Enhance your wardrobe with our accessories.",
  },
  {
    name: "Bathroom Accessories",
    href: "/categories/bathroom-accessories",
    description: "Complete your bathroom with our stylish accessories.",
  },
  {
    name: "Kitchen Accessories",
    href: "/categories/kitchen-accessories",
    description: "A wide range of accessories for your kitchen.",
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(0);

  const navigation = [
    { name: "HOME", href: "/", active: true },
    { name: "BLOG", href: "/blog" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-nav-background shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={mmasLogo}
              alt="MMAS International Ltd"
              className="h-10 w-auto lg:h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className={`text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-md ${
                        item.active
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium transition-colors duration-200">
                    ALL CATEGORIES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {categories.map((component) => (
                        <ListItem
                          key={component.name}
                          title={component.name}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-64 bg-muted border-input-border focus:border-input-focus focus:ring-1 focus:ring-input-focus"
              />
            </div>
            
            {/* Cart & Account */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                  >
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                >
                  {cartItems}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full bg-muted border-input-border focus:border-input-focus focus:ring-1 focus:ring-input-focus"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    item.active
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  My Account
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
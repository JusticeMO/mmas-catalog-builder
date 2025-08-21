import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import mmasLogo from "@/assets/mmas-logo-white.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(0);

  const navigation = [
    { name: "HOME", href: "/", active: true },
    { name: "BLOG", href: "/blog" },
    { name: "ABOUT", href: "/about" }
  ];

  const categories = [
    { name: "Exterior Locks", href: "/category/exterior-locks" },
    { name: "Interior Locks", href: "/category/interior-locks" },
    { name: "Deadlocks", href: "/category/deadlocks" },
    { name: "Bathroom Locks", href: "/category/bathroom-locks" },
    { name: "Kitchen Accessories", href: "/category/kitchen-accessories" },
    { name: "Wardrobe Accessories", href: "/category/wardrobe-accessories" }
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
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  item.active
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* All Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1">
                  ALL CATEGORIES
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <a
                      href={category.href}
                      className="w-full px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-colors"
                    >
                      {category.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              
              {/* Mobile Categories */}
              <div className="pt-2">
                <div className="text-sm font-medium text-foreground mb-2">ALL CATEGORIES</div>
                <div className="pl-4 space-y-2">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
              
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
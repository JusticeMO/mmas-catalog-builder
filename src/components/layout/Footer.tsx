import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const categories = [
    "Exterior Locks",
    "Interior Locks", 
    "Deadlocks",
    "Bathroom Locks",
    "Kitchen Accessories",
    "Wardrobe Accessories"
  ];

  const quickLinks = [
    "About Us",
    "Contact",
    "Shipping Info",
    "Returns",
    "Privacy Policy",
    "Terms of Service"
  ];

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              MMAS International Ltd
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for high-quality locks, handles, and hardware accessories. 
              Providing reliable security solutions since years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Business Street, City, Country</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@mmasinternational.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <a 
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest products and offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-input-border focus:border-input-focus"
              />
              <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 MMAS International Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Registered Trademarks:</span>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-foreground bg-muted px-2 py-1 rounded">
                SFIDA TRADEMARK
              </span>
              <span className="text-xs font-semibold text-foreground bg-muted px-2 py-1 rounded">
                #A1 TRADEMARK
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
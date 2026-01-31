import { Link } from "react-router-dom";
import { Crown, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl font-bold mb-2">
                Subscribe for Sweet Updates
              </h3>
              <p className="text-primary-foreground/80 font-elegant">
                Get exclusive offers, festival specials & new arrivals delivered to your inbox
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 w-full md:w-64"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Crown className="w-8 h-8 text-accent" />
              <span className="font-display text-xl font-bold">Crown of Sweets</span>
            </Link>
            <p className="text-primary-foreground/80 font-elegant text-sm leading-relaxed">
              Crafting royal confections since generations. We bring you the finest 
              traditional Indian sweets and premium chocolates, made with love and 
              the purest ingredients.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Traditional Sweets", "Chocolates & Bakery", "Festival Specials", "Gift Hampers", "Bulk Orders", "Track Order"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">
              Customer Service
            </h4>
            <ul className="space-y-2">
              {["About Us", "Contact Us", "FAQs", "Shipping & Delivery", "Return Policy", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Sweet Lane, Chandni Chowk, Old Delhi - 110006
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@crownofsweets.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/80 text-sm">9 AM - 9 PM (All Days)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Crown of Sweets. All rights reserved. Made with ❤️ in India
            </p>
            <div className="flex items-center gap-4">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png" alt="UPI" className="h-6 opacity-80" />
              <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-6 opacity-80" />
              <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-6 opacity-80" />
              <img src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="Paytm" className="h-6 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

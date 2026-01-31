"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, User, Search, Crown, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/hooks/use-cart"
import { MiniCart } from "./MiniCart"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Traditional Sweets", path: "/sweets" },
  { name: "Chocolates & Bakery", path: "/chocolates" },
  { name: "Festival Specials", path: "/festivals" },
  { name: "Gift Hampers", path: "/gifts" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <span className="font-elegant">🎉 Festival Special: Free delivery on orders above ₹999 | Use code: </span>
        <span className="font-semibold text-accent">SWEET20</span>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                <SheetHeader className="p-6 border-b border-border text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <Crown className="w-6 h-6 text-accent" />
                    <span className="font-display font-bold text-primary">Crown of Sweets</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                        location.pathname === link.path ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="flex flex-col gap-3 pt-6 border-t border-border mt-4">
                    <Button variant="outline" className="justify-start bg-transparent">
                      <Search className="w-4 h-4 mr-3" />
                      Search Products
                    </Button>
                    <Button className="bg-primary justify-start">
                      <User className="w-4 h-4 mr-3" />
                      Customer Login
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Crown className="w-10 h-10 text-accent" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-primary leading-tight">Crown of Sweets</span>
              <span className="text-xs text-muted-foreground font-elegant tracking-wider">
                Royal Taste, Sweet Moments
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-sm transition-colors hover:text-primary group ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                  initial={{ width: location.pathname === link.path ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:text-accent">
              <Search className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex hover:text-accent">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Rewards Indicator */}
            <Link
              to="/rewards"
              className="hidden sm:flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
            >
              <Crown className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-accent">540 pts</span>
            </Link>

            <Link to="/account">
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <User className="w-5 h-5" />
              </Button>
            </Link>

            {/* Cart Trigger Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:text-accent"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* MiniCart Component */}
            <MiniCart open={isCartOpen} setOpen={setIsCartOpen} />
          </div>
        </div>
      </div>
    </nav>
  )
}

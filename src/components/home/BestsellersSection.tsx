"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ProductCard } from "@/components/ProductCard"

const bestsellers = [
  {
    id: 1,
    name: "Kesar Peda",
    category: "Traditional",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400&q=80",
    badge: "Bestseller",
    variants: [
      { weight: "250g", price: 230, originalPrice: 280 },
      { weight: "500g", price: 450, originalPrice: 550 },
      { weight: "1kg", price: 850 },
    ],
  },
  {
    id: 2,
    name: "Gulab Jamun",
    category: "Traditional",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1609850051659-c1aa7e6e8ce3?w=400&q=80",
    badge: null,
    variants: [
      { weight: "500g", price: 195 },
      { weight: "1kg", price: 380 },
      { weight: "2kg", price: 720 },
    ],
  },
  {
    id: 3,
    name: "Belgian Chocolate Box",
    category: "Chocolates",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&q=80",
    badge: "Premium",
    variants: [
      { weight: "250g", price: 899, originalPrice: 1099 },
      { weight: "500g", price: 1699 },
    ],
  },
  {
    id: 4,
    name: "Motichoor Ladoo",
    category: "Traditional",
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=400&q=80",
    badge: "Popular",
    variants: [
      { weight: "500g", price: 420 },
      { weight: "1kg", price: 800 },
    ],
  },
  {
    id: 5,
    name: "Dry Fruit Barfi",
    category: "Traditional",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&q=80",
    badge: null,
    variants: [
      { weight: "250g", price: 390, originalPrice: 450 },
      { weight: "500g", price: 750, originalPrice: 850 },
    ],
  },
  {
    id: 6,
    name: "Chocolate Truffle Cake",
    category: "Bakery",
    rating: 4.9,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
    badge: "New",
    variants: [
      { weight: "500g", price: 649 },
      { weight: "1kg", price: 1199 },
    ],
  },
  {
    id: 10,
    name: "Royal Rasmalai",
    category: "Bengali",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1605093451159-a3d5a8abdc27?w=400&q=80",
    badge: "Must Try",
    variants: [
      { weight: "2 pieces", price: 120 },
      { weight: "5 pieces", price: 280 },
    ],
  },
  {
    id: 12,
    name: "Premium Mysore Pak",
    category: "Mithai",
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&q=80",
    badge: "Signature",
    variants: [
      { weight: "500g", price: 320 },
      { weight: "1kg", price: 600 },
    ],
  },
]

export const BestsellersSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-accent font-elegant text-lg">Customer Favorites</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2">Bestselling Sweets</h2>
          </div>
          <Link to="/sweets">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

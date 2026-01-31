"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Star, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useCart } from "@/hooks/use-cart"
import { toast } from "sonner"

export interface ProductVariant {
  weight: string
  price: number
  originalPrice?: number | null
}

export interface ProductProps {
  id: number
  name: string
  category: string
  rating: number
  reviews: number
  image: string
  badge?: string | null
  variants: ProductVariant[]
  viewMode?: "grid" | "list"
}

export const ProductCard = ({
  id,
  name,
  category,
  rating,
  reviews,
  image,
  badge,
  variants,
  viewMode = "grid",
}: ProductProps) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)
  const selectedVariant = variants[selectedVariantIndex]
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price: selectedVariant.price,
      weight: selectedVariant.weight,
      image,
      quantity: 1,
    })
    toast.success(`${name} (${selectedVariant.weight}) added to box!`)
  }

  const discount = selectedVariant.originalPrice
    ? Math.round(((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100)
    : 0

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="group">
      <div
        className={cn(
          "bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-border/50",
          viewMode === "list" ? "flex flex-col md:flex-row" : "flex flex-col h-full",
        )}
      >
        {/* Image Container */}
        <div
          className={cn("relative overflow-hidden", viewMode === "list" ? "w-full md:w-64 shrink-0" : "aspect-square")}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {badge && (
              <Badge className="bg-accent text-accent-foreground font-medium border-none px-3 py-1">{badge}</Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-destructive text-destructive-foreground font-bold border-none px-3 py-1">
                {discount}% OFF
              </Badge>
            )}
          </div>

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <Button size="icon" variant="secondary" className="rounded-full w-10 h-10 shadow-lg">
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full w-10 h-10 shadow-lg">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{category}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-accent text-accent" />
              <span className="text-xs font-bold">{rating}</span>
            </div>
          </div>

          <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Weight Selection */}
          <div className="mb-4">
            <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Select Weight</p>
            <div className="flex flex-wrap gap-2">
              {variants.map((v, idx) => (
                <button
                  key={v.weight}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border-2",
                    selectedVariantIndex === idx
                      ? "bg-primary border-primary text-primary-foreground shadow-md"
                      : "bg-muted border-transparent text-muted-foreground hover:border-muted-foreground/30",
                  )}
                >
                  {v.weight}
                </button>
              ))}
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-primary">₹{selectedVariant.price}</span>
                {selectedVariant.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through decoration-destructive/50">
                    ₹{selectedVariant.originalPrice}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-muted-foreground">Incl. of all taxes</span>
            </div>

            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl px-4 h-10 shadow-sm transition-all hover:shadow-md active:scale-95"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

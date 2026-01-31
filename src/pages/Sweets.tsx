"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, Grid, List } from "lucide-react"
import { Layout } from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { ProductCard } from "@/components/ProductCard"

const products = [
  {
    id: 1,
    name: "Kesar Peda",
    category: "Mithai",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400&q=80",
    badge: "Bestseller",
    variants: [
      { weight: "250g", price: 230, originalPrice: 280 },
      { weight: "500g", price: 450, originalPrice: 550 },
      { weight: "1kg", price: 850, originalPrice: 1050 },
    ],
  },
  {
    id: 2,
    name: "Motichoor Ladoo",
    category: "Ladoo",
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
    id: 3,
    name: "Gulab Jamun",
    category: "Mithai",
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
    id: 4,
    name: "Dry Fruit Barfi",
    category: "Barfi",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&q=80",
    badge: "Premium",
    variants: [
      { weight: "250g", price: 390, originalPrice: 450 },
      { weight: "500g", price: 750, originalPrice: 850 },
      { weight: "1kg", price: 1450 },
    ],
  },
  {
    id: 5,
    name: "Rasgulla",
    category: "Bengali",
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1605093451159-a3d5a8abdc27?w=400&q=80",
    badge: null,
    variants: [
      { weight: "500g", price: 170 },
      { weight: "1kg", price: 320 },
      { weight: "2kg", price: 600 },
    ],
  },
  {
    id: 6,
    name: "Kaju Katli",
    category: "Barfi",
    rating: 4.9,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80",
    badge: "Bestseller",
    variants: [
      { weight: "250g", price: 460 },
      { weight: "500g", price: 890, originalPrice: 999 },
      { weight: "1kg", price: 1750 },
    ],
  },
  {
    id: 7,
    name: "Pista Rolls",
    category: "Mithai",
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=400&q=80",
    badge: "New",
    variants: [
      { weight: "250g", price: 350 },
      { weight: "500g", price: 680 },
    ],
  },
  {
    id: 8,
    name: "Milk Cake",
    category: "Mithai",
    rating: 4.7,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400&q=80",
    badge: "Limited Edition",
    variants: [
      { weight: "500g", price: 450 },
      { weight: "1kg", price: 850 },
    ],
  },
  {
    id: 9,
    name: "Special Jalebi",
    category: "Bengali",
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1609850051659-c1aa7e6e8ce3?w=400&q=80",
    badge: "Crispy",
    variants: [
      { weight: "500g", price: 180 },
      { weight: "1kg", price: 340 },
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
    id: 11,
    name: "Coconut Ladoo",
    category: "Ladoo",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=400&q=80",
    badge: "Fresh",
    variants: [
      { weight: "500g", price: 240 },
      { weight: "1kg", price: 450 },
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

const categories = ["All", "Ladoo", "Barfi", "Mithai", "Bengali"]

const Sweets = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [dietary, setDietary] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.variants[0].price >= priceRange[0] &&
      p.variants[0].price <= priceRange[1] &&
      (dietary.length === 0 || dietary.includes(p.category)), // Simplified for demo
  )

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Traditional Indian Sweets</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto font-elegant text-lg">
              Authentic mithai made with pure desi ghee and traditional recipes passed down through generations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:w-64 shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="bg-card rounded-2xl p-6 shadow-card sticky top-36">
                <h3 className="font-display text-lg font-semibold mb-4">Filters</h3>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox checked={selectedCategory === cat} onCheckedChange={() => setSelectedCategory(cat)} />
                        <span className="text-sm">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <Slider
                    defaultValue={[0, 2000]}
                    max={2000}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>

                {/* Dietary Needs */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Dietary Needs</h4>
                  <div className="space-y-2">
                    {["Sugar-free", "Vegan", "Eggless"].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={dietary.includes(option)}
                          onCheckedChange={(checked) => {
                            if (checked) setDietary([...dietary, option])
                            else setDietary(dietary.filter((d) => d !== option))
                          }}
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary" onClick={() => setShowFilters(false)}>
                  Apply Filters
                </Button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <Button
                  variant="outline"
                  className="lg:hidden bg-transparent"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>

                <p className="text-muted-foreground text-sm">Showing {filteredProducts.length} products</p>

                <div className="flex items-center gap-4">
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border rounded-lg overflow-hidden">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className={`grid gap-6 ${viewMode === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} viewMode={viewMode} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Sweets

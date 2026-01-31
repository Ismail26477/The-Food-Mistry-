import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Grid, List, Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const products = [
  { id: 1, name: "Belgian Chocolate Box", price: 899, originalPrice: 1099, rating: 4.9, reviews: 156, image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&q=80", badge: "Premium", weight: "250g", category: "Chocolates" },
  { id: 2, name: "Chocolate Truffle Cake", price: 649, originalPrice: null, rating: 4.9, reviews: 267, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80", badge: "Bestseller", weight: "500g", category: "Cakes" },
  { id: 3, name: "Assorted Cookies Box", price: 399, originalPrice: 449, rating: 4.6, reviews: 89, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80", badge: null, weight: "300g", category: "Cookies" },
  { id: 4, name: "Dark Chocolate Truffles", price: 599, originalPrice: null, rating: 4.8, reviews: 134, image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&q=80", badge: "Premium", weight: "200g", category: "Chocolates" },
  { id: 5, name: "Red Velvet Cake", price: 799, originalPrice: 899, rating: 4.7, reviews: 198, image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400&q=80", badge: "Popular", weight: "1kg", category: "Cakes" },
  { id: 6, name: "Chocolate Brownie Box", price: 349, originalPrice: null, rating: 4.5, reviews: 112, image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80", badge: null, weight: "6pcs", category: "Cookies" },
  { id: 7, name: "Milk Chocolate Gift Pack", price: 749, originalPrice: 849, rating: 4.8, reviews: 78, image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&q=80", badge: "Gift Ready", weight: "400g", category: "Chocolates" },
  { id: 8, name: "Black Forest Pastry", price: 199, originalPrice: null, rating: 4.6, reviews: 256, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80", badge: null, weight: "1pc", category: "Cakes" },
];

const categories = ["All", "Chocolates", "Cakes", "Cookies"];

const Chocolates = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1200]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((p) =>
    (selectedCategory === "All" || p.category === selectedCategory) &&
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <Layout>
      <section className="bg-gradient-to-r from-secondary to-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Chocolates & Bakery
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto font-elegant text-lg">
              Premium Belgian chocolates, freshly baked cakes, and delicious cookies for every celebration
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className={`lg:w-64 shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="bg-card rounded-2xl p-6 shadow-card sticky top-36">
                <h3 className="font-display text-lg font-semibold mb-4">Filters</h3>
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
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <Slider defaultValue={[0, 1200]} max={1200} step={50} value={priceRange} onValueChange={setPriceRange} className="mb-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
                <Button className="w-full bg-primary" onClick={() => setShowFilters(false)}>Apply Filters</Button>
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="w-4 h-4 mr-2" />Filters
                </Button>
                <p className="text-muted-foreground text-sm">Showing {filteredProducts.length} products</p>
                <div className="flex items-center gap-4">
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-40"><SelectValue placeholder="Sort by" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex border rounded-lg overflow-hidden">
                    <Button variant={viewMode === "grid" ? "default" : "ghost"} size="icon" onClick={() => setViewMode("grid")}><Grid className="w-4 h-4" /></Button>
                    <Button variant={viewMode === "list" ? "default" : "ghost"} size="icon" onClick={() => setViewMode("list")}><List className="w-4 h-4" /></Button>
                  </div>
                </div>
              </div>

              <div className={`grid gap-6 ${viewMode === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                {filteredProducts.map((product, index) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="group">
                    <div className={`bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all ${viewMode === "list" ? "flex" : ""}`}>
                      <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 shrink-0" : "aspect-square"}`}>
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        {product.badge && <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{product.badge}</Badge>}
                        {product.originalPrice && <Badge className="absolute top-4 right-4 bg-destructive">{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF</Badge>}
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-accent transition-colors"><Eye className="w-4 h-4" /></button>
                          <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-accent transition-colors"><Heart className="w-4 h-4" /></button>
                          <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"><ShoppingCart className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-muted-foreground uppercase">{product.category}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{product.weight}</span>
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-primary">₹{product.price}</span>
                            {product.originalPrice && <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>}
                          </div>
                          <Button size="sm" className="bg-primary">Add</Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Chocolates;

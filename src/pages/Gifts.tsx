import { motion } from "framer-motion";
import { ArrowRight, Gift, Heart, Star, Package } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const hampers = [
  { id: 1, name: "Royal Celebration Box", price: 1499, originalPrice: 1799, rating: 4.9, reviews: 156, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=80", items: "12 Premium Sweets", badge: "Bestseller" },
  { id: 2, name: "Diwali Deluxe Hamper", price: 2499, originalPrice: 2999, rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500&q=80", items: "20 Assorted Sweets + Dry Fruits", badge: "Premium" },
  { id: 3, name: "Sweet Moments Gift Box", price: 999, originalPrice: null, rating: 4.7, reviews: 234, image: "https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=500&q=80", items: "8 Traditional Sweets", badge: null },
  { id: 4, name: "Chocolate Lover's Paradise", price: 1299, originalPrice: 1499, rating: 4.9, reviews: 178, image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&q=80", items: "15 Belgian Chocolates", badge: "Popular" },
  { id: 5, name: "Corporate Gift Hamper", price: 3499, originalPrice: 3999, rating: 4.8, reviews: 67, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=80", items: "25 Mixed Sweets + Chocolates", badge: "Corporate" },
  { id: 6, name: "Mini Sweet Surprise", price: 599, originalPrice: null, rating: 4.6, reviews: 312, image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500&q=80", items: "6 Curated Sweets", badge: "Budget Friendly" },
];

const Gifts = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-accent/20 via-primary/10 to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Gift className="w-4 h-4" />
              <span>Perfectly Curated</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Gift Hampers</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-elegant text-lg">
              Beautifully packaged sweet boxes for every occasion. Add a personal touch with gift wrapping and custom messages.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hampers.map((hamper, index) => (
              <motion.div
                key={hamper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={hamper.image} alt={hamper.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    {hamper.badge && <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{hamper.badge}</Badge>}
                    {hamper.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-destructive">
                        {Math.round(((hamper.originalPrice - hamper.price) / hamper.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                    <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-card/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{hamper.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Package className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{hamper.items}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{hamper.rating}</span>
                      <span className="text-xs text-muted-foreground">({hamper.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">₹{hamper.price}</span>
                        {hamper.originalPrice && <span className="text-sm text-muted-foreground line-through">₹{hamper.originalPrice}</span>}
                      </div>
                      <Button size="sm" className="bg-primary">
                        Add <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gifts;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Traditional Sweets",
    description: "Authentic Indian mithai made with pure desi ghee",
    image: "https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=500&q=80",
    link: "/sweets",
    itemCount: "50+ Items",
  },
  {
    title: "Chocolates & Bakery",
    description: "Premium chocolates and freshly baked delights",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&q=80",
    link: "/chocolates",
    itemCount: "30+ Items",
  },
  {
    title: "Festival Specials",
    description: "Curated collections for every celebration",
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500&q=80",
    link: "/festivals",
    itemCount: "Seasonal",
  },
  {
    title: "Gift Hampers",
    description: "Beautifully packaged sweet boxes for gifting",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=80",
    link: "/gifts",
    itemCount: "20+ Options",
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-elegant text-lg">Our Collection</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2">
            Royal Categories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our exquisite range of handcrafted sweets and confections,
            each category offering a unique taste of Indian tradition.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={category.link} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                      {category.itemCount}
                    </span>
                    <h3 className="font-display text-2xl font-bold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm font-elegant mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

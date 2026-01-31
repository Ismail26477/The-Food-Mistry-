import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Gift } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const festivals = [
  {
    name: "Diwali Collection",
    date: "Oct - Nov",
    description: "Celebrate the festival of lights with our premium sweet assortments and gift boxes",
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600&q=80",
    discount: "Up to 25% OFF",
    products: 45,
  },
  {
    name: "Holi Specials",
    date: "March",
    description: "Colorful gujiya, thandai sweets, and festive mithai for Holi celebrations",
    image: "https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=600&q=80",
    discount: "Up to 20% OFF",
    products: 28,
  },
  {
    name: "Raksha Bandhan",
    date: "August",
    description: "Express your love with beautifully curated sweet hampers for siblings",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    discount: "Up to 15% OFF",
    products: 32,
  },
  {
    name: "Ganesh Chaturthi",
    date: "Sept",
    description: "Modaks, ladoos, and traditional offerings for Ganpati celebrations",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=600&q=80",
    discount: "Up to 15% OFF",
    products: 22,
  },
  {
    name: "Eid Mubarak",
    date: "Varies",
    description: "Premium sheer khurma, phirni, and special Eid sweet collections",
    image: "https://images.unsplash.com/photo-1609850051659-c1aa7e6e8ce3?w=600&q=80",
    discount: "Up to 20% OFF",
    products: 35,
  },
  {
    name: "Christmas & New Year",
    date: "Dec - Jan",
    description: "Plum cakes, cookies, chocolates, and festive sweet hampers",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=80",
    discount: "Up to 30% OFF",
    products: 40,
  },
];

const Festivals = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
              className="absolute"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            >
              <Sparkles className="w-6 h-6 text-accent/40" />
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Gift className="w-4 h-4" />
              <span>Special Collections</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Festival Specials</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto font-elegant text-lg">
              Celebrate every occasion with our specially curated festival collections. Premium sweets, beautiful packaging, and unforgettable taste.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={festival.image} alt={festival.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {festival.discount}
                    </div>
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <div className="flex items-center gap-2 text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{festival.date}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold">{festival.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4">{festival.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-accent font-medium">{festival.products} Products</span>
                      <Button size="sm" className="bg-primary group-hover:bg-primary/90">
                        Explore <ArrowRight className="ml-2 w-4 h-4" />
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

export default Festivals;

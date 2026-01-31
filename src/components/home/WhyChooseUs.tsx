import { motion } from "framer-motion";
import { Leaf, Award, Truck, Gift, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Pure Ingredients",
    description: "Made with pure desi ghee, organic jaggery, and premium dry fruits",
  },
  {
    icon: Award,
    title: "Generations of Expertise",
    description: "Traditional recipes passed down through 4 generations of halwais",
  },
  {
    icon: Truck,
    title: "Same Day Delivery",
    description: "Fresh sweets delivered to your doorstep within hours in major cities",
  },
  {
    icon: Gift,
    title: "Premium Packaging",
    description: "Elegant gift boxes with personalized messages for special occasions",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "FSSAI certified with strict quality control at every step",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "All sweets prepared fresh daily in small batches for best taste",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-elegant text-lg">Why Crown of Sweets</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2">
            The Royal Difference
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We don't just make sweets, we craft experiences. Here's what makes
            Crown of Sweets the preferred choice for celebrations across India.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 h-full border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

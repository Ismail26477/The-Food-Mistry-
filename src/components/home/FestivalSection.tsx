import { motion } from "framer-motion";
import { Clock, ArrowRight, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const festivals = [
  {
    name: "Diwali Collection",
    description: "Celebrate the festival of lights with our premium sweet boxes",
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600&q=80",
    discount: "25% OFF",
    link: "/festivals/diwali",
  },
  {
    name: "Holi Specials",
    description: "Colorful sweets for the festival of colors",
    image: "https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=600&q=80",
    discount: "20% OFF",
    link: "/festivals/holi",
  },
  {
    name: "Rakhi Hampers",
    description: "Express your love with curated sweet hampers",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    discount: "15% OFF",
    link: "/festivals/rakhi",
  },
];

export const FestivalSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        {/* Sparkle Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
          >
            <Sparkles className="w-6 h-6 text-accent/30" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            <span>Limited Time Offers</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Festival Special Collection
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto font-elegant text-lg">
            Celebrate every occasion with our specially curated festival collections.
            Premium quality, beautiful packaging, and unforgettable taste.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <Clock className="w-6 h-6 text-accent" />
          <span className="text-lg font-medium">Offer Ends In:</span>
          <div className="flex gap-3">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-accent text-accent-foreground w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold">
                  {String(item.value).padStart(2, "0")}
                </div>
                <span className="text-xs text-primary-foreground/60 mt-1 block">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Festival Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {festivals.map((festival, index) => (
            <motion.div
              key={festival.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={festival.link} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={festival.image}
                      alt={festival.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {festival.discount}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold mb-2">
                      {festival.name}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm mb-4">
                      {festival.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all">
                      <span>Shop Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/festivals">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10">
              View All Festival Collections
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

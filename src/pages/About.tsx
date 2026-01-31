import { motion } from "framer-motion";
import { Crown, Award, Heart, Users, Leaf, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const values = [
  { icon: Leaf, title: "Pure Ingredients", description: "We use only the finest natural ingredients - pure desi ghee, organic jaggery, and premium dry fruits." },
  { icon: Award, title: "Generations of Expertise", description: "Our recipes have been perfected over 4 generations of master halwais, ensuring authentic taste." },
  { icon: Heart, title: "Made with Love", description: "Every sweet is handcrafted with care and passion, making each bite a memorable experience." },
  { icon: Clock, title: "Fresh Daily", description: "All our sweets are prepared fresh daily in small batches to ensure maximum freshness and taste." },
];

const milestones = [
  { year: "1952", title: "Humble Beginnings", description: "Started as a small sweet shop in Old Delhi's Chandni Chowk" },
  { year: "1980", title: "Expanding Horizons", description: "Opened our second store and introduced new sweet varieties" },
  { year: "2005", title: "Modernization", description: "Upgraded to a state-of-the-art production facility" },
  { year: "2020", title: "Going Digital", description: "Launched online ordering to serve customers across India" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Crown className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Our Royal Legacy</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto font-elegant text-lg">
              For over 70 years, Crown of Sweets has been crafting the finest Indian confections, 
              preserving traditional recipes while embracing modern excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=600&q=80" alt="Traditional Sweet Making" className="rounded-2xl shadow-2xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-accent font-elegant text-lg">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                From a Small Shop to a Royal Brand
              </h2>
              <div className="space-y-4 text-muted-foreground font-elegant">
                <p>
                  Crown of Sweets began in 1952 as a humble sweet shop in the heart of Old Delhi's 
                  bustling Chandni Chowk. Founded by Late Shri Rameshwar Das Ji, our journey started 
                  with a simple mission - to create sweets that bring joy to every celebration.
                </p>
                <p>
                  Today, four generations later, we continue to uphold the same values of quality, 
                  authenticity, and love that our founder instilled. Every sweet that leaves our 
                  kitchen carries with it decades of expertise and the warmth of tradition.
                </p>
                <p>
                  Our master halwais still follow the time-honored recipes, using only pure desi ghee, 
                  organic jaggery, and the finest ingredients sourced from across India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-accent font-elegant text-lg">What We Stand For</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2">Our Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-2xl p-6 text-center shadow-card">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-accent font-elegant text-lg">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2">Milestones</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div key={milestone.year} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 mb-8">
                <div className="w-24 shrink-0 text-right">
                  <span className="font-display text-2xl font-bold text-accent">{milestone.year}</span>
                </div>
                <div className="relative pb-8 border-l-2 border-accent pl-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent" />
                  <h3 className="font-display text-lg font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Family</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Behind every delicious sweet is a dedicated team of 100+ artisans, chefs, and 
              professionals who share a passion for excellence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "70+", label: "Years of Legacy" },
                { value: "100+", label: "Team Members" },
                { value: "50K+", label: "Happy Customers" },
                { value: "25+", label: "Cities Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl font-bold text-accent">{stat.value}</div>
                  <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

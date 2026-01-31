"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, Gift, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-cream via-cream-dark to-muted"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23800020' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div style={{ y: textY, opacity }} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Premium Handcrafted Sweets</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="block text-primary"
              >
                Experience the
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              >
                Royal Taste
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-primary"
              >
                of Tradition
              </motion.span>
            </h1>

            <p className="text-lg text-muted-foreground font-elegant max-w-lg">
              Indulge in our exquisite collection of authentic Indian sweets and premium chocolates, crafted with
              generations of expertise and the finest ingredients.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/sweets">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 group">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/festivals">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 bg-transparent"
                >
                  Festival Specials
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Gift, text: "Gift Wrapping" },
                { icon: Truck, text: "Same Day Delivery" },
                { icon: Sparkles, text: "100% Fresh" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div style={{ y, scale }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Golden Circle Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30"
              />

              {/* Main Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl shadow-primary/20 bg-gradient-to-br from-accent/20 to-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=600&q=80"
                  alt="Delicious Indian Sweets"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Sweet Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -left-4 top-1/4 bg-card p-3 rounded-xl shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=150&q=80"
                  alt="Ladoo"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-xs font-medium mt-1 text-center">Ladoo</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -right-4 top-1/3 bg-card p-3 rounded-xl shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1609850051659-c1aa7e6e8ce3?w=150&q=80"
                  alt="Gulab Jamun"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-xs font-medium mt-1 text-center">Gulab Jamun</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute left-1/4 -bottom-4 bg-card p-3 rounded-xl shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=150&q=80"
                  alt="Chocolate"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-xs font-medium mt-1 text-center">Chocolates</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

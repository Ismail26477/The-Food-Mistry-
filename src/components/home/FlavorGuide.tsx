"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Leaf, Coffee } from "lucide-react"

const flavors = [
  { name: "Pure Saffron", icon: Sparkles, color: "bg-[#FFD700]", desc: "Sourced from Kashmir for royal aroma." },
  { name: "Green Pistachio", icon: Leaf, color: "bg-[#93C572]", desc: "Premium Iranian pistachios for crunch." },
  { name: "Malabar Cardamom", icon: Coffee, color: "bg-[#8B4513]", desc: "Finely ground for a refreshing kick." },
]

const MagneticCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    }
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.2, y: y * 0.2 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

export const FlavorGuide = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent uppercase tracking-widest text-sm font-bold"
          >
            The Essence of Luxury
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon mt-2 mb-4">The Royal Ingredients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-elegant text-lg">
            Every bite tells a story of heritage, sourced from the finest gardens across the orient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((flavor, i) => (
            <MagneticCard key={flavor.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream h-full p-10 rounded-[2.5rem] border border-accent/10 hover:border-accent/40 transition-colors group relative overflow-hidden flex flex-col items-center text-center"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                <div
                  className={`w-20 h-20 ${flavor.color} rounded-2xl flex items-center justify-center mb-8 text-white rotate-3 group-hover:rotate-12 transition-transform shadow-xl`}
                >
                  <flavor.icon className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-display text-maroon mb-4">{flavor.name}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{flavor.desc}</p>

                <div className="mt-8 pt-8 border-t border-accent/10 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent font-bold text-xs uppercase tracking-tighter">Pure Excellence</span>
                </div>
              </motion.div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  )
}

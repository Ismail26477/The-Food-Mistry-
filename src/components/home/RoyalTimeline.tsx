"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const timelineEvents = [
  {
    year: "1948",
    title: "The First Flame",
    description: "Our great-grandfather started with a single copper vessel in a small corner of the royal bazaar.",
    image: "/vintage-sweet-shop-1940s.jpg",
  },
  {
    year: "1975",
    title: "Imperial Recognition",
    description: "Appointed as the official sweet makers for the regional heritage festivals.",
    image: "/indian-festival-celebration-vintage.jpg",
  },
  {
    year: "2002",
    title: "Global Reach",
    description: "Expanding our royal taste to international connoisseurs while maintaining artisanal roots.",
    image: "/luxury-sweet-box-packaging.jpg",
  },
  {
    year: "Today",
    title: "A Modern Legacy",
    description: "Combining 75 years of secret recipes with modern precision and global delivery.",
    image: "/modern-luxury-indian-sweet-shop.jpg",
  },
]

export const RoyalTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary mb-4"
          >
            The Royal Kitchen Timeline
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through generations of secret recipes and imperial craftsmanship.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 origin-top hidden md:block"
          />

          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="aspect-[3/2] rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-serif text-sm shadow-xl">
                  {event.year}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 text-center md:text-left"
                >
                  <span className="text-primary font-bold md:hidden">{event.year}</span>
                  <h3 className="text-2xl font-serif text-primary mt-2 mb-4">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

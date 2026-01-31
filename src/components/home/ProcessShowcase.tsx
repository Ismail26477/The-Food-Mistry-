"use client"

import { motion } from "framer-motion"
import { Sparkles, Hammer, Droplets, Sun } from "lucide-react"

const processSteps = [
  {
    icon: Droplets,
    title: "Pure Origins",
    description: "Using only full-cream milk from heritage farms and locally sourced pure saffron.",
  },
  {
    icon: Hammer,
    title: "Hand-Rolled",
    description: "Every single sweet is hand-shaped by artisans with over 20 years of experience.",
  },
  {
    icon: Sun,
    title: "Sun-Dried",
    description: "Natural cooling and drying processes preserve the delicate essential oils of our spices.",
  },
  {
    icon: Sparkles,
    title: "Gilded Finish",
    description: "Adorned with pure vegetarian silver and gold leaf for that imperial touch.",
  },
]

export const ProcessShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1a0b0b] text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary-foreground text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-4 h-4" />
              Artisanal Craftsmanship
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif leading-tight"
            >
              Made with <span className="text-primary italic">Patience</span>, Served with{" "}
              <span className="text-primary italic">Pride</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-lg leading-relaxed"
            >
              We believe in the slow way. The traditional way. The way that honors the ingredients and the hands that
              transform them into royal treasures.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-serif">{step.title}</h4>
                  <p className="text-sm text-white/50">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
              <img
                src="/sweet-making-process-artisanal.jpg"
                alt="Artisanal sweet making process"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b0b] via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-full shadow-2xl border-8 border-[#1a0b0b]"
            >
              <div className="text-center">
                <p className="text-3xl font-serif leading-none">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-tighter">Natural</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

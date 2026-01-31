"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Volume2, VolumeX, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const VideoShowcase = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])

  return (
    <section ref={containerRef} className="relative h-[80vh] min-h-[600px] overflow-hidden bg-black">
      {/* Background Video */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=1200&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-chocolate-pouring-on-a-stack-of-sweets-42646-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-accent font-elegant text-xl md:text-2xl mb-4 block tracking-wider">
            The Art of Sweetness
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafted with <span className="text-accent italic">Passion</span>, <br />
            Served with <span className="text-accent italic">Heritage</span>.
          </h2>
          <p className="text-white/80 font-elegant text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Experience the mesmerizing process behind our artisanal creations. Every pour, every fold, and every touch
            is a tribute to centuries-old traditions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 rounded-full h-14 text-lg group"
            >
              Watch Our Story <Play className="ml-2 w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-bold px-8 rounded-full h-14 text-lg bg-transparent"
            >
              Explore Collection <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Floating Product Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-10 right-4 md:right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 max-w-xs group cursor-pointer hover:bg-white/20 transition-colors"
        >
          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=200&q=80"
              alt="Kaju Katli"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1">Featured Mithai</p>
            <h4 className="text-white font-bold text-sm mb-1">Signature Kaju Katli</h4>
            <p className="text-white/60 text-xs">₹890 / 500g</p>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute top-10 right-10 flex gap-4 z-20">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </section>
  )
}

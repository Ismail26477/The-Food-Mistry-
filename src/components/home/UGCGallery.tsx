"use client"

import { motion } from "framer-motion"
import { Instagram, ShoppingBag } from "lucide-react"

const galleryItems = [
  { id: 1, image: "/ugc-sweet-box-1.jpg", username: "@priya_sweets" },
  { id: 2, image: "/ugc-sweet-box-2.jpg", username: "@rahul_foodie" },
  { id: 3, image: "/ugc-sweet-box-3.jpg", username: "@luxury_gifting" },
  { id: 4, image: "/ugc-sweet-box-4.jpg", username: "@sweet_moments" },
  { id: 5, image: "/ugc-sweet-box-5.jpg", username: "@royal_celebrations" },
  { id: 6, image: "/ugc-sweet-box-6.jpg", username: "@delhi_eats" },
]

export const UGCGallery = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              <Instagram className="w-4 h-4" />
              Shared by our Royal Family
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-primary"
            >
              Sweet Moments Captured
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 p-4 bg-background border-2 border-primary/10 rounded-2xl shadow-xl"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Instagram className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold">Join 50k+ Followers</p>
              <p className="text-xs text-muted-foreground">Tag us to be featured</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={`Social post by ${item.username}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                <p className="text-xs font-bold mb-2">{item.username}</p>
                <div className="flex items-center gap-2 text-[10px] bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <ShoppingBag className="w-3 h-3" />
                  Shop this Box
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

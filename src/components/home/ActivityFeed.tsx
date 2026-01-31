"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag } from "lucide-react"

const activities = [
  { city: "Mumbai", product: "Kaju Katli" },
  { city: "Delhi", product: "Royal Box" },
  { city: "Bangalore", product: "Milk Cake" },
  { city: "London", product: "Gift Hamper" },
  { city: "Dubai", product: "Saffron Ladoo" },
]

export const ActivityFeed = () => {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(true)
      setTimeout(() => setVisible(false), 5000)
      setCurrent((prev) => (prev + 1) % activities.length)
    }, 15000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-[60] pointer-events-none hidden md:block">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            className="bg-background/95 backdrop-blur border-2 border-primary/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">Live Order</p>
              <p className="text-xs font-medium leading-tight">
                Someone in <span className="font-bold">{activities[current].city}</span> just ordered
                <span className="text-primary font-bold"> {activities[current].product}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

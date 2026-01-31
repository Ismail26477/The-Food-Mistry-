"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Heart, Briefcase, Calendar, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const STEPS = [
  {
    id: "occasion",
    title: "The Occasion",
    options: [
      { id: "wedding", label: "Royal Wedding", icon: Heart },
      { id: "corporate", label: "Corporate Gift", icon: Briefcase },
      { id: "festive", label: "Festival Joy", icon: Calendar },
      { id: "personal", label: "Personal Token", icon: Gift },
    ],
  },
  {
    id: "vibe",
    title: "The Desired Impression",
    options: [
      { id: "traditional", label: "Pure Tradition", icon: Sparkles },
      { id: "modern", label: "Modern Luxury", icon: Sparkles },
      { id: "healthy", label: "Health Conscious", icon: Sparkles },
    ],
  },
]

export const GiftConcierge = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<any>({})

  const handleSelect = (optionId: string) => {
    setSelections({ ...selections, [STEPS[currentStep].id]: optionId })
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-muted/30 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-accent/20">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / (STEPS.length + 1)) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="text-accent uppercase tracking-widest text-sm font-bold">Gift Concierge</span>
                <h2 className="text-4xl font-display text-maroon">{STEPS[currentStep].title}</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {STEPS[currentStep].options.map((option) => {
                  const Icon = option.icon
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      className="group p-6 bg-white rounded-2xl border-2 border-transparent hover:border-accent hover:shadow-xl transition-all"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="text-accent w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-maroon">{option.label}</span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {currentStep === STEPS.length - 1 && selections[STEPS[currentStep].id] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 pt-12 border-t border-muted"
            >
              <h3 className="text-2xl font-display text-maroon mb-4">Our Recommendation for You</h3>
              <p className="text-muted-foreground mb-8">
                Based on your choice for a {selections.occasion}, we suggest the Imperial Collection.
              </p>
              <Button className="bg-maroon text-white px-8 h-12 rounded-full group">
                View Recommended Sweets
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

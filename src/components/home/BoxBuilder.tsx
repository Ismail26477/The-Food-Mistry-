"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, BoxIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

const BOX_SIZES = [
  { id: "small", name: "Royal Small", slots: 4, price: 499 },
  { id: "medium", name: "Imperial Medium", slots: 9, price: 899 },
  { id: "large", name: "Majestic Large", slots: 16, price: 1499 },
]

const SWEET_OPTIONS = [
  { id: 101, name: "Kaju Katli", image: "/kaju-katli.jpg" },
  { id: 102, name: "Gulab Jamun", image: "/gulab-jamun.png" },
  { id: 103, name: "Milk Cake", image: "/milk-cake.jpg" },
  { id: 104, name: "Motichoor Ladoo", image: "/ladoo.jpg" },
]

export const BoxBuilder = () => {
  const [selectedSize, setSelectedSize] = useState(BOX_SIZES[1])
  const [selectedSweets, setSelectedSweets] = useState<any[]>([])
  const { addItem } = useCart()

  const addSweet = (sweet: any) => {
    if (selectedSweets.length < selectedSize.slots) {
      setSelectedSweets([...selectedSweets, sweet])
    }
  }

  const removeSweet = (index: number) => {
    setSelectedSweets(selectedSweets.filter((_, i) => i !== index))
  }

  const handleAddToBox = () => {
    if (selectedSweets.length === selectedSize.slots) {
      addItem({
        id: Math.random(),
        name: `Custom ${selectedSize.name} Box`,
        price: selectedSize.price,
        weight: "Custom",
        image: "/custom-box.png",
        quantity: 1,
      })
      setSelectedSweets([])
    }
  }

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-elegant text-2xl"
          >
            Craft Your Experience
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display text-maroon mt-2">Personalized Royal Box</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Step 1: Choose Size & Select Sweets */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-royal">
              <h3 className="text-xl font-display text-maroon mb-6">1. Select Box Size</h3>
              <div className="grid grid-cols-3 gap-4">
                {BOX_SIZES.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => {
                      setSelectedSize(size)
                      setSelectedSweets([])
                    }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedSize.id === size.id
                        ? "border-accent bg-accent/5 shadow-gold"
                        : "border-muted hover:border-accent/30"
                    }`}
                  >
                    <BoxIcon
                      className={`mx-auto mb-2 ${selectedSize.id === size.id ? "text-accent" : "text-muted-foreground"}`}
                    />
                    <div className="text-xs font-bold uppercase tracking-wider">{size.name}</div>
                    <div className="text-sm text-muted-foreground">{size.slots} Pcs</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-royal">
              <h3 className="text-xl font-display text-maroon mb-6">2. Choose Your Delicacies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SWEET_OPTIONS.map((sweet) => (
                  <button key={sweet.id} onClick={() => addSweet(sweet)} className="group relative">
                    <div className="aspect-square rounded-lg overflow-hidden border border-muted group-hover:border-accent transition-colors">
                      <img
                        src={sweet.image || "/placeholder.svg"}
                        alt={sweet.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs mt-2 font-medium">{sweet.name}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Live Preview */}
          <div className="sticky top-24">
            <div className="bg-maroon p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-3xl" />

              <div className="relative z-10">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-white text-2xl font-display">Your Selection</h3>
                    <p className="text-white/60 text-sm">Fill all {selectedSize.slots} slots to complete</p>
                  </div>
                  <div className="text-right">
                    <span className="text-accent text-3xl font-display">₹{selectedSize.price}</span>
                  </div>
                </div>

                <div
                  className={`grid gap-2 mb-8 ${
                    selectedSize.slots === 4 ? "grid-cols-2" : selectedSize.slots === 9 ? "grid-cols-3" : "grid-cols-4"
                  }`}
                >
                  {Array.from({ length: selectedSize.slots }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden group"
                    >
                      {selectedSweets[i] ? (
                        <>
                          <img
                            src={selectedSweets[i].image || "/placeholder.svg"}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => removeSweet(i)}
                            className="absolute inset-0 bg-maroon/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <X className="text-white w-5 h-5" />
                          </button>
                        </>
                      ) : (
                        <div className="text-white/20 text-xs">{i + 1}</div>
                      )}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleAddToBox}
                  disabled={selectedSweets.length < selectedSize.slots}
                  className="w-full h-14 bg-accent hover:bg-accent-dark text-maroon font-bold text-lg rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                >
                  {selectedSweets.length < selectedSize.slots
                    ? `Add ${selectedSize.slots - selectedSweets.length} more`
                    : "Add Royal Box to Cart"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: number
  name: string
  price: number
  weight: string
  image: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number, weight: string) => void
  updateQuantity: (id: number, weight: string, quantity: number) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem) => {
        const items = get().items
        const existingItem = items.find((item) => item.id === newItem.id && item.weight === newItem.weight)

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === newItem.id && item.weight === newItem.weight
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item,
            ),
          })
        } else {
          set({ items: [...items, newItem] })
        }
      },
      removeItem: (id, weight) => {
        set({
          items: get().items.filter((item) => !(item.id === id && item.weight === weight)),
        })
      },
      updateQuantity: (id, weight, quantity) => {
        set({
          items: get().items.map((item) => (item.id === id && item.weight === weight ? { ...item, quantity } : item)),
        })
      },
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    { name: "cart-storage" },
  ),
)

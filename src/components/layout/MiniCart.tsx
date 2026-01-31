"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash2, Plus, Minus, ShoppingBag, Calendar, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { useState } from "react"

const UPSELL_ITEMS = [
  { id: "gift-card", name: "Royal Greeting Card", price: 49, image: "/luxury-greeting-card.jpg" },
  { id: "gift-wrap", name: "Premium Gold Wrap", price: 99, image: "/gold-gift-wrap.jpg" },
]

export const MiniCart = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const { items, removeItem, updateQuantity, totalPrice, addItem } = useCart()
  const [deliveryDate, setDeliveryDate] = useState<Date>()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Your Sweet Box
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">Your box is empty. Start adding some treats!</p>
              <Button asChild onClick={() => setOpen(false)}>
                <Link to="/sweets">Shop Sweets</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.weight}`} className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                      <p className="text-xs text-muted-foreground font-medium">{item.weight}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md px-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.weight, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-sm text-primary">₹{item.price * item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.id, item.weight)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <h5 className="text-sm font-bold">Enhance Your Gift</h5>
                </div>
                <div className="space-y-3">
                  {UPSELL_ITEMS.map((upsell) => (
                    <div
                      key={upsell.id}
                      className="flex items-center justify-between p-3 bg-primary/5 rounded-xl border border-primary/10"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={upsell.image || "/placeholder.svg"}
                          alt={upsell.name}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                        <div>
                          <p className="text-xs font-bold">{upsell.name}</p>
                          <p className="text-xs text-primary">₹{upsell.price}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 text-primary hover:bg-primary/10"
                        onClick={() => addItem({ ...upsell, weight: "Standard", quantity: 1 } as any)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t pb-4">
                <h5 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Select Delivery Date
                </h5>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${!deliveryDate && "text-muted-foreground"}`}
                    >
                      {deliveryDate ? format(deliveryDate, "PPP") : <span>Pick a date for arrival</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={deliveryDate}
                      onSelect={setDeliveryDate}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <p className="text-[10px] text-muted-foreground mt-2 italic text-center">
                  *Delivery dates are subject to local logistics and festival schedules.
                </p>
              </div>
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <SheetFooter className="p-6 border-t flex-col sm:flex-col gap-4">
            <div className="flex items-center justify-between w-full">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold text-xl text-primary">₹{totalPrice()}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              <Button variant="outline" asChild onClick={() => setOpen(false)} className="w-full">
                <Link to="/cart">View Cart</Link>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90">Checkout</Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

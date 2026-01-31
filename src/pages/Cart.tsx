import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, Gift, MessageSquare, Truck, ArrowRight, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const initialCartItems = [
  { id: 1, name: "Kesar Peda", price: 450, quantity: 2, image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=200&q=80", weight: "500g" },
  { id: 2, name: "Belgian Chocolate Box", price: 899, quantity: 1, image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=200&q=80", weight: "250g" },
  { id: 3, name: "Gulab Jamun", price: 380, quantity: 1, image: "https://images.unsplash.com/photo-1609850051659-c1aa7e6e8ce3?w=200&q=80", weight: "1kg (12pcs)" },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const giftWrapCost = giftWrap ? 99 : 0;
  const deliveryFee = subtotal > 999 ? 0 : 49;
  const total = subtotal + giftWrapCost + deliveryFee;

  return (
    <Layout>
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">Your Cart</h1>
            <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-4 shadow-card flex gap-4"
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.weight}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 bg-muted rounded-lg">
                        <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <span className="text-xl font-bold text-primary">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Gift Options */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-accent" />
                  Gift Options
                </h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <Checkbox checked={giftWrap} onCheckedChange={(checked) => setGiftWrap(checked as boolean)} />
                    <span>Premium Gift Wrapping (+₹99)</span>
                  </label>
                  {giftWrap && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MessageSquare className="w-4 h-4" />
                        Add a personal message
                      </label>
                      <Textarea
                        placeholder="Write your message here..."
                        value={giftMessage}
                        onChange={(e) => setGiftMessage(e.target.value)}
                        className="resize-none"
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card rounded-2xl p-6 shadow-card sticky top-36">
                <h3 className="font-display text-xl font-semibold mb-6">Order Summary</h3>

                {/* Coupon */}
                <div className="flex gap-2 mb-6">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} className="pl-10" />
                  </div>
                  <Button variant="outline" className="border-primary text-primary">Apply</Button>
                </div>

                <div className="space-y-3 pb-4 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {giftWrap && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Gift Wrapping</span>
                      <span>₹{giftWrapCost}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className={deliveryFee === 0 ? "text-green-600" : ""}>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                  </div>
                </div>

                <div className="flex justify-between py-4 text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>

                {subtotal < 999 && (
                  <p className="text-xs text-muted-foreground mb-4 text-center">
                    Add ₹{999 - subtotal} more for FREE delivery!
                  </p>
                )}

                <Button className="w-full bg-primary text-lg py-6 group">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4" />
                  <span>Same Day Delivery Available</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;

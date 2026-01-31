import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Package, Heart, LogOut, Edit } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const orders = [
  { id: "COS-001234", date: "Dec 28, 2024", status: "Delivered", total: 1299, items: ["Kesar Peda (500g)", "Gulab Jamun (1kg)"] },
  { id: "COS-001189", date: "Dec 15, 2024", status: "Delivered", total: 2499, items: ["Diwali Deluxe Hamper"] },
  { id: "COS-001156", date: "Nov 30, 2024", status: "Delivered", total: 899, items: ["Belgian Chocolate Box"] },
];

const wishlistItems = [
  { id: 1, name: "Kaju Katli Premium", price: 890, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=200&q=80" },
  { id: 2, name: "Dry Fruit Barfi", price: 750, image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=200&q=80" },
  { id: 3, name: "Chocolate Truffle Cake", price: 649, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80" },
];

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  if (!isLoggedIn) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl p-8 shadow-card">
                <div className="text-center mb-8">
                  <User className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h1 className="font-display text-2xl font-bold text-primary">Welcome Back</h1>
                  <p className="text-muted-foreground text-sm mt-2">Sign in to your account to continue</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input type="email" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} placeholder="you@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <Input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="••••••••" required />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="text-accent hover:underline">Forgot password?</a>
                  </div>
                  <Button type="submit" className="w-full bg-primary">Sign In</Button>
                </form>
                <div className="mt-6 text-center text-sm">
                  <span className="text-muted-foreground">Don't have an account? </span>
                  <a href="#" className="text-accent font-medium hover:underline">Create Account</a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                R
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-primary">Rahul Sharma</h1>
                <p className="text-muted-foreground text-sm">Member since Jan 2024</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full max-w-lg grid-cols-3">
              <TabsTrigger value="orders"><Package className="w-4 h-4 mr-2" />Orders</TabsTrigger>
              <TabsTrigger value="wishlist"><Heart className="w-4 h-4 mr-2" />Wishlist</TabsTrigger>
              <TabsTrigger value="profile"><User className="w-4 h-4 mr-2" />Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold">Order History</h2>
                {orders.map((order) => (
                  <motion.div key={order.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl p-4 shadow-card">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{order.id}</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">{order.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                        <p className="text-sm text-muted-foreground mt-1">{order.items.join(", ")}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">₹{order.total}</p>
                        <Button variant="outline" size="sm" className="mt-2">View Details</Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wishlist">
              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold">My Wishlist</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {wishlistItems.map((item) => (
                    <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl p-4 shadow-card flex gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.name}</h3>
                        <p className="text-lg font-bold text-primary">₹{item.price}</p>
                        <Button size="sm" className="mt-2 bg-primary">Add to Cart</Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="profile">
              <div className="max-w-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-semibold">Profile Details</h2>
                  <Button variant="outline" size="sm"><Edit className="w-4 h-4 mr-2" />Edit</Button>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-card space-y-4">
                  <div className="flex items-center gap-4">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium">Rahul Sharma</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">rahul.sharma@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Default Address</p>
                      <p className="font-medium">42, Sector 15, Gurugram, Haryana - 122001</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Account;

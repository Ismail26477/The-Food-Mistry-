"use client"

import { motion } from "framer-motion"
import { Star, Quote, Instagram, HeartIcon } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "/indian-woman-portrait.png", // Updated avatar to use local asset
    rating: 5,
    text: "The Kesar Peda from Crown of Sweets is simply divine! The quality and freshness is unmatched. They've become our go-to for every celebration.",
    product: "Kesar Peda",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    avatar: "/thoughtful-man-portrait.png", // Updated avatar to use local asset
    rating: 5,
    text: "Ordered the Diwali gift hampers for our entire family. The packaging was beautiful and the sweets were absolutely fresh. Everyone loved it!",
    product: "Diwali Hamper",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "Best online sweet shop I've found! Same-day delivery in Bangalore and the Gulab Jamuns were as good as homemade. Highly recommend!",
    product: "Gulab Jamun",
  },
  {
    id: 4,
    name: "Vikram Mehta",
    location: "Hyderabad",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "The Belgian chocolate collection is worth every rupee. Premium quality chocolates with elegant packaging. Perfect for corporate gifting.",
    product: "Belgian Chocolates",
  },
]

const instagramPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=300&q=80", likes: "1.2k" },
  { id: 2, image: "https://images.unsplash.com/photo-1609850051659-c1aa7e6e8ce3?w=300&q=80", likes: "856" },
  { id: 3, image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&q=80", likes: "2.1k" },
  { id: 4, image: "https://images.unsplash.com/photo-1605197161942-c1e14e7dfa45?w=300&q=80", likes: "1.5k" },
]

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-elegant text-lg">What Our Customers Say</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2">Sweet Reviews</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their Crown of Sweets
            experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 font-elegant text-lg leading-relaxed mb-6">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-accent mt-1">Verified Purchase: {testimonial.product}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Feed Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <span className="text-accent font-elegant text-lg flex items-center justify-center gap-2">
              <Instagram className="w-5 h-5" /> @crownofsweets
            </span>
            <h2 className="font-display text-3xl font-bold text-primary mt-2">Royal Sweets on Instagram</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="group relative aspect-square overflow-hidden rounded-xl border">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold">
                  <HeartIcon className="w-5 h-5 fill-white" /> {post.likes}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            {[
              { value: "50,000+", label: "Happy Customers" },
              { value: "4.9", label: "Average Rating" },
              { value: "100+", label: "Sweet Varieties" },
              { value: "25+", label: "Cities Delivered" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

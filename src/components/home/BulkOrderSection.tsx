"use client"

import type React from "react"
import { Mail, Phone, Calendar, Gift, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export const BulkOrderSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Enquiry received! Our royal concierge will contact you shortly.")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-3xl overflow-hidden shadow-card border flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 lg:p-12 bg-primary text-primary-foreground">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Corporate & Wedding Gifting</h2>
            <p className="font-elegant text-xl opacity-90 mb-8">
              Make your special occasions truly royal with Crown of Sweets' custom bulk orders and premium packaging.
            </p>

            <div className="space-y-6">
              {[
                { icon: Gift, title: "Custom Packaging", desc: "Personalized boxes with your branding" },
                { icon: Calendar, title: "Occasion Focused", desc: "Special themes for weddings and festivals" },
                { icon: Mail, title: "Dedicated Concierge", desc: "Personal manager for your bulk requirements" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-bold text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-bold text-lg">royal@crownofsweets.com</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12">
            <h3 className="font-display text-2xl font-bold mb-6 text-primary">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground">Full Name</label>
                  <Input placeholder="John Doe" required className="bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground">Company (Optional)</label>
                  <Input placeholder="Company Name" className="bg-muted/30" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground">Email Address</label>
                <Input type="email" placeholder="john@example.com" required className="bg-muted/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground">Approx. Quantity</label>
                  <Input type="number" placeholder="50+" required className="bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground">Delivery Date</label>
                  <Input type="date" required className="bg-muted/30" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground">Message / Requirements</label>
                <Textarea placeholder="Tell us about your event..." className="min-h-[100px] bg-muted/30" />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-lg font-bold"
              >
                <Send className="w-5 h-5 mr-2" /> Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

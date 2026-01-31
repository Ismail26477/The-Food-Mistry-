import { Layout } from "@/components/layout/Layout"
import { HeroSection } from "@/components/home/HeroSection"
import { CategoriesSection } from "@/components/home/CategoriesSection"
import { BestsellersSection } from "@/components/home/BestsellersSection"
import { FestivalSection } from "@/components/home/FestivalSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { BulkOrderSection } from "@/components/home/BulkOrderSection" // added import
import { FlavorGuide } from "@/components/home/FlavorGuide" // added flavor guide
import { BoxBuilder } from "@/components/home/BoxBuilder" // Added interactive Box Builder
import { GiftConcierge } from "@/components/home/GiftConcierge" // Added Gift Concierge
import { RoyalTimeline } from "@/components/home/RoyalTimeline"
import { ActivityFeed } from "@/components/home/ActivityFeed"
import { UGCGallery } from "@/components/home/UGCGallery"
import { ProcessShowcase } from "@/components/home/ProcessShowcase"
import { VideoShowcase } from "@/components/home/VideoShowcase" // Added VideoShowcase import

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FlavorGuide />
      <VideoShowcase /> {/* Added VideoShowcase after FlavorGuide for high-impact visual flow */}
      <ProcessShowcase /> {/* Inserted Process Showcase for artisanal feel */}
      <BoxBuilder />
      <RoyalTimeline /> {/* Inserted Royal Timeline before categories */}
      <CategoriesSection />
      <BestsellersSection />
      <GiftConcierge />
      <FestivalSection />
      <UGCGallery /> {/* Added User Generated Content gallery */}
      <WhyChooseUs />
      <BulkOrderSection />
      <TestimonialsSection />
      <ActivityFeed /> {/* Added Activity Feed (Floating) */}
    </Layout>
  )
}

export default Index

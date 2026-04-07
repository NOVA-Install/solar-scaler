import HeroSection from '@/components/hero-section'
import ProcessHeader from '@/components/process-header'
import Section01 from '@/components/section-01'
import Section02 from '@/components/section-02'
import Section03 from '@/components/section-03'
import EarlyAccessBanner from '@/components/early-access-banner'
import Footer from '@/components/footer'

export const metadata = {
  title: 'NOVA — Solar Scaler Program',
  description: 'From lead generation to closed job — one system, built exclusively for solar, managed end to end.',
}

export default function SolarScalerPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="bg-white">
        <ProcessHeader />
        <Section02 />
        <Section03 />
        <Section01 />
        <EarlyAccessBanner />
        <Footer />
      </div>
    </main>
  )
}

import OSNavbar from '@/components/os/navbar'
import OSHeroSection from '@/components/os/hero-section'
import OSProblemSection from '@/components/os/problem-section'
import OSFeaturesSection from '@/components/os/features-section'
import OSCallSection from '@/components/os/call-section'
import OSMarketplaceSection from '@/components/os/marketplace-section'
import OSCtaSection from '@/components/os/cta-section'
import OSFooter from '@/components/os/footer'

export const metadata = {
  title: 'NOVA - The AI-Native OS for Installers',
  description: 'Your entire install operations. One platform. Built for home energy installers. AI runs your pipeline so you can focus on installs.',
  openGraph: {
    title: 'NOVA - The AI-Native OS for Installers',
    description: 'Your entire install operations. One platform. Built for home energy installers. AI runs your pipeline so you can focus on installs.',
    images: ['/assets/og-image.png'],
    url: 'https://novainstall.co.uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVA - The AI-Native OS for Installers',
    description: 'Your entire install operations. One platform. Built for home energy installers. AI runs your pipeline so you can focus on installs.',
    images: ['/assets/og-image.png'],
  },
}

export default function Page() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <OSNavbar />
      <OSHeroSection />
      <OSProblemSection />
      <OSFeaturesSection />
      <OSCallSection />
      <OSMarketplaceSection />
      <OSCtaSection />
      <OSFooter />
    </main>
  )
}

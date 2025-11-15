import { Locale, translations } from '@/lib/i18n';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ProblemSection } from '@/components/problem-section';
import { JourneySection } from '@/components/journey-section';
import { ServicesSection } from '@/components/services-section';
import { TrustSection } from '@/components/trust-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { FAQSection } from '@/components/faq-section';
import { CTAFooterSection } from '@/components/cta-footer-section';
import { Footer } from '@/components/footer';

export function generateStaticParams() {
  return [
    { lang: 'ko' },
    { lang: 'uz' },
    { lang: 'en' },
    { lang: 'kk' },
    { lang: 'ru' }
  ];
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <main className="min-h-screen">
      <Navigation lang={lang} t={t} />
      <HeroSection lang={lang} t={t} />
      <ProblemSection t={t} />
      <JourneySection t={t} />
      <ServicesSection t={t} />
      <TrustSection t={t} />
      <HowItWorksSection t={t} />
      <FAQSection t={t} />
      <CTAFooterSection lang={lang} t={t} />
      <Footer t={t} />
    </main>
  );
}

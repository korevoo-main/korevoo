'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Locale } from '@/lib/i18n';

export function HeroSection({ t, lang }: { t: any; lang: Locale }) {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <section className="relative bg-neutral-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight text-balance">
              {t.hero_title}
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
              {t.hero_sub}
            </p>
            <div className="space-y-3">
              {t.hero_bullets.map((bullet: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-700">{bullet}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {(lang === 'ko' || lang === 'en' || lang === 'ru') ? (
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
                  onClick={() => setShowDialog(true)}
                >
                  {t.cta}
                </Button>
              ) : (
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8" asChild>
                  <a href={t.cta_link} target="_blank" rel="noopener noreferrer">{t.cta}</a>
                </Button>
              )}
              <Button size="lg" variant="outline" className="rounded-full px-8 border-neutral-300" asChild>
                <a href="#about">{t.nav_about}</a>
              </Button>
            </div>

            <Dialog open={showDialog} onOpenChange={setShowDialog}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl">
                    {lang === 'ko' ? '국가를 선택해주세요' : lang === 'ru' ? 'Выберите страну' : 'Select Your Country'}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-3 py-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full w-full"
                    asChild
                  >
                    <a href="https://bit.ly/uz-korevoo-google-form" target="_blank" rel="noopener noreferrer">
                      {lang === 'ko' ? '🇺🇿 우즈베키스탄' : lang === 'ru' ? '🇺🇿 Узбекистан' : '🇺🇿 Uzbekistan'}
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full w-full"
                    asChild
                  >
                    <a href="https://bit.ly/kk-korevoo-google-form" target="_blank" rel="noopener noreferrer">
                      {lang === 'ko' ? '🇰🇿 카자흐스탄' : lang === 'ru' ? '🇰🇿 Казахстан' : '🇰🇿 Kazakhstan'}
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
            <img
              src="/modern-minimalist-education-student-studying-in-ko.jpg"
              alt="Study in Korea"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

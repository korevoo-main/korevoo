'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Locale } from '@/lib/i18n';

export function CTAFooterSection({ t, lang }: { t: any; lang: Locale }) {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-blue-50 to-primary/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8 text-balance">
          {t.cta_footer_title}
        </h2>
        {(lang === 'ko' || lang === 'en' || lang === 'ru') ? (
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 text-lg"
            onClick={() => setShowDialog(true)}
          >
            {t.cta}
          </Button>
        ) : (
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 text-lg" asChild>
            <a href={t.cta_link} target="_blank" rel="noopener noreferrer">{t.cta}</a>
          </Button>
        )}
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
    </section>
  );
}

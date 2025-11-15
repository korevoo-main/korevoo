'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const localeNames = {
  ko: '한국어',
  en: 'English',
  uz: "O'zbek",
  kk: 'Қазақ',
  ru: 'Русский'
};

export function Navigation({ lang, t }: { lang: Locale; t: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Korevoo_logo_320x132-7QrTLRLGdKOolnAkIMOOW6AhB1hg3y.png"
              alt="Korevoo"
              width={120}
              height={50}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors">
              {t.nav_about}
            </a>
            <a href="#journey" className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors">
              {t.nav_journey}
            </a>
            <a href="#services" className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors">
              {t.nav_services}
            </a>
            <a href="#faq" className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors">
              {t.nav_faq}
            </a>
          </div>

          {/* Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                {localeNames[lang]}
                <ChevronDown className="h-4 w-4" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-neutral-200 py-1">
                  {Object.entries(localeNames).map(([locale, name]) => (
                    <Link
                      key={locale}
                      href={`/${locale}`}
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                      onClick={() => setLangOpen(false)}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {(lang === 'ko' || lang === 'en' || lang === 'ru') ? (
              <Button
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                onClick={() => setShowDialog(true)}
              >
                {t.cta}
              </Button>
            ) : (
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6" asChild>
                <a href={t.cta_link} target="_blank" rel="noopener noreferrer">{t.cta}</a>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-6 py-4 space-y-4">
            <a href="#about" className="block text-neutral-700 font-medium" onClick={() => setIsOpen(false)}>
              {t.nav_about}
            </a>
            <a href="#journey" className="block text-neutral-700 font-medium" onClick={() => setIsOpen(false)}>
              {t.nav_journey}
            </a>
            <a href="#services" className="block text-neutral-700 font-medium" onClick={() => setIsOpen(false)}>
              {t.nav_services}
            </a>
            <a href="#faq" className="block text-neutral-700 font-medium" onClick={() => setIsOpen(false)}>
              {t.nav_faq}
            </a>
            <div className="pt-2 border-t border-neutral-200">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex items-center justify-between w-full py-2 text-neutral-700 font-medium"
              >
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {localeNames[lang]}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileLangOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileLangOpen && (
                <div className="mt-2 space-y-2 pl-4 pb-2">
                  {Object.entries(localeNames).map(([locale, name]) => (
                    <Link
                      key={locale}
                      href={`/${locale}`}
                      className={`block text-sm ${locale === lang ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary'}`}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileLangOpen(false);
                      }}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {(lang === 'ko' || lang === 'en' || lang === 'ru') ? (
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                onClick={() => setShowDialog(true)}
              >
                {t.cta}
              </Button>
            ) : (
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full" asChild>
                <a href={t.cta_link} target="_blank" rel="noopener noreferrer">{t.cta}</a>
              </Button>
            )}
          </div>
        </div>
      )}

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
    </nav>
  );
}

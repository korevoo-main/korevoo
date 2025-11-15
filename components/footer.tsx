import Image from 'next/image';

export function Footer({ t }: { t: any }) {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Korevoo_logo_320x320-lWDAN0NxYaEYSXYeZpafjEUdj04rR1.png"
              alt="Korevoo"
              width={60}
              height={60}
              className="mb-4"
            />
            <p className="text-neutral-400 text-sm">
              {t.hero_sub}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t.footer_company}</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">{t.footer_about}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.footer_contact}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t.footer_privacy}</h3>
            <p className="text-sm text-neutral-400">
              © 2025 Korevoo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

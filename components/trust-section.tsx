import { Shield, MessageCircle, Users } from 'lucide-react';

const icons = [Shield, MessageCircle, Users];

export function TrustSection({ t }: { t: any }) {
  return (
    <section className="py-20 lg:py-28 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {t.trust_title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.trust_reasons.map((reason: any, i: number) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

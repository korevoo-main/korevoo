import { Target, DollarSign, FileCheck, MapPin } from 'lucide-react';

const icons = [Target, DollarSign, FileCheck, MapPin];

export function ServicesSection({ t }: { t: any }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 text-balance">
            {t.service_title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.map((service: any, i: number) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

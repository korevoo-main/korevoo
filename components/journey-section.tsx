import { Lightbulb, Search, School, FileText, Stamp, Home } from 'lucide-react';

const icons = [Lightbulb, Search, School, FileText, Stamp, Home];

export function JourneySection({ t }: { t: any }) {
  return (
    <section id="journey" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 text-balance">
            {t.journey_title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {t.journey_sub}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.steps.map((step: any, i: number) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-500">
                    {i + 1}/6
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

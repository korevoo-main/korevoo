import { ArrowRight } from 'lucide-react';

export function HowItWorksSection({ t }: { t: any }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {t.how_title}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {t.how_steps.map((step: any, i: number) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
              {i < t.how_steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute right-0 top-6 h-6 w-6 text-neutral-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

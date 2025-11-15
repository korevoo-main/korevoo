export function ProblemSection({ t }: { t: any }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-neutral-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 text-balance">
          {t.problem_title}
        </h2>
        <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
          {t.problem_desc}
        </p>
      </div>
    </section>
  );
}

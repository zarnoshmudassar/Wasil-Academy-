const STEPS = [
  {
    number: '01',
    title: 'Book Your Free Trial',
    description: 'Choose a convenient time for your free trial class.',
  },
  {
    number: '02',
    title: 'Meet Your Teacher',
    description: 'Experience a live one-to-one Quran lesson with a qualified female teacher.',
  },
  {
    number: '03',
    title: 'Start Your Journey',
    description: 'Choose the right course and begin your personalized Quran learning journey.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream-100 py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-600">How It Works</span>
          <h2 className="section-heading mt-4">Start Learning in 3 Simple Steps</h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {/* Connecting line for desktop */}
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-navy-200 sm:block"
            style={{ marginInline: '16.6%' }}
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold-400/50 bg-cream-100 font-display text-sm text-navy-800">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl text-navy-800">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

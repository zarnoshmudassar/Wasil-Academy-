import { GraduationCap, HeartHandshake, TrendingUp } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'Qualified Teachers' },
  { icon: HeartHandshake, label: 'Personal Attention' },
  { icon: TrendingUp, label: 'Regular Progress' },
];

export default function ParentsSection() {
  return (
    <section className="bg-cream-100 py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-navy-100 bg-white p-10 text-center shadow-sm sm:p-14">
          <span className="eyebrow justify-center text-gold-600">For Parents</span>
          <h2 className="section-heading mt-4">Your Child's Quranic Journey Is in Caring Hands</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-500">
            Choosing a Quran teacher for your child is an important decision. That's why Wasil
            Academy focuses on qualified teachers, personal attention, careful tracking of
            student progress, and a safe, caring learning environment — so you can feel confident
            every step of the way.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800/5 text-navy-700">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-navy-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

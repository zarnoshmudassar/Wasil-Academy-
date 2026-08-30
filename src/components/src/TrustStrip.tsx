import { GraduationCap, UserRound, Clock3, Gift } from 'lucide-react';

const ITEMS = [
  {
    icon: GraduationCap,
    title: 'Qualified Teachers',
    subtitle: 'Ijazah-Holding & Experienced',
  },
  {
    icon: UserRound,
    title: 'One-to-One Classes',
    subtitle: 'Personalized Attention',
  },
  {
    icon: Clock3,
    title: 'Flexible Timings',
    subtitle: 'Learn Around Your Schedule',
  },
  {
    icon: Gift,
    title: 'Free Trial',
    subtitle: 'Experience Before Enrollment',
  },
];

export default function TrustStrip() {
  return (
    <section className="relative border-b border-navy-100 bg-cream-50 py-10 sm:py-12" aria-label="Why families trust us">
      <div className="container-page grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
        {ITEMS.map(({ icon: Icon, title, subtitle }, i) => (
          <div
            key={title}
            className={`flex flex-col items-center gap-2.5 px-3 text-center sm:flex-row sm:items-start sm:text-left ${
              i < 3 ? 'sm:border-r sm:border-navy-100' : ''
            }`}
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy-800/5 text-navy-700">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-800">{title}</p>
              <p className="text-xs text-navy-500">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
        }

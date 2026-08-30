import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

export interface Course {
  icon: LucideIcon;
  name: string;
  description: string;
}

export default function CourseCard({ icon: Icon, name, description }: Course) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-xl hover:shadow-navy-900/5">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800/5 text-navy-700 transition-colors duration-300 group-hover:bg-navy-800 group-hover:text-gold-400">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <h3 className="font-display text-xl text-navy-800">{name}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-500">{description}</p>
      
        href="#contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-gold-600"
      >
        Learn More
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}

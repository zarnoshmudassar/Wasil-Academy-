import { SpellCheck2, BookOpenText, Mic2, BrainCircuit, Heart } from 'lucide-react';
import CourseCard, { type Course } from './CourseCard';

const COURSES: Course[] = [
  {
    icon: SpellCheck2,
    name: 'Noorani Qaida',
    description:
      'Build a strong foundation in Quran reading, Arabic letters, pronunciation and basic rules.',
  },
  {
    icon: BookOpenText,
    name: 'Nazra Quran',
    description: 'Learn to read the Holy Quran fluently, accurately and confidently.',
  },
  {
    icon: Mic2,
    name: 'Tajweed',
    description:
      'Improve Quranic pronunciation and learn essential Tajweed rules for beautiful and correct recitation.',
  },
  {
    icon: BrainCircuit,
    name: 'Hifz-ul-Quran',
    description:
      'Memorize the Quran through structured lessons, regular revision and continuous teacher guidance.',
  },
  {
    icon: Heart,
    name: 'Islamic Studies',
    description: 'Learn essential Islamic knowledge, duas, manners, values and everyday Islamic teachings.',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-600">Courses</span>
          <h2 className="section-heading mt-4">Our Quran &amp; Islamic Courses</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-500">
            A learning path for every student, from the first letter to confident Quran recitation
            and memorization.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.name} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}import { SpellCheck2, BookOpenText, Mic2, BrainCircuit, Heart } from 'lucide-react';
import CourseCard, { type Course } from './CourseCard';

const COURSES: Course[] = [
  {
    icon: SpellCheck2,
    name: 'Noorani Qaida',
    description:
      'Build a strong foundation in Quran reading, Arabic letters, pronunciation and basic rules.',
  },
  {
    icon: BookOpenText,
    name: 'Nazra Quran',
    description: 'Learn to read the Holy Quran fluently, accurately and confidently.',
  },
  {
    icon: Mic2,
    name: 'Tajweed',
    description:
      'Improve Quranic pronunciation and learn essential Tajweed rules for beautiful and correct recitation.',
  },
  {
    icon: BrainCircuit,
    name: 'Hifz-ul-Quran',
    description:
      'Memorize the Quran through structured lessons, regular revision and continuous teacher guidance.',
  },
  {
    icon: Heart,
    name: 'Islamic Studies',
    description: 'Learn essential Islamic knowledge, duas, manners, values and everyday Islamic teachings.',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-600">Courses</span>
          <h2 className="section-heading mt-4">Our Quran &amp; Islamic Courses</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-500">
            A learning path for every student, from the first letter to confident Quran recitation
            and memorization.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.name} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
    }

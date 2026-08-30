import { Facebook, Instagram, Youtube } from 'lucide-react';
import WasilMark from './WasilMark';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const COURSE_LINKS = ['Qaida', 'Nazra Quran', 'Tajweed', 'Hifz', 'Islamic Studies'];

const SOCIALS = [
  { icon: Facebook, label: 'Facebook (placeholder)' },
  { icon: Instagram, label: 'Instagram (placeholder)' },
  { icon: Youtube, label: 'YouTube (placeholder)' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 text-navy-300">
      <div className="container-page grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gold-400">
              <WasilMark className="h-4 w-4" />
            </span>
            <span className="font-display text-lg text-cream-50">
              WASIL <span className="font-normal text-navy-300">ACADEMY</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-400">
            Learn the Quran. Build Your Faith.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-400 transition-colors hover:border-gold-400/50 hover:text-gold-400"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-navy-400 transition-colors hover:text-gold-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100">Courses</h3>
          <ul className="mt-4 space-y-2.5">
            {COURSE_LINKS.map((course) => (
              <li key={course}>
                <a href="#courses" className="text-sm text-navy-400 transition-colors hover:text-gold-400">
                  {course}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100">Get Started</h3>
          <p className="mt-4 text-sm leading-relaxed text-navy-400">
            Ready to begin? Book a free trial class and meet your teacher today.
          </p>
          
            href="#contact"
            className="mt-5 inline-block rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            Book Free Trial
          </a>
        </div>
      </div>

      <div className="border-t border-navy-800 py-6">
        <p className="container-page text-center text-xs text-navy-500">
          © 2026 Wasil Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
    }

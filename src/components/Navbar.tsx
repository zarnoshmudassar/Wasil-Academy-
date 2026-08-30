import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import WasilMark from './WasilMark';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,32,50,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-gold-400 transition-transform duration-300 group-hover:rotate-45">
            <WasilMark className="h-4 w-4" />
          </span>
          <span className="font-display text-lg tracking-wide text-navy-800">
            WASIL <span className="font-normal text-navy-500">ACADEMY</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              
                href={link.href}
                className="text-sm font-medium text-navy-600 transition-colors hover:text-navy-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        
          href="#contact"
          className="hidden rounded-full bg-navy-800 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-sm transition-all duration-300 hover:bg-navy-700 hover:shadow-md lg:inline-block"
        >
          Book Free Trial
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-navy-200 p-2.5 text-navy-800 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden bg-cream-50 transition-[max-height] duration-300 ease-in-out ${
          menuOpen ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-navy-700 hover:bg-cream-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-navy-800 px-5 py-3 text-center text-sm font-semibold text-cream-50"
            >
              Book Free Trial
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
    }

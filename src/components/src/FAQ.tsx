import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'What age groups do you teach?',
    answer:
      'Wasil Academy welcomes children, teenagers and adults. Lessons are adapted to suit each student\'s age and learning stage.',
  },
  {
    question: 'Do you offer one-to-one classes?',
    answer: 'Yes. Every class is one-to-one, giving each student the teacher\'s full attention.',
  },
  {
    question: 'Are the teachers female?',
    answer: 'Yes, all our teachers are female, qualified and experienced in teaching the Quran online.',
  },
  {
    question: 'Are your teachers Ijazah-holding?',
    answer: 'Yes, our teachers hold an Ijazah and have experience teaching students of all levels.',
  },
  {
    question: 'What courses do you offer?',
    answer: 'We offer Noorani Qaida, Nazra Quran, Tajweed, Hifz-ul-Quran and Islamic Studies.',
  },
  {
    question: 'How does the free trial work?',
    answer:
      'You book a convenient time through our contact form, and a qualified teacher will take a live trial class so you can experience our teaching style before enrolling.',
  },
  {
    question: 'Can I choose my preferred class timing?',
    answer: 'Yes, class timings are flexible and arranged around your preferred schedule.',
  },
  {
    question: 'Do you teach students outside Pakistan?',
    answer: 'Yes, we teach students in Pakistan and worldwide through online classes.',
  },
  {
    question: 'How long is each class?',
    answer: 'Class duration is confirmed with your teacher based on the course and student\'s needs.',
  },
  {
    question: 'How do parents receive progress updates?',
    answer:
      'Teachers share regular updates on each student\'s learning and progress so parents stay informed.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream-100 py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-600">FAQ</span>
          <h2 className="section-heading mt-4">Frequently Asked Questions</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy-200 rounded-2xl border border-navy-100 bg-white">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                  >
                    <span className="text-sm font-semibold text-navy-800 sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-gold-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-navy-500 sm:px-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'What age groups do you teach?',
    answer:
      'Wasil Academy welcomes children, teenagers and adults. Lessons are adapted to suit each student\'s age and learning stage.',
  },
  {
    question: 'Do you offer one-to-one classes?',
    answer: 'Yes. Every class is one-to-one, giving each student the teacher\'s full attention.',
  },
  {
    question: 'Are the teachers female?',
    answer: 'Yes, all our teachers are female, qualified and experienced in teaching the Quran online.',
  },
  {
    question: 'Are your teachers Ijazah-holding?',
    answer: 'Yes, our teachers hold an Ijazah and have experience teaching students of all levels.',
  },
  {
    question: 'What courses do you offer?',
    answer: 'We offer Noorani Qaida, Nazra Quran, Tajweed, Hifz-ul-Quran and Islamic Studies.',
  },
  {
    question: 'How does the free trial work?',
    answer:
      'You book a convenient time through our contact form, and a qualified teacher will take a live trial class so you can experience our teaching style before enrolling.',
  },
  {
    question: 'Can I choose my preferred class timing?',
    answer: 'Yes, class timings are flexible and arranged around your preferred schedule.',
  },
  {
    question: 'Do you teach students outside Pakistan?',
    answer: 'Yes, we teach students in Pakistan and worldwide through online classes.',
  },
  {
    question: 'How long is each class?',
    answer: 'Class duration is confirmed with your teacher based on the course and student\'s needs.',
  },
  {
    question: 'How do parents receive progress updates?',
    answer:
      'Teachers share regular updates on each student\'s learning and progress so parents stay informed.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream-100 py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-600">FAQ</span>
          <h2 className="section-heading mt-4">Frequently Asked Questions</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy-200 rounded-2xl border border-navy-100 bg-white">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                  >
                    <span className="text-sm font-semibold text-navy-800 sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-gold-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-navy-500 sm:px-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
                    }

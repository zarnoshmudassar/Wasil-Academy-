import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

const COURSES = ['Noorani Qaida', 'Nazra Quran', 'Tajweed', 'Hifz-ul-Quran', 'Islamic Studies'];

interface FormState {
  fullName: string;
  email: string;
  whatsapp: string;
  age: string;
  course: string;
  timing: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  fullName: '',
  email: '',
  whatsapp: '',
  age: '',
  course: '',
  timing: '',
  message: '',
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.whatsapp.trim()) next.whatsapp = 'Please enter a WhatsApp number.';
    if (!form.age.trim()) {
      next.age = "Please enter the student's age.";
    } else if (Number.isNaN(Number(form.age)) || Number(form.age) <= 0) {
      next.age = 'Please enter a valid age.';
    }
    if (!form.course) next.course = 'Please select a course.';
    if (!form.timing.trim()) next.timing = 'Please share a preferred timing.';
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Placeholder submit handler — connect to a backend, form service, or
      // email API before going live.
      setSubmitted(true);
      setForm(INITIAL_STATE);
    }
  };

  const inputClasses = (hasError: boolean) =>
    `mt-1.5 w-full rounded-xl border bg-cream-50 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 transition-colors focus:bg-white focus:outline-none ${
      hasError ? 'border-red-400' : 'border-navy-200 focus:border-gold-500'
    }`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-500" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl text-navy-800">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-navy-500">
          Your free trial request has been received. Our team will reach out to you shortly to
          confirm your class.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-gold-600 hover:text-gold-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-navy-700">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={handleChange('fullName')}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={inputClasses(Boolean(errors.fullName))}
            placeholder="Your full name"
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-500">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClasses(Boolean(errors.email))}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="whatsapp" className="text-sm font-medium text-navy-700">
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            type="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={handleChange('whatsapp')}
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
            className={inputClasses(Boolean(errors.whatsapp))}
            placeholder="+92 3XX XXXXXXX"
          />
          {errors.whatsapp && (
            <p id="whatsapp-error" className="mt-1.5 text-xs text-red-500">
              {errors.whatsapp}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="age" className="text-sm font-medium text-navy-700">
            Student Age
          </label>
          <input
            id="age"
            type="number"
            min={3}
            max={100}
            value={form.age}
            onChange={handleChange('age')}
            aria-invalid={Boolean(errors.age)}
            aria-describedby={errors.age ? 'age-error' : undefined}
            className={inputClasses(Boolean(errors.age))}
            placeholder="e.g. 9"
          />
          {errors.age && (
            <p id="age-error" className="mt-1.5 text-xs text-red-500">
              {errors.age}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="course" className="text-sm font-medium text-navy-700">
            Select Course
          </label>
          <select
            id="course"
            value={form.course}
            onChange={handleChange('course')}
            aria-invalid={Boolean(errors.course)}
            aria-describedby={errors.course ? 'course-error' : undefined}
            className={inputClasses(Boolean(errors.course))}
          >
            <option value="">Choose a course</option>
            {COURSES.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && (
            <p id="course-error" className="mt-1.5 text-xs text-red-500">
              {errors.course}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="timing" className="text-sm font-medium text-navy-700">
            Preferred Timing
          </label>
          <input
            id="timing"
            type="text"
            value={form.timing}
            onChange={handleChange('timing')}
            aria-invalid={Boolean(errors.timing)}
            aria-describedby={errors.timing ? 'timing-error' : undefined}
            className={inputClasses(Boolean(errors.timing))}
            placeholder="e.g. Weekday evenings (GMT+5)"
          />
          {errors.timing && (
            <p id="timing-error" className="mt-1.5 text-xs text-red-500">
              {errors.timing}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-navy-700">
          Message <span className="font-normal text-navy-400">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={handleChange('message')}
          className="mt-1.5 w-full rounded-xl border border-navy-200 bg-cream-50 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 transition-colors focus:border-gold-500 focus:bg-white focus:outline-none"
          placeholder="Tell us anything that would help us prepare for your trial class"
        />
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-navy-800 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-all duration-300 hover:bg-navy-700 sm:w-auto"
      >
        Book My Free Trial
      </button>
    </form>
  );
}import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

const COURSES = ['Noorani Qaida', 'Nazra Quran', 'Tajweed', 'Hifz-ul-Quran', 'Islamic Studies'];

interface FormState {
  fullName: string;
  email: string;
  whatsapp: string;
  age: string;
  course: string;
  timing: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  fullName: '',
  email: '',
  whatsapp: '',
  age: '',
  course: '',
  timing: '',
  message: '',
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.whatsapp.trim()) next.whatsapp = 'Please enter a WhatsApp number.';
    if (!form.age.trim()) {
      next.age = "Please enter the student's age.";
    } else if (Number.isNaN(Number(form.age)) || Number(form.age) <= 0) {
      next.age = 'Please enter a valid age.';
    }
    if (!form.course) next.course = 'Please select a course.';
    if (!form.timing.trim()) next.timing = 'Please share a preferred timing.';
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Placeholder submit handler — connect to a backend, form service, or
      // email API before going live.
      setSubmitted(true);
      setForm(INITIAL_STATE);
    }
  };

  const inputClasses = (hasError: boolean) =>
    `mt-1.5 w-full rounded-xl border bg-cream-50 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 transition-colors focus:bg-white focus:outline-none ${
      hasError ? 'border-red-400' : 'border-navy-200 focus:border-gold-500'
    }`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-500" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl text-navy-800">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-navy-500">
          Your free trial request has been received. Our team will reach out to you shortly to
          confirm your class.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-gold-600 hover:text-gold-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-navy-700">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={handleChange('fullName')}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={inputClasses(Boolean(errors.fullName))}
            placeholder="Your full name"
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-500">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClasses(Boolean(errors.email))}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="whatsapp" className="text-sm font-medium text-navy-700">
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            type="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={handleChange('whatsapp')}
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
            className={inputClasses(Boolean(errors.whatsapp))}
            placeholder="+92 3XX XXXXXXX"
          />
          {errors.whatsapp && (
            <p id="whatsapp-error" className="mt-1.5 text-xs text-red-500">
              {errors.whatsapp}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="age" className="text-sm font-medium text-navy-700">
            Student Age
          </label>
          <input
            id="age"
            type="number"
            min={3}
            max={100}
            value={form.age}
            onChange={handleChange('age')}
            aria-invalid={Boolean(errors.age)}
            aria-describedby={errors.age ? 'age-error' : undefined}
            className={inputClasses(Boolean(errors.age))}
            placeholder="e.g. 9"
          />
          {errors.age && (
            <p id="age-error" className="mt-1.5 text-xs text-red-500">
              {errors.age}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="course" className="text-sm font-medium text-navy-700">
            Select Course
          </label>
          <select
            id="course"
            value={form.course}
            onChange={handleChange('course')}
            aria-invalid={Boolean(errors.course)}
            aria-describedby={errors.course ? 'course-error' : undefined}
            className={inputClasses(Boolean(errors.course))}
          >
            <option value="">Choose a course</option>
            {COURSES.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && (
            <p id="course-error" className="mt-1.5 text-xs text-red-500">
              {errors.course}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="timing" className="text-sm font-medium text-navy-700">
            Preferred Timing
          </label>
          <input
            id="timing"
            type="text"
            value={form.timing}
            onChange={handleChange('timing')}
            aria-invalid={Boolean(errors.timing)}
            aria-describedby={errors.timing ? 'timing-error' : undefined}
            className={inputClasses(Boolean(errors.timing))}
            placeholder="e.g. Weekday evenings (GMT+5)"
          />
          {errors.timing && (
            <p id="timing-error" className="mt-1.5 text-xs text-red-500">
              {errors.timing}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-navy-700">
          Message <span className="font-normal text-navy-400">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={handleChange('message')}
          className="mt-1.5 w-full rounded-xl border border-navy-200 bg-cream-50 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 transition-colors focus:border-gold-500 focus:bg-white focus:outline-none"
          placeholder="Tell us anything that would help us prepare for your trial class"
        />
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-navy-800 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-all duration-300 hover:bg-navy-700 sm:w-auto"
      >
        Book My Free Trial
      </button>
    </form>
  );
            }

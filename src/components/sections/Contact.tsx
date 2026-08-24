import type { FormEvent } from 'react';
import { Mail, MapPin, MessageSquare, Phone, PhoneCall } from 'lucide-react';
import { AtmosphericLighting } from '../ui/AtmosphericLighting';

const channels = [
  {
    icon: Mail,
    title: 'Direct Email',
    lines: ['support@feecollect.com', 'sales@feecollect.com'],
  },
  {
    icon: Phone,
    title: 'Phone & WhatsApp',
    lines: ['+1 (800) 555-0199', 'Mon–Sat, 9am–9pm EST'],
  },
  {
    icon: MapPin,
    title: 'Office Location',
    lines: ['FeeCollect HQ', '548 Campus Plaza, Suite 200', 'San Francisco, CA 94107'],
  },
];

export const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = [
      `Name: ${form.get('name') ?? ''}`,
      `Institution: ${form.get('institution') ?? ''}`,
      `Email: ${form.get('email') ?? ''}`,
      `Phone: ${form.get('phone') ?? ''}`,
      `Institution Size: ${form.get('size') ?? ''}`,
      `Message: ${form.get('message') ?? ''}`,
    ].join('\n');
    window.location.href = `mailto:sales@feecollect.com?subject=${encodeURIComponent('Demo / Contact Request')}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    'w-full rounded-xl border border-brand-neutral-200 bg-white px-4 py-3 text-sm text-brand-neutral-900 placeholder:text-brand-neutral-500 transition focus:border-brand-yellow-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow-200';

  return (
    <section id="contact" className="relative overflow-hidden bg-white min-h-screen flex flex-col justify-center py-12 md:py-16">
      {/* Atmospheric lighting layers */}
      <AtmosphericLighting variant="contact" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mx-auto space-y-4 mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-glass transition-all hover:bg-amber-100/80">
            <PhoneCall className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            CONTACT US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-brand-neutral-900 tracking-tight leading-[1.2]">
            Ready to Transform Your Campus?{' '}
            <span className="text-gradient-gold">Let&apos;s Talk.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-brand-neutral-600 leading-7">
            Have questions about custom pricing, multi-campus deployment, or data migration? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: contact info & direct channels */}
          <div className="flex flex-col gap-5">
            {channels.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-glass transition-all duration-300 hover:border-amber-400 hover:shadow-glass-hover"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-200/80">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-neutral-500">{title}</h3>
                  {lines.map((line) => (
                    <p key={line} className="mt-1 text-base font-semibold text-gray-900">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 px-6 py-5">
              <MessageSquare className="h-5 w-5 shrink-0 text-emerald-600" />
              <p className="text-sm font-semibold text-emerald-900">
                Live Chat Available <span className="text-emerald-700">🟢 Response time: &lt; 15 mins</span>
              </p>
            </div>
          </div>

          {/* Right: quick contact form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-glass-hover">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-gray-700">Full Name</label>
                  <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="institution" className="mb-1.5 block text-sm font-semibold text-gray-700">Institution / University Name</label>
                  <input id="institution" name="institution" type="text" required placeholder="State University" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-700">Work Email</label>
                  <input id="email" name="email" type="email" required placeholder="jane@university.edu" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="size" className="mb-1.5 block text-sm font-semibold text-gray-700">Institution Size</label>
                <select id="size" name="size" required defaultValue="" className={inputClass}>
                  <option value="" disabled>Select student count</option>
                  <option value="<1k">&lt;1k students</option>
                  <option value="1k-5k">1k–5k students</option>
                  <option value="5k-20k">5k–20k students</option>
                  <option value="20k+">20k+ students</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your campus, timelines, or questions..." className={inputClass} />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 bg-[length:200%_auto] px-6 py-4 text-sm font-bold text-slate-950 shadow-yellow-glow transition-all duration-300 hover:bg-right hover:shadow-yellow-glow"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

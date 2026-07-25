import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  ChevronDown,
  Flag,
  Gift,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Menu,
  PartyPopper,
  Sparkles,
  Trophy,
  Users,
  X,
} from 'lucide-react';

const siteConfig = {
  companyName: 'DrivingParU',
  bookingLink:
    'https://book.squareup.com/appointments/soyu9vwau5htpe/location/L3TK66T6TCF6B/services',
  logoPath: '/images/drivingparu-logo.jpg',
  logoAlt: 'DrivingParU golf simulator logo',
  contact: {
    email: 'drivingparu@gmail.com',
    phone: '(713) 360-9990',
  },
  packages: [
    {
      name: 'Par Package',
      price: '$175 / hour',
      bestFor: 'Great for smaller gatherings and private parties',
      highlighted: true,
      features: [
        'Mobile golf simulator setup at your venue',
        'Tent and all equipment provided',
        'Professional event host and simulator operator',
        'Friendly competition modes for all skill levels',
        'Full setup and breakdown handled by our team',
        'Access to dozens of championship courses including Pebble Beach and St Andrews',
      ],
    },
    {
      name: 'Birdie Package',
      price: '$225 / hour',
      bestFor: 'Great for larger groups and corporate events',
      highlighted: false,
      features: [
        'Everything included in the Par Package',
        '45-inch spectator display screen for crowd viewing',
        'Dedicated second staff member for larger groups',
        'Custom scoring and leaderboard tracking',
        'Extended equipment package for high-volume play',
        'Priority booking and scheduling access',
      ],
    },
  ],
  faqs: [
    {
      question: 'What is DrivingParU?',
      answer:
        'DrivingParU is a mobile golf simulator event company that brings a fun driving range experience directly to your event location.',
    },
    {
      question: 'What types of events do you serve?',
      answer:
        'We serve corporate events, birthday parties, private parties, school events, community events, team building days, fundraisers, and similar gatherings.',
    },
    {
      question: 'Do guests need golf experience?',
      answer:
        'No golf experience is needed. The setup is designed to be welcoming for beginners while still being fun for golfers who want to compete.',
    },
    {
      question: 'Do you bring all the equipment?',
      answer:
        'Yes. DrivingParU brings the simulator setup, tent, clubs, balls, and event equipment needed for guests to play.',
    },
    {
      question: 'How do I book?',
      answer:
        'Use the Book Now buttons on this site to select your package and request your event date.',
    },
    {
      question: 'Can this be used for corporate events or team building?',
      answer:
        'Absolutely. DrivingParU is a strong fit for corporate outings, client appreciation events, employee engagement, and friendly team competitions.',
    },
  ],
};

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Packages', href: '#packages' },
  { label: 'FAQ', href: '#faq' },
];

const highlights = [
  { label: 'Mobile golf simulator setup', icon: Flag },
  { label: 'Great for parties and corporate events', icon: PartyPopper },
  { label: 'Fun for all skill levels', icon: Users },
  { label: 'Easy online booking', icon: CalendarCheck },
];

const events = [
  {
    title: 'Corporate Events',
    description: 'Give clients, teams, and guests a premium activity that keeps the conversation moving.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Birthday Parties',
    description: 'Add a memorable golf challenge to birthdays for adults, teens, and family groups.',
    icon: Gift,
  },
  {
    title: 'Private Parties',
    description: 'Bring a relaxed driving range atmosphere to backyard parties and private celebrations.',
    icon: Sparkles,
  },
  {
    title: 'School & Community Events',
    description: 'Create an approachable activity for carnivals, festivals, school nights, and local events.',
    icon: GraduationCap,
  },
  {
    title: 'Team Building',
    description: 'Turn friendly competition into a low-pressure experience everyone can join.',
    icon: Handshake,
  },
  {
    title: 'Fundraisers',
    description: 'Make your fundraiser more interactive with contests, prizes, and sponsor-friendly fun.',
    icon: HeartHandshake,
  },
];

const steps = [
  {
    title: 'Choose Your Event',
    description: 'Tell us what type of event you’re hosting and when you need us.',
  },
  {
    title: 'We Bring the Setup',
    description:
      'Our mobile simulator tent brings the driving range experience directly to your location.',
  },
  {
    title: 'Guests Play & Compete',
    description:
      'Guests can swing, compete, and enjoy a unique golf experience without needing to visit a course.',
  },
];

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.section-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function BookingButton({ children, className = '', variant = 'primary' }) {
  const styles =
    variant === 'primary'
      ? 'bg-gold text-pine shadow-lg shadow-gold/20 hover:-translate-y-0.5 hover:bg-[#e7bb58]'
      : 'border border-white/45 bg-white/10 text-white backdrop-blur hover:bg-white/20';

  return (
    <a
      href={siteConfig.bookingLink}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.2em] ${light ? 'text-gold' : 'text-fairway'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black sm:text-4xl ${light ? 'text-white' : 'text-pine'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${light ? 'text-white/78' : 'text-ink/70'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-cream/88 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src={siteConfig.logoPath}
            alt={siteConfig.logoAlt}
            className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-fairway/25"
          />
          <span className="text-lg font-black text-pine sm:text-xl">{siteConfig.companyName}</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/75 transition hover:text-fairway"
            >
              {link.label}
            </a>
          ))}
          <BookingButton className="px-5 py-2.5">Book Now</BookingButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pine/10 bg-white text-pine shadow-sm lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-pine/10 bg-cream px-4 py-4 shadow-soft lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-pine transition hover:bg-white"
              >
                {link.label}
              </a>
            ))}
            <BookingButton className="mt-2">Book Now</BookingButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(query.matches);
    const onChange = (event) => setReduceMotion(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92svh] overflow-hidden bg-black pt-24 text-white sm:min-h-[88svh]"
    >
      {/* Poster sits underneath so the first paint is never empty. */}
      <div className="absolute inset-0 bg-[url('/images/Hero_Video_Poster.jpg')] bg-cover bg-center" />

      {reduceMotion ? null : (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          src="/images/Hero_Video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setVideoReady(true)}
        />
      )}

      {/* Even darken so the bright simulator screen never blows out. */}
      <div className="absolute inset-0 bg-black/25" />
      {/* Copy scrim: dark under the text, clear over the action. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.2)_60%,transparent)] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.35)_45%,transparent_78%)]" />
      {/* Bottom fade so the overlapping TrustBar sits on a clean seam. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#000,transparent)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:px-8">
        <div className="flex max-w-3xl flex-col justify-center">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold text-sand backdrop-blur">
            <Trophy className="h-4 w-4 text-gold" aria-hidden="true" />
            Mobile golf simulator events
          </p>
          <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.02em] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
            Bring the Driving Range to Your Next Event
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 [text-shadow:0_1px_16px_rgba(0,0,0,0.55)] sm:text-xl">
            DrivingParU delivers a mobile golf simulator experience for corporate events,
            birthdays, private parties, and more.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingButton className="min-h-12">Book Your Event</BookingButton>
            <a
              href="#how-it-works"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-[2rem] border border-pine/10 bg-white p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 rounded-3xl bg-cream px-4 py-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-fairway/10 text-fairway">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-bold leading-5 text-pine">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section id="events" className="section-reveal scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Events"
          title="Perfect For Any Occasion"
          description="A polished golf experience that fits gatherings of every size, from backyard birthdays to company-wide celebrations."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-[1.75rem] border border-pine/8 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-fairway/10 text-fairway transition group-hover:bg-fairway group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-pine">{title}</h3>
              <p className="mt-3 leading-7 text-ink/68">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-reveal scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="From Booking to Big Swings"
          description="You choose the event. DrivingParU brings the setup, energy, and easy competition."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-[1.75rem] border border-pine/8 bg-cream p-7 shadow-sm"
            >
              <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pine text-lg font-black text-gold">
                {index + 1}
              </span>
              <h3 className="text-2xl font-black text-pine">{step.title}</h3>
              <p className="mt-3 leading-7 text-ink/68">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <BookingButton>Book Now</BookingButton>
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="packages" className="section-reveal scroll-mt-24 bg-pine px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Packages"
          title="Choose Your Event Experience"
          light
        />
        <div className="grid gap-5 lg:grid-cols-2 max-w-4xl mx-auto">
          {siteConfig.packages.map((eventPackage) => (
            <article
              key={eventPackage.name}
              className="relative rounded-[1.75rem] border border-gold/30 bg-white text-pine p-7 shadow-glow transition duration-300 hover:-translate-y-1 flex flex-col"
            >
              {eventPackage.highlighted ? (
                <span className="mb-4 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-pine">
                  Popular
                </span>
              ) : null}
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-fairway">
                {eventPackage.bestFor}
              </p>
              <h3 className="mt-4 text-3xl font-black text-pine">{eventPackage.name}</h3>
              <p className="mt-3 text-2xl font-black text-gold">{eventPackage.price}</p>
              <ul className="mt-7 grid gap-3">
                {eventPackage.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fairway text-white">
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-ink/76">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <BookingButton className="w-full">Book Package</BookingButton>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-white/70">
          Final pricing and availability may vary by location, event length, and event type.
        </p>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="section-reveal bg-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#14804a,#073b2a)] p-8 text-white shadow-soft sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Book online</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Ready to Tee Up Your Event?</h2>
          <p className="mt-3 text-lg text-white/78">Reserve your mobile golf simulator experience today.</p>
        </div>
        <BookingButton className="mt-7 shrink-0 lg:mt-0">Book Now</BookingButton>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-reveal scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions Before You Swing?"
          description="Here are answers to the most common questions about DrivingParU."
        />
        <div className="grid gap-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="rounded-3xl border border-pine/10 bg-cream shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-black text-pine sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-fairway transition ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-7 text-ink/70">{faq.answer}</p>
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

function Footer() {
  return (
    <footer className="bg-pine px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={siteConfig.logoPath}
              alt={siteConfig.logoAlt}
              className="h-12 w-12 rounded-full border-2 border-white object-cover ring-2 ring-gold/50"
            />
            <span className="text-xl font-black">{siteConfig.companyName}</span>
          </div>
          <p className="mt-4 max-w-md leading-7 text-white/70">
            Mobile golf simulator events for corporate gatherings, birthday parties, private
            events, schools, community celebrations, and more.
          </p>
        </div>
        <div>
          <h3 className="font-black text-gold">Contact</h3>
          <p className="mt-4 text-white/72">Email: {siteConfig.contact.email}</p>
          <p className="mt-2 text-white/72">Phone: {siteConfig.contact.phone}</p>
        </div>
        <div>
          <h3 className="font-black text-gold">Links</h3>
          <div className="mt-4 grid gap-2">
            {[...navLinks, { label: 'Book Now', href: siteConfig.bookingLink }].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Book Now' ? '_blank' : undefined}
                rel={link.label === 'Book Now' ? 'noreferrer' : undefined}
                className="text-white/72 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/12 pt-6 text-sm text-white/55">
        © 2026 {siteConfig.companyName}. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <EventsSection />
        <HowItWorks />
        <PackagesSection />
        <CtaBanner />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

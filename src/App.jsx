/*
  S‑Rock Care — Swindon Homecare (Right‑at‑Home inspired)
  Tech stack: React + Tailwind. Drop into Next.js, Vite or CRA.
  Notes:
  - Structure/feel mirrors rightathome.co.uk/swindon (hero, services grid, values,
    CTA blocks, reviews teaser, contact panel), but with S‑Rock branding and
    original copy.
  - Swap images/logos and copy where marked. Hook up forms (Netlify, Formspree,
    your backend) as needed.
*/

import React from "react";

// ---- THEME ----
const theme = {
  brand: {
    name: "S‑Rock Care Services",
    logo: "/resources/s_rock.png", // TODO: replace
  },
  colours: {
    primary: "#7133a0", // deep navy
    accent: "#9c7db2", // warm orange
    light: "#f9f3f9",
  },
  phone: "0333 090 3986",
};

// ---- UI PRIMITIVES ----
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Button = ({ children, href = "#contact", variant = "primary" }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      variant === "primary"
        ? "bg-[" + theme.colours.accent + "] text-white hover:opacity-90 focus:ring-orange-300"
        : "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
    }`}
  >
    {children}
  </a>
);

export default function SRockCareHome() {
  return (
    <div className="min-h-screen text-slate-800" style={{ backgroundColor: theme.colours.light }}>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <Container className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src={theme.brand.logo} alt={`${theme.brand.name} logo`} className="h-9 w-auto" />
            <span className="sr-only">{theme.brand.name}</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#services" className="text-sm font-medium hover:text-slate-900">Services</a>
            <a href="#values" className="text-sm font-medium hover:text-slate-900">Why choose us</a>
            <a href="#areas" className="text-sm font-medium hover:text-slate-900">Areas we cover</a>
            <a href="#reviews" className="text-sm font-medium hover:text-slate-900">Reviews</a>
            <a href="#contact" className="text-sm font-medium hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+443330903986" className="hidden text-sm font-semibold text-slate-700 md:block">
              Call {theme.phone}
            </a>
            <Button>Request Homecare</Button>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: theme.colours.primary }}
      >
        <svg aria-hidden className="absolute -left-10 -top-10 h-64 w-64 opacity-10" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
        <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div className="text-white">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Compassionate homecare in Swindon — dependable, dignified, person‑centred
            </h1>
            <p className="mt-4 max-w-xl text-lg opacity-90">
              Reliable support for everyday living, delivered by friendly, well‑trained Care Professionals. Longer visit times, punctual service, and care plans built around you.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button variant="primary">Request Homecare Today</Button>
              <Button href="#services" variant="secondary">Explore Services</Button>
            </div>
            <p className="mt-4 text-sm opacity-80">Video or phone consultations available 7 days a week.</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop"
              alt="Care professional supporting client at home"
              className="h-80 w-full rounded-3xl object-cover shadow-xl md:h-[28rem]"
            />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-sm font-semibold">Average visit length</p>
              <p className="text-2xl font-bold" style={{ color: theme.colours.accent }}>45–60 mins</p>
              <p className="text-xs text-slate-500">Because quality care takes time.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="text-2xl font-bold md:text-3xl">Homecare Services in Swindon: What we offer</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Flexible, person‑centred care plans reviewed regularly to match changing needs.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Personal Care",
                text: "Respectful help with bathing, dressing, grooming and more — always with dignity.",
                icon: "🫧",
              },
              {
                title: "Companionship",
                text: "Friendly faces for conversation, hobbies, walks and community activities.",
                icon: "☕",
              },
              {
                title: "Dementia Support",
                text: "Specialist, structured support that keeps people engaged and safe at home.",
                icon: "🧠",
              },
              {
                title: "Medication Support",
                text: "Prompts and administration as part of a clear, recorded care plan.",
                icon: "💊",
              },
              {
                title: "Hospital to Home",
                text: "Smooth discharge support with practical help and short‑term care packages.",
                icon: "🏥",
              },
              {
                title: "Live‑in Care",
                text: "Round‑the‑clock assistance for maximum reassurance for you and your family.",
                icon: "🏡",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-3xl" aria-hidden>{s.icon}</div>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.text}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-semibold" style={{ color: theme.colours.primary }}>
                  Enquire about {s.title} →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values / Why choose us */}
      <section id="values" className="py-16 md:py-20" style={{ backgroundColor: theme.colours.light }}>
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Why families choose S‑Rock Care</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Person‑centred care built with you",
                  "Longer visit times so nothing feels rushed",
                  "Punctual, well‑trained Care Professionals",
                  "Responsive local office team in Swindon",
                  "Regular reviews and transparent care notes",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full" style={{ background: theme.colours.accent }}>
                      <svg viewBox="0 0 20 20" fill="white" className="h-3.5 w-3.5"><path d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879A1 1 0 003.293 9.293l4 4a1 1 0 001.414 0l8-8z"/></svg>
                    </span>
                    <span className="text-slate-700">{li}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6"><Button>Start your care plan</Button></div>
            </div>
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <figure>
                <blockquote className="text-lg font-medium text-slate-700">
                  “Everyone at S‑Rock Care is utterly devoted to person‑centred care. If you want a friendly face to help with everyday tasks, personal care or simply a chat, we have the perfect person waiting for you.”
                </blockquote>
                <figcaption className="mt-4 text-sm text-slate-500">— Local Registered Manager</figcaption>
              </figure>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <img className="h-28 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1559067841-1e6f06f8ad17?q=80&w=1200&auto=format&fit=crop" alt="Caregiver preparing tea"/>
                <img className="h-28 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" alt="Friendly conversation"/>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Areas we cover */}
      <section id="areas" className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="text-2xl font-bold md:text-3xl">Areas we cover</h2>
          <p className="mt-2 text-slate-600">Swindon and nearby villages — Old Town, Wroughton, Blunsdon, Highworth, Wanborough, Royal Wootton Bassett, Purton and more.</p>
          <div className="mt-6 overflow-hidden rounded-2xl border">
            <iframe
              title="Swindon map"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19519.99699337439!2d-1.824!3d51.556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871443b1b6a1a2f%3A0x2a!2sSwindon!5e0!3m2!1sen!2suk!4v1680000000000"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      {/* Reviews teaser */}
      <section id="reviews" className="py-16 md:py-20" style={{ backgroundColor: theme.colours.light }}>
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Kind words from clients</h2>
              <p className="mt-2 max-w-xl text-slate-600">A selection of recent comments. We’re happy to connect you with local families for references.</p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    quote:
                      "Carers were always on time and treated Mum with real kindness. Communication with the office was excellent.",
                    name: "Daughter of client",
                  },
                  {
                    quote:
                      "Professional, reliable and flexible. They built a plan around Dad’s routines and hobbies.",
                    name: "Son of client",
                  },
                ].map((r) => (
                  <figure key={r.quote} className="rounded-2xl border bg-white p-5 shadow-sm">
                    <blockquote className="text-slate-700">“{r.quote}”</blockquote>
                    <figcaption className="mt-2 text-sm text-slate-500">— {r.name}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">What to expect from us</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>Clear pricing and no surprise fees</li>
                <li>Care notes you can access and review</li>
                <li>Continuity of carers wherever possible</li>
                <li>Regular check‑ins from our office team</li>
              </ul>
              <div className="mt-6"><Button>Book a friendly chat</Button></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Request homecare today</h2>
              <p className="mt-2 text-slate-600">Tell us a little about your situation and how we can help. Prefer to talk? Call <a className="font-semibold" href="tel:+443330903986">{theme.phone}</a>.</p>
              <form className="mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full name" className="rounded-xl border p-3 outline-none focus:ring"/>
                  <input required type="tel" placeholder="Phone" className="rounded-xl border p-3 outline-none focus:ring"/>
                </div>
                <input type="email" required placeholder="Email" className="w-full rounded-xl border p-3 outline-none focus:ring"/>
                <textarea rows={4} placeholder="How can we help?" className="w-full rounded-xl border p-3 outline-none focus:ring"/>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="consent" className="h-4 w-4"/>
                  <label htmlFor="consent" className="text-sm text-slate-600">I consent to S‑Rock Care contacting me about my enquiry.</label>
                </div>
                <Button>Send enquiry</Button>
              </form>
            </div>
            <div className="rounded-3xl border bg-[color:var(--card,white)] p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Office</h3>
              <p className="mt-1 text-slate-600">Swindon, Wiltshire • Open 7 days for enquiries</p>
              <div className="mt-4 grid gap-3 text-sm">
                <a className="inline-flex items-center gap-2 font-semibold" href="tel:+443330903986">
                  <span>📞</span> {theme.phone}
                </a>
                <a className="inline-flex items-center gap-2" href="mailto:hello@srockcareservices.co.uk">
                  <span>✉️</span> hello@srockcareservices.co.uk
                </a>
              </div>
              <div className="mt-6 rounded-2xl border bg-white p-4">
                <p className="text-sm font-semibold">New to care at home?</p>
                <p className="text-sm text-slate-600">We’ll guide you step‑by‑step, from first call to personalised plan and regular reviews.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <Container className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} {theme.brand.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <a href="#" className="underline">Privacy</a>
            <a href="#" className="underline">Cookies</a>
            <a href="#" className="underline">CQC profile</a>
            <a href="#" className="underline">NHS listing</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}

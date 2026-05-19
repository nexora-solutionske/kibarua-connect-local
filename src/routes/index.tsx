import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, MapPin, Shield, Smartphone, Star, ArrowRight } from "lucide-react";
import logo from "@/assets/kibarua-logo.jpeg";

const SITE_URL = "https://kibarua-connect-local.lovable.app";
const TITLE = "Kibarua — Casual Jobs Near You in Kenya & Worldwide";
const DESCRIPTION =
  "Kibarua is the casual jobs app connecting workers with employers nearby. Find dayburgs, fundi, mjengo, cleaning, delivery and odd jobs in Nairobi, Mombasa, Kisumu and beyond. Android app coming soon — join the waitlist.";
const KEYWORDS =
  "kibarua, kibarua app, casual jobs Kenya, jobs near me, dayburg, mjengo jobs, fundi jobs Kenya, odd jobs, hustle jobs Nairobi, gig work Kenya, casual labour app, find workers Kenya, blue collar jobs, day labour app, casual jobs worldwide";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0f3d2e" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Kibarua" },
      { property: "og:locale", content: "en_KE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "Kibarua",
          operatingSystem: "ANDROID",
          applicationCategory: "BusinessApplication",
          description: DESCRIPTION,
          url: SITE_URL,
          inLanguage: ["en", "sw"],
          areaServed: [
            { "@type": "Country", name: "Kenya" },
            { "@type": "Place", name: "Worldwide" },
          ],
          offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kibarua",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.ico`,
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Kibarua?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kibarua is a mobile app that connects casual workers with employers nearby for short-term jobs like dayburgs, mjengo, fundi work, cleaning and deliveries.",
              },
            },
            {
              "@type": "Question",
              name: "Where does Kibarua work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kibarua launches first in Kenya — Nairobi, Mombasa, Kisumu and beyond — with plans to support casual job seekers worldwide.",
              },
            },
            {
              "@type": "Question",
              name: "How much does Kibarua cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kibarua is free to download. Join the waitlist to be notified when the Android app launches.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Kibarua Link logo" className="h-11 w-11 rounded-lg object-cover" />
          <span className="text-lg font-bold tracking-tight" style={{ color: "var(--brand-navy)" }}>
            Kibarua Link
          </span>
        </div>
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: "var(--brand-green-soft)", color: "var(--brand-green)" }}
        >
          Coming Soon
        </span>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:pt-20">
        <section className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: "var(--brand-green-soft)", color: "var(--brand-navy)" }}
            >
              <MapPin className="h-3.5 w-3.5" /> Built for Kenya
            </div>
            <h1
              className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
              style={{ color: "var(--brand-navy)" }}
            >
              Jobs. People. <span style={{ color: "var(--brand-green)" }}>Opportunities.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Kibarua Link is the simplest way to post casual jobs — dayburgs, errands, fundis — and
              connect with trusted workers nearby. Powered by location, built for hustlers.
            </p>

            <form onSubmit={onSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2"
                style={{ boxShadow: "var(--shadow-soft)" }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-soft)" }}
              >
                {submitted ? "You're in!" : "Notify me"} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-sm" style={{ color: "var(--brand-green)" }}>
                Asante! We'll let you know when the app launches.
              </p>
            )}
          </div>

          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 -z-10 rounded-full blur-3xl"
              style={{ background: "var(--brand-green-soft)" }}
            />
            <img
              src={logo}
              alt="Kibarua Link"
              className="w-full max-w-md rounded-3xl bg-white object-contain p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
          </div>
        </section>

        <section className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Briefcase, title: "Find Jobs Fast", desc: "Post or apply for dayburgs in minutes." },
            { icon: Shield, title: "Trusted Workers", desc: "Verified profiles and community ratings." },
            { icon: Smartphone, title: "Secure Payments", desc: "Pay safely with M-PESA integration." },
            { icon: Star, title: "Rated & Reliable", desc: "Reviews keep quality high on every job." },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-card p-6 transition-transform hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--brand-green-soft)", color: "var(--brand-green)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold" style={{ color: "var(--brand-navy)" }}>
                {title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </section>

        <section className="mt-24 grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Post a job", d: "Describe the kibarua, location and pay." },
            { n: "02", t: "Match nearby", d: "Workers around you get instant alerts." },
            { n: "03", t: "Get it done", d: "Chat, hire, pay and rate — all in-app." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card/60 p-6">
              <div className="text-sm font-bold" style={{ color: "var(--brand-green)" }}>
                {s.n}
              </div>
              <h4 className="mt-2 text-lg font-semibold" style={{ color: "var(--brand-navy)" }}>
                {s.t}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kibarua Link. Jobs. People. Opportunities.
      </footer>
    </div>
  );
}

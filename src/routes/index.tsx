import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Briefcase, MapPin, Shield, Smartphone, Star, ArrowRight, Loader2 } from "lucide-react";
import logo from "@/assets/kibarua-logo.jpeg";
import { FloatingIconsBg } from "@/components/FloatingIconsBg";
import { NavBar } from "@/components/NavBar";
import { joinWaitlist } from "@/lib/waitlist.functions";

const SITE_URL = "https://kibarua-connect-local.lovable.app";
const TITLE = "Kibarua — Casual Jobs Near You in Kenya & Worldwide";
const DESCRIPTION =
  "Kibarua connects casual workers with employers nearby Dayburgs, Mjengo, Fundi, Cleaning, Drivers, Plumbers, Electricians, Cooks, Security, Mechanics, Gardeners, Deliveries. Powered by location, built for the people. #ikoworks";
const KEYWORDS =
  "kibarua, kibarua app, casual jobs Kenya, jobs near me, dayburg, mjengo jobs, fundi jobs Kenya, odd jobs, casual work Nairobi, gig work Kenya, casual labour app, find workers Kenya, blue collar jobs, day labour app, casual jobs worldwide";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const join = useServerFn(joinWaitlist);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || loading) return;
    setLoading(true);
    setError(null);
    try {
      await join({ data: { email: value } });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <FloatingIconsBg />
      <NavBar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pb-24 md:pt-20">
        <section className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="text-center md:text-left">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium sm:mb-5"
              style={{ background: "var(--brand-green-soft)", color: "var(--brand-navy)" }}
            >
              <MapPin className="h-3.5 w-3.5" /> Built for Kenya · Made for the world
            </div>
            <h1
              className="text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
              style={{ color: "var(--brand-navy)" }}
            >
              Casual Jobs. <span style={{ color: "var(--brand-green)" }}>Near You.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:mt-5 sm:text-lg md:mx-0">
              Kibarua connects casual workers with employers nearby Dayburgs, Mjengo, Fundi, Cleaning, Drivers,
              Plumbers, Electricians, Cooks, Security, Mechanics, Gardeners, Deliveries. Powered by location, built for the people. #ikoworks
            </p>

            <form
              onSubmit={onSubmit}
              className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:flex-row md:mx-0"
            >
              <label htmlFor="waitlist-email" className="sr-only">Email address</label>
              <input
                id="waitlist-email"
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-base outline-none focus:ring-2 sm:text-sm"
                style={{ boxShadow: "var(--shadow-soft)" }}
              />
              <button
                type="submit"
                disabled={loading || submitted}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99] disabled:opacity-70"
                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-soft)" }}
              >
                {loading ? (
                  <>
                    Saving… <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    {submitted ? "You're in!" : "Notify me"} <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-sm" style={{ color: "var(--brand-green)" }}>
                Asante! We'll let you know when the app launches.
              </p>
            )}
            {error && !submitted && (
              <p className="mt-3 text-sm text-destructive">{error}</p>
            )}
          </div>

          <div className="relative order-first flex justify-center md:order-last">
            <div
              className="absolute inset-0 -z-10 rounded-full blur-3xl"
              style={{ background: "var(--brand-green-soft)" }}
            />
            <img
              src={logo}
              alt="Kibarua casual jobs app"
              className="w-48 rounded-3xl bg-white object-contain p-4 sm:w-72 md:w-full md:max-w-md md:p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
          </div>
        </section>

        <section className="mt-16 grid gap-4 sm:mt-24 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {[
            { icon: Briefcase, title: "Find Jobs Fast", desc: "Post or apply for casual jobs in minutes." },
            { icon: Shield, title: "Trusted Workers", desc: "Verified profiles and community ratings." },
            { icon: Smartphone, title: "Secure Payments", desc: "Pay safely with M-PESA integration." },
            { icon: Star, title: "Rated & Reliable", desc: "Reviews keep quality high on every job." },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-card p-5 transition-transform hover:-translate-y-1 sm:p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div
                className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl sm:mb-4"
                style={{ background: "var(--brand-green-soft)", color: "var(--brand-green)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="font-semibold" style={{ color: "var(--brand-navy)" }}>
                {title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-5 sm:mt-24 sm:gap-8 md:grid-cols-3">

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

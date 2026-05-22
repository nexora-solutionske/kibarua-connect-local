import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Shield, Zap, Heart } from "lucide-react";
import { NavBar } from "@/components/NavBar";

const SITE_URL = "https://kibarua-connect-local.lovable.app";
const TITLE = "About Esiai Solutions — The Company Behind Kibarua";
const DESCRIPTION =
  "Esiai Solutions is a technology company founded to connect casual workers with employers through a safe and reliable digital platform powered by GPS location.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Safety", desc: "Verified profiles, location-based matching, and trusted interactions." },
  { icon: Zap, title: "Convenience", desc: "Find or be found in minutes — no middlemen, no waiting." },
  { icon: Heart, title: "Empowerment", desc: "Real economic opportunities for casual workers across communities." },
  { icon: MapPin, title: "Location-First", desc: "GPS technology matches the right people in the right place." },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <NavBar />

      <main className="mx-auto max-w-4xl px-4 pb-20 pt-4 sm:px-6 sm:pt-8">
        <section className="text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: "var(--brand-green-soft)", color: "var(--brand-navy)" }}
          >
            About the company
          </span>
          <h1
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
            style={{ color: "var(--brand-navy)" }}
          >
            Esiai <span style={{ color: "var(--brand-green)" }}>Solutions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            The technology company building Kibarua.
          </p>
        </section>

        <section
          className="mt-10 rounded-2xl bg-card p-6 sm:p-10"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            Esiai Solutions is a technology company founded to connect casual workers with
            employers through a safe and reliable digital platform. Using GPS tracking
            technology, the Esiai Solutions app helps clients easily find nearby workers while
            enabling workers to access genuine job opportunities within their location.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
            The company was created to promote safety, convenience, and economic empowerment
            by making casual job access faster, easier, and more trustworthy.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold sm:text-2xl" style={{ color: "var(--brand-navy)" }}>
            What we stand for
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-card p-5"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div
                  className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl"
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
          </div>
        </section>

        <section
          className="mt-16 rounded-2xl p-6 text-center sm:p-10"
          style={{ background: "var(--brand-green-soft)" }}
        >
          <h2 className="text-2xl font-bold" style={{ color: "var(--brand-navy)" }}>
            Powered by location. Built for the people. #ikoworks
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold"
              style={{ color: "var(--brand-navy)" }}
            >
              See our services
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-soft)" }}
            >
              Join the waitlist
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Esiai Solutions. All rights reserved.
      </footer>
    </div>
  );
}

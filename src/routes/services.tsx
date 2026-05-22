import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Hammer,
  Scissors,
  Camera,
  Video,
  Palette,
  Scale,
  Home,
  Music,
  Tent,
  Flame,
  PaintBucket,
  Sprout,
} from "lucide-react";
import { NavBar } from "@/components/NavBar";

const SITE_URL = "https://kibarua-connect-local.lovable.app";
const TITLE = "Services — Kibarua | All Services Under One Roof";
const DESCRIPTION =
  "Kibarua connects you to casual workers and professional service providers nearby — massage, nails, tour guides, photographers, video editors, AI graphic designers, fundi wa nguo, cloth designers, printers, legal services, Air BnB, sound systems, tents, welders, painters, planters and more.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
  component: ServicesPage,
});

const casual = [
  "Dayburgs", "Mjengo", "Fundi", "Cleaning", "Drivers", "Plumbers",
  "Electricians", "Cooks", "Security", "Mechanics", "Gardeners", "Deliveries",
];

const professional = [
  { icon: Sparkles, label: "Massage" },
  { icon: Scissors, label: "Nails" },
  { icon: Sprout, label: "Tour Guides" },
  { icon: Camera, label: "Photographers" },
  { icon: Video, label: "Video Editors" },
  { icon: Palette, label: "AI Graphic Designers" },
  { icon: Hammer, label: "Fundi wa Nguo" },
  { icon: Scissors, label: "Cloth Designers" },
  { icon: PaintBucket, label: "Printers" },
  { icon: Scale, label: "Legal Services" },
];

const other = [
  { icon: Home, label: "Air BnB" },
  { icon: Music, label: "Sound Systems for Hire" },
  { icon: Tent, label: "Tents" },
  { icon: Flame, label: "Welders" },
  { icon: PaintBucket, label: "Painters" },
  { icon: Sprout, label: "Planters" },
];

function ServicesPage() {
  return (
    <div className="relative min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <NavBar />

      <main className="mx-auto max-w-5xl px-4 pb-20 pt-4 sm:px-6 sm:pt-8">
        <section className="text-center">
          <h1
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
            style={{ color: "var(--brand-navy)" }}
          >
            All Services. <span style={{ color: "var(--brand-green)" }}>Under One Roof.</span> ⚒️
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Kibarua is a location-powered app that connects people in Kenya and beyond
            to the workers and professional service providers nearest to them — fast,
            trusted, and built for the way real people work.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold sm:text-2xl" style={{ color: "var(--brand-navy)" }}>
            Casual Jobs (Kazi za Mkono)
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Quick, short-term work — posted and matched within minutes.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {casual.map((c) => (
              <span
                key={c}
                className="rounded-full px-3 py-1.5 text-sm font-medium"
                style={{ background: "var(--brand-green-soft)", color: "var(--brand-navy)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold sm:text-2xl" style={{ color: "var(--brand-navy)" }}>
            Professional Services
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Verified pros for when the job needs a specialist.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {professional.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl bg-card p-3"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--brand-green-soft)", color: "var(--brand-green)" }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium" style={{ color: "var(--brand-navy)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold sm:text-2xl" style={{ color: "var(--brand-navy)" }}>
            Other Services & Hire
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Equipment, spaces, and trades for every plan — big or small.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {other.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl bg-card p-3"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--brand-green-soft)", color: "var(--brand-green)" }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium" style={{ color: "var(--brand-navy)" }}>
                  {label}
                </span>
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
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            Join the waitlist and be the first to work smarter with Kibarua.
          </p>
          <Link
            to="/"
            className="mt-5 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-soft)" }}
          >
            Join the waitlist
          </Link>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kibarua by Esiai Solutions. Jobs. People. Opportunities.
      </footer>
    </div>
  );
}

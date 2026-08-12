import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  UserCheck,
  CreditCard,
  MessageCircle,
  Star,
  FileText,
  Building2,
  Home,
  UtensilsCrossed,
  Tractor,
  Truck,
  Store,
  Briefcase,
  Landmark,
  Globe2,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { NavBar } from "@/components/NavBar";

const SITE_URL = "https://kibarua-connect-local.lovable.app";
const TITLE = "About Esiai Solutions — The Company Behind Kibarua";
const DESCRIPTION =
  "Esiai Solutions is the technology company behind Kibarua, a digital employment and workforce payments platform connecting Africa's informal workers with trusted employers.";

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

const solutionFeatures = [
  {
    icon: Target,
    title: "Fast job matching",
    desc: "Connect employers and workers based on skills, availability, and proximity.",
  },
  {
    icon: UserCheck,
    title: "Verified worker profiles",
    desc: "Identity and skill verification that builds trust from the first hire.",
  },
  {
    icon: CreditCard,
    title: "Secure digital payments",
    desc: "Reliable, transparent payments handled directly inside the platform.",
  },
  {
    icon: MessageCircle,
    title: "In-app communication",
    desc: "Employers and workers coordinate jobs, schedules, and details seamlessly.",
  },
  {
    icon: Star,
    title: "Ratings and reviews",
    desc: "Quality service is recognised and rewarded, raising standards across the marketplace.",
  },
  {
    icon: FileText,
    title: "Digital records",
    desc: "Hiring history, payments, and reviews improve accountability for everyone.",
  },
];

const marketSectors = [
  { icon: Building2, label: "Construction" },
  { icon: Home, label: "Domestic services" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: Tractor, label: "Agriculture" },
  { icon: Truck, label: "Logistics" },
  { icon: Store, label: "Retail" },
  { icon: Briefcase, label: "Small and medium enterprises" },
  { icon: Landmark, label: "County governments" },
];

const stats = [
  { value: "Faster hiring", label: "Reduce recruitment time and cost" },
  { value: "Verified talent", label: "Trust through identity checks" },
  { value: "Digital payments", label: "Secure, transparent wages" },
  { value: "Wider reach", label: "More income opportunities" },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <NavBar />

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-4 sm:px-6 sm:pt-8 lg:px-8">
        {/* Hero */}
        <section className="text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: "var(--brand-green-soft)", color: "var(--brand-navy)" }}
          >
            The company behind Kibarua
          </span>
          <h1
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "var(--brand-navy)" }}
          >
            Esiai <span style={{ color: "var(--brand-green)" }}>Solutions</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-muted-foreground sm:text-lg lg:text-xl">
            A technology company building a safe, reliable, and location-powered digital platform
            that connects casual workers with employers across Kenya and beyond.
          </p>
        </section>

        {/* Company overview */}
        <section
          className="mt-12 rounded-2xl bg-card p-6 sm:mt-16 sm:p-10 lg:p-12"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2
                className="text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ color: "var(--brand-navy)" }}
              >
                About the company
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
                Esiai Solutions is a technology company founded to connect casual workers with
                employers through a safe and reliable digital platform. Using GPS tracking
                technology, the Esiai Solutions app helps clients easily find nearby workers while
                enabling workers to access genuine job opportunities within their location.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
                The company was created to promote safety, convenience, and economic empowerment
                by making casual job access faster, easier, and more trustworthy.
              </p>
            </div>
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: "var(--brand-green-soft)" }}
            >
              <blockquote
                className="text-lg font-semibold leading-relaxed sm:text-xl"
                style={{ color: "var(--brand-navy)" }}
              >
                "Powered by location. Built for the people."
              </blockquote>
              <p className="mt-3 text-sm font-medium" style={{ color: "var(--brand-green)" }}>
                #ikoworks
              </p>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: "var(--brand-green-soft)", color: "var(--brand-navy)" }}
            >
              Our solution
            </span>
            <h2
              className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
              style={{ color: "var(--brand-navy)" }}
            >
              A digital marketplace for work
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
              Kibarua provides a digital marketplace where employers can post jobs and quickly
              connect with nearby workers. The platform reduces hiring time, lowers recruitment
              costs, and increases access to income opportunities.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutionFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-card p-6 transition-shadow hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--brand-green-soft)", color: "var(--brand-green)" }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold" style={{ color: "var(--brand-navy)" }}>
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact stats */}
        <section className="mt-16 sm:mt-20">
          <div
            className="grid gap-4 rounded-2xl p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4"
            style={{ background: "var(--brand-navy)" }}
          >
            {stats.map(({ value, label }) => (
              <div key={value} className="rounded-xl bg-card/10 p-5 text-center backdrop-blur-sm">
                <p className="text-lg font-bold text-white sm:text-xl">{value}</p>
                <p className="mt-1 text-sm text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: "var(--brand-green-soft)", color: "var(--brand-navy)" }}
            >
              Market opportunity
            </span>
            <h2
              className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
              style={{ color: "var(--brand-navy)" }}
            >
              Serving Kenya's informal economy
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
              Kenya's informal sector employs the majority of the country's workforce and contributes
              significantly to the national economy. Demand for trusted, technology-enabled hiring
              solutions continues to grow as businesses and workers adopt digital services.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketSectors.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl bg-card p-4"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--brand-green-soft)", color: "var(--brand-green)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-medium" style={{ color: "var(--brand-navy)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-base text-muted-foreground sm:text-lg">
              The long-term opportunity extends beyond Kenya into East Africa and other African
              markets where informal employment remains a major part of the economy.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mt-16 sm:mt-20">
          <div
            className="overflow-hidden rounded-2xl bg-card"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-10">
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--brand-green-soft)", color: "var(--brand-green)" }}
                >
                  <Globe2 className="h-6 w-6" />
                </div>
                <h2
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Connecting Africa's workforce through technology
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
                  Empowering workers. Simplifying hiring. Enabling secure digital payments. Our
                  mission is to transform access to work by enabling millions of Africans to find
                  income opportunities while helping employers recruit trusted workers efficiently.
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
                  Our vision is to become Africa's leading digital employment and workforce payments
                  platform.
                </p>
              </div>
              <div
                className="flex items-center justify-center p-6 sm:p-10"
                style={{ background: "var(--brand-green-soft)" }}
              >
                <div className="text-center">
                  <Handshake
                    className="mx-auto h-16 w-16"
                    style={{ color: "var(--brand-green)" }}
                  />
                  <p
                    className="mt-4 text-lg font-semibold sm:text-xl"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    Open to partnerships and grants
                  </p>
                  <p className="mt-2 text-sm" style={{ color: "var(--brand-navy)" }}>
                    Venture with us into new markets across Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="mt-16 rounded-2xl p-6 text-center sm:mt-20 sm:p-10"
          style={{ background: "var(--gradient-brand)" }}
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Partner with Esiai Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            We are building Kibarua to create meaningful economic opportunity. If you are interested
            in partnerships, grants, or market expansion, we would love to hear from you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/90"
              style={{ color: "var(--brand-navy)" }}
            >
              Get the app
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

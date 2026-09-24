import { createFileRoute } from "@tanstack/react-router";
import {
  Bell, CheckCircle2, Download, MapPin, Settings,
  ShieldAlert, Smartphone, Star,
} from "lucide-react";
import logoUrl from "@/assets/kibarua-logo.jpg";
import { NavBar } from "@/components/NavBar";
import { FloatingIconsBg } from "@/components/FloatingIconsBg";

const SITE_URL = "https://kibarua-connect-local.lovable.app";
const TITLE = "Download Kibarua APK — Casual Jobs App for Android";
const DESCRIPTION =
  "Download the Kibarua Android APK and install it on your phone. Find casual jobs near you in Kenya — Mjengo, Fundi, Cleaning, Drivers, Deliveries and more. Powered by location. #ikoworks";

// Hosted APK: GitHub release asset (auto-downloads when clicked).
const APK_URL =
  "https://github.com/nexora-solutionske/kibarua-connect-local/releases/download/main/kibaruaConnect.apk";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/download` },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/download` }],
  }),
  component: DownloadPage,
});

const steps = [
  {
    icon: Download,
    title: "Download the APK",
    desc: "Tap the download button above to get the Kibarua APK file on your Android phone.",
  },
  {
    icon: ShieldAlert,
    title: "Allow installation",
    desc: "Your phone may ask to allow installs from this source. Tap \"Allow\" or \"Settings\" and enable \"Install unknown apps\" for your browser.",
  },
  {
    icon: Settings,
    title: "Open the file",
    desc: "Open the downloaded file from your notifications or Downloads folder, then tap \"Install\".",
  },
  {
    icon: CheckCircle2,
    title: "Launch Kibarua",
    desc: "Once installed, open Kibarua, create your profile and start finding jobs near you.",
  },
];

function DownloadPage() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <FloatingIconsBg />
      <NavBar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pb-24 md:pt-16">
        <section className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="text-center md:text-left">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: "var(--brand-green-soft)", color: "var(--brand-navy)" }}
            >
              <Smartphone className="h-3.5 w-3.5" /> Android APK · Free download
            </div>
            <h1
              className="text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
              style={{ color: "var(--brand-navy)" }}
            >
              Download <span style={{ color: "var(--brand-green)" }}>Kibarua</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:mt-5 sm:text-lg md:mx-0">
              Get the Kibarua app and start finding casual jobs near you — Dayburgs, Mjengo, Fundi,
              Cleaning, Drivers, Deliveries and more. Powered by location, built for the people.
            </p>

            <div className="mx-auto mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row md:mx-0 md:justify-start">
              {APK_URL ? (
                <a
                  href={APK_URL}
                  download="kibarua.apk"
                  aria-label="Download Kibarua APK"
                  className="inline-flex min-h-[56px] w-full items-center gap-3 rounded-xl px-6 py-3 text-white transition-transform hover:scale-[1.02] active:scale-[0.99] sm:w-auto"
                  style={{ background: "var(--brand-green)", boxShadow: "var(--shadow-soft)" }}
                >
                  <Download className="h-6 w-6" />
                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] uppercase tracking-wide opacity-80">Direct download</span>
                    <span className="text-base font-semibold">Kibarua APK</span>
                  </span>
                </a>
              ) : (
                <span
                  className="inline-flex min-h-[56px] w-full items-center gap-3 rounded-xl px-6 py-3 text-white sm:w-auto"
                  style={{ background: "var(--brand-navy)", boxShadow: "var(--shadow-soft)" }}
                >
                  <Bell className="h-6 w-6" />
                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] uppercase tracking-wide opacity-80">Coming soon</span>
                    <span className="text-base font-semibold">Kibarua APK</span>
                  </span>
                </span>
              )}
            </div>

            <ul className="mx-auto mt-6 flex max-w-lg flex-col gap-2 text-sm text-muted-foreground md:mx-0">
              <li className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 shrink-0" style={{ color: "var(--brand-green)" }} />
                Works on Android 8.0 and above
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" style={{ color: "var(--brand-green)" }} />
                Location-based job matching near you
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 shrink-0" style={{ color: "var(--brand-green)" }} />
                Verified profiles, ratings and secure M-PESA payments
              </li>
            </ul>
          </div>

          <div className="relative order-first flex justify-center md:order-last">
            <div className="absolute inset-0 -z-10 rounded-full blur-3xl" style={{ background: "var(--brand-green-soft)" }} />
            <img
              src={logoUrl}
              alt="Kibarua app"
              className="w-48 rounded-3xl bg-white object-contain p-4 sm:w-72 md:w-full md:max-w-md md:p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
          </div>
        </section>

        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl" style={{ color: "var(--brand-navy)" }}>
            How to Install the APK
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            Installing an APK outside the Play Store takes less than a minute. Follow these steps.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="rounded-2xl bg-card p-5 transition-transform hover:-translate-y-1 sm:p-6"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "var(--brand-green-soft)", color: "var(--brand-green)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="mt-3 font-semibold" style={{ color: "var(--brand-navy)" }}>
                  {title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-2xl border border-border bg-card/60 p-5 sm:p-6"
          >
            <h3 className="flex items-center gap-2 font-semibold" style={{ color: "var(--brand-navy)" }}>
              <ShieldAlert className="h-5 w-5" style={{ color: "var(--brand-green)" }} />
              A note on safety
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your phone may show a warning because the app is installed directly instead of from the
              Play Store. Only download the Kibarua APK from this official page. After installing, you
              can turn the "Install unknown apps" permission back off in your settings.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kibarua Link. Jobs. People. Opportunities.
      </footer>
    </div>
  );
}

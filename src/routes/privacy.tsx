import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";

const SITE_URL = "https://kibarua-connect-local.lovable.app";
const TITLE = "Privacy & Terms — Esiai Solutions";
const DESCRIPTION =
  "Terms and Conditions for Esiai Solutions and the Kibarua app — covering services, registration, GPS, payments, safety, liability and privacy.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/privacy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

const sections: { title: string; body: string | string[] }[] = [
  {
    title: "1. Introduction",
    body: "Welcome to Esiai Solutions. By accessing or using our application and services, you agree to comply with these Terms and Conditions.",
  },
  {
    title: "2. Services Offered",
    body: "Esiai Solutions provides a digital platform that connects casual workers with clients using GPS-based location services.",
  },
  {
    title: "3. User Registration",
    body: "Users must provide accurate information during registration. False information may lead to suspension or termination of accounts.",
  },
  {
    title: "4. User Responsibilities",
    body: [
      "Users must use the platform lawfully and respectfully.",
      "Workers must provide genuine services.",
      "Clients must provide accurate job descriptions and fair payment agreements.",
    ],
  },
  {
    title: "5. GPS and Location Services",
    body: "By using the app, users consent to location tracking for job matching and safety purposes.",
  },
  {
    title: "6. Payments",
    body: "Esiai Solutions shall charge service fees for use of the platform. All payments must be completed as agreed between parties.",
  },
  {
    title: "7. Safety and Conduct",
    body: "Users must avoid fraudulent, abusive, or illegal activities. Esiai Solutions reserves the right to suspend accounts involved in misconduct.",
  },
  {
    title: "8. Limitation of Liability",
    body: "Esiai Solutions acts only as a connecting platform between workers and clients and is not responsible for disputes, damages, or losses arising from agreements between users.",
  },
  {
    title: "9. Privacy",
    body: "User information and location data will be handled according to the company's Privacy Policy.",
  },
  {
    title: "10. Changes to Terms",
    body: "Esiai Solutions reserves the right to update these Terms and Conditions at any time.",
  },
  {
    title: "11. Contact Information",
    body: "For support or inquiries, users may contact Esiai Solutions through the official app or company communication channels.",
  },
];

function PrivacyPage() {
  return (
    <div className="relative min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <NavBar />

      <main className="mx-auto max-w-3xl px-4 pb-20 pt-4 sm:px-6 sm:pt-8">
        <header className="text-center">
          <h1
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
            style={{ color: "var(--brand-navy)" }}
          >
            Privacy <span style={{ color: "var(--brand-green)" }}>& Terms</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Terms and Conditions for Esiai Solutions.
          </p>
        </header>

        <article
          className="mt-10 rounded-2xl bg-card p-6 sm:p-10"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          {sections.map((s) => (
            <section key={s.title} className="mt-6 first:mt-0">
              <h2 className="text-lg font-bold sm:text-xl" style={{ color: "var(--brand-navy)" }}>
                {s.title}
              </h2>
              {Array.isArray(s.body) ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground sm:text-base">
                  {s.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">{s.body}</p>
              )}
            </section>
          ))}

          <p className="mt-8 text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </article>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Esiai Solutions. All rights reserved.
      </footer>
    </div>
  );
}

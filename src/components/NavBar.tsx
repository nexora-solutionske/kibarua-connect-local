import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/kibarua-logo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/privacy", label: "Privacy & Terms" },
] as const;

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
      <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
        <img src={logo} alt="Kibarua logo" className="h-9 w-9 rounded-lg object-cover sm:h-11 sm:w-11" />
        <span className="text-base font-bold tracking-tight sm:text-lg" style={{ color: "var(--brand-navy)" }}>
          Kibarua
        </span>
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: true }}
            className="rounded-full px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-white/60"
            style={{ color: "var(--brand-navy)" }}
            activeProps={{ style: { color: "var(--brand-green)", background: "var(--brand-green-soft)" } }}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
        style={{ color: "var(--brand-navy)" }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-full z-30 mx-4 mt-2 rounded-2xl border border-border bg-card p-2 shadow-lg md:hidden"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold"
                style={{ color: "var(--brand-navy)" }}
                activeProps={{ style: { color: "var(--brand-green)", background: "var(--brand-green-soft)" } }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

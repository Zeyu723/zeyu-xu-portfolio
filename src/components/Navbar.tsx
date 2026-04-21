import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../content/portfolio";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Notes", href: "/notes" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl"
    >
      <div className="section-container flex h-20 items-center justify-between gap-4">
        <Link to="/" onClick={closeMenu} className="group flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-foreground text-xs font-bold text-background transition-colors group-hover:bg-accent">
            {profile.initials}
          </span>
          <span className="truncate font-display text-2xl font-bold leading-none">
            {profile.name}
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group relative text-sm font-medium transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}?subject=Graduate research conversation`}
            className="hidden bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-foreground/30 bg-background text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background md:hidden"
        >
          <div className="section-container grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={closeMenu}
                className="py-3 text-lg font-semibold text-foreground"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`mailto:${profile.email}?subject=Graduate research conversation`}
              className="mt-3 inline-flex w-full items-center justify-center bg-foreground px-5 py-4 text-sm font-semibold text-background"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

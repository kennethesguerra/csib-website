"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { schoolName, schoolShort } from "../lib/content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/history", label: "History" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-brand-red text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 md:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 transition-transform hover:scale-[1.02] sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/csib.png"
            alt="College of St. Ignatius Bulacan logo"
            width={64}
            height={64}
            priority
            className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-bold tracking-wide text-white sm:hidden">
              {schoolShort}
            </p>
            <p className="hidden text-[11px] font-medium uppercase tracking-[0.1em] text-white/85 sm:block sm:text-[12px] lg:tracking-[0.12em]">
              {schoolName}
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  active
                    ? "bg-white/15 text-brand-gold"
                    : "text-white hover:bg-white/10 hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/35 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="size-6" strokeWidth={2.25} aria-hidden />
          ) : (
            <Menu className="size-6" strokeWidth={2.25} aria-hidden />
          )}
        </button>
      </div>

      <div
        id={menuId}
        className={`overflow-hidden border-t border-white/15 bg-brand-red-dark transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <nav aria-label="Mobile" className="px-4 py-3">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-base font-semibold transition-colors ${
                      active
                        ? "bg-white/15 text-brand-gold"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

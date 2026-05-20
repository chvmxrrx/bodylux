"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const navLeft  = siteConfig.nav.slice(0, 2);
const navRight = siteConfig.nav.slice(2);

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) => {
    const base = "text-[11px] tracking-widest uppercase transition-all duration-300";
    if (pathname === href) {
      return scrolled
        ? `${base} text-dorado`
        : `${base} font-bold text-white`;
    }
    return scrolled
      ? `${base} text-espresso/75 hover:text-dorado`
      : `${base} text-crema/80 hover:text-crema`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white py-3 shadow-sm border-b border-espresso/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Desktop: [nav + logo + nav] centered */}
          <div className="hidden md:flex relative items-center justify-center">

            {/* Center cluster: left links · logo · right links */}
            <div className="flex items-center gap-8">
              {navLeft.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              ))}

              <Link href="/" className="mx-6">
                <Image
                  src="/images/logo1.png"
                  alt="Bodylux"
                  width={130}
                  height={46}
                  className={`h-10 w-auto object-contain transition-all duration-500 ${
                    scrolled ? "brightness-0" : "brightness-0 invert"
                  }`}
                  priority
                />
              </Link>

              {navRight.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              ))}
            </div>

          </div>

          {/* Mobile: logo left | hamburger right */}
          <div className="flex md:hidden items-center justify-between">
            <Link href="/">
              <Image
                src="/images/logo1.png"
                alt="Bodylux"
                width={110}
                height={38}
                className={`h-8 w-auto object-contain transition-all duration-500 ${
                  scrolled ? "brightness-0" : "brightness-0 invert"
                }`}
                priority
              />
            </Link>
            <button
              className={`transition-colors duration-300 ${scrolled ? "text-espresso" : "text-crema"}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-espresso/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Header row */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-espresso/8">
                <Image
                  src="/images/logo1.png"
                  alt="Bodylux"
                  width={100}
                  height={34}
                  className="h-7 w-auto object-contain brightness-0"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="text-espresso/50 hover:text-espresso transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-8 pt-10 gap-7">
                {siteConfig.nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-xs tracking-widest uppercase ${
                        pathname === item.href
                          ? "text-dorado"
                          : "text-espresso/70 hover:text-dorado"
                      } transition-colors duration-300`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

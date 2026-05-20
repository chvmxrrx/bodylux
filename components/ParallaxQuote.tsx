"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ParallaxQuote() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useMotionValue(0);
  const bgY = useTransform(progress, [0, 1], ["120px", "-120px"]);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 = sección entrando por abajo, 1 = sección saliendo por arriba
      const p = (vh - top) / (vh + height);
      progress.set(Math.max(0, Math.min(1, p)));
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [progress]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[560px] flex items-center justify-center"
    >
      {/* Parallax background — oversized so the y movement never exposes edges */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: "url('/images/placeholders/parallax.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-x-0 -top-[150px] -bottom-[150px]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-espresso/70" />

      {/* Decorative borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-dorado/30" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-dorado/30" />

      {/* Quote content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <span className="font-heading text-dorado/50 text-[7rem] leading-none block select-none -mb-6">
          &ldquo;
        </span>

        <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-crema leading-snug">
          Porque transformarse empieza<br />
          por sentirse bien contigo misma.
        </p>

        <div className="w-8 h-px bg-dorado/50 mx-auto mt-10 mb-6" />

        <span className="text-crema/40 text-xs tracking-[0.4em] uppercase">
          Bodylux
        </span>
      </motion.div>
    </section>
  );
}

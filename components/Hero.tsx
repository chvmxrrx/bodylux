"use client";

import { motion } from "framer-motion";
import ImageFallback from "./ImageFallback";

interface HeroProps {
  title?:         string;
  subtitle?:      string;
  label?:         string;
  image?:         string;
  layout?:        "left" | "center";
  imagePosition?: string;
  showCta?:       boolean;
}

// Easing curve for the premium zoom-out feel
const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero({
  title         = "Es hora de recuperar tu confianza.",
  label         = "Estética Premium",
  image         = "/images/placeholders/hero.jpg",
  layout        = "center",
  imagePosition = "center center",
  showCta       = true,
}: HeroProps) {
  const align = layout === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* ── Background: entrada fade-in + zoom-out → Ken Burns continuo ── */}
      {/*
        El motion.div exterior maneja la ENTRADA:
          opacity 0→1 y scale 1.08→1 en 1.8 s.
        El div interior (animate-ken-burns) lleva el LOOP continuo:
          scale 1.14→1.0 cada 22 s (alternate).
        La escala combinada en t=0 es ≈1.08×1.14 = 1.23,
        produciendo un zoom-out perceptible desde el primer frame.
      */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: easeOut }}
      >
        {/* Ken Burns: movimiento lento y continuo */}
        <div className="absolute inset-0 animate-ken-burns">
          <ImageFallback
            src={image}
            alt="Bodylux Hero"
            fill
            className="object-cover"
            style={{ objectPosition: imagePosition }}
            priority
          />
        </div>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-espresso/60" />

        {/* Vignette inferior para profundidad */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-espresso/40 to-transparent" />
      </motion.div>

      {/* ── Content ── */}
      <div className={`relative z-10 px-6 max-w-4xl mx-auto flex flex-col ${align}`}>

        {/* Label above title */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.4, ease: easeOut, delay: 0.2 }}
          className="text-dorado text-xs uppercase mb-6 block tracking-[0.4em]"
        >
          {label}
        </motion.span>

        {/* Title — fade-in + zoom-out */}
        <motion.h1
          initial={{ opacity: 0, scale: 1.07, y: 18 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          transition={{ duration: 1.3, ease: easeOut, delay: 0.45 }}
          className="font-heading text-5xl md:text-7xl text-crema leading-tight mb-8 whitespace-pre-line"
        >
          {title}
        </motion.h1>

        {/* Decorative golden line */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.85 }}
          style={{ originX: layout === "center" ? 0.5 : 0 }}
          className="block w-16 h-px bg-dorado mb-8"
        />

        {/* CTA */}
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.9, ease: easeOut, delay: 1.05 }}
            className={`flex gap-4 flex-wrap ${layout === "center" ? "justify-center" : "justify-start"}`}
          >
            <a
              href="/servicios"
              className="inline-flex items-center gap-2 border border-crema text-crema text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:bg-crema hover:text-espresso"
            >
              Ver servicios
            </a>
          </motion.div>
        )}
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-crema/50 text-xs tracking-widest uppercase">
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-crema/30"
        />
      </motion.div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ParallaxQuote() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /*
    La imagen está sobredimensionada 150px arriba y abajo (-top-[150px] -bottom-[150px]).
    Al hacer scroll el div se desplaza 120px hacia arriba (-120px) o abajo (+120px),
    revelando partes distintas de la imagen — efecto parallax real.
    El buffer de 150px asegura que nunca haya espacio vacío en los bordes.
  */
  const bgY = useTransform(scrollYProgress, [0, 1], ["120px", "-120px"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[560px] flex items-center justify-center"
    >
      {/* Parallax background — oversized so the y movement never exposes edges */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: "url('/images/placeholders/parallax.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
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

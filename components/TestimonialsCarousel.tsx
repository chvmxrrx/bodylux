"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Joselin Yebra",
    location: "Satélite, Estado de México",
    text: "Un lugar hermoso, con instalaciones y equipo de muy alta calidad. El mejor lugar para cuidar de tu cuerpo.",
    stars: 5,
  },
  {
    name: "Jessica Michaus",
    location: "Polanco, México City",
    text: "Me encantó el lugar! Súper recomendable todo el equipo de Polanco son muy profesionales y súper amables.",
    stars: 5,
  },
  {
    name: "Karen Anahí Arriaga Fuentes",
    location: "Pedregal, México City",
    text: "Llevo desde 2019 con Bodylux y siempre lo recomiendo. Los tratamientos son innovadores y no he encontrado un lugar como Bodylux. El trato, limpieza y profesionalismo es impecable y los resultados extraordinarios!",
    stars: 5,
  },
  {
    name: "Valentina Torres",
    location: "Lomas de Chapultepec",
    text: "Mi transformación fue completa, no solo física sino también emocional. Bodylux me devolvió la confianza que necesitaba. Lo recomiendo a todas mis amigas.",
    stars: 5,
  },
  {
    name: "Carolina Martínez",
    location: "Santa Fe, México City",
    text: "Nunca pensé que podría sentirme tan cómoda y segura en un espacio de estética. El equipo es excepcional, profesional y genuinamente comprometido con tu bienestar.",
    stars: 5,
  },
];

const n = testimonials.length;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-0.5 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-espresso text-base select-none">
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [busy, setBusy] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const go = useCallback(
    (delta: 1 | -1) => {
      if (busy) return;
      setBusy(true);
      setDir(delta);
      setCurrent((c) => (c + delta + n) % n);
      setTimeout(() => setBusy(false), 480);
    },
    [busy]
  );

  const goTo = useCallback(
    (i: number) => {
      if (busy || i === current) return;
      setBusy(true);
      setDir(i > current ? 1 : -1);
      setCurrent(i);
      setTimeout(() => setBusy(false), 480);
    },
    [busy, current]
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go]);

  const prev = (current - 1 + n) % n;
  const next = (current + 1) % n;

  // Desktop: prev | active | next — Mobile: solo el activo
  const cards = isDesktop
    ? [
        { key: `card-${prev}`, idx: prev, isCenter: false },
        { key: `card-${current}`, idx: current, isCenter: true },
        { key: `card-${next}`, idx: next, isCenter: false },
      ]
    : [{ key: `card-${current}`, idx: current, isCenter: true }];

  const cardVariants = {
    enter: (d: number) => ({
      x: d > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: "0%", opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="bg-[#f2f0ed] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-espresso">
            Lo que dicen nuestras clientas
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative px-10 md:px-14">
          <div className="relative overflow-hidden flex">
            <AnimatePresence mode="popLayout" initial={false} custom={dir}>
              {cards.map(({ key, idx, isCenter }) => {
                const t = testimonials[idx];
                return (
                  <motion.div
                    key={key}
                    layout
                    custom={dir}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.42, ease: "easeInOut" }}
                    className="flex-none px-3"
                    style={{ width: isDesktop ? "33.333%" : "100%" }}
                  >
                    <div
                      className={`h-full px-8 py-10 text-center transition-shadow duration-300 ${
                        isCenter
                          ? "bg-white shadow-2xl"
                          : "bg-white/60 shadow-sm"
                      }`}
                    >
                      <Stars count={t.stars} />
                      <p className="text-marron/80 text-sm leading-relaxed mb-8">
                        {t.text}
                      </p>
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-heading text-espresso font-semibold text-sm tracking-wide">
                          {t.name}
                        </span>
                        <span className="text-marron/50 text-xs tracking-wide">
                          {t.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Prev arrow */}
          <button
            onClick={() => go(-1)}
            aria-label="Testimonio anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-espresso/30 flex items-center justify-center text-espresso transition-all duration-300 hover:bg-espresso hover:text-crema"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => go(1)}
            aria-label="Testimonio siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-espresso/30 flex items-center justify-center text-espresso transition-all duration-300 hover:bg-espresso hover:text-crema"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-espresso scale-125" : "bg-espresso/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

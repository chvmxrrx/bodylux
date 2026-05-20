"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageFallback from "./ImageFallback";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  autoPlayInterval?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function ImageCarousel({
  images,
  autoPlayInterval = 3000,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const goTo = (index: number) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval, paused]);

  return (
    <div
      className="relative w-full h-full group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.75, ease }}
          className="absolute inset-0"
        >
          <ImageFallback
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows — visible on hover */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-espresso/65 text-crema flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-espresso"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-espresso/65 text-crema flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-espresso"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Imagen ${i + 1}`}
            className={`h-[3px] transition-all duration-500 ${
              i === current
                ? "w-6 bg-dorado"
                : "w-2 bg-crema/50 hover:bg-crema/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

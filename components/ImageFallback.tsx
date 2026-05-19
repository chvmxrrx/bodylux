"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageFallbackProps {
  src:       string;
  alt:       string;
  fill?:     boolean;
  className?: string;
  width?:    number;
  height?:   number;
  priority?:  boolean;
}

export default function ImageFallback({
  src,
  alt,
  fill,
  className,
  width,
  height,
  priority,
}: ImageFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`bg-beige flex items-center justify-center ${className ?? ""}`}
        style={
          fill
            ? { position: "absolute", inset: 0 }
            : { width, height }
        }
      >
        <span className="text-dorado/40 text-xs tracking-widest uppercase">
          Bodylux
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}

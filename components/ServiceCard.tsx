import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import ImageFallback from "./ImageFallback";

interface ServiceCardProps {
  service:  Service;
  ctaHref?: string;
}

export default function ServiceCard({
  service,
  ctaHref = "/servicios",
}: ServiceCardProps) {
  return (
    <div className="group bg-crema overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <ImageFallback
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {service.badge && (
          <span className="absolute top-4 left-4 bg-dorado text-crema text-xs tracking-widest uppercase px-3 py-1">
            {service.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-2xl text-espresso mb-3">
          {service.title}
        </h3>
        <p className="text-marron/80 text-sm leading-relaxed flex-1">
          {service.description}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 text-dorado text-xs tracking-widest uppercase mt-5 transition-colors duration-300 hover:text-marron group/link"
        >
          Ver más
          <ArrowRight
            size={13}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

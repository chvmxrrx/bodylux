import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ImageFallback from "@/components/ImageFallback";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Servicios | Bodylux",
  description:
    "Conoce todos los servicios y tratamientos personalizados de Bodylux. Cada plan es diseñado a medida para ti.",
};

export default function ServiciosPage() {
  return (
    <>
      <Hero
        label="Tratamientos Personalizados"
        title={"Nuestros\nServicios"}
        image="/images/placeholders/services-hero.jpg"
        layout="center"
        imagePosition="center center"
        showCta={false}
      />

      {/* Intro */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-marron/70 text-lg leading-relaxed">
              Cada tratamiento es diseñado a medida para ti. Sin protocolos
              genéricos, sin precios fijos. Tu evaluación marca el inicio de tu
              transformación.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services — cards */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
        {services.map((service, i) => {
          const isEven = i % 2 === 0;
          const waMessage = `Hola, quiero el servicio ${service.title}${service.subtitle ? ` (${service.subtitle})` : ""} de Bodylux.`;

          return (
            <AnimatedSection key={service.id} delay={0.08}>
              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-[#f2f0ed]">
                {/* Image */}
                <div
                  className={`relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[460px] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {service.badge && (
                    <div className="absolute top-6 left-6 z-10 bg-espresso text-crema text-[9px] tracking-widest uppercase px-4 py-2">
                      {service.badge}
                    </div>
                  )}
                  <ImageFallback
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center px-10 py-14 lg:px-14 xl:px-16 lg:py-14 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="text-dorado text-[10px] tracking-widest uppercase mb-3 block">
                    Tratamiento {String(i + 1).padStart(2, "0")}
                  </span>

                  {service.subtitle && (
                    <span className="text-marron/50 text-[10px] tracking-widest uppercase mb-3 block">
                      — {service.subtitle}
                    </span>
                  )}

                  <h3 className="font-heading text-4xl lg:text-5xl text-espresso leading-tight mb-5">
                    {service.title}
                  </h3>

                  <p className="text-marron/70 text-base leading-relaxed mb-7">
                    {service.description}
                  </p>

                  {service.details && service.details.length > 0 && (
                    <ul className="space-y-3 mb-9">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-3 text-marron/70 text-sm"
                        >
                          <CheckCircle
                            size={15}
                            className="text-dorado flex-shrink-0"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={getWhatsAppUrl(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-espresso text-crema text-[10px] tracking-widest uppercase px-8 py-4 self-start transition-all duration-300 hover:bg-dorado"
                  >
                    Cotizar mi plan por WhatsApp
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-dorado py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl text-crema mb-6">
              Cada plan es único.
              <br />
              Como tú.
            </h2>
            <p className="text-crema/80 text-lg mb-10">
              Agenda tu evaluación y descubre el plan ideal para ti.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-crema text-espresso text-xs tracking-widest uppercase px-10 py-5 transition-all duration-300 hover:bg-espresso hover:text-crema"
            >
              Iniciar mi evaluación
              <ArrowRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

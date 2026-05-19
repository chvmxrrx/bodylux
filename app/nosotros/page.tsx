import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ImageFallback from "@/components/ImageFallback";
import { getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Quiénes Somos | Bodylux",
  description:
    "Conoce la filosofía y el equipo detrás de Bodylux. Un espacio cálido y profesional alejado de la frialdad clínica tradicional.",
};

const pillars = [
  {
    title: "Misión",
    text: "Acompañar a cada persona en su proceso de transformación corporal con tratamientos personalizados, tecnología de vanguardia y un enfoque humano que va más allá del resultado.",
  },
  {
    title: "Visión",
    text: "Ser el referente de bienestar y transformación corporal premium en la región, reconocidos por la calidez de nuestra atención y la efectividad de nuestros resultados.",
  },
  {
    title: "Valores",
    text: "Contención, privacidad, excelencia técnica y autenticidad. Creemos en el poder de sentirse bien en el propio cuerpo como fundamento de la confianza personal.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-beige pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Quiénes Somos
            </span>
            <h1 className="font-heading text-5xl md:text-7xl text-espresso leading-tight max-w-3xl">
              Donde la estética
              <br />
              encuentra la calidez.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy — asymmetric layout */}
      <section className="bg-espresso py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="relative">
            <div className="aspect-[3/4] relative overflow-hidden">
              <ImageFallback
                src="/images/placeholders/equipo.jpg"
                alt="Equipo Bodylux"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-dorado/10 hidden lg:block pointer-events-none" />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Nuestra Filosofía
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-crema mb-6 leading-tight">
              Más que un centro estético.
              <br />
              Un espacio de confianza.
            </h2>
            <p className="text-crema/60 leading-relaxed mb-5">
              En Bodylux rechazamos la frialdad clínica que suele caracterizar
              al mundo de la estética. Aquí encontrarás un ambiente cálido,
              discreto y completamente enfocado en tu bienestar.
            </p>
            <p className="text-crema/60 leading-relaxed mb-5">
              Desde que llegas, el ambiente está diseñado para que te sientas
              cómoda: aromas, música ambiente y espacios privados que garantizan
              tu intimidad en cada visita.
            </p>
            <p className="text-crema/60 leading-relaxed">
              Nuestro equipo no solo aplica tratamientos. Te acompaña, te
              escucha y diseña contigo el camino hacia los resultados que
              buscas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-crema py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14 text-center">
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Lo que nos define
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso">
              Nuestros Pilares
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {pillars.map(({ title, text }, i) => (
              <AnimatedSection key={title} delay={i * 0.15}>
                <div className="p-10 border-t-2 border-dorado/30 hover:border-dorado transition-colors duration-300">
                  <span className="font-heading text-5xl text-dorado/15 mb-2 block leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-2xl text-espresso mb-4">
                    {title}
                  </h3>
                  <p className="text-marron/70 text-sm leading-relaxed">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Space section */}
      <section className="bg-beige py-24 px-6">
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <AnimatedSection>
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageFallback
                  src="/images/placeholders/espacio.jpg"
                  alt="Espacio Bodylux"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection
              delay={0.2}
              className="bg-espresso p-12 md:p-16 flex flex-col justify-center"
            >
              <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
                Nuestro Espacio
              </span>
              <h2 className="font-heading text-3xl text-crema mb-5 leading-tight">
                Cada detalle pensado
                <br />
                para ti.
              </h2>
              <p className="text-crema/60 text-sm leading-relaxed mb-4">
                Cada rincón de Bodylux fue diseñado pensando en tu comodidad.
                Desde el café de bienvenida hasta la temperatura del ambiente,
                cuidamos que tu experiencia sea inolvidable.
              </p>
              <p className="text-crema/60 text-sm leading-relaxed mb-8">
                Espacios completamente privados, sin sala de espera compartida,
                con acceso discreto y un equipo que respeta tu tiempo y tu
                proceso.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-dorado text-dorado text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 hover:bg-dorado hover:text-crema self-start"
              >
                Conocer más
                <ArrowRight size={13} />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

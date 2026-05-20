import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ImageFallback from "@/components/ImageFallback";
import { getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Quiénes Somos | Bodylux",
  description:
    "Conoce la filosofía y el equipo detrás de Bodylux. Un espacio cálido y profesional alejado de la frialdad clínica tradicional.",
};

const valores = [
  {
    title: "Cercanía real",
    text: "No somos una clínica fría. Acompañamos, escuchamos y hacemos sentir cómoda a cada paciente.",
  },
  {
    title: "Profesionalismo",
    text: "Hay técnica, conocimiento y seguridad en cada tratamiento.",
  },
  {
    title: "Honestidad",
    text: "No prometemos milagros irreales. Educamos, explicamos procesos y mostramos resultados reales.",
  },
  {
    title: "Contención",
    text: "Entendemos que hay emociones detrás del cuerpo: inseguridad, post operatorio, cambios.",
  },
  {
    title: "Confianza",
    text: "Todo lo que hacemos busca que la paciente se sienta segura: desde el diagnóstico hasta el resultado.",
  },
  {
    title: "Resultados visibles",
    text: "Sí importa lo estético, pero desde un enfoque responsable y bien trabajado.",
  },
];

const pilares = ["Resultados", "Experiencia", "Educación", "Acompañamiento"];

export default function NosotrosPage() {
  return (
    <>
      <Hero
        label="Quiénes Somos"
        title={"Donde la estética encuentra la calidez"}
        image="/images/placeholders/equipo2.jpg"
        layout="center"
        imagePosition="top center"
      />

      {/* Nuestra Filosofía */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center">

            {/* Fotografía — izquierda */}
            <AnimatedSection className="relative">
              <div className="aspect-[2/3] relative overflow-hidden">
                <ImageFallback
                  src="/images/placeholders/owner.jpg"
                  alt="Fundadora Bodylux"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-dorado/25 hidden lg:block pointer-events-none" />
            </AnimatedSection>

            {/* Texto — derecha */}
            <AnimatedSection delay={0.2}>
              <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
                Nuestra Filosofía
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-espresso leading-tight mb-6">
                No solo transformamos cuerpos.
                <br />
                Acompañamos procesos reales.
              </h2>
              <p className="text-marron/70 text-lg leading-relaxed mb-5">
                Sabemos que detrás de cada cambio hay inseguridades, dudas y
                expectativas. Por eso no se trata solo de un tratamiento, sino
                de sentirte guiada, contenida y segura en cada etapa.
              </p>
              <p className="text-marron/70 text-lg leading-relaxed">
                Aquí no vienes solo a hacerte un procedimiento. Vienes a verte
                y sentirte mejor contigo misma.
              </p>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="bg-[#f2f0ed] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14 text-center">
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Propósito
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso">
              Misión &amp; Visión
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <AnimatedSection>
              <div className="p-10 border-t-2 border-dorado/30 hover:border-dorado transition-colors duration-300 h-full">
                <span className="font-heading text-5xl text-dorado/15 mb-2 block leading-none">
                  01
                </span>
                <h3 className="font-heading text-2xl text-espresso mb-4">
                  Misión
                </h3>
                <p className="text-marron/70 text-sm leading-relaxed mb-3">
                  Acompañar a cada mujer en su proceso de cambio, entregando
                  tratamientos efectivos y personalizados para moldear, reducir
                  y reafirmar, con un enfoque profesional y consciente.
                </p>
                <p className="text-marron/70 text-sm leading-relaxed">
                  Más que resultados físicos, buscamos que cada paciente
                  recupere su confianza y se sienta segura en su propio cuerpo.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="p-10 border-t-2 border-dorado/30 hover:border-dorado transition-colors duration-300 h-full">
                <span className="font-heading text-5xl text-dorado/15 mb-2 block leading-none">
                  02
                </span>
                <h3 className="font-heading text-2xl text-espresso mb-4">
                  Visión
                </h3>
                <p className="text-marron/70 text-sm leading-relaxed mb-3">
                  Ser un referente en tratamientos corporales en Chile,
                  reconocido no solo por los resultados, sino por la
                  experiencia, el acompañamiento y la confianza que generamos
                  en cada paciente.
                </p>
                <p className="text-marron/70 text-sm leading-relaxed">
                  Queremos transformar la forma en que las mujeres viven sus
                  procesos corporales: con más información, contención y
                  seguridad.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14 text-center">
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Lo que nos define
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso">
              Nuestros Valores
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {valores.map(({ title, text }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="p-10 border-t-2 border-dorado/30 hover:border-dorado transition-colors duration-300">
                  <span className="font-heading text-5xl text-dorado/15 mb-2 block leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl text-espresso mb-3">
                    {title}
                  </h3>
                  <p className="text-marron/70 text-sm leading-relaxed">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-[#f2f0ed] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14 text-center">
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Nuestra base
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso">
              Pilares
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {pilares.map((pilar, i) => (
              <AnimatedSection key={pilar} delay={i * 0.12}>
                <div className="p-10 border-t-2 border-dorado/30 hover:border-dorado transition-colors duration-300 text-center">
                  <span className="font-heading text-6xl text-dorado/10 block leading-none mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl text-espresso">{pilar}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Espacio */}
      <section className="bg-white py-28 px-6">
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

      {/* CTA final */}
      <section className="bg-dorado py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl text-crema mb-6">
              ¿Lista para comenzar
              <br />
              tu transformación?
            </h2>
            <p className="text-crema/80 text-lg mb-10">
              Agenda tu evaluación personalizada hoy.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-crema text-espresso text-xs tracking-widest uppercase px-10 py-5 transition-all duration-300 hover:bg-espresso hover:text-crema"
            >
              Cotizar mi plan por WhatsApp
              <ArrowRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

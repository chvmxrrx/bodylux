import Link from "next/link";
import { ArrowRight, Heart, Star, Shield } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/data/siteConfig";

const benefits = [
  {
    Icon: Heart,
    title: "Acompañamiento Real",
    description:
      "No estás sola en el proceso. Nuestro equipo te guía en cada etapa, desde la evaluación inicial hasta los resultados definitivos.",
  },
  {
    Icon: Star,
    title: "Tecnología Premium",
    description:
      "Equipos de última generación combinados con técnicas expertas para resultados visibles, duraderos y seguros.",
  },
  {
    Icon: Shield,
    title: "Privacidad Total",
    description:
      "Un espacio exclusivo y privado diseñado para que te sientas segura, cómoda y contenida en todo momento.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Manifesto */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Nuestra Filosofía
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso leading-tight mb-6">
              Bodylux no es solo un tratamiento.
              <br />
              Es un proceso de transformación.
            </h2>
            <p className="text-marron/70 text-lg leading-relaxed">
              Creemos que cada cuerpo tiene su propio ritmo y sus propias
              necesidades. Por eso diseñamos planes completamente personalizados
              que se adaptan a ti, no al revés.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#f2f0ed] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14 text-center">
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Lo que hacemos
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso">
              Nuestros Servicios
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} ctaHref="/servicios" />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-espresso text-espresso text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:bg-espresso hover:text-crema"
            >
              Ver todos los servicios
              <ArrowRight size={13} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-14 text-center">
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Por qué Bodylux
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso">
              El diferenciador humano
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map(({ Icon, title, description }, i) => (
              <AnimatedSection key={title} delay={i * 0.15} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 border border-dorado/40 mb-6">
                  <Icon size={20} className="text-dorado" />
                </div>
                <h3 className="font-heading text-xl text-espresso mb-3">{title}</h3>
                <p className="text-marron/60 text-sm leading-relaxed">{description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Final CTA */}
      <section className="bg-dorado py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl text-crema mb-6">
              ¿Lista para comenzar
              <br />
              tu transformación?
            </h2>
            <p className="text-crema/80 text-lg mb-10">
              Agenda tu evaluación personalizada hoy. Sin compromiso, sin
              precios fijos. Solo tu proceso.
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

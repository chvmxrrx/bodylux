import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
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
      {/* Header */}
      <section className="bg-espresso pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Soluciones Personalizadas
            </span>
            <h1 className="font-heading text-5xl md:text-7xl text-crema leading-tight mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-crema/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Cada tratamiento es diseñado a medida para ti. Sin protocolos
              genéricos, sin precios fijos. Tu evaluación marca el inicio de tu
              transformación.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-crema py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((service, i) => (
            <AnimatedSection key={service.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                {/* Image */}
                <div
                  className={`relative w-full aspect-[4/3] overflow-hidden ${
                    i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <ImageFallback
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {service.badge && (
                    <span className="absolute top-6 left-6 bg-dorado text-crema text-xs tracking-widest uppercase px-4 py-1.5">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`bg-beige p-10 md:p-14 flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-dorado text-xs tracking-widest uppercase mb-3 block">
                    Tratamiento {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-espresso mb-4">
                    {service.title}
                  </h2>
                  <p className="text-marron/70 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle
                          size={15}
                          className="text-dorado mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-marron/80">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={getWhatsAppUrl(
                      `Hola, me interesa el servicio de ${service.title} de Bodylux. Me gustaría cotizar mi plan.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-espresso text-crema text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:bg-dorado self-start"
                  >
                    Cotizar mi plan por WhatsApp
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* No pricing notice */}
      <section className="bg-espresso py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-crema/60 text-xs tracking-widest uppercase mb-4">
              Evaluación Personalizada
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-crema mb-6">
              Cada plan es único.
              <br />
              Como tú.
            </h2>
            <p className="text-crema/60 leading-relaxed mb-10">
              No trabajamos con tarifas fijas porque ningún cuerpo es igual.
              Agenda tu evaluación sin costo y descubre el plan ideal para ti.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-dorado text-dorado text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:bg-dorado hover:text-crema"
            >
              Iniciar mi evaluación
              <ArrowRight size={13} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

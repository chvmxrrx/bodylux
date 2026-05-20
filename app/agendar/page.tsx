import type { Metadata } from "next";
import { ArrowRight, MessageSquare, CalendarCheck, Sparkles, MapPin, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Agendar | Bodylux",
  description:
    "Agenda tu evaluación personalizada en Bodylux. Tres pasos simples para iniciar tu transformación.",
};

const steps = [
  {
    number: "01",
    Icon: MessageSquare,
    title: "Contacto Inicial",
    description:
      "Escríbenos por WhatsApp y cuéntanos brevemente qué te trae a Bodylux. En minutos recibirás respuesta de nuestro equipo.",
  },
  {
    number: "02",
    Icon: CalendarCheck,
    title: "Evaluación Personalizada",
    description:
      "Agendamos tu consulta en un espacio privado y cómodo. Sin compromisos, sin presiones. Solo nos dedicamos a escucharte.",
  },
  {
    number: "03",
    Icon: Sparkles,
    title: "Tu Plan Personalizado",
    description:
      "Diseñamos tu protocolo a medida, con tiempos, objetivos y una hoja de ruta clara para tu proceso de transformación.",
  },
];

export default function AgendarPage() {
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsapp.agendarMessage);

  return (
    <>
      <Hero
        label="Sin compromisos"
        title={"Agenda tu evaluación"}
        image="/images/placeholders/hero-agendar3.jpg"
        layout="center"
        imagePosition="center center"
        showCta={false}
      />

      {/* Steps */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Cómo funciona
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso">
              Tres pasos simples
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-espresso/8">
            {steps.map(({ number, Icon, title, description }, i) => (
              <AnimatedSection key={number} delay={i * 0.15}>
                <div className="bg-white p-10 flex flex-col h-full">
                  <span className="font-heading text-6xl text-dorado/15 mb-4 leading-none">
                    {number}
                  </span>
                  <div className="w-10 h-10 border border-dorado/40 flex items-center justify-center mb-6">
                    <Icon size={17} className="text-dorado" />
                  </div>
                  <h3 className="font-heading text-xl text-espresso mb-3">
                    {title}
                  </h3>
                  <p className="text-marron/70 text-sm leading-relaxed flex-1">
                    {description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#f2f0ed] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Encuéntranos
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso">
              Nuestra ubicación
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            {/* Map */}
            <AnimatedSection className="aspect-[4/3] lg:aspect-auto lg:min-h-[480px] relative">
              <iframe
                src="https://maps.google.com/maps?q=Doctor+Manuel+Barros+Borgo%C3%B1o+71,+Providencia,+Santiago,+Chile&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: "360px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Bodylux"
              />
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection
              delay={0.15}
              className="bg-espresso p-12 md:p-16 flex flex-col justify-center"
            >
              <span className="text-dorado text-xs tracking-widest uppercase mb-6 block">
                Dirección
              </span>

              <div className="flex items-start gap-4 mb-8">
                <MapPin size={18} className="text-dorado flex-shrink-0 mt-1" />
                <div>
                  <p className="text-crema text-lg font-heading leading-snug mb-1">
                    Doctor Manuel Barros Borgoño 71
                  </p>
                  <p className="text-crema/60 text-sm">
                    Oficina 702, Providencia
                  </p>
                  <p className="text-crema/60 text-sm">Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-10">
                <Clock size={16} className="text-dorado flex-shrink-0" />
                <div>
                  <p className="text-crema/80 text-sm">Lunes a Viernes · 9:00 – 20:00</p>
                  <p className="text-crema/80 text-sm">Sábado · 9:00 – 14:00</p>
                </div>
              </div>

              <div className="border-t border-crema/10 pt-10">
                <p className="text-crema/50 text-xs tracking-wide mb-5 uppercase">
                  Contáctanos directamente
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-dorado text-dorado text-xs tracking-widest uppercase px-7 py-3 transition-all duration-300 hover:bg-dorado hover:text-crema"
                >
                  <MessageSquare size={13} />
                  +56 9 3953 9801
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dorado py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl text-crema mb-6">
              Tu cuerpo merece
              <br />
              atención personalizada.
            </h2>
            <p className="text-crema/80 text-lg mb-10">
              Escríbenos directamente por WhatsApp. Respondemos rápido y te
              guiamos desde el primer mensaje.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-crema text-espresso text-xs tracking-widest uppercase px-10 py-5 transition-all duration-300 hover:bg-espresso hover:text-crema"
            >
              <MessageSquare size={15} />
              Agendar por WhatsApp
              <ArrowRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

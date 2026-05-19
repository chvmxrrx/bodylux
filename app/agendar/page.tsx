import type { Metadata } from "next";
import { ArrowRight, MessageSquare, CalendarCheck, Sparkles } from "lucide-react";
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
      {/* Header */}
      <section className="bg-crema pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-dorado text-xs tracking-widest uppercase mb-4 block">
              Sin compromisos
            </span>
            <h1 className="font-heading text-5xl md:text-7xl text-espresso leading-tight mb-6">
              Agenda tu
              <br />
              evaluación
            </h1>
            <p className="text-marron/70 text-lg leading-relaxed max-w-xl mx-auto">
              El primer paso es el más importante. Y nosotros lo hacemos fácil
              para ti.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-beige py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map(({ number, Icon, title, description }, i) => (
              <AnimatedSection key={number} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <span className="font-heading text-6xl text-dorado/20 mb-4 leading-none">
                    {number}
                  </span>
                  <div className="w-10 h-10 border border-dorado/40 flex items-center justify-center mb-5">
                    <Icon size={17} className="text-dorado" />
                  </div>
                  <h3 className="font-heading text-xl text-espresso mb-3">
                    {title}
                  </h3>
                  <p className="text-marron/70 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="bg-espresso py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-dorado text-xs tracking-widest uppercase mb-6 block">
              Comienza hoy
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-crema mb-6 leading-tight">
              Tu cuerpo merece
              <br />
              atención personalizada.
            </h2>
            <p className="text-crema/60 mb-12 leading-relaxed">
              Escríbenos directamente por WhatsApp. Estamos disponibles para
              responderte y guiarte desde el primer mensaje.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-dorado text-crema text-xs tracking-widest uppercase px-12 py-5 transition-all duration-300 hover:bg-marron w-full md:w-auto"
            >
              <MessageSquare size={17} />
              Agendar por WhatsApp
              <ArrowRight size={14} />
            </a>
            <p className="text-crema/30 text-xs mt-6 tracking-wide">
              Respondemos en menos de 24 horas hábiles.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

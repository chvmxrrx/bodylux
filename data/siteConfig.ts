export const siteConfig = {
  name: "Bodylux",
  tagline: "Tu cuerpo. Tu proceso. Tu confianza.",
  description:
    "Tratamientos corporales de alta gama, personalizados y acompañados por profesionales que entienden que cada cuerpo es único.",
  whatsapp: {
    number: "573001234567", // TODO: reemplaza con el número real (formato: código país + número)
    defaultMessage: "Hola, me gustaría cotizar un plan personalizado en Bodylux.",
    agendarMessage:
      "Hola, quiero agendar una evaluación personalizada en Bodylux.",
  },
  nav: [
    { label: "Inicio",    href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Agendar",   href: "/agendar" },
    { label: "Nosotros",  href: "/nosotros" },
  ],
  social: {
    instagram: "#",
    facebook:  "#",
    tiktok:    "#",
  },
};

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(
    message ?? siteConfig.whatsapp.defaultMessage
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}

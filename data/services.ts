export interface Service {
  id:          string;
  title:       string;
  description: string;
  details:     string[];
  image:       string;
  badge?:      string;
}

export const services: Service[] = [
  {
    id: "transformacion-corporal",
    title: "Transformación Corporal",
    description:
      "Protocolos avanzados para redefinir, tonificar y recuperar la silueta que mereces, con tecnología de vanguardia y acompañamiento continuo.",
    details: [
      "Evaluación corporal personalizada",
      "Tecnologías no invasivas de última generación",
      "Plan de sesiones adaptado a tus objetivos",
      "Seguimiento y ajuste continuo del protocolo",
    ],
    image: "/images/placeholders/transformacion.jpg",
    badge: "Más Solicitado",
  },
  {
    id: "recuperacion-postoperatoria",
    title: "Recuperación Postoperatoria",
    description:
      "Acompañamiento especializado para optimizar y acelerar tu recuperación tras procedimientos estéticos, con técnicas de drenaje y modelado.",
    details: [
      "Protocolo de drenaje linfático especializado",
      "Reducción de inflamación y fibrosis",
      "Modelado y definición de resultados",
      "Cuidado y contención en cada etapa del proceso",
    ],
    image: "/images/placeholders/postoperatoria.jpg",
  },
  {
    id: "tratamientos-faciales",
    title: "Tratamientos Faciales Premium",
    description:
      "Rituales de cuidado facial diseñados para luminosidad, firmeza y rejuvenecimiento, con productos de alta cosmética.",
    details: [
      "Diagnóstico cutáneo personalizado",
      "Técnicas de masaje facial lifting",
      "Infusión de activos premium",
      "Protocolo anti-envejecimiento personalizado",
    ],
    image: "/images/placeholders/facial.jpg",
  },
  {
    id: "bienestar-integral",
    title: "Bienestar Integral",
    description:
      "Experiencias diseñadas para conectar cuerpo y mente. Rituales que van más allá del tratamiento para ofrecerte una transformación completa.",
    details: [
      "Rituales de relajación profunda",
      "Técnicas de modelado y sculpting",
      "Aromaterapia y ambiente cuidado",
      "Espacio privado y exclusivo",
    ],
    image: "/images/placeholders/bienestar.jpg",
  },
];

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  image: string;
  badge?: string;
}

export const services: Service[] = [
  {
    id: "cuerpo-verano",
    title: "Cuerpo de verano",
    description: "Tratamiento de cuerpo completo para definir, tonificar y reducir medidas.",
    details: [
      "Definición y tonificación general",
      "Reducción de medidas en zonas clave",
      "Piel más firme, suave y luminosa",
    ],
    image: "/images/servicios/cuerpo-verano.jpg",
  },
  {
    id: "cuerpo-acero",
    title: "Cuerpo de acero",
    description: "Protocolo intensivo de cuerpo completo con enfoque en firmeza y moldeo.",
    details: [
      "Moldeo y firmeza de cuerpo completo",
      "Tonificación muscular profunda",
      "Plan personalizado e intensivo",
    ],
    image: "/images/servicios/cuerpo-acero.jpg",
  },
  {
    id: "abdomen-acero",
    title: "Abdomen de acero",
    description: "Tratamiento intensivo para tonificar y reducir el abdomen.",
    details: [
      "Reducción de medidas en zona abdominal",
      "Tonificación y firmeza muscular",
      "Resultados visibles desde la primera sesión",
    ],
    image: "/images/servicios/abdomen-acero.jpg",
  },
  {
    id: "gluteos-acero",
    title: "Glúteos de acero",
    description: "Enfoque en reafirmación, volumen y definición de glúteos.",
    details: [
      "Reafirmación y volumen de glúteos",
      "Moldeo y definición de la zona",
      "Técnicas manuales y aparatología combinada",
    ],
    image: "/images/servicios/gluteos-acero.jpg",
  },
  {
    id: "adios-fibrosis",
    title: "Protocolo adiós fibrosis",
    description: "Tratamiento especializado para prevenir y tratar fibrosis post-quirúrgica.",
    details: [
      "Tratamiento específico de fibrosis post quirúrgica",
      "Prevención y resolución de adherencias",
      "Técnica manual y aparatología combinada",
    ],
    image: "/images/servicios/adios-fibrosis.jpg",
  },

  {
    id: "anticelulitico",
    title: "Tratamiento anticelulítico",
    description: "Protocolo para reducir celulitis y mejorar la textura de la piel.",
    details: [
      "Reducción visible de celulitis",
      "Mejora de la textura y elasticidad de la piel",
      "Drenaje y activación circulatoria",
    ],
    image: "/images/servicios/anticelulitico.jpg",
  },
  {
    id: "lipo-sin-cirugia",
    title: "Lipo sin cirugía",
    subtitle: "Abdomen, cintura, espalda",
    description: "Reducción de grasa localizada sin procedimientos invasivos.",
    details: [
      "Sin procedimientos quirúrgicos ni agujas",
      "Pérdida de volumen en zonas específicas",
      "Tecnología de última generación",
    ],
    image: "/images/servicios/lipo-sin-cirugia.jpg",
  },
  {
    id: "recupera-silueta",
    title: "Recupera tu silueta",
    subtitle: "Protocolo post parto",
    description: "Para recuperar la figura de forma segura y gradual.",
    details: [
      "Protocolo diseñado para el cuerpo post parto",
      "Recuperación progresiva y sin riesgos",
      "Tratamiento integral de abdomen y caderas",
    ],
    image: "/images/servicios/recupera-silueta.jpg",
  },
  {
    id: "postop-inmediata",
    title: "Recuperación post operatoria",
    subtitle: "Inmediata",
    description: "Acompañamiento profesional en las primeras etapas post-cirugía.",
    details: [
      "Acompañamiento desde el primer día post cirugía",
      "Control del edema e inflamación",
      "Protocolo adaptado a cada tipo de cirugía",
    ],
    image: "/images/servicios/postop-inmediata.jpg",
  },
  {
    id: "postop-avanzada",
    title: "Recuperación post operatoria",
    subtitle: "Avanzada",
    description: "Con nuestra técnica manual y aparatología lograremos el resultado que deseas de tu cirugía.",
    details: [
      "Drenaje linfático manual profundo",
      "Aparatología específica post operatoria",
      "Seguimiento personalizado en cada etapa",
    ],
    image: "/images/servicios/postop-avanzada.jpg",
    badge: "Más solicitado",
  },
  {
    id: "potencia-resultado",
    title: "Potencia tu resultado",
    subtitle: "Post operatorio",
    description: "Técnicas de moldeo para definir contorno y silueta tras cirugía.",
    details: [
      "Definición del contorno corporal post cirugía",
      "Protocolos especializados de moldeo",
      "Resultados visibles y duraderos",
    ],
    image: "/images/servicios/potencia-resultado.jpg",
  },
  {
    id: "sesion-detox",
    title: "Sesión detox",
    description: "Drenaje linfático y desintoxicación corporal para activar el organismo.",
    details: [
      "Activación del sistema linfático",
      "Reducción de retención de líquidos",
      "Desintoxicación y revitalización corporal",
    ],
    image: "/images/servicios/sesion-detox.jpg",
  },

];
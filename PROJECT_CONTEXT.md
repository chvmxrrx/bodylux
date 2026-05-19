# PROJECT_CONTEXT.md - Proyecto Web: Bodylux

## 1. VISIÓN GENERAL Y OBJETIVOS
Este documento define la arquitectura, diseño y lineamientos técnicos para el desarrollo del sitio web de Bodylux. El objetivo es construir una plataforma web premium orientada a la conversión (High-Ticket), inspirada en la estructura y fluidez de referencias corporativas de lujo, pero adaptada a una experiencia cálida, humana y elegante.

* **Propósito:** Transmitir profesionalismo y exclusividad, alejándose de la frialdad clínica tradicional para ofrecer un ambiente cálido y cercano.
* **Conversión:** Centralizar el flujo de usuarios hacia la cotización y agendamiento personalizado vía WhatsApp.
* **Escalabilidad:** Estructura modular preparada para la futura inyección de assets multimedia (fotografías reales, videos, branding definitivo) sin romper el layout.

---

## 2. IDENTIDAD DE MARCA Y SISTEMA VISUAL
El diseño abandona el blanco/negro puro del minimalismo tradicional para adoptar una paleta cálida que evoca la piel, la sofisticación y la contención.

### Paleta de Colores
| Uso | Nombre | Color HEX |
| :--- | :--- | :--- |
| Fondos principales, headers y alta jerarquía | Espresso | #1A1208 |
| Texto secundario y etiquetas | Marrón Suave | #4B2E1A |
| Acentos, iconos y detalles premium | Dorado Pantone | #8B6343 |
| Fondos de tarjetas y respiro visual | Beige Luz | #F0E2C8 |
| Fondos de contenido y base general | Crema Blanco | #FAF6EF |

### Tipografía
* **Titulares (Headings):** Tipografía estilo *Darshye* (o alternativa web-safe como Playfair Display / Cormorant). Aporta un aspecto elegante y sofisticado para H1 y H2.
* **Cuerpo de texto (Body):** *Lato* (o alternativa como Inter / Montserrat). Versátil, moderna y funcional para párrafos, botones y UI.

### Tono y Mensaje
* El lenguaje debe empoderar. Ejemplos rectores: "Es hora de recuperar tu confianza" y "Tu cuerpo. Tu proceso. Tu confianza.".
* Enfoque en acompañar procesos y resultados reales, no solo en aplicar tratamientos.

---

## 3. ESTILO UX/UI Y PATRONES DE DISEÑO
El sitio emulará un estilo **"Luxury Medical Editorial"** con las siguientes directrices precisas:

* **Espaciado (Spacing):** Uso masivo de *negative space*. Secciones con padding vertical generoso (mínimo 96px a 120px en desktop) para que el contenido respire.
* **Bordes y Formas:** Bordes afilados (sharp edges, `border-radius: 0` o máximo `2px`) en botones y contenedores para denotar alta costura y seriedad.
* **Sombras:** Evitar *drop-shadows* pesadas. Utilizar variaciones sutiles de opacidad o sombras extremadamente difuminadas solo cuando sea indispensable separar planos.
* **Imágenes:** Contenedores de imagen que ocupen todo el ancho de su columna (edge-to-edge en mobile). Proporciones fotográficas editoriales (3:4 o 16:9).

---

## 4. COMPONENTES CLAVE Y COMPORTAMIENTO

### Navbar (Navegación Principal)
* **Estado Inicial:** Transparente superpuesto al Hero, con logotipos y enlaces en contraste (blanco/crema o dorado dependiendo del fondo).
* **Estado Scroll:** Efecto *Glassmorphism* (blur sutil) o transición a color sólido (Espresso #1A1208) con un padding vertical reducido tras hacer scroll.
* **Estructura:** Logo a la izquierda, enlaces centrados, CTA principal a la derecha.

### Hero Section
* **Visual:** Fullscreen (`100vh`) con imagen o video de fondo de alta calidad cubierto por un *overlay* suave para garantizar la legibilidad del texto.
* **Contenido:** Título centralizado o alineado a la izquierda con tipografía Serif gigante, un subtítulo descriptivo en Sans-serif y un CTA primario vibrante u outline.

### Componentes de Interacción
* **Botones (CTAs):** Estados de hover elegantes. Ejemplo: Inversión de fondo (de Espresso a Crema Blanco) con transición suave de 300ms.
* **Cards de Servicios:** Layout minimalista. Imagen predominante, título Serif, breve descripción y botón discreto (ej. una flecha estilizada).

---

## 5. ARQUITECTURA DE PÁGINAS

**Página 1: Inicio**
* Hero principal inmersivo.
* Frase de marca/Manifiesto ("Bodylux no es solo un tratamiento...").
* Grid resumen de servicios destacados (con imágenes de transformación/experiencia).
* Sección de beneficios (El diferenciador humano y la contención).
* Footer moderno con enlaces rápidos y redes sociales.

**Página 2: Paquetes / Servicios**
* Cabecera editorial elegante.
* Listado de soluciones personalizadas (Transformación corporal, recuperación postoperatoria).
* **Restricción Estricta:** No incluir precios fijos. Los textos deben enfatizar la evaluación a medida.
* Cada paquete debe culminar en un botón CTA: "Cotizar mi plan por WhatsApp".

**Página 3: Agendar**
* Diseño limpio, enfocado 100% en conversión y sin distracciones.
* Explicación de los pasos (1. Contacto, 2. Evaluación, 3. Tratamiento personalizado).
* Botón principal masivo de redirección a WhatsApp con integración de mensaje predeterminado.

**Página 4: Quiénes Somos**
* Layout tipo revista (Bento grid asimétrico o layout de dos columnas cruzadas).
* Sección sobre la filosofía de Bodylux: alejarse de la frialdad clínica.
* Pilares: Misión, Visión, Valores.
* Imágenes del equipo y del espacio físico (detalles como el café, la privacidad).

---

## 6. ANIMACIONES Y MOTION DESIGN
* **Aparición (Scroll Reveal):** Los elementos deben aparecer mediante `fade-in-up` sutil (desplazamiento de 20px a 0px en Y) con curva de interpolación *ease-out* a medida que entran en el viewport.
* **Hover en Imágenes:** Ligero zoom-in interno (`scale: 1.05`) dentro del contenedor con *overflow hidden*, duración de 0.6s a 0.8s para sensación premium.
* **Carga Inicial:** Secuencia orquestada. Primero el Navbar y Logo, luego el Hero Title, finalmente el CTA.

---

## 7. STACK TÉCNICO SUGERIDO
Para lograr el nivel de fluidez y modernidad requerido, se recomienda la siguiente arquitectura Frontend:

* **Framework:** Next.js (App Router) para óptimo rendimiento, SEO y transiciones instantáneas.
* **Estilos:** Tailwind CSS. Variables de color configuradas en el `tailwind.config.ts` utilizando los HEX de la marca.
* **Animaciones:** Framer Motion (para microinteracciones y scroll reveals).
* **Iconografía:** Lucide React o Phosphor Icons (variante Light/Thin).
* **Gestión de Assets (Placeholder Strategy):** Utilizar un sistema de carpetas `/public/images/placeholders/` e integrar un componente `<ImageFallback />` que muestre un color sólido (Beige Luz) mientras se cargan los assets definitivos.

---

## 8. PREPARACIÓN FUTURA Y MANTENIBILIDAD
* Crear componentes agnósticos de contenido (ej. `<Hero layout="left|center" />`, `<ServiceCard data={item} />`).
* Extraer todos los textos y copys a un archivo de constantes o CMS (ej. `data/services.ts` y `data/siteConfig.ts`) para facilitar su edición sin tocar el markup UI.
* Asegurar que todas las imágenes utilicen el tag `<picture>` o el componente `<Image />` de Next.js con atributos de tamaño flexible y `object-fit: cover` para prevenir que layouts se rompan al reemplazar fotos por otras de distintas proporciones.
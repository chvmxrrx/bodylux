import Link from "next/link";
import Image from "next/image";
import { Share2, Globe } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-black text-crema/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/images/logo1.png"
                alt="Bodylux"
                width={160}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-crema/60 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-crema mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-crema/60 hover:text-dorado transition-colors duration-300 tracking-wide"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-crema mb-5">
              Contacto
            </h4>
            <p className="text-sm text-crema/60 mb-5 leading-relaxed">
              Agenda tu evaluación personalizada o cotiza tu plan de
              tratamiento.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dorado text-dorado text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 hover:bg-dorado hover:text-crema"
            >
              Contáctanos
            </a>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-crema/40 hover:text-dorado transition-colors duration-300"
              >
                <Share2 size={18} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-crema/40 hover:text-dorado transition-colors duration-300"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-crema/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-crema/30 tracking-wide">
            © {new Date().getFullYear()} Bodylux. Todos los derechos reservados.
          </p>
          <p className="text-xs text-crema/30 tracking-widest uppercase">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

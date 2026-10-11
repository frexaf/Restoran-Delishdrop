import { FaWhatsapp } from "react-icons/fa6";
import { whatsappLink } from "@/lib/links";

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Pusat Bantuan WhatsApp"
      className="fixed right-4 bottom-5 z-40 sm:right-6 sm:bottom-6"
    >
      <a
        href={whatsappLink(
          "Halo DelishDrop, saya ingin menanyakan menu & promo hari ini.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp DelishDrop"
        className="group flex items-center gap-2 rounded-full bg-emerald-600 px-3.5 py-2.5 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <FaWhatsapp className="size-5 shrink-0" />
        <span className="hidden text-xs font-semibold sm:inline">
          Pesan via WA
        </span>
      </a>
    </aside>
  );
}

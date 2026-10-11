import { site } from "@/content/site";

/**
 * Builds a direct WhatsApp click-to-chat URL with an optional prefilled message.
 */
export function whatsappLink(message?: string): string {
  const cleanNumber = site.contact.whatsapp.replace(/[^0-9]/g, "");
  if (!message) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates prefilled order text for a specific menu item.
 */
export function menuOrderWhatsappLink(itemName: string, price: string): string {
  const text = `Halo ${site.name}, saya ingin memesan "${itemName}" (${price}) yang saya lihat dari website. Bagaimana cara pemesanan dan pengirimannya?`;
  return whatsappLink(text);
}

/**
 * Generates prefilled reservation text.
 */
export function reservationWhatsappLink(details: {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  seatingArea: string;
  notes?: string;
}): string {
  const lines = [
    `Halo ${site.name}, saya ingin melakukan reservasi meja:`,
    `• Nama: ${details.name}`,
    `• No. WhatsApp: ${details.phone}`,
    `• Jumlah Tamu: ${details.guests} Orang`,
    `• Tanggal: ${details.date}`,
    `• Jam: ${details.time}`,
    `• Area Meja: ${details.seatingArea}`,
    details.notes ? `• Catatan Khusus: ${details.notes}` : "",
    "",
    "Mohon konfirmasi ketersediaan meja. Terima kasih!",
  ].filter(Boolean);

  return whatsappLink(lines.join("\n"));
}

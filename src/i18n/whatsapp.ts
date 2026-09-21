export function buildWhatsAppLink(phone: string, message?: string) {
  const digitsOnly = phone.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digitsOnly}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

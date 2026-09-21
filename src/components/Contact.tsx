import { FormEvent, useState } from "react";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Contact() {
  const content = useContent();
  const { sections, identity, contact: contactI18n } = content;

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      `${contactI18n?.form?.name || "Name"}: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");
    const url = `mailto:${identity.email}?subject=${encodeURIComponent(form.subject || contactI18n?.form?.defaultSubject || "Portfolio Contact")}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSubmitted(true);
  }

  const whatsappMessage = encodeURIComponent(contactI18n?.whatsappMessage || "Hello, I saw your portfolio and I'd like to get in touch.");
  const whatsappUrl = `https://wa.me/213555662744?text=${whatsappMessage}`;

  return (
    <section id="contact" className="relative py-20 border-t border-[var(--border-card)]">
      <div className="section-shell">
        {/* Section Header */}
        <div className="mb-12">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>05 / LET'S WORK TOGETHER</span>
          </div>
          <h2 className="section-title">{sections.contact.title}</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href={`mailto:${identity.email}`}
              className="w-card p-6 flex items-center gap-4 group border border-[var(--border-card)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)] group-hover:scale-105 transition-transform">
                <Mail size={22} />
              </div>
              <div className="overflow-hidden">
                <span className="block font-mono-code text-xs text-[var(--text-muted)] uppercase">Email</span>
                <span className="truncate font-semibold text-base text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors">
                  {identity.email}
                </span>
              </div>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-card p-6 flex items-center gap-4 group border border-[var(--border-card)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)] group-hover:scale-105 transition-transform">
                <WhatsAppIcon size={22} />
              </div>
              <div>
                <span className="block font-mono-code text-xs text-[var(--text-muted)] uppercase">WhatsApp</span>
                <span className="font-semibold text-base text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors">
                  {identity.phone}
                </span>
              </div>
            </a>

            <div className="w-card p-6 flex items-center gap-4 border border-[var(--border-card)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)]">
                <MapPin size={22} />
              </div>
              <div>
                <span className="block font-mono-code text-xs text-[var(--text-muted)] uppercase">Location</span>
                <span className="font-semibold text-base text-[var(--text-heading)]">
                  {identity.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 w-card p-6 sm:p-8 border border-[var(--border-card)]">
            <form onSubmit={submit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-mono-code text-xs font-semibold text-[var(--text-muted)] uppercase">
                    {contactI18n?.form?.name || "Name"} *
                  </label>
                  <input
                    className="w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-body)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none focus:border-[var(--accent)]"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono-code text-xs font-semibold text-[var(--text-muted)] uppercase">
                    {contactI18n?.form?.email || "Email"} *
                  </label>
                  <input
                    className="w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-body)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none focus:border-[var(--accent)]"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono-code text-xs font-semibold text-[var(--text-muted)] uppercase">
                  {contactI18n?.form?.subject || "Subject"} *
                </label>
                <input
                  className="w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-body)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none focus:border-[var(--accent)]"
                  placeholder="Project Inquiry / Job Opportunity"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono-code text-xs font-semibold text-[var(--text-muted)] uppercase">
                  {contactI18n?.form?.message || "Message"} *
                </label>
                <textarea
                  className="w-full min-h-[140px] rounded-xl border border-[var(--border-card)] bg-[var(--bg-body)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none focus:border-[var(--accent)] resize-y"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-3 text-sm">
                <Send size={16} />
                <span>{submitted ? "Opening Mail Client..." : (contactI18n?.form?.send || "Send Message")}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

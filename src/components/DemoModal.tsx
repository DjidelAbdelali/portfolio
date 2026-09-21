import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { loadDemo } from "../lib/demos";

type DemoModalProps = {
  demoId: string;
  onClose: () => void;
};

export function DemoModal({ demoId, onClose }: DemoModalProps) {
  const [html, setHtml] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Verrouille le scroll, mémorise le focus précédent et le restaure à la fermeture
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, []);

  // Échap pour fermer + piège de focus (Tab reste dans la modale)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    let cancelled = false;
    setHtml(null);
    setFailed(false);
    loadDemo(demoId)
      .then((result) => {
        if (!cancelled) setHtml(result);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [demoId]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Démo interactive"
      className="fixed inset-0 z-50 flex h-dvh w-dvw flex-col bg-black/90 p-2 sm:p-6"
    >
      <div className="mb-2 flex shrink-0 items-center justify-between sm:mb-3">
        <p className="text-sm font-semibold text-white">Démo interactive</p>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="btn btn-secondary !px-3 !py-2"
          aria-label="Fermer la démo"
        >
          <X size={18} />
        </button>
      </div>
      {failed && (
        <div className="flex flex-1 items-center justify-center text-sm text-slate-300">
          Impossible de charger la démo. Réessaie.
        </div>
      )}
      {!failed && !html && (
        <div className="flex flex-1 items-center justify-center text-sm text-slate-300">
          Chargement de la démo…
        </div>
      )}
      {html && (
        <iframe
          title={demoId}
          srcDoc={html}
          className="min-h-0 w-full flex-1 rounded border border-white/10 bg-white"
          sandbox="allow-scripts allow-same-origin allow-pointer-lock"
        />
      )}
    </div>
  );
}

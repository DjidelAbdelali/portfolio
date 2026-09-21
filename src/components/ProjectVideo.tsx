import { useEffect, useRef, useState } from "react";
import { loadProjectVideo } from "../lib/projectVideos";

type ProjectVideoProps = {
  videoKey: string;
};

export function ProjectVideo({ videoKey }: ProjectVideoProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    loadProjectVideo(videoKey).then((url) => {
      if (!cancelled) setSrc(url);
    });
    return () => {
      cancelled = true;
    };
  }, [inView, videoKey]);

  return (
    <div ref={containerRef} className="h-full w-full">
      {src && (
        <video src={src} autoPlay loop muted playsInline className="h-full w-full object-cover" />
      )}
    </div>
  );
}

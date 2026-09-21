import { education } from "../data/portfolioData";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="formation" eyebrow="Parcours" title="Formation">
      <div className="grid gap-5 lg:grid-cols-3">
        {education.map((item) => (
          <article key={item.degree} className="panel p-6">
            <p className="text-sm font-semibold text-cyanx">{item.period}</p>
            <h3 className="mt-3 text-xl font-bold text-white">{item.degree}</h3>
            <p className="mt-2 text-sm text-slate-400">{item.school}</p>
            {item.description && <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>}
            <p className="mt-4 text-sm leading-7 text-slate-300"><span className="text-white">Projet:</span> {item.project}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span key={highlight} className="tag">{highlight}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

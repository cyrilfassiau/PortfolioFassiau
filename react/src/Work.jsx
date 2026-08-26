import { useMemo, useState, useId } from "react";
import { PROJECTS, TYPES, TECHS, SORTS } from "./projects.js";

function Row({ project, index }) {
  const flip = index % 2 === 1;
  const cls = [
    "row",
    project.major ? "row--major" : "",
    flip ? "row--flip" : "",
  ].filter(Boolean).join(" ");

  return (
    <li className={cls}>
      <p className="row__no" aria-hidden="true"></p>

      <div className="row__text">
        <h3 className="row__title">{project.title}</h3>
        <p className="row__desc">{project.desc}</p>

        {project.spec && (
          <dl className="spec">
            {project.spec.map((s) => (
              <div key={s.term}>
                <dt>{s.term}</dt>
                <dd>{s.detail}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="tags">
          {project.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>

        <div className="row__acts">
          {project.links.map((l) => (
            <a
              key={l.href}
              className={"btn btn--sm" + (l.primary ? " btn--blue" : "")}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label}
              <span className="vh"> for {project.title} (opens in new tab)</span>
            </a>
          ))}
        </div>
      </div>

      <div className="row__media">
        <img
          src={project.image.src}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
          alt={project.image.alt}
        />
      </div>
    </li>
  );
}

function Group({ legend, options, value, onChange, render }) {
  const id = useId();
  return (
    <div className="wk__group">
      <p className="lbl" id={id}>{legend}</p>
      <div className="wk__opts" role="group" aria-labelledby={id}>
        {options.map((opt) => {
          const key = render ? render(opt).key : opt;
          const label = render ? render(opt).label : opt;
          return (
            <button
              key={key}
              type="button"
              className="btn btn--sm wk__opt"
              aria-pressed={value === key}
              onClick={() => onChange(key)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Work() {
  const [type, setType] = useState("All");
  const [tech, setTech] = useState("All");
  const [sort, setSort] = useState("featured");

  
  const shown = useMemo(() => {
    const out = PROJECTS.filter(
      (p) =>
        (type === "All" || p.type === type) &&
        (tech === "All" || p.tags.includes(tech))
    );

    if (sort === "az") out.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "za") out.sort((a, b) => b.title.localeCompare(a.title));
    return out;
  }, [type, tech, sort]);

  const filtered = type !== "All" || tech !== "All";
  const reset = () => { setType("All"); setTech("All"); setSort("featured"); };

  return (
    <>
      <div className="wk__bar">
        <Group legend="Type" options={TYPES} value={type} onChange={setType} />
        <Group legend="Tech" options={TECHS} value={tech} onChange={setTech} />
        <Group
          legend="Sort"
          options={SORTS}
          value={sort}
          onChange={setSort}
          render={(o) => ({ key: o.id, label: o.label })}
        />

        <div className="wk__meta">
          <p className="wk__count" role="status" aria-live="polite">
            {filtered
              ? `${shown.length} of ${PROJECTS.length}`
              : `${PROJECTS.length} projects`}
          </p>
          {filtered && (
            <button type="button" className="btn btn--sm" onClick={reset}>
              Clear
            </button>
          )}
        </div>
      </div>

      {shown.length > 0 ? (
        
        
        <ol className="rows" key={`${type}-${tech}-${sort}`}>
          {shown.map((p, i) => (
            <Row key={p.id} project={p} index={i} />
          ))}
        </ol>
      ) : (
        <p className="wk__empty">
          No project matches <strong>{type}</strong> + <strong>{tech}</strong>.{" "}
          <button type="button" className="wk__link" onClick={reset}>
            Clear filters
          </button>
        </p>
      )}
    </>
  );
}

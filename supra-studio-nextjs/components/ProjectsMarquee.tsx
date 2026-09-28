import { PROJECTS } from "@/lib/projects";

export default function ProjectsMarquee() {
  const names = PROJECTS.map((p) => p.name);
  const loop = [...names, ...names, ...names, ...names];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((n, i) => (
          <span key={i}>{n}</span>
        ))}
      </div>
    </div>
  );
}

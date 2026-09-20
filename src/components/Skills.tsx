import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="subsection-heading">
        <h3>My toolkit</h3>
        <span className="eyebrow">Across the stack</span>
      </div>
      {skillGroups.map(({ title, items }, index) => (
        <div className="skill-row" key={title} data-reveal>
          <h4>
            <span className="skill-number" aria-hidden="true">
              0{index + 1}
            </span>
            {title}
          </h4>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className="toolkit-note">
        My day-to-day focus is React and TypeScript. My delivery experience
        includes exposure to CI/CD, Docker, Kubernetes and Helm.
      </p>
    </div>
  );
}

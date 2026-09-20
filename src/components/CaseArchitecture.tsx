const layers = [
  {
    title: "Define the differences",
    description:
      "Configuration describes each asset type’s fields and requirements.",
  },
  {
    title: "Reuse the components",
    description: "Shared forms and tables turn those rules into an interface.",
  },
  {
    title: "Adapt the workflow",
    description:
      "Each type gets what it needs, with familiar behaviour throughout.",
  },
];

export default function CaseArchitecture() {
  return (
    <figure
      className="case-architecture"
      aria-labelledby="architecture-heading"
    >
      <figcaption id="architecture-heading" className="eyebrow">
        How it fits together
      </figcaption>
      <ol
        className="architecture-flow"
        aria-label="From configuration to adapted workflows"
      >
        {layers.map(({ title, description }, index) => (
          <li key={title}>
            <span className="architecture-step" aria-hidden="true">
              0{index + 1}
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

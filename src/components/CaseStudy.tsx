import CaseArchitecture from "./CaseArchitecture";
import Icon from "./Icon";
import "./CaseStudy.css";

const decisions = [
  {
    title: "Tables driven by configuration",
    description:
      "Field metadata defines the columns. Shared components handle sorting, filtering, pagination and selection across different records.",
  },
  {
    title: "Forms that follow the asset",
    description:
      "Form sections follow the asset type. A subtype can supply its own identifying fields, which replace the default identifiers and become required alongside the type’s existing requirements. Other fields respond to the values entered.",
  },
  {
    title: "Actions with context",
    description:
      "The interface checks permissions and record state when presenting actions. Dedicated hooks coordinate API calls, loading states and data refreshes after changes.",
  },
];

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="case-study"
      aria-labelledby="case-study-heading"
      tabIndex={-1}
    >
      <div className="container section-space">
        <div className="section-heading" data-reveal>
          <p className="eyebrow section-index">01 / IGFEJ case study</p>
          <h2 id="case-study-heading">
            One foundation.
            <br />
            <em>Many workflows.</em>
          </h2>
          <p className="section-intro">
            Asset management for Portugal’s Justice sector.
          </p>
        </div>
        <div className="case-context" data-reveal>
          <div>
            <h3>Different rules. A familiar interface.</h3>
            <p>
              Assets, contracts and documents each bring different fields and
              permissions. The challenge: support that variety without
              rebuilding the interface every time.
            </p>
          </div>
          <dl className="case-facts">
            <div>
              <dt>Team / role</dt>
              <dd>Axians · Front-End Developer</dd>
            </div>
            <div>
              <dt>Since</dt>
              <dd>May 2025</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>React · TypeScript · REST APIs</dd>
            </div>
          </dl>
        </div>
        <div className="case-role" data-reveal>
          <p className="eyebrow">My contribution</p>
          <p>
            Within the Axians team, I build reusable components, configurable
            forms and tables, and API integrations. The approach below reflects
            that shared project work.
          </p>
        </div>
        <CaseArchitecture />
        <details className="case-details">
          <summary>
            <span>Explore the engineering details</span>
            <Icon name="plus" />
          </summary>
          <div className="case-decisions">
            {decisions.map(({ title, description }, index) => (
              <article className="case-decision" key={title}>
                <span className="eyebrow" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </details>
        <div className="case-takeaway">
          <p>
            Different workflows. <em>Less duplicated interface logic.</em>
          </p>
          <a href="#contact" className="text-link">
            Have a similar challenge? <Icon />
          </a>
        </div>
      </div>
    </section>
  );
}

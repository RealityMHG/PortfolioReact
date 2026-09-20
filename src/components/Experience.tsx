import Icon from "./Icon";
import { profile } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      className="experience section-dark"
      id="experience"
      aria-labelledby="experience-heading"
      tabIndex={-1}
    >
      <div className="container section-space">
        <div className="section-heading" data-reveal>
          <p className="eyebrow section-index">02 / Experience</p>
          <h2 id="experience-heading">
            The experience
            <br />
            <em>behind the work.</em>
          </h2>
          <p className="section-intro">
            Front-end depth, full-stack experience and increasing technical
            responsibility.
          </p>
        </div>
        <div className="experience-list">
          <article
            className="experience-entry experience-featured"
            aria-labelledby="axians-heading"
            data-reveal
          >
            <div className="experience-meta">
              <p className="eyebrow">May 2025 — Present</p>
              <p className="current-label">
                <span className="status-dot" /> Current role
              </p>
            </div>
            <div className="experience-content">
              <div className="role-heading">
                <div>
                  <h3 id="axians-heading">Axians</h3>
                  <p>
                    Front-End Developer <span>/ Justice sector · IGFEJ</span>
                  </p>
                </div>
              </div>
              <p className="experience-lead">
                Growing technical responsibility across implementation
                decisions, code quality and developer support.
              </p>
              <ul className="experience-responsibilities">
                <li>
                  Helping define front-end standards and feature structure.
                </li>
                <li>
                  Reviewing code and resolving blockers across Justice-sector
                  projects.
                </li>
                <li>
                  Integrating APIs and authentication with back-end teams, using
                  Microsoft Entra ID and Keycloak.
                </li>
              </ul>
              <details className="experience-details">
                <summary>
                  Tools & delivery environment <Icon name="plus" />
                </summary>
                <p>
                  Azure DevOps Boards, Repos and Pipelines; Git branches and
                  pull requests; SQL, PostgreSQL and SQL Server. My experience
                  also includes exposure to CI/CD pipelines and environments
                  using Docker, Kubernetes and Helm.
                </p>
              </details>
              <a className="text-link" href="#case-study">
                Explore the IGFEJ case study <Icon />
              </a>
            </div>
          </article>
          <article className="experience-entry experience-earlier" data-reveal>
            <div className="experience-meta">
              <p className="eyebrow">Jun 2023 — May 2025</p>
              <p>Earlier experience</p>
            </div>
            <div className="experience-content">
              <div className="role-heading">
                <div>
                  <h3>Independent</h3>
                  <p>Full-Stack Developer</p>
                </div>
              </div>
              <p>
                Built client and personal web projects, from responsive React
                interfaces to Node.js APIs and SQL/MongoDB data persistence.
              </p>
            </div>
          </article>
        </div>
        <a
          className="text-link experience-cv"
          href={profile.cv}
          download="Rafael-Rego-CV-EN.pdf"
        >
          Download my full CV <Icon name="download" />
        </a>
      </div>
    </section>
  );
}

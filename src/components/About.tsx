import Skills from "./Skills";
import Icon from "./Icon";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-heading"
      tabIndex={-1}
    >
      <div className="container section-space">
        <div className="about-intro" data-reveal>
          <div>
            <p className="eyebrow section-index">03 / About & skills</p>
            <h2 id="about-heading">
              Curious by nature.
              <br />
              <em>Thoughtful by practice.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Rafael, a software engineer in Lisbon. I like untangling
              complex interfaces, building useful things and leaving code easier
              for the next person to work with.
            </p>
            <p className="interest-note">
              <span className="eyebrow">Currently curious about</span>
              AI-assisted development, LLMs and workflow automation.
            </p>
          </div>
        </div>
        <Skills />
        <div className="background-grid" data-reveal>
          <div className="education">
            <h3>Education</h3>
            <p className="school">ISCTE — University Institute of Lisbon</p>
            <div className="education-entry">
              <div>
                <h4>BSc in Computer Engineering</h4>
                <p>2018 — 2021</p>
              </div>
            </div>
            <div className="education-entry">
              <div>
                <h4>Master’s in Computer Engineering</h4>
                <p>2021 — 2022 · Attended, not completed</p>
              </div>
            </div>
          </div>
          <div className="languages">
            <h3>A little more context</h3>
            <dl>
              <div>
                <dt>Based in</dt>
                <dd>Lisbon, Portugal</dd>
              </div>
              <div>
                <dt>Portuguese</dt>
                <dd>Native</dd>
              </div>
              <div>
                <dt>English</dt>
                <dd>Fluent</dd>
              </div>
            </dl>
            <div className="cv-languages">
              <span className="eyebrow">Download CV</span>
              <a
                href={profile.cv}
                download="Rafael-Rego-CV-EN.pdf"
                className="text-link"
                lang="en"
              >
                English <Icon name="download" />
              </a>
              <a
                href={profile.cvPortuguese}
                download="Rafael-Rego-CV-PT.pdf"
                className="text-link"
                lang="pt"
              >
                Português <Icon name="download" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

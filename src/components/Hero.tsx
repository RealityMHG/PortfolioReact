import Icon from "./Icon";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero container"
      aria-labelledby="hero-heading"
      tabIndex={-1}
    >
      <div className="hero-eyebrow eyebrow">
        <span>
          <span className="status-dot" /> Software Engineer
        </span>
        <span>Lisbon, Portugal</span>
      </div>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="hero-intro">Hi, I’m Rafael Rêgo.</p>
          <h1 id="hero-heading">
            Complex ideas.
            <br />
            <em>Clear interfaces.</em>
          </h1>
          <p className="hero-description">
            I build React and TypeScript applications that turn complex business
            workflows into clear, maintainable interfaces.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#case-study">
              See the case study <Icon name="down" />
            </a>
            <a className="text-link" href="#contact">
              Let’s talk <Icon />
            </a>
          </div>
        </div>
        <div className="hero-focus">
          <span className="hero-flourish" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">How I can help</p>
          <p className="hero-focus-title">
            Interfaces for
            <br />
            <em>real workflows.</em>
          </p>
          <p>
            Complex forms, data-heavy interfaces and API integration—for new
            ideas and existing products.
          </p>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          <span className="eyebrow">Currently</span> Front-End Developer{" "}
          <span className="muted">at</span> Axians
        </p>
        <p className="hero-stack">
          React <span>/</span> TypeScript <span>/</span> .NET <span>/</span> SQL
        </p>
        <a
          href="#case-study"
          className="scroll-link"
          aria-label="Scroll to the case study"
        >
          <Icon name="down" />
        </a>
      </div>
    </section>
  );
}

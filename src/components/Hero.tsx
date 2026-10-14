import portrait from "../assets/portrait.webp";
import booth from "../assets/sahara-booth.webp";

export function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">DEVELOPER / DESIGNER / BUILDER</p>
        <p className="hero-greeting">Hello, I'm Umama Abdul-Hamid Ahmed.</p>
        <h1 id="hero-title">
          Thoughtful
          <br />
          <em>design.</em>
          <br />
          Powerful{" "}
          <span className="code-word">
            code<span aria-hidden="true">.</span>
          </span>
        </h1>
        <p className="hero-intro">
          Frontend Developer · Project Manager · UI/UX Designer
          <br />I turn ambitious ideas into digital products that work
          beautifully for the people who use them.
        </p>
        <div className="hero-actions">
          <a className="button button-gold" href="#work">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#experience">
            My experience <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a href="#about" className="scroll-cue">
          <span aria-hidden="true">↓</span> SCROLL TO DISCOVER
        </a>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img
            src={portrait}
            alt="Umama Abdul-Hamid Ahmed at a technology exhibition"
            width="720"
            height="1080"
            fetchPriority="high"
          />
        </div>
        <figure className="hero-booth">
          <img
            src={booth}
            alt="Umama showcasing educational technology at the Sahara Sparks booth"
            width="1020"
            height="768"
          />
          <figcaption>OFF THE SCREEN. INTO THE WORLD. ↗</figcaption>
        </figure>
        <div className="developer-card">
          <div className="terminal-bar">
            <span aria-hidden="true">● ● ●</span>
            <span>the-person.ts</span>
          </div>
          <code>
            <span className="syntax-keyword">const</span> umama = {"{"}
            <br />
            &nbsp; craft:{" "}
            <span className="syntax-string">'frontend & UI/UX'</span>,<br />
            &nbsp; mindset:{" "}
            <span className="syntax-string">'build with purpose'</span>,<br />
            &nbsp; basedIn:{" "}
            <span className="syntax-string">
              'Zanzibar, open to work any where.'
            </span>
            <br />
            {"}"};
          </code>
        </div>
        <div className="portrait-side-label" aria-hidden="true">
          DESIGN WITH EMPATHY. DEVELOP WITH INTENTION.
        </div>
      </div>
      <div className="identity-strip">
        <div>
          <span className="identity-number">01</span>
          <span>
            DEVELOP<small>React · Svelte · TypeScript</small>
          </span>
        </div>
        <div>
          <span className="identity-number">02</span>
          <span>
            DESIGN<small>Figma · UI/UX · User flows</small>
          </span>
        </div>
        <div>
          <span className="identity-number">03</span>
          <span>
            DELIVER<small>Project management · Scrum</small>
          </span>
        </div>
        <div>
          <span className="identity-number">04</span>
          <span>
            CREATE<small>Rihal · Giftora · What's next</small>
          </span>
        </div>
      </div>
    </section>
  );
}

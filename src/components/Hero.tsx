import portrait from '../assets/portrait.webp'

export function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="tiny-star" aria-hidden="true">✳</span> A MULTIDISCIPLINARY MIND</p>
        <h1 id="hero-title">Ideas into<br />products.<br /><em>Purpose</em> into<br />everything.</h1>
        <p className="hero-intro">I'm Umama. A developer, designer, and entrepreneur<br className="desktop-break" /> building digital experiences — and a little more.</p>
        <div className="hero-actions">
          <a className="button button-gold" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#about">Meet the person <span aria-hidden="true">↗</span></a>
        </div>
        <a href="#about" className="scroll-cue"><span aria-hidden="true">↓</span> SCROLL TO DISCOVER</a>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img src={portrait} alt="Umama Abdul-Hamid Ahmed at a technology exhibition" width="720" height="1080" fetchPriority="high" />
          <div className="portrait-caption"><span>BASED IN ZANZIBAR</span><span>TANZANIA · EAST AFRICA</span></div>
        </div>
        <div className="portrait-note"><span aria-hidden="true">✧</span><span>Many passions.<br /><em>One purposeful journey.</em></span></div>
        <div className="portrait-side-label" aria-hidden="true">BUILDING. CREATING. BECOMING.</div>
      </div>
      <div className="identity-strip">
        <div><span className="identity-number">01</span><span>BUILD<small>Digital products &amp; software</small></span></div>
        <div><span className="identity-number">02</span><span>CREATE<small>Rihal &amp; Giftora</small></span></div>
        <div><span className="identity-number">03</span><span>THINK<small>Chess &amp; books</small></span></div>
        <div><span className="identity-number">04</span><span>GROW<small>People &amp; experiences</small></span></div>
      </div>
    </section>
  )
}

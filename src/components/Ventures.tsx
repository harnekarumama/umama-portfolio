import rihalLogo from '../public/me-img/rihal.jpeg'
import giftoraLogo from '../public/me-img/giftora.jpeg'

export function Ventures() {
  return (
    <section id="ventures" className="section ventures-section" aria-labelledby="ventures-title">
      <div className="container">
        <p className="eyebrow section-label"><span>06 / MY VENTURES</span><span>AN ENTREPRENEURIAL SPIRIT</span></p>
        <div className="section-heading">
          <h2 id="ventures-title">Not just building products.<br /><em>Building possibilities.</em></h2>
          <p>Technology is one part of what I build. Entrepreneurship is another. Small beginnings, with bigger things in mind.</p>
        </div>
        <div className="venture-grid">
          <article className="venture-card rihal">
            <span className="eyebrow">01 / FRAGRANCE &amp; IDENTITY</span>
            <div className="venture-brand"><img className="venture-logo" src={rihalLogo} alt="Rihal Fragrances logo" /><h3>Rihal<span>.</span></h3><small>A SCENT. A STORY. A FEELING.</small></div>
            <p>A fragrance venture shaped around creating a memorable brand — and an experience that stays with you.</p>
            <span className="venture-status"><span aria-hidden="true" /> A brand in the making</span>
            <a className="venture-instagram" href="https://www.instagram.com/rihalfragrances/" target="_blank" rel="noopener noreferrer">Instagram @rihalfragrances<span className="sr-only"> (opens in new tab)</span> <span aria-hidden="true">↗</span></a>
          </article>
          <article className="venture-card giftora">
            <span className="eyebrow">02 / GIFTING &amp; CREATIVITY</span>
            <div className="venture-brand"><img className="venture-logo" src={giftoraLogo} alt="Giftora Luxury Gifts logo" /><h3>Giftora<span>.</span></h3><small>THOUGHTFULLY WRAPPED. MEANINGFULLY GIVEN.</small></div>
            <p>Thoughtful gift packaging that turns an ordinary gift into something personal, creative, and a little more special.</p>
            <span className="venture-status"><span aria-hidden="true" /> A brand in the making</span>
            <a className="venture-instagram" href="https://www.instagram.com/giftora_tz/" target="_blank" rel="noopener noreferrer">Instagram @giftora_tz<span className="sr-only"> (opens in new tab)</span> <span aria-hidden="true">↗</span></a>
          </article>
        </div>
        <p className="section-footnote">Starting small. Thinking long-term. Building with purpose.</p>
      </div>
    </section>
  )
}

import speaking from '../assets/speaking.webp'
import travel from '../assets/travel.webp'

export function Beyond() {
  return (
    <section id="beyond" className="section beyond-section" aria-labelledby="beyond-title">
      <div className="container">
        <p className="eyebrow section-label"><span>08 / BEYOND THE SCREEN</span><span>THE PERSON BEHIND THE WORK</span></p>
        <div className="beyond-grid">
          <div>
            <h2 id="beyond-title">A curious mind.<br /><em>A full life.</em></h2>
            <p className="beyond-intro">The best ideas often come from having a life outside the screen. These are a few things that keep mine interesting.</p>
            <div className="interest-list">
              <div><span aria-hidden="true">♟</span><h3>Chess<small>Thinking a few moves ahead.</small></h3></div>
              <div><span aria-hidden="true">▤</span><h3>Books<small>New pages. New perspectives.</small></h3></div>
              <div><span aria-hidden="true">◎</span><h3>Fitness<small>Showing up. Getting stronger.</small></h3></div>
              <div><span aria-hidden="true">✧</span><h3>People &amp; experiences<small>A bigger world beyond the familiar.</small></h3></div>
            </div>
          </div>
          <div className="life-collage">
            <figure className="life-photo photo-speaking"><img src={speaking} alt="Umama speaking into a microphone at a professional event" width="700" height="930" loading="lazy" /><figcaption>Sharing ideas.</figcaption></figure>
            <figure className="life-photo photo-travel"><img src={travel} alt="Umama visiting the Eiffel Tower in Paris" width="700" height="656" loading="lazy" /><figcaption>Collecting perspectives.</figcaption></figure>
            <span className="collage-star" aria-hidden="true">✳</span>
          </div>
        </div>
        <div className="vision-note"><span className="eyebrow">THE BIGGER PICTURE</span><blockquote>“I don't want to be defined by one title.<br />I want to keep <em>learning, building, creating, and growing.</em>”</blockquote><p>This is a snapshot of where I am. I'm much more interested in what comes next.</p></div>
      </div>
    </section>
  )
}

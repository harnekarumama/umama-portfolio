import community from '../assets/community.webp'
import cv from '../../Umama_Abdul-Hamid_Ahmed_CV.md?url'

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <p className="eyebrow section-label"><span>01 / ABOUT ME</span><span>A LITTLE CONTEXT</span></p>
        <div className="about-grid">
          <div>
            <h2 id="about-title">More than a title.<br /><em>A builder at heart.</em></h2>
            <figure className="about-photo">
              <img src={community} alt="Umama working with children during an educational outreach visit" width="900" height="600" loading="lazy" />
              <figcaption>Good technology starts with understanding people.</figcaption>
            </figure>
          </div>
          <div className="about-copy">
            <p className="lead">I like taking an idea from an early thought, shaping it into something useful, and seeing it become real.</p>
            <p>My work lives at the intersection of frontend development, UI/UX design, and project management. Since 2022, I've helped deliver learning platforms, organizational websites, and digital products at HM&amp;Y Technologies in Zanzibar.</p>
            <p>I'm a final-year BSc Computer Science student at the State University of Zanzibar, with my capstone completed and results pending. Beyond the screen, I'm building my own ventures and staying curious about what comes next.</p>
            <div className="about-stats">
              <div><strong>4<span>+</span></strong><small>Years of practical experience</small></div>
              <div><strong>3</strong><small>Languages in Edugamez Kids</small></div>
              <div><strong>∞</strong><small>Curiosity to keep growing</small></div>
            </div>
            <div className="skill-tags" aria-label="Skills">{['React', 'Svelte', 'TypeScript', 'Tailwind CSS', 'Figma', 'Scrum'].map(skill => <span key={skill}>{skill}</span>)}</div>
            <a href={cv} download="Umama_Abdul-Hamid_Ahmed_CV.md" className="text-link">Download my CV <span aria-hidden="true">↓</span><small>MARKDOWN</small></a>
          </div>
        </div>
      </div>
    </section>
  )
}

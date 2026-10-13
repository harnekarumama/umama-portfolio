import { experience, highlights, skills } from '../data/cv'

export function Experience() {
  return (
    <>
      <section id="expertise" className="section expertise-section" aria-labelledby="expertise-title">
        <div className="container">
          <p className="eyebrow section-label"><span>02 / MY TOOLKIT</span><span>DESIGN IT. BUILD IT. SHIP IT.</span></p>
          <div className="section-heading">
            <h2 id="expertise-title">Technical by craft.<br /><em>Human by design.</em></h2>
            <p>From component-based interfaces to cross-functional delivery: the skills that turn a good idea into a working product.</p>
          </div>
          <div className="expertise-grid">
            {skills.map(skill => <article key={skill.name} className="expertise-card"><span className="skill-code" aria-hidden="true">{skill.code}</span><h3>{skill.name}</h3><p>{skill.text}</p></article>)}
          </div>
        </div>
      </section>
      <section id="experience" className="section experience-section" aria-labelledby="experience-title">
        <div className="container">
          <p className="eyebrow section-label"><span>03 / PROFESSIONAL EXPERIENCE</span><span>FROM PLANNING THROUGH DELIVERY</span></p>
          <div className="experience-layout">
            <div className="experience-intro">
              <span className="experience-date">{experience.period}</span>
              <h2 id="experience-title">{experience.company}</h2>
              <p className="experience-role">{experience.role}</p>
              <p className="experience-location">{experience.location}</p>
              <div className="experience-contributions"><span className="eyebrow">PROJECTS CONTRIBUTED TO & COORDINATED</span><p>{experience.contributions}</p></div>
            </div>
            <div className="experience-responsibilities">
              {experience.groups.map(group => <article key={group.title}><h3>{group.title}</h3><ul>{group.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}
            </div>
          </div>
          <div className="career-highlights">
            <div className="highlights-heading"><span className="eyebrow">CAREER HIGHLIGHTS</span><h3>Work that goes<br /><em>beyond the code.</em></h3></div>
            <ol>{highlights.map((point, index) => <li key={point}><span aria-hidden="true">0{index + 1}</span><p>{point}</p></li>)}</ol>
          </div>
        </div>
      </section>
    </>
  )
}

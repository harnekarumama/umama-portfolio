import { projects } from '../data/cv'

export function SelectedWork() {
  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="container">
        <p className="eyebrow section-label"><span>04 / PROJECT FILES</span><span>REAL PRODUCTS. REAL RESPONSIBILITY.</span></p>
        <div className="section-heading">
          <h2 id="work-title">From the first wireframe<br /><em>to the final release.</em></h2>
          <p>Educational platforms, public websites, a wedding planning system, and an international ride-booking product. The complete project story, not just the highlights.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.style}`} key={project.name}>
              <div className="project-banner">
                <span className="project-index">0{index + 1}</span>
                <div><span className="eyebrow">{project.category}</span><p>{project.tagline}</p></div>
                <span className="project-bracket" aria-hidden="true">{index < 3 ? '</>' : '{ }'}</span>
              </div>
              <div className="project-details">
                <h3>{project.name}</h3>
                <p className="project-role">{project.role}</p>
                <ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul>
                {project.url ? <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">Explore project <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a> : <span className="project-delivery">Delivered through HM&amp;Y Technologies</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

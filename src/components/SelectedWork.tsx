const projects = [
  { name: 'Edugamez', category: 'EDTECH · WEB, MOBILE & DASHBOARD', description: 'Making learning an experience, not just a lesson. An educational gaming platform built around play, progress, and possibility.', roles: 'Project management / Frontend / UI & UX', url: 'https://play.edugamez.org/', style: 'edugamez', subtitle: 'A little play. A lot of possibility.', symbol: '✳' },
  { name: 'HarusiHub', category: 'PRODUCT · WEDDING PLANNING', description: 'Bringing couples and wedding vendors together. A centralized planning platform for a more thoughtful wedding journey in Zanzibar.', roles: 'Project leadership / Development', url: 'https://github.com/harnekarumama/harusiHub', style: 'harusihub', subtitle: 'Your forever, beautifully planned.', symbol: '✧' },
  { name: 'STCDA', category: 'INSTITUTIONAL · WEBSITE', description: 'A clear, accessible digital home for the Stone Town Conservation and Development Authority, connecting heritage with a modern experience.', roles: 'Frontend development / UI & UX', url: 'https://stcda.go.tz/', style: 'stcda', subtitle: 'Preserving heritage. Connecting people.', symbol: '⌑' },
  { name: 'Edugamez Kids', category: 'EDTECH · MULTILINGUAL PLATFORM', description: 'Big discoveries for little learners. Kid-friendly games in English, Kiswahili, and Arabic, designed for an engaging early-learning experience.', roles: 'Frontend / UI & UX / Project management', url: 'https://kids.edugamez.org/', style: 'kids', subtitle: 'Small steps. Bright beginnings.', symbol: '✿' },
]

export function SelectedWork() {
  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="container">
        <p className="eyebrow section-label"><span>02 / SELECTED WORK</span><span>IDEAS, BROUGHT TO LIFE</span></p>
        <div className="section-heading">
          <h2 id="work-title">Built with intention.<br /><em>Made for people.</em></h2>
          <p>A selection of products and experiences I've helped shape — from the first wireframe to the final delivery.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a className="project-card" key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} (opens in a new tab)`}>
              <div className={`project-cover ${project.style}`}>
                <div className="cover-top"><span>SELECTED PROJECT / 0{index + 1}</span><span aria-hidden="true">↗</span></div>
                <span className="cover-symbol" aria-hidden="true">{project.symbol}</span>
                <strong>{project.name}</strong>
                <span className="cover-subtitle">{project.subtitle}</span>
                <span className="cover-bottom">DESIGN MEETS PURPOSE</span>
              </div>
              <div className="project-details">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.name}<span aria-hidden="true">↗</span></h3>
                <p>{project.description}</p>
                <small>{project.roles}</small>
              </div>
            </a>
          ))}
        </div>
        <div className="other-work">
          <span className="eyebrow">ALSO PART OF MY JOURNEY</span>
          <a href="https://www.zncc.or.tz/" target="_blank" rel="noopener noreferrer">ZNCC website <span aria-hidden="true">↗</span></a>
          <span>Notteco Renewal <small>Japan · Project coordination</small></span>
          <span>Office of the Chief Mufti <small>Frontend &amp; UI/UX</small></span>
        </div>
      </div>
    </section>
  )
}

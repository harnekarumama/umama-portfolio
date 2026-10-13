import { awards, education, languages, references, regionalExposure } from '../data/cv'

export function Credentials() {
  return (
    <section id="credentials" className="section credentials-section" aria-labelledby="credentials-title">
      <div className="container">
        <p className="eyebrow section-label"><span>07 / EDUCATION & CREDENTIALS</span><span>ALWAYS A STUDENT OF SOMETHING</span></p>
        <div className="section-heading"><h2 id="credentials-title">A foundation of learning.<br /><em>A habit of growing.</em></h2><p>Academic milestones, professional training, and experiences that shape how I work.</p></div>
        <div className="credentials-grid">
          <div className="education-column">
            <h3 className="credential-heading">Education</h3>
            <div className="education-timeline">{education.map(item => <article key={item.qualification}><span className="education-date">{item.period}</span><h4>{item.qualification}</h4><p>{item.school}</p>{item.point && <p className="education-note">{item.point}</p>}</article>)}</div>
          </div>
          <div className="awards-column">
            <h3 className="credential-heading">Awards, training & activities</h3>
            <ul className="awards-list">{awards.map(award => <li key={award}><span aria-hidden="true">✧</span><p>{award}</p></li>)}</ul>
          </div>
        </div>
        <div className="global-grid">
          <article><h3 className="credential-heading">Languages</h3><dl className="language-list">{languages.map(([name, level]) => <div key={name}><dt>{name}</dt><dd>{level}</dd></div>)}</dl></article>
          <article className="regional-card"><span className="eyebrow">LOCAL ROOTS. GLOBAL PERSPECTIVE.</span><h3>Regional exposure</h3><p>{regionalExposure}</p><div className="region-tags">{['Zanzibar', 'Japan · Project exposure', 'Tanzania', 'UAE', 'Oman', 'India'].map(region => <span key={region}>{region}</span>)}</div></article>
        </div>
        <div className="references-block"><h3 className="credential-heading">References</h3><div className="reference-grid">{references.map(reference => <article key={reference.name}><h4>{reference.name}</h4><p>{reference.role}</p><p className="reference-phone">Phone: {reference.phone}</p></article>)}</div></div>
      </div>
    </section>
  )
}

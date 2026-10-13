export function Footer() {
  return (
    <footer className="site-footer container">
      <div><a href="#home" className="wordmark" aria-label="Umama back to top">umama<span>.</span></a><p>Built with intention. Always becoming.</p></div>
      <span>© {new Date().getFullYear()} Umama Abdul-Hamid Ahmed</span>
      <a className="back-to-top" href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a>
    </footer>
  )
}

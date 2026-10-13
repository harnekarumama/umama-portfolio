export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <div><a href="#home" className="wordmark" aria-label="Umama back to top">umama<span>.</span></a><p>Built with intention. Always becoming.</p></div>
        <div className="footer-contacts" role="group" aria-label="Contact details">
          <a href="mailto:harnekarumama110@gmail.com"><span>Email</span>harnekarumama110@gmail.com <span aria-hidden="true">↗</span></a>
          <div><span>LinkedIn</span>Umama Harnekar</div>
          <div><span>Instagram</span><small>Profile link pending</small></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Umama Abdul-Hamid Ahmed</span>
        <a className="back-to-top" href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}

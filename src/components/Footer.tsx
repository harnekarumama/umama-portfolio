export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <div>
          <a href="#home" className="wordmark" aria-label="Umama back to top">
            Umama Harnekar
          </a>
          <p>Built with intention. Always becoming.</p>
        </div>
        <div
          className="footer-contacts"
          role="group"
          aria-label="Contact details"
        >
          <a href="mailto:harnekarumama110@gmail.com">
            <span>Email</span>harnekarumama110@gmail.com{" "}
            <span aria-hidden="true">↗</span>
          </a>
          <div>
            <span>LinkedIn</span>Umama Harnekar
          </div>
          <a
            href="https://www.instagram.com/umili__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Instagram</span>@umili__
            <span className="sr-only"> (opens in new tab)</span>{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        {/* <a href="mailto:harnekarumama110@gmail.com">
          harnekarumama110@gmail.com
        </a> */}
        <span>© {new Date().getFullYear()} Umama Harnekar</span>
        <a className="back-to-top" href="#home">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

import { useState } from 'react'

const navigation = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Ventures', '#ventures'],
  ['Beyond code', '#beyond'],
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="wordmark" aria-label="Umama home">umama<span>.</span></a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '+'}</span>
        </button>
        <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  )
}

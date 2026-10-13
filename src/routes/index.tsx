import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { SelectedWork } from '../components/SelectedWork'
import { Ventures } from '../components/Ventures'
import { Beyond } from '../components/Beyond'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <SelectedWork />
        <Ventures />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

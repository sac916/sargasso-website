import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.classList.add('loaded')
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: Array.from({ length: 101 }, (_, i) => i / 100)
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.target.classList.contains('hero-section')) {
          const scrollRatio = 1 - entry.intersectionRatio
          const heroElement = entry.target as HTMLElement
          const mediaElement = heroElement.querySelector('.hero-media') as HTMLElement
          const contentElement = heroElement.querySelector('.content') as HTMLElement

          heroElement.style.setProperty('--scroll-progress', scrollRatio.toString())

          if (mediaElement) {
            const mediaOpacity = Math.max(0, 1 - scrollRatio * 1.5)
            mediaElement.style.opacity = mediaOpacity.toString()
          }

          if (contentElement) {
            const contentOpacity = Math.max(0, 1 - scrollRatio * 1.8)
            const translateY = scrollRatio * 100
            contentElement.style.opacity = contentOpacity.toString()
            contentElement.style.transform = `translateY(-${translateY}px)`
          }
        } else {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    const depthSections = document.querySelectorAll('.depth-section')
    depthSections.forEach(section => observer.observe(section))

    const expertiseItems = document.querySelectorAll('.expertise-item')
    expertiseItems.forEach(item => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="page-wrapper">
      <div ref={heroRef} className="container hero-section">
        <div className="hero-media">
          <div className="ocean-overlay"></div>
        </div>
        <main className="content">
          <div className="header-section">
            <h1 className="company-name">Sargasso</h1>
            <div className="divider"></div>
            <p className="tagline">AI Technology Consulting</p>
          </div>
          <p className="description">
            Navigating the depths of artificial intelligence to deliver strategic solutions
          </p>
          <div className="contact">
            <a href="mailto:contact@sargasso.ai" className="contact-btn">Get in Touch</a>
          </div>
        </main>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>

      <section className="depth-section depth-1">
        <div className="sargassum-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="depth-content">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item depth-near">
              <h3>Strategy</h3>
              <p>AI transformation roadmaps and implementation</p>
            </div>
            <div className="expertise-item depth-mid">
              <h3>Engineering</h3>
              <p>Custom AI solutions and system architecture</p>
            </div>
            <div className="expertise-item depth-far">
              <h3>Integration</h3>
              <p>Seamless deployment into existing workflows</p>
            </div>
            <div className="expertise-item depth-mid">
              <h3>Research</h3>
              <p>Cutting-edge AI research and development</p>
            </div>
            <div className="expertise-item depth-near">
              <h3>Training</h3>
              <p>Team enablement and knowledge transfer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="depth-section depth-2">
        <div className="deep-creatures">
          <img
            src="/Colobonema_sericeum_D0992_01_1150.png"
            alt="Deep sea jellyfish"
            className="creature creature-1"
          />
          <img
            src="/Helicocranchia_sp._D1045_01_1150.png"
            alt="Deep sea squid"
            className="creature creature-2"
          />
          <img
            src="/Crossota_millsae_D0613_01_1150.png"
            alt="Crossota jellyfish"
            className="creature creature-4"
          />
        </div>
        <div className="depth-content">
          <h2>Dive Deeper</h2>
          <p className="depth-description">
            We explore uncharted territories in artificial intelligence,
            uncovering insights that drive meaningful transformation.
          </p>
        </div>
      </section>

      <footer className="footer depth-footer">
        <p>&copy; {new Date().getFullYear()} Sargasso, LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

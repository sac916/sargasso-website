import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        const scrollPosition = window.scrollY
        const heroHeight = heroSection.clientHeight
        const opacity = Math.max(0, 1 - (scrollPosition / heroHeight) * 1.5)
        heroSection.style.opacity = opacity.toString()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-wrapper">
      <div className="container hero-section">
        <div className="ocean-overlay"></div>
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

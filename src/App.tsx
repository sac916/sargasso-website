import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

function App() {
  useEffect(() => {
    document.body.classList.add('loaded')
  }, [])

  const { scrollYProgress } = useScroll()
  
  // Hero parallax animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])

  // Expertise grid stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 20 
      }
    }
  }

  return (
    <div className="page-wrapper">
      <motion.div 
        className="container hero-section"
        style={{ opacity: heroOpacity, y: heroY }}
      >
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
            <a href="mailto:contact@sargasso.ai" className="contact-btn">Let's Talk Strategy</a>
          </div>
        </main>
      </motion.div>

      <motion.section 
        className="depth-section depth-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
          <motion.div 
            className="expertise-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="expertise-item depth-near" variants={itemVariants}>
              <h3>Strategy</h3>
              <p>AI transformation roadmaps and implementation</p>
            </motion.div>
            <motion.div className="expertise-item depth-mid" variants={itemVariants}>
              <h3>Engineering</h3>
              <p>Custom AI solutions and system architecture</p>
            </motion.div>
            <motion.div className="expertise-item depth-far" variants={itemVariants}>
              <h3>Integration</h3>
              <p>Seamless deployment into existing workflows</p>
            </motion.div>
            <motion.div className="expertise-item depth-mid" variants={itemVariants}>
              <h3>Research</h3>
              <p>Cutting-edge AI research and development</p>
            </motion.div>
            <motion.div className="expertise-item depth-near" variants={itemVariants}>
              <h3>Training</h3>
              <p>Team enablement and knowledge transfer</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="depth-section depth-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
            The most transformative opportunities rarely announce themselves.
            They drift at the edges of what's known, waiting to be recognized.
            We specialize in finding what others haven't thought to look for.
          </p>
        </div>
      </motion.section>

      <footer className="footer depth-footer">
        <p>&copy; {new Date().getFullYear()} Sargasso, LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

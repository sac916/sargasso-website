import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

function App() {
  useEffect(() => {
    document.body.classList.add('loaded')
    document.body.classList.remove('v1', 'v2')
    document.body.classList.add('v3')
  }, [])

  const { scrollYProgress } = useScroll()
  
  // Hero parallax animations (for Classic and Deep Redesign variants)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -50])

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  }

  return (
    <div className="page-wrapper variant-3">
      <div className="deep-redesign-layout">
          {/* Parallax hero section in the deep */}
          <motion.div 
            className="hero-section-deep"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            {/* Seaweed Background */}
            <div className="hero-bg-deep">
              <div className="hero-art-bg-deep"></div>
              <div className="ocean-depth-overlay-deep"></div>
            </div>
            
            <div className="sargassum-particles-deep">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="particle-deep"></div>
              ))}
            </div>

            <header className="site-header-deep">
              <div className="header-container-deep">
                <span className="logo-text-deep">Sargasso</span>
                <nav className="main-nav-deep">
                  <a href="#outcomes-d">Systems</a>
                  <a href="#cases-d">Proven</a>
                  <a href="mailto:contact@sargassoai.com" className="nav-cta-deep">Get Started</a>
                </nav>
              </div>
            </header>

            <div className="hero-content-deep">
              <span className="hero-badge-deep">AI Consulting & Systems</span>
              <h1 className="hero-title-deep">
                AI and web systems for businesses that <span className="highlight-text-deep">can't afford to get it wrong.</span>
              </h1>
              <p className="hero-subtitle-deep">
                Sargasso is a Beaufort-based AI systems firm. We build the websites, automation, and AI tools local businesses need to run leaner — and we operate them, not just hand them over. Map first. Build second.
              </p>
              <div className="hero-actions-deep">
                <a href="#cases-d" className="btn-primary-deep">See the Work</a>
                <a href="mailto:contact@sargassoai.com" className="btn-secondary-deep">Talk Strategy ↗</a>
              </div>
              <div className="scroll-hint-deep">
                <span>Scroll to dive deeper</span>
                <div className="scroll-arrow-deep">↓</div>
              </div>
            </div>
          </motion.div>

          {/* Depth 1: The Descent (Manifesto) */}
          <motion.section
            id="manifesto-d"
            className="depth-section-deep depth-manifesto-deep"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="depth-container-deep">
              <span className="section-index-deep">01 / How We Work (Descent)</span>
              <h2 className="manifesto-heading-deep">
                A website or a chatbot bolted onto a broken process is still a broken process.
              </h2>
              <div className="manifesto-grid-deep">
                <div className="manifesto-col-deep">
                  <p className="manifesto-lead-deep">
                    Most "AI for your business" offers start with the tool, not your operation.
                  </p>
                  <p className="manifesto-text-deep">
                    A new website that nobody updates. A chatbot that doesn't know your inventory. An automation that breaks the first time a customer does something unexpected. Off-the-shelf tools solve generic problems — your business doesn't have a generic problem.
                  </p>
                </div>
                <div className="manifesto-col-deep">
                  <p className="manifesto-text-deep">
                    Sargasso starts by mapping how your business actually runs — what's manual, what's duplicated, what a customer actually experiences — then builds the website, integration, or automation that fits it. Built to be operated, not abandoned after launch.
                  </p>
                  <p className="manifesto-quote-deep">
                    "Automating the wrong process faster isn't a win. We map what's actually happening first."
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Depth 2: The Midwater (Outcomes Grid replacing the old bubbles) */}
          <motion.section 
            id="outcomes-d"
            className="depth-section-deep depth-outcomes-deep"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Drifting creatures in outcomes section background */}
            <div className="deep-creatures-deep">
              <img
                src="/Helicocranchia_sp._D1045_01_1150.png"
                alt="Deep sea squid"
                className="creature-deep creature-squid-deep"
              />
              <img
                src="/Crossota_millsae_D0613_01_1150.png"
                alt="Crossota jellyfish"
                className="creature-deep creature-crossota-deep"
              />
            </div>

            <div className="depth-container-deep">
              <span className="section-index-deep">02 / The Architecture (Midwater)</span>
              <h2 className="section-title-deep">Engineered for Resilience</h2>
              <p className="section-subtitle-deep">
                We do not sell self-service templates or software tools. We deliver custom websites, integrations, and automation built for how your business actually runs.
              </p>

              <motion.div
                className="outcomes-grid-deep"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div variants={itemVariants} className="outcome-card-deep">
                  <span className="card-number-deep">01</span>
                  <h3>Website Design & Development</h3>
                  <p>Fast, modern sites built to actually convert visitors into calls and leads — not templates nobody maintains after launch.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="outcome-card-deep">
                  <span className="card-number-deep">02</span>
                  <h3>Workflow & Systems Integration</h3>
                  <p>Turn manual data entry into autonomous background processes. Connect the tools you already use so data stops living in three places at once.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="outcome-card-deep">
                  <span className="card-number-deep">03</span>
                  <h3>AI Consulting & Strategy</h3>
                  <p>An honest read on where AI actually saves your business time and money — and where it doesn't. Grow capacity without adding headcount for every new task.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="outcome-card-deep">
                  <span className="card-number-deep">04</span>
                  <h3>Outcome Accountability</h3>
                  <p>No open-ended consulting cycles. We agree on the process metrics, build the integration, and manage the live operations.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="outcome-card-deep">
                  <span className="card-number-deep">05</span>
                  <h3>Data Handled Right</h3>
                  <p>Customer and business data kept out of public model training pools, with credential-safe routing and compliance records when your industry requires them.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="outcome-card-deep">
                  <span className="card-number-deep">06</span>
                  <h3>Fail-Safe Operations</h3>
                  <p>Built with automatic exception handling. If an automation hits an edge case, a human operator is notified immediately.</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Depth 3: The Abyss (Case Studies) */}
          <motion.section 
            id="cases-d"
            className="depth-section-deep depth-cases-deep"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Colobonema jellyfish drifting in case studies section */}
            <div className="deep-creatures-deep">
              <img
                src="/Colobonema_sericeum_D0992_01_1150.png"
                alt="Deep sea jellyfish"
                className="creature-deep creature-colobonema-deep"
              />
            </div>

            <div className="depth-container-deep">
              <span className="section-index-deep">03 / Proven in the Depths (Abyssal Zone)</span>
              <h2 className="section-title-deep">Case Studies & Deployments</h2>
              <p className="section-subtitle-deep">
                Real work, across different industries — not one template reused twice.
              </p>

              <div className="cases-list-deep">
                <div className="case-row-deep">
                  <div className="case-meta-deep">
                    <span className="case-client-deep">MFG Wealth Management</span>
                    <span className="case-industry-deep">Financial Services / RIA</span>
                    <span className="case-tag-deep">Full CRM Automation</span>
                  </div>
                  <div className="case-content-deep">
                    <h3>Custom Wealthbox CRM Integration & Briefing Agent</h3>
                    <p>
                      We built custom integrations automating client onboarding, annuity processing, lead scoring, and pre-meeting advisory briefings — a regulated industry with real compliance stakes, handled accordingly.
                    </p>
                    <ul className="case-metrics-deep">
                      <li><strong>85%</strong> reduction in manual onboarding data entry</li>
                      <li><strong>100%</strong> audit-compliant database logs</li>
                      <li>Advisors save <strong>4+ hours</strong> per week in meeting prep</li>
                    </ul>
                  </div>
                </div>

                <div className="case-row-deep">
                  <div className="case-meta-deep">
                    <span className="case-client-deep">CYB Farm</span>
                    <span className="case-industry-deep">Agriculture / Breed Registry</span>
                    <span className="case-tag-deep">Physical Ops Automation</span>
                  </div>
                  <div className="case-content-deep">
                    <h3>Voice-to-Registry Animal Record Automation</h3>
                    <p>
                      A high-stakes physical operations workflow where minor mistakes invalidate generational pedigree registries. We built a voice-driven ingestion pipeline converting field logs directly into official American Angus Association breed records, DNA tracking submissions, and Embryo Transfer filings.
                    </p>
                    <ul className="case-metrics-deep">
                      <li><strong>0%</strong> record error rate post-deployment</li>
                      <li><strong>100%</strong> hands-free operations in the field</li>
                      <li>Transferred enterprise software validation logic to mobile workers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Large Footer Quote Break */}
          <section className="quote-break-deep">
            <div className="quote-container-deep">
              <p className="manifesto-footer-quote-deep">
                "The world can't run on systems that fail."
              </p>
              <a href="mailto:contact@sargassoai.com" className="btn-cta-large-deep">Let's Build Compliant Systems</a>
            </div>
          </section>

          {/* Footer */}
          <footer className="site-footer-deep">
            <div className="footer-container-deep">
              <div className="footer-brand-deep">
                <h4>Sargasso, LLC</h4>
                <p>AI Technology Systems & Consulting · Beaufort, SC</p>
              </div>
              <div className="footer-meta-deep">
                <p>&copy; {new Date().getFullYear()} Sargasso, LLC. All rights reserved.</p>
                <p>Built with precision. Accountability first.</p>
              </div>
            </div>
          </footer>
      </div>
    </div>
  )
}

export default App

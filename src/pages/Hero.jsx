import { Link } from 'react-router-dom'

const experiences = [
  {
    role: 'Machine Learning Intern',
    company: 'FlyRank AI',
    period: '2026 — PRESENT',
    description: 'Building machine learning models, analyzing real-world datasets, and developing data-driven solutions for search ranking and content optimization.',
  },
  {
    role: 'Freelance Graphic Designer',
    company: 'Local Clients',
    period: '2024 — 2025',
    description: 'Designed promotional PDFs, advertisements, posters, and marketing materials for local businesses, delivering custom visual solutions based on client requirements.',
  },
]

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="section-label">Hello, I'm</span>
            <h1>Yashdeep</h1>
            <p className="hero-subtitle">
               AI & ML Enthusiast • Data Science Explorer • 2D & 3D Designer
            </p>
            <div className="hero-tagline">
           I specialize in building AI-powered applications, machine learning solutions, and modern web experiences that solve meaningful problems. Every project reflects a commitment to clean code, intuitive design, strong performance, and scalable architecture.            </div>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                View Projects
              </Link>
              <a href="/yashdeep.pdf" download className="btn" >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <span className="section-label">Experience</span>
          <h2>Where I've worked</h2>
          <div className="experience-list">
            {experiences.map((exp, i) => (
              <div key={i} className="experience-card">
                <div className="exp-period">{exp.period}</div>
                <div className="exp-info">
                  <h3>{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quick-links">
        <div className="container">
          <h2>Explore</h2>
          <div className="quick-grid">
            <Link to="/projects" className="quick-card">
              <svg className="quick-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              <h3>Projects</h3>
              <p>See what I've built</p>
            </Link>
            <Link to="/certifications" className="quick-card">
              <svg className="quick-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              <h3>Certifications</h3>
              <p>Credentials & badges</p>
            </Link>
            <Link to="/articles" className="quick-card">
              <svg className="quick-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              <h3>Articles</h3>
              <p>Thoughts & tutorials</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <span className="section-label">Contact</span>
          <h2>Let's connect</h2>
          <p className="contact-text">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
            Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:yashdeep7733@gmail.com" className="btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              yashdeep7733@gmail.com
            </a>
            <a href="https://github.com/yashdeep7733" target="_blank" rel="noopener noreferrer" className="btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yashdeep7733/" target="_blank" rel="noopener noreferrer" className="btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
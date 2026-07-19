import { Link } from 'react-router-dom'
import certifications from '../data/certifications'

export default function Certifications() {
  return (
    <section className="page-section">
      <div className="container">
        <span className="section-label">Credentials</span>
        <h2>Certifications</h2>
        <p className="page-subtitle">Professional certifications and badges I've earned.</p>
        <div className="grid-list">
          {certifications.map((cert) => (
            <Link to={`/certifications/${cert.id}`} key={cert.id} className="grid-card">
              <div className="grid-card-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="grid-card-body">
                <h3>{cert.title}</h3>
                <p>{cert.issuer} &middot; {cert.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
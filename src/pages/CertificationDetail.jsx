import { useParams, Link } from 'react-router-dom'
import certifications from '../data/certificationsfor'

export default function CertificationDetail() {
  const { id } = useParams()
  const cert = certifications.find((c) => c.id === id)

  if (!cert) {
    return (
      <section className="page-section">
        <div className="container">
          <h2>Certification not found</h2>
          <Link to="/certifications" className="btn" style={{ marginTop: 20, display: 'inline-block' }}>Back to certifications</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section">
      <div className="container detail-page">
        <Link to="/certifications" className="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to certifications
        </Link>
        <div className="detail-image" style={{ borderRadius: '0px' }}>
          <img src={cert.image} alt={cert.title} />
        </div>
        <h1>{cert.title}</h1>
        <p className="detail-subtitle">{cert.issuer} &middot; {cert.date}</p>
        <p className="detail-description">{cert.description}</p>
        <div className="detail-actions">
          {cert.credentialUrl && (
            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Credential
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
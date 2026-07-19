import { Link } from 'react-router-dom'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section className="page-section">
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h2>Projects</h2>
        <p className="page-subtitle">Things I've built, tinkered with, and shipped.</p>
        <div className="grid-list">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="grid-card">
              <div className="grid-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="grid-card-body">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <div className="grid-card-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
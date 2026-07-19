import { Link } from 'react-router-dom'
import articles from '../data/articles'

export default function Articles() {
  return (
    <section className="page-section">
      <div className="container">
        <span className="section-label">Writing</span>
        <h2>Articles</h2>
        <p className="page-subtitle">Thoughts, tutorials, and deep dives on tech.</p>
        <div className="grid-list">
          {articles.map((article) => (
            <Link to={`/articles/${article.id}`} key={article.id} className="grid-card">
              <div className="grid-card-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="grid-card-body">
                <div className="grid-card-meta">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
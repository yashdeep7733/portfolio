import { useParams, Link } from 'react-router-dom'
import articles from '../data/articlesfor'

export default function ArticleDetail() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === id)

  if (!article) {
    return (
      <section className="page-section">
        <div className="container">
          <h2>Article not found</h2>
          <Link to="/articles" className="btn" style={{ marginTop: 20, display: 'inline-block' }}>Back to articles</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section">
      <div className="container detail-page">
        <Link to="/articles" className="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to articles
        </Link>
        <div className="detail-image">
          <img src={article.image} alt={article.title} />
        </div>
        <h1>{article.title}</h1>
        <p className="detail-subtitle">{article.date} &middot; {article.readTime}</p>
        <p className="detail-description">{article.excerpt}</p>
      </div>
    </section>
  )
}
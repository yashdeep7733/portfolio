import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Certifications from './pages/Certifications'
import CertificationDetail from './pages/CertificationDetail'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import './App.css'

export default function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/certifications/:id" element={<CertificationDetail />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Route>
    </Routes>
    </>
  )
}
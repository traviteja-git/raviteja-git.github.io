import React from 'react';
import { Fade } from 'react-reveal';
import { localArticles } from '../../articles';
import './Articles.scss';

export default function ArticlesList() {
  return (
    <Fade bottom duration={800} distance="20px">
      <div className="articles-wrapper">
        <h1 className="articles-title">Articles</h1>
        <p className="articles-subtitle">Additional in‑repo articles (separate from Medium blogs).</p>
        <div className="articles-grid">
          {localArticles.map(a => (
            <a key={a.slug} href={`/articles/${a.slug}`} className="article-card">
              <h3>{a.title}</h3>
              <p className="desc">{a.description}</p>
              <span className="meta">{a.date}</span>
            </a>
          ))}
        </div>
      </div>
    </Fade>
  );
}

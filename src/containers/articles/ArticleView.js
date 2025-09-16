import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useParams, Link } from 'react-router-dom';
import { localArticles } from '../../articles';
// Import images used in articles so bundler includes them
// We will dynamically resolve images instead of enumerating imports.
import './Articles.scss';

export default function ArticleView() {
  const { slug } = useParams();
  const meta = localArticles.find(a => a.slug === slug);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!meta) {
      setError('Article not found');
      return;
    }
    meta
      .importPath()
      .then(mod => fetch(mod.default))
      .then(r => r.text())
      .then(txt => {
        const cleaned = txt.replace(/^---[\s\S]*?---/, '').trim();
        setContent(cleaned);
      })
      .catch(() => setError('Failed to load article'));
  }, [meta]);

  // Dynamic resolver: gather all images under assets/images/articles recursively.
  // create-react-app supports require.context via webpack.
  let ctx;
  try {
    // eslint-disable-next-line global-require
    ctx = require.context('../../assets/images/articles', true, /\.(png|jpe?g|gif|svg)$/i);
  } catch (e) {
    ctx = null;
  }

  const resolveImage = (src) => {
    if (!src) return src;
    const cleaned = src.replace(/^\.\//, ''); // drop leading ./
    // We expect paths in markdown like ./assets/images/articles/airflow/XYZ.gif
    // Strip leading assets/ because our context root is assets/images/articles
    const withoutAssetsPrefix = cleaned.startsWith('assets/images/articles/')
      ? cleaned.replace('assets/images/articles/', '')
      : cleaned;
    if (ctx) {
      // Try exact match
      try {
        return ctx('./' + withoutAssetsPrefix.split('/').slice(1).join('/'));
      } catch (e) {
        // Fallback: try using last two segments (just filename)
        const parts = withoutAssetsPrefix.split('/');
        const file = parts[parts.length - 1];
        try {
          return ctx.keys().find(k => k.endsWith(file)) ? ctx(ctx.keys().find(k => k.endsWith(file))) : src;
        } catch (e2) {
          // ignore
        }
      }
    }
    // As last resort, return original (may be absolute URL)
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('[ArticleView] Unresolved image src:', src);
    }
    return src;
  };

  const markdownComponents = {
    img: ({ node, ...props }) => {
      const mapped = resolveImage(props.src);
      return <img {...props} src={mapped} alt={props.alt || ''} />;
    }
  };

  if (error) {
    return (
      <div className="article-container">
        <p>{error}</p>
        <Link to="/articles">Back to Articles</Link>
      </div>
    );
  }
  if (!meta) return null;
  return (
    <div className="article-container">
      <div className="article-header">
        <h1>{meta.title}</h1>
        <div className="article-meta">{meta.date}</div>
        <Link to="/articles" className="back-link">← All Articles</Link>
      </div>
      <div className="article-content">
  <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

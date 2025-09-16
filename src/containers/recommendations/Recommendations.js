import React, {useContext, useState, useMemo} from "react";
import {Fade} from "react-reveal";
import {recommendationsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./Recommendations.scss";

export default function Recommendations() {
  const {isDark} = useContext(StyleContext);
  const all =
    (recommendationsSection && recommendationsSection.recommendations) || [];
  const pageSize = 3;
  const [page, setPage] = useState(0); // zero based
  const pageCount = Math.ceil(all.length / pageSize);
  const pageItems = useMemo(
    () => all.slice(page * pageSize, page * pageSize + pageSize),
    [all, page]
  );
  const canPrev = page > 0;
  const canNext = page < pageCount - 1;
  if (!recommendationsSection || !recommendationsSection.display) return null;

  // Initial grid shows only first set; expanded items appear below in new row

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="recommendations">
        <h1 className="recommendations-title">
          {recommendationsSection.title}
        </h1>
        {recommendationsSection.subtitle && (
          <p
            className={
              isDark
                ? "dark-mode recommendations-subtitle"
                : "subTitle recommendations-subtitle"
            }
          >
            {recommendationsSection.subtitle}
          </p>
        )}
        <div className="recommendations-grid paged">
          {pageItems.map((r, i) => (
            <div key={i} className="recommendation-card">
              {r.avatar && (
                <img
                  src={require(`../../assets/images/${r.avatar}`)}
                  alt={r.name}
                  className="recommendation-avatar"
                  loading="lazy"
                />
              )}
              <blockquote className="recommendation-quote">
                “{r.quote}”
              </blockquote>
              <div className="recommendation-meta">
                <span className="recommendation-name">{r.name}</span>
                <span className="recommendation-role">
                  {r.title}
                  {r.company ? `, ${r.company}` : ""}
                </span>
                {r.relationship && (
                  <span className="recommendation-relationship">
                    {r.relationship}
                  </span>
                )}
                {r.date && (
                  <span className="recommendation-date">{r.date}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        {pageCount > 1 && (
          <div className="recommendations-pagination">
            <button
              type="button"
              className="nav-btn prev"
              disabled={!canPrev}
              onClick={() => canPrev && setPage(p => p - 1)}
              aria-label="Previous page"
            >
              ←
            </button>
            <div className="page-indicator" aria-live="polite">
              {page + 1} / {pageCount}
            </div>
            <button
              type="button"
              className="nav-btn next"
              disabled={!canNext}
              onClick={() => canNext && setPage(p => p + 1)}
              aria-label="Next page"
            >
              →
            </button>
          </div>
        )}
      </div>
    </Fade>
  );
}

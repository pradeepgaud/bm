import React, { useCallback, useEffect, useRef, useState } from "react";
import "./PortfolioPopup.css";

/* ─── default demo data (remove in production) ──────────────────── */
const DEMO_PROJECT = {
  name: "The Adwaith",
  category: "Luxury Real Estate",
  description:
    "A performance-focused digital marketing campaign that generated 300% more high-quality leads and improved conversions by 75% within 6 months.",
  preview: "#",
  caseStudy: "/case-study/adwaith",
  images: [
    "https://picsum.photos/800/1000?sig=5",
    "https://picsum.photos/800/1000?sig=6",
    "https://picsum.photos/800/1000?sig=7",
    "https://picsum.photos/800/1000?sig=8",
    "https://picsum.photos/800/1000?sig=9",
    "https://picsum.photos/800/1000?sig=10",
    "https://picsum.photos/800/1000?sig=11",
    "https://picsum.photos/800/1000?sig=12",
  ],
  impact: {
    value: "300%",
    label: "Increase in high-quality leads",
  },
  meta: {
    client: "The Adwaith",
    services: "Performance Marketing, Google Ads",
    industry: "Luxury Real Estate",
    team: "4 Specialists",
    duration: "May 2023 – Nov 2023",
    tools: ["Google Ads", "Google Analytics", "Looker Studio", "Hotjar"],
  },
  results: [
    {
      faIcon: "fa-bullseye",
      value: "300%",
      label: "Increase in",
      bold: "High-Quality Leads",
    },
    {
      faIcon: "fa-arrow-trend-up",
      value: "75%",
      label: "Improvement in",
      bold: "Conversions",
    },
    {
      faIcon: "fa-users",
      value: "40%",
      label: "Reduction in Cost",
      bold: "per Lead",
    },
    {
      faIcon: "fa-pen-ruler",
      value: "2.8x",
      label: "Increase in",
      bold: "ROI",
    },
  ],
};

/* meta row config */
const META_ROWS = [
  { key: "client", label: "Client", faIcon: "fa-user" },
  { key: "services", label: "Services", faIcon: "fa-briefcase" },
  { key: "industry", label: "Industry", faIcon: "fa-building" },
  { key: "team", label: "Team", faIcon: "fa-users" },
  { key: "duration", label: "Duration", faIcon: "fa-calendar" },
  { key: "tools", label: "Tools Used", faIcon: "fa-screwdriver-wrench" },
];

/* ─────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────────── */
const PortfolioPopup = ({ project = DEMO_PROJECT, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [imgFading, setImgFading] = useState(false);
  const thumbsRef = useRef(null);
  const THUMB_VISIBLE = 4;
  const totalImgs = project.images.length;

  /* Lock body scroll while open */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  /* Fade-swap image */
  const changeImg = useCallback(
    (idx) => {
      if (idx === activeImg) return;
      setImgFading(true);
      setTimeout(() => {
        setActiveImg(idx);
        setImgFading(false);
      }, 100);
    },
    [activeImg],
  );

  const goNext = () => changeImg((activeImg + 1) % totalImgs);
  const goPrev = () => changeImg((activeImg - 1 + totalImgs) % totalImgs);

  /* Scroll thumb strip */
  const scrollThumbs = () => {
    if (!thumbsRef.current) return;
    const isMobile = window.innerWidth <= 540;
    if (isMobile) thumbsRef.current.scrollLeft += 200;
    else thumbsRef.current.scrollTop += 200;
  };

  return (
    <div
      className="ppop-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div className="ppop-modal" onClick={(e) => e.stopPropagation()}>
        {/* ── Close button ── */}
        <button
          className="ppop-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>

        {/* ═══════════════════════════════════════════
            TOP ROW  —  Gallery  |  Info
            ═══════════════════════════════════════════ */}
        <div className="ppop-top">
          {/* ── GALLERY ── */}
          <div className="ppop-gallery">
            {/* Thumbnail strip */}
            <div className="ppop-thumbs" ref={thumbsRef}>
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`ppop-thumb${activeImg === idx ? " is-active" : ""}`}
                  onClick={() => changeImg(idx)}
                  onMouseEnter={() => changeImg(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View image ${idx + 1}`}
                  onKeyDown={(e) => e.key === "Enter" && changeImg(idx)}
                >
                  <img
                    src={img}
                    alt={`${project.name} – view ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}

              {totalImgs > THUMB_VISIBLE && (
                <div
                  className="ppop-thumb-more"
                  onClick={scrollThumbs}
                  role="button"
                  tabIndex={0}
                  aria-label="See more images"
                >
                  <i className="fa-solid fa-angle-down" aria-hidden="true" />
                  <span>
                    {activeImg + 1}/{totalImgs}
                  </span>
                </div>
              )}
            </div>

            {/* Main image area */}
            <div className="ppop-main-img">
              <img
                src={project.images[activeImg]}
                alt={`${project.name} – main view`}
                className={imgFading ? "is-loading" : ""}
                decoding="async"
              />

              {/* Prev / Next */}
              <div className="ppop-img-nav">
                <button
                  className="ppop-nav-btn"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  <i className="fa-solid fa-chevron-left" aria-hidden="true" />
                </button>
                <button
                  className="ppop-nav-btn"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  <i className="fa-solid fa-chevron-right" aria-hidden="true" />
                </button>
              </div>

              {/* Image counter */}
              <div className="ppop-img-counter" aria-live="polite">
                {activeImg + 1} / {totalImgs}
              </div>

              {/* Impact badge */}
              {project.impact && (
                <div className="ppop-impact">
                  <div className="ppop-impact-head">
                    <span className="ppop-impact-icon">
                      <i
                        className="fa-solid fa-arrow-trend-up"
                        aria-hidden="true"
                      />
                    </span>
                    Project Impact
                  </div>
                  <div className="ppop-impact-value">
                    {project.impact.value}
                  </div>
                  <div className="ppop-impact-label">
                    {project.impact.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── INFO PANEL ── */}
          <div className="ppop-info">
            {/* Category chip */}
            <div className="ppop-cat">
              <span className="ppop-cat-icon">
                <i className="fa-solid fa-building" aria-hidden="true" />
              </span>
              {project.category}
            </div>

            {/* Title */}
            <h3 className="ppop-title">{project.name}</h3>

            {/* Description */}
            <p className="ppop-desc">{project.description}</p>

            {/* CTA Buttons */}
            <div className="ppop-btns">
              <a
                href={project.preview}
                target="_blank"
                rel="noreferrer noopener"
                className="ppop-btn-live"
              >
                Live Preview
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                />
              </a>
              {project.caseStudy && (
                <a href={project.caseStudy} className="ppop-btn-case">
                  Case Study
                  <i className="fa-regular fa-file-lines" aria-hidden="true" />
                </a>
              )}
            </div>

            <div className="ppop-divider" />

            {/* Meta grid */}
            {project.meta && (
              <div className="ppop-meta-grid">
                {META_ROWS.map(({ key, label, faIcon }) => {
                  const val = project.meta[key];
                  if (!val) return null;
                  return (
                    <div className="ppop-meta-item" key={key}>
                      <div className="ppop-meta-label">
                        <span className="ppop-meta-icon">
                          <i
                            className={`fa-solid ${faIcon}`}
                            aria-hidden="true"
                          />
                        </span>
                        {label}
                      </div>
                      {key === "tools" ? (
                        <div className="ppop-tools">
                          {Array.isArray(val) &&
                            val.map((t) => (
                              <span key={t} className="ppop-tool-tag">
                                {t}
                              </span>
                            ))}
                        </div>
                      ) : (
                        <div className="ppop-meta-val">{val}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM  —  Key Results
            ═══════════════════════════════════════════ */}
        {project.results && project.results.length > 0 && (
          <div className="ppop-results">
            <p className="ppop-results-label">Key Results</p>
            <div className="ppop-results-grid">
              {project.results.map((r, i) => (
                <div className="ppop-result-item" key={i}>
                  <div className="ppop-result-icon" aria-hidden="true">
                    <i className={`fa-solid ${r.faIcon}`} />
                  </div>
                  <div>
                    <div className="ppop-result-value">{r.value}</div>
                    <div className="ppop-result-sub">
                      {r.label}
                      {r.bold && <strong>{r.bold}</strong>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPopup;

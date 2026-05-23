import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./Portfolio.css";

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    slug: "syrish-lucknowi",
    name: "Syrish Lucknowi",
    category: "Ethnic E-commerce",
    filterTag: "E-commerce",
    tags: ["UI/UX", "Shopify", "Premium"],
    description:
      "Full-funnel marketing approach that increased online revenue by 180% with a focus on conversion optimization and ethnic fashion brand identity.",
    client: "Syrish Lucknowi",
    services: "E-commerce Strategy, CRO, UI/UX",
    industry: "Fashion & Retail",
    team: "5 Specialists",
    duration: "Jan 2024 – Jun 2024",
    tools: ["Shopify", "Meta Ads", "Google Analytics", "Hotjar"],
    impact: { value: "180%", label: "Revenue Increase" },
    results: [
      { value: "180%", label: "Revenue Growth" },
      { value: "3.2x", label: "ROAS Achieved" },
      { value: "65%", label: "Cart Recovery" },
      { value: "4.8★", label: "Customer Rating" },
    ],
    preview: "#",
    caseStudy: "/case-study/syrish",
    images: [
      "https://picsum.photos/800/1000?sig=1",
      "https://picsum.photos/800/1000?sig=2",
      "https://picsum.photos/800/1000?sig=3",
    ],
  },
  {
    id: 2,
    slug: "the-adwaith",
    name: "The Adwaith",
    category: "Luxury Real Estate",
    filterTag: "Google Ads",
    tags: ["Google Ads", "Lead Gen", "CRO"],
    description:
      "A performance-focused digital marketing campaign that generated 300% more high-quality leads and improved conversions by 75% within 6 months.",
    client: "The Adwaith",
    services: "Performance Marketing, Google Ads",
    industry: "Luxury Real Estate",
    team: "4 Specialists",
    duration: "May 2023 – Nov 2023",
    tools: ["Google Ads", "Google Analytics", "Looker Studio", "Hotjar"],
    impact: { value: "300%", label: "Lead Increase" },
    results: [
      { value: "300%", label: "High-Quality Leads" },
      { value: "75%", label: "Conversion Uplift" },
      { value: "40%", label: "CPL Reduction" },
      { value: "2.8x", label: "ROI Increase" },
    ],
    preview: "#",
    caseStudy: "/case-study/adwaith",
    images: [
      "https://picsum.photos/800/1000?sig=5",
      "https://picsum.photos/800/1000?sig=6",
      "https://picsum.photos/800/1000?sig=7",
      "https://picsum.photos/800/1000?sig=8",
    ],
  },
  {
    id: 3,
    slug: "bikers-paradise",
    name: "Bikers Paradise",
    category: "Travel & Hospitality",
    filterTag: "Performance Marketing",
    tags: ["Meta Ads", "Google Ads", "Social"],
    description:
      "A digital marketing campaign that increased bookings by 150% through targeted Google Ads, social media strategy, and retargeting funnels.",
    client: "Bikers Paradise",
    services: "Performance Marketing, Social Media",
    industry: "Travel & Hospitality",
    team: "3 Specialists",
    duration: "Mar 2023 – Sep 2023",
    tools: ["Meta Ads", "Google Ads", "Buffer", "Canva"],
    impact: { value: "150%", label: "Booking Increase" },
    results: [
      { value: "150%", label: "Bookings Growth" },
      { value: "4.1x", label: "ROAS" },
      { value: "220%", label: "Organic Reach" },
      { value: "55%", label: "CPA Reduction" },
    ],
    preview: "#",
    caseStudy: null,
    images: [
      "https://picsum.photos/800/1000?sig=9",
      "https://picsum.photos/800/1000?sig=10",
    ],
  },
  {
    id: 4,
    slug: "blackgrape",
    name: "BlackGrape H",
    category: "Premium Leather",
    filterTag: "E-commerce",
    tags: ["E-comm", "SEO", "Branding"],
    description:
      "Performance-driven Google Ads strategy that boosted ROAS by 200% and scaled premium leather brand sales across key international markets.",
    client: "BlackGrape H",
    services: "Google Ads, SEO, Brand Strategy",
    industry: "Luxury Goods",
    team: "4 Specialists",
    duration: "Aug 2023 – Feb 2024",
    tools: ["Google Ads", "SEMrush", "Shopify", "Klaviyo"],
    impact: { value: "200%", label: "ROAS Growth" },
    results: [
      { value: "200%", label: "ROAS Improvement" },
      { value: "3.5x", label: "Revenue Scale" },
      { value: "90%", label: "Brand Visibility" },
      { value: "1.9x", label: "AOV Increase" },
    ],
    preview: "#",
    caseStudy: "/case-study/blackgrape",
    images: [
      "https://picsum.photos/800/1000?sig=11",
      "https://picsum.photos/800/1000?sig=12",
      "https://picsum.photos/800/1000?sig=13",
    ],
  },
  {
    id: 5,
    slug: "urban-haus",
    name: "Urban Haus",
    category: "Architecture Studio",
    filterTag: "Web Development",
    tags: ["Web Dev", "SEO", "Branding"],
    description:
      "Website development and SEO strategy that improved organic traffic by 200% in just 6 months with a complete visual identity overhaul.",
    client: "Urban Haus",
    services: "Web Development, SEO, Branding",
    industry: "Architecture & Design",
    team: "6 Specialists",
    duration: "Oct 2023 – Apr 2024",
    tools: ["React", "Next.js", "Figma", "Ahrefs"],
    impact: { value: "200%", label: "Organic Traffic" },
    results: [
      { value: "200%", label: "Organic Traffic" },
      { value: "#1", label: "Keyword Rankings" },
      { value: "3.4min", label: "Session Duration" },
      { value: "60%", label: "Bounce Rate Drop" },
    ],
    preview: "#",
    caseStudy: "/case-study/urban-haus",
    images: [
      "https://picsum.photos/800/1000?sig=14",
      "https://picsum.photos/800/1000?sig=15",
    ],
  },
  {
    id: 6,
    slug: "decorzy",
    name: "Decorzy",
    category: "Home Decor",
    filterTag: "Social Media",
    tags: ["Social Media", "Influencer", "Meta"],
    description:
      "Social media marketing that grew the brand community by 250% and increased engagement across platforms through influencer collaborations.",
    client: "Decorzy",
    services: "Social Media, Influencer Marketing",
    industry: "Home & Lifestyle",
    team: "3 Specialists",
    duration: "Feb 2024 – Jul 2024",
    tools: ["Meta Ads", "Instagram", "Canva", "Later"],
    impact: { value: "250%", label: "Community Growth" },
    results: [
      { value: "250%", label: "Follower Growth" },
      { value: "8.2%", label: "Engagement Rate" },
      { value: "180%", label: "Story Reach" },
      { value: "2.1x", label: "Sales from Social" },
    ],
    preview: "#",
    caseStudy: null,
    images: [
      "https://picsum.photos/800/1000?sig=16",
      "https://picsum.photos/800/1000?sig=17",
      "https://picsum.photos/800/1000?sig=18",
    ],
  },
];

const FILTERS = [
  "All Projects",
  "Google Ads",
  "Web Development",
  "Performance Marketing",
  "SEO",
  "Social Media",
  "Branding",
  "E-commerce",
];

/* ─────────────────────────────────────
   INLINE ICONS
───────────────────────────────────── */
const IcArrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const IcClose = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IcChevL = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IcChevR = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <polyline points="9 6 15 12 9 18" />
  </svg>
);
const IcExternal = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IcDoc = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
const IcTrend = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

/* ─────────────────────────────────────
   POPUP
───────────────────────────────────── */
function Popup({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setActiveImg((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setActiveImg((i) => Math.min(project.images.length - 1, i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, project.images.length]);

  return (
    <motion.div
      className="ptf-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} project details`}
    >
      <motion.div
        className="ptf-popup"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          className="ptf-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          <IcClose />
        </button>

        {/* ── BODY ── */}
        <div className="ptf-popup-body">
          {/* LEFT: Gallery */}
          <div className="ptf-gallery">
            {/* Thumbnails */}
            <div className="ptf-thumbs">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`ptf-thumb${activeImg === idx ? " active" : ""}`}
                  onClick={() => setActiveImg(idx)}
                  aria-label={`Image ${idx + 1}`}
                >
                  <img src={img} alt="" loading="lazy" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="ptf-main-img">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={project.images[activeImg]}
                  alt={`${project.name} view ${activeImg + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>

              {project.images.length > 1 && (
                <>
                  <button
                    className="ptf-nav ptf-nav--l"
                    onClick={() => setActiveImg((i) => Math.max(0, i - 1))}
                    disabled={activeImg === 0}
                    aria-label="Previous image"
                  >
                    <IcChevL />
                  </button>
                  <button
                    className="ptf-nav ptf-nav--r"
                    onClick={() =>
                      setActiveImg((i) =>
                        Math.min(project.images.length - 1, i + 1),
                      )
                    }
                    disabled={activeImg === project.images.length - 1}
                    aria-label="Next image"
                  >
                    <IcChevR />
                  </button>
                </>
              )}

              {/* Impact badge */}
              <div className="ptf-badge">
                <IcTrend />
                <div>
                  <b>{project.impact.value}</b>
                  <span>{project.impact.label}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Info */}
          <div className="ptf-info">
            <div className="ptf-info-cat">
              <span className="ptf-cat-line" />
              {project.category}
            </div>
            <h2 className="ptf-info-name">{project.name}</h2>
            <p className="ptf-info-desc">{project.description}</p>

            <div className="ptf-btns">
              <a
                href={project.preview}
                target="_blank"
                rel="noreferrer"
                className="ptf-btn-primary"
              >
                Live Preview <IcExternal />
              </a>
              {project.caseStudy && (
                <a href={project.caseStudy} className="ptf-btn-secondary">
                  Case Study <IcDoc />
                </a>
              )}
            </div>

            <div className="ptf-meta">
              {[
                { label: "Client", value: project.client },
                { label: "Services", value: project.services },
                { label: "Duration", value: project.duration },
                { label: "Team", value: project.team },
              ].map((m) => (
                <div key={m.label} className="ptf-meta-row">
                  <span className="ptf-meta-k">{m.label}</span>
                  <span className="ptf-meta-v">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="ptf-tools-row">
              <span className="ptf-tools-k">Tools Used</span>
              <div className="ptf-tools-tags">
                {project.tools.map((t) => (
                  <span key={t} className="ptf-tool">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RESULTS ── */}
        <div className="ptf-results">
          <span className="ptf-results-title">Key Results</span>
          <div className="ptf-results-row">
            {project.results.map((r, i) => (
              <div key={i} className="ptf-result">
                <div className="ptf-result-ic">
                  <IcTrend />
                </div>
                <strong>{r.value}</strong>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   CARD
───────────────────────────────────── */
function Card({ project, index, onOpen }) {
  return (
    <motion.article
      className="ptf-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={() => onOpen(project)}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      role="button"
      aria-label={`View ${project.name}`}
    >
      {/* Image */}
      <div className="ptf-card-img">
        <span className="ptf-card-num">0{index + 1}</span>
        <img src={project.images[0]} alt={project.name} loading="lazy" />
        <div className="ptf-card-img-overlay" aria-hidden="true" />
      </div>

      {/* Body */}
      <div className="ptf-card-body">
        <span className="ptf-card-cat">{project.category}</span>
        <h3 className="ptf-card-name">{project.name}</h3>
        <p className="ptf-card-desc">{project.description}</p>
        <div className="ptf-card-foot">
          <span className="ptf-card-cta">View Details</span>
          <div className="ptf-card-arr">
            <IcArrow />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────
   MAIN
───────────────────────────────────── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [popup, setPopup] = useState(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const filtered =
    activeFilter === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterTag === activeFilter);

  const openPopup = useCallback((p) => setPopup(p), []);
  const closePopup = useCallback(() => setPopup(null), []);

  return (
    <>
      <section
        className="ptf-section"
        id="portfolio"
        aria-label="Our Portfolio"
      >
        {/* ── Header ── */}
        <div className="ptf-header" ref={headerRef}>
          <motion.span
            className="ptf-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Our Work
          </motion.span>

          <motion.h2
            className="ptf-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Explore Our <span className="ptf-accent">Projects</span>
          </motion.h2>

          <motion.p
            className="ptf-subtext"
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Discover how we help brands grow, engage, and lead
            <br />
            through strategic digital marketing and creative solutions.
          </motion.p>
        </div>

        {/* ── Filters ── */}
        <motion.div
          className="ptf-filters"
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.35 }}
          role="tablist"
          aria-label="Filter by category"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={activeFilter === f}
              className={`ptf-filter${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* ── Grid ── */}
        <div className="ptf-grid" role="list">
          <AnimatePresence mode="wait">
            {filtered.map((p, i) => (
              <Card key={p.id} project={p} index={i} onOpen={openPopup} />
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <p className="ptf-empty">No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* ── Popup ── */}
      <AnimatePresence>
        {popup && <Popup project={popup} onClose={closePopup} />}
      </AnimatePresence>
    </>
  );
}

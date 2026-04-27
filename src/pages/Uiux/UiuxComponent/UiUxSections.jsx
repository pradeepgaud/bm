import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";

/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-user-check",
    num: "01",
    title: "Usability Audit",
    desc: "Identify usability issues and improve navigation, accessibility, and overall user experience.",
  },
  {
    fa: "fa-solid fa-sitemap",
    num: "02",
    title: "User Journey Audit",
    desc: "Analyze how users interact with your platform and optimize key paths for better engagement.",
  },
  {
    fa: "fa-solid fa-filter",
    num: "03",
    title: "Conversion Funnel Audit",
    desc: "Detect drop-offs in your funnel and optimize steps to increase conversions and reduce friction.",
  },
  {
    fa: "fa-solid fa-gauge-high",
    num: "04",
    title: "Performance UX Audit",
    desc: "Evaluate speed, responsiveness, and UX performance to deliver smoother user experiences.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-solid fa-user-group",
    title: "User Research",
    desc: "Understand user behavior, needs, and pain points through research and data insights.",
  },
  {
    fa: "fa-solid fa-route",
    title: "User Journey Mapping",
    desc: "Analyze how users navigate your platform and optimize each interaction point.",
  },
  {
    fa: "fa-solid fa-flask",
    title: "Usability Testing",
    desc: "Test real user interactions to identify usability issues and improve experience.",
  },
  {
    fa: "fa-solid fa-chart-simple",
    title: "Analytics & Insights",
    desc: "Track user behavior and performance data to make informed design decisions.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-user",
    title: "Understanding Your Users",
    desc: "We analyze your audience, behavior patterns, and business goals to identify key UX challenges.",
  },
  {
    num: "02",
    fa: "fa-solid fa-magnifying-glass-chart",
    title: "UX Research & Analysis",
    desc: "We evaluate your product using data, heatmaps, and user behavior insights to uncover issues.",
  },
  {
    num: "03",
    fa: "fa-solid fa-flask",
    title: "Usability Testing",
    desc: "We test real user interactions to identify friction points and usability gaps in your design.",
  },
  {
    num: "04",
    fa: "fa-solid fa-lightbulb",
    title: "Optimization Recommendations",
    desc: "We provide actionable design improvements to enhance user experience and conversions.",
  },
  {
    num: "05",
    fa: "fa-solid fa-chart-line",
    title: "Reporting & Improvements",
    desc: "We deliver detailed UX reports with insights and continuous improvement strategies.",
  },
];

/* ══════════════════════════════════════════
   SECTION 1 — Types of Websites
══════════════════════════════════════════ */
const WebDevTypes = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wds" ref={ref}>
      <div className="wds-container">
        <div className="wds-types-grid">
          {/* Left */}
          <div className="wds-types-left">
            <div className="wds-section-label">WHAT WE AUDIT</div>
            <h3 className="wds-types-heading">Types of UX Audits We Perform</h3>
            <p className="wds-types-desc">
              Every product has different user behavior and challenges — and
              that’s where most experiences fail. We analyze your platform in
              detail, then conduct targeted UI/UX audits to identify issues,
              improve usability, and maximize conversions.
            </p>

            {/* Decorative dot grid + arc */}
            <div className="wds-deco" aria-hidden="true">
              <svg
                width="240"
                height="190"
                viewBox="0 0 240 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="dotFade" cx="20%" cy="20%" r="80%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <mask id="gridMask">
                    <rect width="240" height="190" fill="url(#dotFade)" />
                  </mask>
                  <radialGradient id="glowDot" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Dot grid */}
                <g mask="url(#gridMask)">
                  {Array.from({ length: 10 }, (_, row) =>
                    Array.from({ length: 13 }, (_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 20 + 4}
                        cy={row * 20 + 4}
                        r="1.4"
                        fill="#f97316"
                        opacity="0.5"
                      />
                    )),
                  )}
                </g>

                {/* Arc curve */}
                <path
                  d="M 0 190 Q 180 150 230 20"
                  stroke="#f97316"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.45"
                  strokeLinecap="round"
                />

                {/* Glowing dot on arc */}
                <circle cx="205" cy="72" r="5" fill="#f97316" opacity="0.9" />
                <circle cx="205" cy="72" r="10" fill="#f97316" opacity="0.2" />
                <circle cx="205" cy="72" r="16" fill="#f97316" opacity="0.08" />
              </svg>
            </div>
          </div>

          {/* Right 2×2 cards */}
          <div className="wds-types-cards">
            {WEBSITE_TYPES.map((item, i) => (
              <div
                key={i}
                className={`wds-type-card${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <span className="wds-card-num">{item.num}</span>
                <div className="wds-card-icon">
                  <i className={item.fa} />
                </div>
                <h4 className="wds-card-title">{item.title}</h4>
                <p className="wds-card-desc">{item.desc}</p>
                <a href="#contact" className="wds-card-link">
                  Learn More <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 2 — Technologies We Use
══════════════════════════════════════════ */
const WebDevTech = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wdt" ref={ref}>
      <div className="wdt-container">
        <div className="wdt-grid">
          {/* Left */}
          <div className="wdt-left">
            <div className="wds-section-label">
              BUILT WITH UX INSIGHTS & TOOLS
            </div>
            <h3 className="wdt-heading">Tools & Methods We Use</h3>
            <p className="wdt-desc">
              We don’t rely on assumptions. We use proven UX research methods
              and industry tools to analyze user behavior, identify friction
              points, and optimize experiences for better engagement, usability,
              and conversions — aligned with your business goals.
            </p>
          </div>

          {/* Right tech cards */}
          <div className="wdt-cards">
            {TECHNOLOGIES.map((item, i) => (
              <div
                key={i}
                className={`wdt-card${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <div className="wdt-card-icon">
                  <i className={item.fa} />
                </div>
                <div className="wdt-card-content">
                  <h4 className="wdt-card-title">{item.title}</h4>
                  <p className="wdt-card-desc">{item.desc}</p>
                  <div className="wdt-card-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 3 — Web Development Process
══════════════════════════════════════════ */
const WebDevProcess = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wdp" ref={ref}>
      <div className="wdp-container">
        <div className="wdp-grid">
          {/* Left */}
          <div className="wdp-left">
            <div className="wds-section-label">OUR WORKFLOW</div>
            <h3 className="wdp-heading"> Our UX Audit Process</h3>
            <p className="wdp-desc">
              A great user experience is never accidental. We follow a
              structured, data-driven UX audit process to identify usability
              issues, improve user journeys, and maximize engagement,
              conversions, and overall performance.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Want to improve your UX?</h4>
                <p>
                  Let’s identify gaps and optimize your product for better UX
                  and conversions.
                </p>
                <a href="#contact" className="wdp-cta-btn">
                  Start Audit <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          {/* Right steps */}
          <div className="wdp-steps">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className={`wdp-step${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <div className="wdp-step-num">{step.num}</div>
                <div className="wdp-step-icon">
                  <i className={step.fa} />
                </div>
                <div className="wdp-step-body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   DEFAULT EXPORT — all three sections
══════════════════════════════════════════ */
const UiUxSections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default UiUxSections;

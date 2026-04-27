import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-user-check",
    title: "User-Centered Approach",
    desc: "Focused on real user behavior and experience, not just visuals.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Conversion-Focused Insights",
    desc: "Optimized to improve engagement, retention, and conversions.",
  },
  {
    fa: "fa-solid fa-database",
    title: "Data-Driven Analysis",
    desc: "Decisions backed by analytics, user data, and behavior insights.",
  },
  {
    fa: "fa-solid fa-route",
    title: "User Journey Optimization",
    desc: "We refine flows to make navigation smooth and intuitive.",
  },
  {
    fa: "fa-solid fa-file-lines",
    title: "Clear Actionable Reports",
    desc: "Easy-to-understand reports with practical improvement steps.",
  },
];

const ECOM_ALLOWS = [
  "Identify usability issues & friction points  ",
  "Improve user journeys & engagement  ",
  "Increase conversions & retention  ",
  "Enhance overall product experience ",
];

const ECOM_PROVIDES = [
  "Usability & UX analysis ",
  "User journey mapping",
  " Conversion optimization insights ",
  "Detailed audit reports & recommendations",
];

const PLATFORMS = [
  {
    fa: "fa-solid fa-user-check",
    title: "Usability Audit",
    sub: "BEST FOR",
    desc: "User experience & navigation issues",
  },
  {
    fa: "fa-solid fa-route",
    title: "User Journey Audit",
    sub: "BEST FOR",
    desc: "User flow & interaction optimization",
  },
  {
    fa: "fa-solid fa-filter",
    title: "Funnel Audit",
    sub: "BEST FOR",
    desc: "Conversion & drop-off improvements",
  },
  {
    fa: "fa-solid fa-gauge-high",
    title: "Performance UX Audit",
    sub: "BEST FOR",
    desc: "Speed, responsiveness & UX performance",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-magnifying-glass",
    q: "What is a UI/UX audit?",
    a: "A UI/UX audit is a detailed analysis of your website or app to identify usability issues, user journey gaps, and design problems that affect performance and conversions.",
  },
  {
    fa: "fa-solid fa-user-check",
    q: "How do I know if my product needs a UX audit?",
    a: "If users are dropping off, engagement is low, or conversions are not improving, it usually indicates UX issues that can be identified through an audit.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How long does a UI/UX audit take?",
    a: "The timeline depends on your product’s complexity, but most UX audits are completed within a few days to a couple of weeks.",
  },
  {
    fa: "fa-solid fa-file-lines",
    q: "What will I get after the audit?",
    a: "You will receive a detailed report with identified issues, actionable recommendations, and clear strategies to improve user experience and conversions.",
  },
];
/* ── shared intersection hook ── */
const useVisible = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
};

/* ══════════════════════════════════════════
   SECTION 1 — What Makes Our Websites Different
══════════════════════════════════════════ */
const WebDevDiff = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wde" ref={ref}>
      <div className="wde-container">
        <div className="wde-grid">
          {/* Left */}
          <div className="wde-left">
            <div className="wds-section-label">OUR APPROACH</div>
            <h3 className="wde-heading">
              What Makes Our UX Audits <span>Different?</span>
            </h3>
            <p className="wde-desc">
              Most designs look good — but don’t perform. We focus on usability.
              Our audits are built to improve user experience, increase
              engagement, and drive measurable conversions for your business.
            </p>
            <div className="wde-gradient-bar" />
          </div>

          {/* Right */}
          <div className="wde-right">
            <div className="wde-features">
              {DIFF_FEATURES.map((f, i) => (
                <div
                  key={i}
                  className={`wde-feat${visible ? " wde-anim" : ""}`}
                  style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
                >
                  <div className="wde-feat-icon">
                    <i className={f.fa} />
                  </div>
                  <div className="wde-feat-body">
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="wde-note">
              <div className="wde-note-icon">
                <i className="fa-solid fa-rocket" />
              </div>
              <p>
                If your UX is not optimized, <em>you're losing conversions.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 2 — E-commerce
══════════════════════════════════════════ */
const WebDevEcom = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wdec" ref={ref}>
      <div className="wdec-container">
        <div className="wdec-grid">
          {/* Left */}
          <div className="wdec-left">
            <div className="wds-section-label">GROW YOUR BUSINESS</div>
            <h3 className="wdec-heading">
              Do You Need
              <span> UI/UX Audit? </span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If your product is not delivering the expected results, poor user
              experience might be the reason — you're losing users and
              conversions. A UX audit helps you identify issues, improve
              usability, and create seamless experiences that drive real
              business growth.
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-circle-dot" />
              </div>
              <h4>
                UI/UX Audit <span>Allows You To:</span>
              </h4>
              <ul className="wdec-list">
                {ECOM_ALLOWS.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-arrow-right" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.2s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-gift" />
              </div>
              <h4>We Provide:</h4>
              <ul className="wdec-list wdec-list--dot">
                {ECOM_PROVIDES.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-circle" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 3 — Which Platform is Best
   Desktop: Left sticky col | Right 2×2 grid + full-width note
   Mobile: stacked single col
══════════════════════════════════════════ */
const WebDevPlatform = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wdpl" ref={ref}>
      <div className="wdpl-container">
        <div className="wdpl-grid">
          {/* Left */}
          <div className="wdpl-left">
            <div className="wds-section-label">CHOOSE WHAT’S RIGHT</div>
            <h3 className="wdpl-heading">
              Which UX Audit is <span>Best</span> for You?
            </h3>
            <p className="wdpl-desc">
              Every product has different user behavior and challenges. Choosing
              the right UX audit is crucial — selecting the wrong approach can
              miss key issues. We help you choose the right audit method for
              maximum impact and better results.
            </p>
          </div>

          {/* Right — 2×2 grid + full-width note below */}
          <div className="wdpl-right">
            <div className="wdpl-cards">
              {PLATFORMS.map((p, i) => (
                <div
                  key={i}
                  className={`wdpl-card${visible ? " wde-anim" : ""}`}
                  style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
                >
                  {/* Icon + text */}
                  <div className="wdpl-card-inner">
                    <div className="wdpl-card-icon">
                      <i className={p.fa} />
                    </div>
                    <div className="wdpl-card-body">
                      <h5>{p.title}</h5>
                      <span className="wdpl-sub">{p.sub}</span>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="wdpl-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              ))}
            </div>

            {/* Full-width note below the 2×2 grid */}
            <div
              className={`wdpl-note${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.45s" } : {}}
            >
              <div className="wdpl-note-icon">
                <i className="fa-solid fa-lightbulb" />
              </div>
              <p>
                The right UX audit depends on your product — and we help you
                choose the best approach from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 4 — FAQ (DARK accordion)
══════════════════════════════════════════ */
const WebDevFaq = () => {
  const [ref, visible] = useVisible(0.08);
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="wdfq" ref={ref}>
      <div className="wdfq-container">
        <div className="wds-section-label">QUESTIONS? WE'VE GOT ANSWERS</div>
        <h3 className="wdfq-heading">Frequently Asked Questions</h3>

        <div className="wdfq-list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`wdfq-item${open === i ? " open" : ""}${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              onClick={() => toggle(i)}
            >
              <div className="wdfq-q">
                <div className="wdfq-icon">
                  <i className={faq.fa} />
                </div>
                <span>{faq.q}</span>
                <div className="wdfq-plus">
                  <i
                    className={`fa-solid ${open === i ? "fa-minus" : "fa-plus"}`}
                  />
                </div>
              </div>
              {open === i && (
                <div className="wdfq-a">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   DEFAULT EXPORT
══════════════════════════════════════════ */
const UiUxExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default UiUxExtra;

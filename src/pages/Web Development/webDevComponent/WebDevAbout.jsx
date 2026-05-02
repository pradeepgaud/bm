import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./webdev-about.css";

const NAV = [
  { fa: "fa-solid fa-code", label: "React Development", to: "/react" },
  { fa: "fa-brands fa-shopify", label: "Shopify Website", to: "/shopify" },
  {
    fa: "fa-brands fa-wordpress",
    label: "WordPress Website",
    to: "/wordpress",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    label: "WooCommerce Website",
    to: "/woocommerce",
  },
  { fa: "fa-brands fa-php", label: "PHP Development", to: "/php" },
  { fa: "fa-solid fa-database", label: "Custom CRM", to: "/crm" },
];

const REASONS = [
  {
    fa: "fa-solid fa-shield-halved",
    title: "Build Trust Instantly",
    desc: "Create credibility and gain customer confidence.",
  },
  {
    fa: "fa-solid fa-desktop",
    title: "Show Your Services Clearly",
    desc: "Present what you do in a professional way.",
  },
  {
    fa: "fa-solid fa-users",
    title: "Generate Leads 24/7",
    desc: "Attract and capture potential customers around the clock.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Rank on Google (SEO)",
    desc: "Get found by people searching for your services online.",
  },
  {
    fa: "fa-solid fa-crown",
    title: "Compete with Bigger Brands",
    desc: "Stand out and grow your market share with confidence.",
  },
];

const STATS = [
  {
    fa: "fa-solid fa-briefcase",
    key: "p",
    suffix: "+",
    label: "Projects Completed",
    target: 150,
  },
  {
    fa: "fa-solid fa-face-smile",
    key: "s",
    suffix: "%",
    label: "Client Satisfaction",
    target: 98,
  },
  {
    fa: "fa-solid fa-headset",
    key: "h",
    suffix: "/7",
    label: "Support Available",
    target: 24,
  },
  {
    fa: "fa-solid fa-award",
    key: "e",
    suffix: "+",
    label: "Years Experience",
    target: 5,
  },
];

const WebDevAbout = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeNav, setNav] = useState(0);
  const [counts, setCounts] = useState({ p: 0, s: 0, h: 0, e: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          animCounts();
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const animCounts = () => {
    const targets = { p: 150, s: 98, h: 24, e: 5 };
    let step = 0;
    const iv = setInterval(() => {
      step++;
      const r = 1 - Math.pow(1 - Math.min(step / 60, 1), 3);
      setCounts({
        p: Math.round(targets.p * r),
        s: Math.round(targets.s * r),
        h: Math.round(targets.h * r),
        e: Math.round(targets.e * r),
      });
      if (step >= 60) clearInterval(iv);
    }, 2000 / 60);
  };

  return (
    <section className="wda" ref={sectionRef}>
      <div className="wda-grid">
        {/* ══ LEFT SIDEBAR ══ */}
        <aside className="wda-sidebar">
          {/* ── CARD 1: Logo ── */}
          <div className="wda-main-card">
            <div className="wda-logo-row">
              <div className="wda-logo-img">
                <i className="fa-solid fa-layer-group" />
              </div>
              <div className="wda-logo-text">
                <b>Brandmingo</b>
                <span>Digital Solutions</span>
              </div>
            </div>
          </div>

          {/* ── CARD 2: Nav ── */}
          <div className="wda-main-card">
            <div className="wda-nav-wrap wda-nav-wrap--no-border">
              <ul className="wda-nav">
                {NAV.map((n, i) => (
                  <li
                    key={i}
                    className={activeNav === i ? "active" : ""}
                    onClick={() => {
                      setNav(i);
                      navigate(n.to);
                    }}
                  >
                    <span className="nl">
                      <i className={n.fa} />
                      {n.label}
                    </span>
                    <i className="fa-solid fa-chevron-right chev" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── CARD 3: Call CTA ── */}
          <div className="wda-main-card wda-call">
            <i className="fa-solid fa-rocket wda-rocket" />
            <h3>
              Let's Build <span>Your Website</span>
            </h3>
            <p>
              Have a project in mind? Let's turn your ideas into powerful
              digital solutions.
            </p>
            <div className="wda-ring">
              <i className="fa-solid fa-phone" />
            </div>
            <small className="wda-expert-label">Talk to an expert</small>
            <strong className="wda-phone">+91 99906 13140</strong>
            <small className="wda-expert-label wda-timing">
              Mon – Sat | 10:00 AM – 7:00 PM
            </small>
          </div>

          {/* ── CARD 4: Stats ── */}
          <div className="wda-main-card">
            <div className="wda-stats-wrap">
              <p className="wda-stats-lbl">Our Work Speaks</p>
              {STATS.map((s) => (
                <div className="wda-stat" key={s.key}>
                  <div className="wda-stat-ic">
                    <i className={s.fa} />
                  </div>
                  <div>
                    <b>
                      {counts[s.key]}
                      {s.suffix}
                    </b>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CARD 5: PDF (separate) ── */}
          <div className="wda-pdf-card">
            <span className="wda-dl-label">
              <i className="fa-solid fa-file-pdf" />
              Brochure (PDF)
            </span>
            <div className="wda-dl-btn">
              <i className="fa-solid fa-download" />
            </div>
          </div>
        </aside>
        {/* ══ END SIDEBAR ══ */}

        {/* ══ RIGHT MAIN CONTENT ══ */}
        <main className="wda-main">
          {/* Hero image */}
          <div className="wda-hero">
            <div className="wda-hero-ov">
              <div className="wda-hero-txt">
                <div className="wda-hero-badge">
                  <i className="fa-solid fa-laptop-code" />
                  About Web Dev
                </div>
                <h2>
                  Building Digital Experiences That{" "}
                  <span>Drive Business Forward.</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Article */}
          <article>
            <div className="wda-lbl">
              <i className="fa-solid fa-circle" />
              Introduction
            </div>
            <h2 className="wda-h1">What is Web Development?</h2>
            <p className="wda-p">
              Web development is the process of creating a website that runs on
              the internet. It can be as simple as an informational website or
              as advanced as an e-commerce store, CRM system, or custom web
              application.
              <br />
              <br />A website is your digital office, your sales system, and
              your brand identity working 24/7. If your business is not properly
              represented online, you are already missing opportunities.
            </p>

            <div className="wda-lbl" style={{ marginTop: "40px" }}>
              <i className="fa-solid fa-circle" />
              Strategy
            </div>
            <h3 className="wda-h2">Why Does Your Business Need a Website?</h3>

            <div className="wda-reasons">
              {REASONS.map((r, i) => (
                <div
                  className="wda-r"
                  key={i}
                  style={
                    visible
                      ? { animation: `wda-fade-up 0.55s ${i * 0.1}s forwards` }
                      : {}
                  }
                >
                  <div className="wda-r-ico">
                    <i className={r.fa} />
                  </div>
                  <h5>{r.title}</h5>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="wda-quote">
              <div className="wda-quote-icon">
                <i className="fa-solid fa-quote-right" />
              </div>
              <span>
                So it's not optional anymore — <em>It's essential.</em>
              </span>
            </div>

            {/* ── Image Cards Row ── */}
            <div className="wda-img-cards">
              <div className="wda-img-card">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=700"
                  alt="Modern Web Development"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-laptop-code" />
                  </div>
                  <p>
                    Modern, fast, and responsive websites built for maximum
                    performance and business growth.
                  </p>
                  <a href="#contact" className="wda-img-card-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>

              <div className="wda-img-card">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=700"
                  alt="E-commerce Solutions"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-cart-shopping" />
                  </div>
                  <p>
                    Custom e-commerce and web applications designed to convert
                    visitors into paying customers.
                  </p>
                  <a href="#contact" className="wda-img-card-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>
        {/* ══ END MAIN CONTENT ══ */}
      </div>
    </section>
  );
};

export default WebDevAbout;

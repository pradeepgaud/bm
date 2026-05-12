import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-mobile-screen",
    title: "Mobile Responsive",
    desc: "Flawless experience across all devices.",
  },
  {
    fa: "fa-solid fa-magnifying-glass",
    title: "SEO Optimized",
    desc: "Built with best SEO practices to rank higher.",
  },
  {
    fa: "fa-solid fa-bolt",
    title: "Fast Loading",
    desc: "Speed-optimised websites that keep users engaged.",
  },
  {
    fa: "fa-solid fa-bullseye",
    title: "Conversion Focused",
    desc: "Designed to turn visitors into loyal customers.",
  },
  {
    fa: "fa-solid fa-sliders",
    title: "Easy to Manage",
    desc: "User-friendly dashboards that save you time.",
  },
];

const ECOM_ALLOWS = [
  "Sell 24/7",
  "Accept online payments",
  "Manage orders easily",
  "Reach customers beyond your city",
];

const ECOM_PROVIDES = [
  "Shopify store setup",
  "Payment gateway integration",
  "Product & inventory management",
  "Conversion-focused design",
];

const PLATFORMS = [
  {
    fa: "fa-brands fa-shopify",
    title: "Shopify",
    sub: "BEST FOR",
    desc: "Product-based businesses",
  },
  {
    fa: "fa-brands fa-wordpress",
    title: "WordPress",
    sub: "BEST FOR",
    desc: "Services, blogs & SEO",
  },
  {
    fa: "fa-brands fa-react",
    title: "React",
    sub: "BEST FOR",
    desc: "Speed & advanced UI",
  },
  {
    fa: "fa-solid fa-code",
    title: "Custom Dev",
    sub: "BEST FOR",
    desc: "Unique business needs",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-circle-question",
    q: "What types of websites do you develop?",
    a: "We develop business websites, e-commerce stores, portfolio sites, custom web applications, CRM systems, and more — tailored to your specific business goals.",
  },
  {
    fa: "fa-solid fa-layer-group",
    q: "Which platform is best for my business — Shopify, WordPress, or React?",
    a: "It depends on your goals. Shopify is ideal for product-based stores, WordPress for blogs and services, and React for high-performance custom applications. We help you choose wisely.",
  },
  {
    fa: "fa-solid fa-mobile-screen",
    q: "Will my website be mobile-friendly and SEO optimized?",
    a: "Absolutely. Every website we build is fully responsive and built with SEO best practices — fast load times, clean code, and proper structure to rank on Google.",
  },
  {
    fa: "fa-solid fa-gear",
    q: "What is your web development process?",
    a: "We follow a 5-step process: Understanding your business → Planning & structure → UI/UX design → Development → Testing & launch. Every step is transparent and collaborative.",
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
            <div className="wds-section-label">OUR PROMISE</div>
            <h3 className="wde-heading">
              What Makes Our Websites <span>Different?</span>
            </h3>
            <p className="wde-desc">
              Most websites look good — but don't perform. We focus on
              performance. Our websites are built to drive real results for your
              business, not just win design awards.
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
                A website should <em>generate business</em>, not just look
                attractive.
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
              Do You Need an <span>E-commerce Website?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If you are selling products and still not online — you are
              limiting your growth. An e-commerce website works 24/7, reaching
              customers even while you sleep.
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-cart-shopping" />
              </div>
              <h4>
                An E-commerce Website <span>Allows You To:</span>
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
            <div className="wds-section-label">CHOOSE WHAT'S RIGHT</div>
            <h3 className="wdpl-heading">
              Which Platform is <span>Best</span> for You?
            </h3>
            <p className="wdpl-desc">
              This is where most people get confused. Every platform has a
              purpose — and choosing the wrong one wastes time and money. Let's
              simplify it for you.
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
                The right platform depends on your goal — and we help you choose
                wisely so you invest your money in the right direction from day
                one.
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
const WebDevExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default WebDevExtra;

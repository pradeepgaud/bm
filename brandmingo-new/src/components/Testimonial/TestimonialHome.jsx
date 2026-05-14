import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./TestimonialHome.css";

/* ── Testimonial Data ── */
const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    service: "Web Development",
    review:
      "Exceptional quality and attention to detail. Our website traffic doubled within two months.",
  },
  {
    name: "Priya Mehta",
    service: "Social Media Marketing",
    review:
      "The team truly understands branding. Our engagement grew by 300% in just 6 weeks.",
  },
  {
    name: "Arjun Kapoor",
    service: "SEO Services",
    review:
      "We ranked on page one for 15+ keywords. Absolutely brilliant execution and strategy.",
  },
  {
    name: "Sneha Verma",
    service: "UI/UX Design",
    review:
      "Stunning design that converted visitors into customers. Our bounce rate dropped significantly.",
  },
  {
    name: "Vikram Singh",
    service: "Ads Management",
    review:
      "Our ROI tripled after handing over ad management. Transparent, fast, and results-driven.",
  },
  {
    name: "Neha Joshi",
    service: "Branding",
    review:
      "They gave our brand a soul. Every element is cohesive, premium, and memorable.",
  },
  {
    name: "Karan Malhotra",
    service: "Web Development",
    review:
      "From concept to launch in 3 weeks. Clean code, fast site, and zero compromises.",
  },
  {
    name: "Divya Rao",
    service: "Digital Marketing",
    review:
      "Lead generation went through the roof. Highly recommend for any growth-focused business.",
  },
];

/* ── Avatar ── */
const Avatar = ({ name }) => (
  <div className="th-avatar">
    <span className="th-avatar-letter">{name.charAt(0).toUpperCase()}</span>
  </div>
);

/* ── Testimonial Card ── */
const TestimonialCard = ({ name, service, review }) => (
  <div className="th-card">
    <div className="th-card-top">
      <Avatar name={name} />
      <div className="th-card-info">
        <h4 className="th-card-name">{name}</h4>
        <span className="th-card-service">{service}</span>
      </div>
    </div>

    {/* Stars */}
    <div className="th-stars" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="var(--theme-color1,#ff6b1e)"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>

    <p className="th-card-review">"{review}"</p>
    <div className="th-card-accent" aria-hidden="true" />
  </div>
);

/* ── Center Featured Card ── */
const FeaturedCard = () => (
  <div className="th-featured">
    <div className="th-featured-glow" aria-hidden="true" />
    <div className="th-featured-icon" aria-hidden="true">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    </div>
    <div className="th-featured-number">16.3K+</div>
    <div className="th-featured-label">Happy Clients</div>
    <div className="th-featured-dots" aria-hidden="true">
      <span />
      <span className="active" />
      <span />
    </div>
  </div>
);

/* ══════════════════════════════════════════
   INFINITE SCROLL TRACK
══════════════════════════════════════════ */
const InfiniteTrack = ({ items, direction = "left", speed = 40 }) => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className="th-track-wrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`th-track th-track--${direction}${isPaused ? " th-track--paused" : ""}`}
        ref={trackRef}
        style={{ "--speed": `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const TestimonialHome = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  /* Split into two rows */
  const row1 = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const row2 = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
    }),
  };

  return (
    <section className="th-section" ref={sectionRef}>
      {/* Background */}
      <div className="th-bg" aria-hidden="true">
        <div className="th-bg-orb th-bg-orb--left" />
        <div className="th-bg-orb th-bg-orb--right" />
        <div className="th-bg-orb th-bg-orb--center" />
      </div>

      {/* ── Header ── */}
      <div className="th-header">
        <motion.div
          className="th-badge"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="var(--theme-color1,#ff6b1e)"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          OUR CLIENTS
        </motion.div>

        <motion.h2
          className="th-heading"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.12}
        >
          Trusted by Brands.
          <br />
          <em className="th-heading-accent">Loved by Results.</em>
        </motion.h2>

        <motion.p
          className="th-sub"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.24}
        >
          We're proud to partner with ambitious businesses and creators who
          trust us to deliver impact that matters.
        </motion.p>
      </div>

      {/* ── Slider Area ── */}
      <motion.div
        className="th-slider-area"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.36}
      >
        {/* Left fade overlay */}
        <div className="th-fade th-fade--left" aria-hidden="true" />
        <div className="th-fade th-fade--right" aria-hidden="true" />

        {/* Row 1 — scroll left */}
        <InfiniteTrack items={row1} direction="left" speed={38} />

        {/* Row 2 — scroll right */}
        <InfiniteTrack items={row2} direction="right" speed={42} />
      </motion.div>

      {/* ── Featured card — centered below slider ── */}
      <motion.div
        className="th-featured-wrap"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.48}
      >
        <FeaturedCard />
      </motion.div>
    </section>
  );
};

export default TestimonialHome;

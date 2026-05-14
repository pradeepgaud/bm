import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FiStar } from "react-icons/fi";
import "./Client.css";

const LEFT_CLIENTS = [
  { name: "Rahul Sharma", service: "Web Development" },
  { name: "Ananya Mehta", service: "Brand Strategy" },
  { name: "James Wilson", service: "SEO Services" },
  { name: "Priya Kapoor", service: "Social Media" },
  { name: "Lucas Ferreira", service: "UI/UX Design" },
  { name: "Sofia Reyes", service: "Ecommerce" },
  { name: "Kabir Mehta", service: "Performance Ads" },
  { name: "Aisha Khan", service: "Content Strategy" },
  { name: "Ethan Moore", service: "Growth Hacking" },
  { name: "Nisha Patel", service: "Video Marketing" },
];

const RIGHT_CLIENTS = [
  { name: "Arjun Das", service: "Performance Ads" },
  { name: "Emma Clarke", service: "Content Marketing" },
  { name: "Vikram Nair", service: "Mobile App" },
  { name: "Zara Ahmed", service: "Fashion Brand" },
  { name: "David Park", service: "SaaS Growth" },
  { name: "Meera Joshi", service: "Business Coach" },
  { name: "Omar Shaikh", service: "Email Marketing" },
  { name: "Riya Bose", service: "Influencer Ops" },
  { name: "Leo Santos", service: "CRO Services" },
  { name: "Tanvi Shah", service: "Brand Identity" },
];

const AVATAR_COLORS = [
  ["#ff6b00", "#ff9340"],
  ["#e05500", "#ff6b00"],
  ["#c44a00", "#ff7a20"],
  ["#ff8c00", "#ffb347"],
  ["#d45f00", "#ff8040"],
  ["#ff5500", "#ff7700"],
  ["#e06200", "#ff8c20"],
  ["#c85000", "#ff7010"],
  ["#ff7200", "#ffa040"],
  ["#d96000", "#ff8830"],
];

function getAvatarColor(name) {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
}

function ClientCard({ name, service }) {
  const [from, to] = getAvatarColor(name);
  return (
    <div className="cl-card">
      <div
        className="cl-avatar"
        style={{
          background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
      >
        <span className="cl-avatar-letter">{name.charAt(0).toUpperCase()}</span>
      </div>
      <p className="cl-name">{name}</p>
      <p className="cl-service">{service}</p>
    </div>
  );
}

/**
 * direction="ltr"  → cards come from LEFT, move RIGHT → absorbed by center card
 * direction="rtl"  → cards come from RIGHT, move LEFT → absorbed by center card
 */
function MarqueeTrack({ clients, direction }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(null); // null = not initialised yet

  // 4 copies = enough for any viewport, seamless loop
  const repeated = [...clients, ...clients, ...clients, ...clients];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const SPEED = 0.6; // px per frame — same for both sides

    function getUnitW() {
      const card = el.querySelector(".cl-card");
      if (!card) return 150;
      const style = getComputedStyle(el);
      const gap = parseFloat(style.gap) || parseFloat(style.columnGap) || 20;
      return card.getBoundingClientRect().width + gap;
    }

    // Initialise start position once
    if (posRef.current === null) {
      const unitW = getUnitW();
      const setW = unitW * clients.length; // width of ONE full set
      if (direction === "ltr") {
        // Start fully off-screen to the LEFT of the visible area
        posRef.current = -setW * 2;
      } else {
        // Start at 0 (right track fills from its own left edge naturally)
        posRef.current = 0;
      }
    }

    function step() {
      const unitW = getUnitW();
      const setW = unitW * clients.length;

      if (direction === "ltr") {
        posRef.current += SPEED; // move right
        // When the leading copy scrolls fully past visible right edge, jump back
        if (posRef.current >= 0) {
          posRef.current -= setW;
        }
      } else {
        posRef.current -= SPEED; // move left
        // When one full set has scrolled past, reset
        if (posRef.current <= -setW) {
          posRef.current += setW;
        }
      }

      el.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [clients, direction]);

  return (
    <div className="cl-marquee-track" ref={trackRef}>
      {repeated.map((c, i) => (
        <ClientCard key={`${direction}-${c.name}-${i}`} {...c} />
      ))}
    </div>
  );
}

function StatsCard() {
  return (
    <motion.div
      className="cl-stats-card"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="cl-stats-ring cl-stats-ring--1" />
      <div className="cl-stats-ring cl-stats-ring--2" />
      <div className="cl-stats-icon">
        <FiStar />
      </div>
      <p className="cl-stats-number">16.3K+</p>
      <p className="cl-stats-label">Happy Clients</p>
      <div className="cl-stats-bar" />
    </motion.div>
  );
}

export default function Client() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="cl-section" ref={ref}>
      <div className="cl-glow cl-glow--left" />
      <div className="cl-glow cl-glow--right" />
      <div className="cl-glow cl-glow--center" />
      <div className="cl-dot-grid" />

      <div className="cl-container">
        {/* ── Header ── */}
        <motion.div
          className="cl-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="cl-badge"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FiStar className="cl-badge-star" />
            <span>OUR CLIENTS</span>
            <FiStar className="cl-badge-star" />
          </motion.div>

          <motion.h2
            className="cl-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by Brands.
            <br />
            <span className="cl-heading-orange">Loved by Results.</span>
          </motion.h2>

          <motion.p
            className="cl-subtext"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            We're proud to partner with ambitious businesses and creators
            <br />
            who trust us to deliver impact that matters.
          </motion.p>
        </motion.div>

        {/* ── Slider ── */}
        <motion.div
          className="cl-slider-section"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {/* outer edge fade-outs */}
          <div className="cl-fade-left" />
          <div className="cl-fade-right" />

          {/* LEFT half — cards enter from left, move → center */}
          <div className="cl-track-wrapper cl-track-wrapper--left">
            <div className="cl-inner-fade cl-inner-fade--right" />
            <MarqueeTrack clients={LEFT_CLIENTS} direction="ltr" />
          </div>

          {/* RIGHT half — cards enter from right, move ← center */}
          <div className="cl-track-wrapper cl-track-wrapper--right">
            <div className="cl-inner-fade cl-inner-fade--left" />
            <MarqueeTrack clients={RIGHT_CLIENTS} direction="rtl" />
          </div>

          {/* Center stats bubble */}
          <div className="cl-stats-center">
            <StatsCard />
          </div>
        </motion.div>

        {/* ── Dots ── */}
        <motion.div
          className="cl-dots"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="cl-dot cl-dot--active" />
          <span className="cl-dot cl-dot--orange" />
          <span className="cl-dot" />
        </motion.div>
      </div>
    </section>
  );
}

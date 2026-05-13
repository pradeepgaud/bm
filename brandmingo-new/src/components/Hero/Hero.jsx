// import heroBg from "../../assets/images/banner/hero-bg-1-1.jpg";
// import obj1 from "../../assets/images/icons/hero-object-1-1.png";
// import obj2 from "../../assets/images/icons/hero-object-1-2.png";
// import circle from "../../assets/images/banner/circle1-1.png";
// import arrow from "../../assets/images/icons/right-arrow-1-1.png";
// import btnArrow from "../../assets/images/icons/right-arrow-1-2.png";

// const Hero = () => {
//   return (
//     <section
//       className="hero-section hero-1 bg-cover"
//       style={{ backgroundImage: `url(${heroBg})` }}
//     >
//       <div className="hero-oboject-1">
//         <img src={obj1} alt="" />
//       </div>

//       <div className="hero-oboject-2">
//         <img src={obj2} alt="" />
//       </div>

//       <div className="container">
//         <div className="hero-content">
//           <h1 className="hero-title" data-aos="fade-up">
//             <span>We Build Digital</span> Experiences That Grow Your Business
//           </h1>

//           <div className="content-items">
//             <div className="circle-box" data-aos="fade-up">
//               <img className="ani-circle" src={circle} alt="" />
//               <a href="#" className="arrow-icon">
//                 <img src={arrow} alt="" />
//               </a>
//             </div>

//             <div className="content" data-aos="fade-up">
//               <div className="hero-text">
//                 From startups to established companies, we create high-impact
//                 digital solutions that attract, engage, and convert customers.
//               </div>

//               <a href="#" className="btn-style-one">
//                 <span className="btn-arrow-left">
//                   <img src={btnArrow} alt="" />
//                 </span>
//                 <span className="btn-title">Discover More</span>
//                 <span className="btn-arrow-right">
//                   <img src={btnArrow} alt="" />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import "./Hero.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/* ─────────────────────────────────────────
   CLIENT LOGOS
───────────────────────────────────────── */
const CLIENT_LOGOS = [
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658879/3_wpp0d7.png",
    alt: "Client 1",
  },
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658878/4_eavqsa.png",
    alt: "Client 2",
  },
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658878/2_gdmirc.png",
    alt: "Client 3",
  },
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658879/1_bttqla.png",
    alt: "Client 4",
  },
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778661854/Untitled_design_itjmma.png",
    alt: "Client 5",
  },
];

/* ─────────────────────────────────────────
   FRAMER VARIANTS
───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─────────────────────────────────────────
   TOGGLE  "gr[O]wth"
───────────────────────────────────────── */
const ToggleWord = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="hn-toggle-word">
      <span className="hn-tw-text">gr</span>
      <span
        className={`hn-toggle${on ? " hn-toggle--on" : ""}`}
        aria-hidden="true"
      >
        <span className="hn-toggle-track">
          <span className="hn-toggle-thumb" />
        </span>
      </span>
      <span className="hn-tw-text">wth</span>
    </span>
  );
};

/* ─────────────────────────────────────────
   ARROW BADGE
───────────────────────────────────────── */
const ArrowBadge = () => (
  <motion.span
    className="hn-arrow-badge"
    aria-hidden="true"
    animate={{ rotate: [0, 8, 0, -4, 0], y: [0, -6, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7,7 17,7 17,17" />
    </svg>
  </motion.span>
);

/* ─────────────────────────────────────────
   CURSOR BADGE
───────────────────────────────────────── */
const CursorBadge = () => (
  <motion.span
    className="hn-cursor-badge"
    aria-hidden="true"
    animate={{ y: [0, -8, 0], rotate: [-4, 4, -4] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="var(--theme-color1,#ff6b1e)" />
      <path
        d="M11 11 L11 29 L16.5 23.5 L19.5 31 L22 30 L19 22.5 L27 22.5 Z"
        fill="white"
      />
    </svg>
  </motion.span>
);

/* ─────────────────────────────────────────
   DOT GRID
───────────────────────────────────────── */
const DotGrid = () => (
  <div className="hn-dot-grid" aria-hidden="true">
    {Array.from({ length: 80 }).map((_, i) => (
      <span
        key={i}
        className="hn-dot"
        style={{ animationDelay: `${(i % 10) * 0.09}s` }}
      />
    ))}
  </div>
);

/* ─────────────────────────────────────────
   ROTATING CIRCLE BADGE
───────────────────────────────────────── */
const CircleBadge = () => (
  <div className="hn-circle-badge" aria-hidden="true">
    <motion.svg
      className="hn-circle-svg"
      viewBox="0 0 200 200"
      width="136"
      height="136"
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <path
          id="hn-cp"
          d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
        />
      </defs>
      <text
        fontSize="11"
        fontWeight="700"
        letterSpacing="2.8"
        fill="rgba(255,255,255,0.5)"
        fontFamily="inherit"
      >
        <textPath href="#hn-cp">
          TRANSFORM YOUR BUSINESS · TRANSFORM YOUR BUSINESS ·
        </textPath>
      </text>
    </motion.svg>
    <div className="hn-circle-inner">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7,7 17,7 17,17" />
      </svg>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   BRAND LOGOS
───────────────────────────────────────── */
const BrandLogos = () => (
  <motion.div
    className="hn-logos"
    variants={stagger}
    initial="hidden"
    animate="visible"
  >
    <motion.p className="hn-logos-label" variants={fadeIn(0)}>
      Trusted by leading brands
    </motion.p>
    <div className="hn-logos-row">
      {CLIENT_LOGOS.map((logo, i) => (
        <motion.div key={i} className="hn-logo" variants={fadeUp(0.05 * i)}>
          <img src={logo.url} alt={logo.alt} loading="lazy" draggable="false" />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────
   GRID LINES
───────────────────────────────────────── */
const GridLines = () => (
  <div className="hn-grid-lines" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="hn-grid-line"
        style={{ animationDelay: `${i * 0.4}s` }}
      />
    ))}
  </div>
);

/* ═══════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════ */
const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });
  const orbLeftX = useTransform(springX, [-0.5, 0.5], [-22, 22]);
  const orbLeftY = useTransform(springY, [-0.5, 0.5], [-14, 14]);
  const orbRightX = useTransform(springX, [-0.5, 0.5], [18, -18]);
  const orbRightY = useTransform(springY, [-0.5, 0.5], [12, -12]);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hn-section">
      {/* BACKGROUND */}
      <div className="hn-bg" aria-hidden="true">
        <motion.div
          className="hn-bg-orb hn-bg-orb--left"
          style={{ x: orbLeftX, y: orbLeftY }}
        />
        <div className="hn-bg-orb hn-bg-orb--center" />
        <motion.div
          className="hn-bg-orb hn-bg-orb--right"
          style={{ x: orbRightX, y: orbRightY }}
        />
        <div className="hn-noise" />
      </div>

      <GridLines />
      <DotGrid />
      <div className="hn-bottom-fade" aria-hidden="true" />

      {/* CONTENT */}
      <div className="auto-container">
        <motion.div
          className="hn-inner"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Eyebrow — plain orange text with top spacing */}
          <motion.div className="hn-eyebrow-wrap" variants={fadeUp(0)}>
            <span className="hn-eyebrow">
              Digital Agency &amp; Growth Partner
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1 className="hn-title" variants={stagger}>
            {/* Line 1 */}
            <motion.span className="hn-line1" variants={fadeUp(0.05)}>
              We Build <ArrowBadge />
            </motion.span>

            {/* Line 2 — growth */}
            <motion.span className="hn-line2" variants={fadeUp(0.1)}>
              <ToggleWord />
            </motion.span>

            {/* Line 3 — cursor + "for Your Business"
                FIX: flex-wrap + margin-top so it clears line2 */}
            <motion.span className="hn-line3" variants={fadeUp(0.15)}>
              <div className="hn-floating-lottie">
                <DotLottieReact
                  src="https://lottie.host/73de9c60-eb63-4afb-8474-f9fefd27ed30/PJxGlIli05.lottie"
                  loop
                  autoplay
                />
              </div>

              <span className="hn-line3-text">
                for Your <em className="hn-accent">Business</em>
              </span>
            </motion.span>
          </motion.h1>

          {/* Sub */}
          <motion.p className="hn-sub" variants={fadeUp(0.22)}>
            We turn great ideas into working products.
            <br />
            We focus on clear communication and understanding your business.
          </motion.p>

          {/* CTA */}
          <motion.div className="hn-cta-wrap" variants={fadeUp(0.3)}>
            <motion.a
              href="/contact-us"
              className="btn-style-one"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="btn-arrow-left">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7,7 17,7 17,17" />
                </svg>
              </span>
              <span className="btn-title">Let's Start Your Project</span>
              <span className="btn-arrow-right">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7,7 17,7 17,17" />
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="/about"
              className="hn-ghost-btn"
              whileHover={{ color: "#fff" }}
            >
              More About Us
            </motion.a>
          </motion.div>

          {/* Logos */}
          <BrandLogos />
        </motion.div>
      </div>

      <CircleBadge />
    </section>
  );
};

export default Hero;

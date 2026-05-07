// import React, { useEffect, useRef, useState } from "react";
// import "./ContactHero.css";

// /* ── Feature badges data ── */
// const FEATURES = [
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         width="22"
//         height="22"
//         aria-hidden="true"
//       >
//         <path
//           d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
//           stroke="currentColor"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="rgba(255,107,30,0.15)"
//         />
//         <path
//           d="M8 10h8M8 14h5"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     title: "Quick Response",
//     desc: "We reply within 24 business hours",
//   },
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         width="22"
//         height="22"
//         aria-hidden="true"
//       >
//         <path
//           d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
//           stroke="currentColor"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="rgba(255,107,30,0.15)"
//         />
//         <path
//           d="M9 12l2 2 4-4"
//           stroke="currentColor"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "Trusted Partner",
//     desc: "200+ brands trust us worldwide",
//   },
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         width="22"
//         height="22"
//         aria-hidden="true"
//       >
//         <path
//           d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
//           stroke="currentColor"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           fill="rgba(255,107,30,0.15)"
//         />
//       </svg>
//     ),
//     title: "Result Driven",
//     desc: "Focused on delivering real business impact",
//   },
// ];

// /* ── Decorative SVG ── */
// const HeroDeco = ({ visible }) => (
//   <div
//     className={`ch-deco${visible ? " ch-deco--visible" : ""}`}
//     aria-hidden="true"
//   >
//     {/* Orbit rings */}
//     <div className="ch-orbit ch-orbit--1" />
//     <div className="ch-orbit ch-orbit--2" />
//     <div className="ch-orbit ch-orbit--3" />

//     {/* Diagonal beam line */}
//     <svg
//       className="ch-beam-svg"
//       viewBox="0 0 560 480"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         <radialGradient id="ch-dot-fade" cx="55%" cy="48%" r="50%">
//           <stop offset="0%" stopColor="white" stopOpacity="0.6" />
//           <stop offset="60%" stopColor="white" stopOpacity="0.2" />
//           <stop offset="100%" stopColor="white" stopOpacity="0" />
//         </radialGradient>
//         <mask id="ch-grid-mask">
//           <rect width="560" height="480" fill="url(#ch-dot-fade)" />
//         </mask>
//         <linearGradient id="ch-beam-grad" x1="0%" y1="100%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#FF6B1E" stopOpacity="0" />
//           <stop offset="35%" stopColor="#FF6B1E" stopOpacity="0.55" />
//           <stop offset="65%" stopColor="#FFB400" stopOpacity="0.5" />
//           <stop offset="100%" stopColor="#FF6B1E" stopOpacity="0.1" />
//         </linearGradient>
//         <radialGradient id="ch-center-glow" cx="50%" cy="50%" r="50%">
//           <stop offset="0%" stopColor="#FF6B1E" stopOpacity="0.25" />
//           <stop offset="100%" stopColor="#FF6B1E" stopOpacity="0" />
//         </radialGradient>
//       </defs>

//       {/* Dot grid */}
//       <g mask="url(#ch-grid-mask)">
//         {Array.from({ length: 17 }, (_, row) =>
//           Array.from({ length: 21 }, (_, col) => (
//             <circle
//               key={`${row}-${col}`}
//               cx={col * 26 + 8}
//               cy={row * 28 + 8}
//               r="1.5"
//               fill="#FF6B1E"
//               opacity="0.5"
//             />
//           )),
//         )}
//       </g>

//       {/* Center ambient glow */}
//       <circle cx="300" cy="240" r="160" fill="url(#ch-center-glow)" />

//       {/* Diagonal beam */}
//       <path
//         d="M 30 460 Q 260 360 500 50"
//         stroke="url(#ch-beam-grad)"
//         strokeWidth="1.3"
//         fill="none"
//         strokeLinecap="round"
//         className="ch-beam-path"
//       />

//       {/* Glowing dot on beam — top */}
//       <circle cx="470" cy="90" r="22" fill="#FF6B1E" opacity="0.07" />
//       <circle cx="470" cy="90" r="12" fill="#FF6B1E" opacity="0.14" />
//       <circle
//         cx="470"
//         cy="90"
//         r="5.5"
//         fill="#FF6B1E"
//         opacity="1"
//         className="ch-glow-dot ch-glow-dot--1"
//       />
//       <circle cx="470" cy="90" r="2.5" fill="#fff" opacity="0.95" />

//       {/* Glowing dot on beam — mid */}
//       <circle cx="260" cy="300" r="14" fill="#FFB400" opacity="0.08" />
//       <circle
//         cx="260"
//         cy="300"
//         r="4.5"
//         fill="#FFB400"
//         opacity="0.9"
//         className="ch-glow-dot ch-glow-dot--2"
//       />
//     </svg>

//     {/* Floating particles */}
//     <div className="ch-particles">
//       {[
//         { top: "15%", left: "20%", size: 3, delay: "0s", dur: "4s" },
//         { top: "30%", left: "70%", size: 2, delay: "1.2s", dur: "5s" },
//         { top: "55%", left: "15%", size: 2.5, delay: "0.6s", dur: "3.8s" },
//         { top: "70%", left: "55%", size: 2, delay: "2s", dur: "4.5s" },
//         { top: "22%", left: "48%", size: 1.8, delay: "1.8s", dur: "6s" },
//         { top: "80%", left: "30%", size: 1.5, delay: "0.3s", dur: "5.5s" },
//       ].map((p, i) => (
//         <div
//           key={i}
//           className="ch-particle"
//           style={{
//             top: p.top,
//             left: p.left,
//             width: p.size,
//             height: p.size,
//             animationDelay: p.delay,
//             animationDuration: p.dur,
//           }}
//         />
//       ))}
//     </div>
//   </div>
// );

// /* ── Main Component ── */
// const ContactHero = () => {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // Trigger animation on mount (hero is always above fold)
//     const timer = setTimeout(() => setVisible(true), 80);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section
//       className={`ch-section${visible ? " ch-section--visible" : ""}`}
//       ref={sectionRef}
//       aria-labelledby="ch-heading"
//     >
//       {/* Background */}
//       <div className="ch-bg" aria-hidden="true">
//         <div className="ch-bg-orb ch-bg-orb--1" />
//         <div className="ch-bg-orb ch-bg-orb--2" />
//         <div className="ch-bg-noise" />
//       </div>

//       <div className="ch-container">
//         <div className="ch-inner">
//           {/* ══ LEFT — Content ══ */}
//           <div className="ch-content">
//             {/* Eyebrow label */}
//             <div className="ch-eyebrow">
//               <span className="ch-eyebrow-dot" />
//               Contact Us
//             </div>

//             {/* Main heading */}
//             <h1 className="ch-heading" id="ch-heading">
//               <span className="ch-heading-line1">Let's Create</span>
//               <span className="ch-heading-line2">
//                 <em className="ch-heading-accent">Greatness</em>{" "}
//                 <span className="ch-heading-plain">Together!</span>
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="ch-desc">
//               Whether you have a project in mind or just want to say hello, we'd
//               love to hear from you.
//             </p>

//             {/* Divider */}
//             <div className="ch-divider" aria-hidden="true">
//               <span className="ch-divider-line" />
//               <span className="ch-divider-dot" />
//               <span className="ch-divider-line ch-divider-line--short" />
//             </div>

//             {/* Feature badges */}
//             <div className="ch-features" role="list">
//               {FEATURES.map((f, i) => (
//                 <div
//                   className="ch-feature"
//                   key={i}
//                   role="listitem"
//                   style={{ transitionDelay: `${0.55 + i * 0.12}s` }}
//                 >
//                   <div className="ch-feature-icon">{f.icon}</div>
//                   <div className="ch-feature-body">
//                     <strong className="ch-feature-title">{f.title}</strong>
//                     <span className="ch-feature-desc">{f.desc}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ══ RIGHT — Decorative ══ */}
//           <HeroDeco visible={visible} />
//         </div>
//       </div>

//       {/* Bottom fade */}
//       <div className="ch-bottom-fade" aria-hidden="true" />
//     </section>
//   );
// };

// export default ContactHero;

import React, { useEffect, useRef, useState } from "react";
// import "@dotlottie/player-component";
import "./ContactHero.css";

/* ── Feature badges data ── */
const FEATURES = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="22"
        height="22"
        aria-hidden="true"
      >
        <path
          d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(255,107,30,0.15)"
        />
        <path
          d="M8 10h8M8 14h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Quick Response",
    desc: "We reply within 24 business hours",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="22"
        height="22"
        aria-hidden="true"
      >
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(255,107,30,0.15)"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Trusted Partner",
    desc: "200+ brands trust us worldwide",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="22"
        height="22"
        aria-hidden="true"
      >
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(255,107,30,0.15)"
        />
      </svg>
    ),
    title: "Result Driven",
    desc: "Focused on delivering real business impact",
  },
];

/* ── Right Decorative Panel (ReactDetailsHero style) ── */
const HeroDeco = ({ visible }) => (
  <div
    className={`ch-deco${visible ? " ch-deco--visible" : ""}`}
    aria-hidden="true"
  >
    {/* Rotating rings */}
    <div className="ch-ring ch-ring--1" />
    <div className="ch-ring ch-ring--2" />

    {/* Center ambient glow */}
    <div className="ch-img-glow" />

    {/* Lottie Animation */}
    <dotlottie-wc
      src="https://lottie.host/224a3764-efc6-47eb-9092-0fcf344a9db2/LswAtDOQIi.lottie"
      autoplay
      loop
      style={{ width: "100%", height: "100%" }}
    />

    {/* Floating chips — same as ReactDetailsHero */}
    <div className="ch-chip ch-chip--1">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
      </svg>
      Quick Delivery
    </div>
    <div className="ch-chip ch-chip--2">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      100% Trusted
    </div>
    <div className="ch-chip ch-chip--3">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
      Result Driven
    </div>

    {/* Vertical label */}
    {/* <span className="ch-vert-label">
      Brandmingo · Creative · Digital · Growth
    </span> */}
  </div>
);

/* ── Main Component ── */
const ContactHero = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setVisible(true), 80);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    // Lottie CDN script dynamically load karo
    if (!document.querySelector("script[data-lottie-wc]")) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js";
      script.type = "module";
      script.setAttribute("data-lottie-wc", "true");
      document.head.appendChild(script);
    }

    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`ch-section${visible ? " ch-section--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="ch-heading"
    >
      {/* Background */}
      <div className="ch-bg" aria-hidden="true">
        <div className="ch-bg-orb ch-bg-orb--1" />
        <div className="ch-bg-orb ch-bg-orb--2" />
        <div className="ch-bg-noise" />
      </div>

      <div className="ch-container">
        <div className="ch-inner">
          {/* ══ LEFT — Content ══ */}
          <div className="ch-content">
            {/* Eyebrow */}
            <div className="ch-eyebrow">
              <span className="ch-eyebrow-dot" />
              Contact Us
            </div>

            {/* Heading */}
            <h1 className="ch-heading" id="ch-heading">
              <span className="ch-heading-line1">Let's Create</span>
              <span className="ch-heading-line2">
                <em className="ch-heading-accent">Greatness</em>{" "}
                <span className="ch-heading-plain">Together!</span>
              </span>
            </h1>

            {/* Description */}
            <p className="ch-desc">
              Whether you have a project in mind or just want to say hello, we'd
              love to hear from you.
            </p>

            {/* Divider */}
            <div className="ch-divider" aria-hidden="true">
              <span className="ch-divider-line" />
              <span className="ch-divider-dot" />
              <span className="ch-divider-line ch-divider-line--short" />
            </div>

            {/* Feature badges — 3 in a row */}
            <div className="ch-features" role="list">
              {FEATURES.map((f, i) => (
                <div
                  className="ch-feature"
                  key={i}
                  role="listitem"
                  style={{ transitionDelay: `${0.55 + i * 0.12}s` }}
                >
                  <div className="ch-feature-icon">{f.icon}</div>
                  <div className="ch-feature-body">
                    <strong className="ch-feature-title">{f.title}</strong>
                    <span className="ch-feature-desc">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT — Decorative ══ */}
          <HeroDeco visible={visible} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="ch-bottom-fade" aria-hidden="true" />
    </section>
  );
};

export default ContactHero;

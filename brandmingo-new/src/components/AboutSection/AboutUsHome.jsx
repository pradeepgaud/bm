// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   FiArrowRight,
//   FiBarChart2,
//   FiTarget,
//   FiTrendingUp,
//   FiUsers,
//   FiAward,
//   FiClock,
//   FiBriefcase,
//   FiZap,
//   FiLayers,
// } from "react-icons/fi";
// import "./AboutUsHome.css";

// /* ─── Data ───────────────────────────────────────────────── */
// const SKILLS = [
//   { label: "Marketing & Business Growth", value: 85, icon: <FiTrendingUp /> },
//   { label: "Creativity & Innovation", value: 90, icon: <FiZap /> },
//   { label: "Business & Project Management", value: 95, icon: <FiLayers /> },
// ];

// const STATS = [
//   { icon: <FiBriefcase />, number: "3K+", label: "Successful Projects" },
//   { icon: <FiUsers />, number: "200+", label: "Expert Team" },
//   { icon: <FiAward />, number: "350+", label: "Happy Customers" },
//   { icon: <FiClock />, number: "16+", label: "Years of Experience" },
// ];

// /* ─── Sub-components ──────────────────────────────────────── */

// function ProgressBar({ label, value, icon, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <motion.div
//       ref={ref}
//       className="au-skill-row"
//       initial={{ opacity: 0, y: 24 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.55, delay: index * 0.12 }}
//     >
//       <div className="au-skill-header">
//         <span className="au-skill-icon">{icon}</span>
//         <span className="au-skill-label">{label}</span>
//         <span className="au-skill-pct">{value}%</span>
//       </div>
//       <div className="au-bar-track">
//         <motion.div
//           className="au-bar-fill"
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${value}%` } : {}}
//           transition={{
//             duration: 1.1,
//             delay: 0.3 + index * 0.12,
//             ease: "easeOut",
//           }}
//         />
//         <motion.div
//           className="au-bar-glow"
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${value}%` } : {}}
//           transition={{
//             duration: 1.1,
//             delay: 0.3 + index * 0.12,
//             ease: "easeOut",
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// }

// function StatCard({ icon, number, label, index }) {
//   return (
//     <motion.div
//       className="au-stat-card"
//       initial={{ opacity: 0, y: 32 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{ duration: 0.55, delay: index * 0.1 }}
//       whileHover={{ y: -6, transition: { duration: 0.25 } }}
//     >
//       <span className="au-stat-icon">{icon}</span>
//       <span className="au-stat-number">{number}</span>
//       <span className="au-stat-label">{label}</span>
//     </motion.div>
//   );
// }

// /* ─── Main Component ─────────────────────────────────────── */
// export default function AboutUsHome() {
//   return (
//     <section className="au-section">
//       {/* ambient blobs */}
//       <div className="au-blob au-blob-1" />
//       <div className="au-blob au-blob-2" />
//       <div className="au-dot-grid" />

//       <div className="au-container">
//         {/* ── TOP GRID ── */}
//         <div className="au-grid">
//           {/* ── LEFT ── */}
//           <motion.div
//             className="au-left"
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, ease: "easeOut" }}
//           >
//             <h2 className="au-heading">
//               Empowering Your Success
//               <br />
//               <span className="au-heading-highlight">with Digital</span>
//               <br />
//               Expertise
//             </h2>
//             <div className="au-heading-line" />

//             {/* Images stack */}
//             <div className="au-images-wrap">
//               {/* Image 1 */}
//               <motion.div
//                 className="au-img-card au-img-card--top"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.35 }}
//               >
//                 <div className="au-img-inner au-img-1" />
//                 {/* floating icon */}
//                 <motion.div
//                   className="au-float-badge au-float-badge--tl"
//                   animate={{ y: [0, -8, 0] }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <FiBarChart2 />
//                 </motion.div>
//               </motion.div>

//               {/* Image 2 */}
//               <motion.div
//                 className="au-img-card au-img-card--bot"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.35 }}
//               >
//                 <div className="au-img-inner au-img-2" />
//                 <motion.div
//                   className="au-float-badge au-float-badge--br"
//                   animate={{ y: [0, 8, 0] }}
//                   transition={{
//                     duration: 3.4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <FiTarget />
//                 </motion.div>
//               </motion.div>

//               {/* Rotating badge */}
//               <div className="au-rotating-badge-wrap">
//                 <motion.div
//                   className="au-rotating-ring"
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 14,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 >
//                   <svg viewBox="0 0 200 200" className="au-ring-svg">
//                     <defs>
//                       <path
//                         id="circle-text"
//                         d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
//                       />
//                     </defs>
//                     <text className="au-ring-text">
//                       <textPath href="#circle-text" startOffset="0%">
//                         DRIVEN BY STRATEGY • FOCUSED ON RESULTS •
//                       </textPath>
//                     </text>
//                   </svg>
//                 </motion.div>
//                 <div className="au-badge-center">
//                   <span className="au-badge-icon">🔥</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* ── RIGHT ── */}
//           <motion.div
//             className="au-right"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, ease: "easeOut" }}
//           >
//             {/* Top badge */}
//             <div className="au-badge-pill">
//               <span className="au-badge-dot" />
//               ABOUT US
//               <span className="au-badge-dot" />
//             </div>

//             <div className="au-intro-block">
//               <div className="au-intro-icon-wrap">
//                 <FiTarget className="au-intro-icon" />
//               </div>
//               <p className="au-intro-tagline">
//                 We don't just build websites or run campaigns.{" "}
//                 <strong>
//                   We build digital solutions that{" "}
//                   <span className="au-orange">drive real growth.</span>
//                 </strong>
//               </p>
//             </div>

//             <p className="au-body-text">
//               At Brandmingo, we combine creativity, technology, and data to help
//               brands stand out, connect with the right audience, and achieve
//               measurable success in the digital world.
//             </p>

//             {/* Skills */}
//             <div className="au-skills">
//               {SKILLS.map((s, i) => (
//                 <ProgressBar key={s.label} {...s} index={i} />
//               ))}
//             </div>

//             {/* CTA */}
//             <motion.a
//               href="#"
//               className="au-cta-btn"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <span>More About Us</span>
//               <motion.span
//                 className="au-cta-arrow"
//                 initial={{ x: 0 }}
//                 whileHover={{ x: 4 }}
//               >
//                 <FiArrowRight />
//               </motion.span>
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* ── STATS ── */}
//         <div className="au-stats-bar">
//           {STATS.map((s, i) => (
//             <React.Fragment key={s.label}>
//               <StatCard {...s} index={i} />
//               {i < STATS.length - 1 && <div className="au-stats-divider" />}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   FiArrowRight,
//   FiBarChart2,
//   FiTarget,
//   FiTrendingUp,
//   FiUsers,
//   FiAward,
//   FiClock,
//   FiBriefcase,
//   FiZap,
//   FiLayers,
// } from "react-icons/fi";
// import arrow from "../../assets/images/icons/right-arrow-1-2.png";
// import "./AboutUsHome.css";

// /* ─── Data ───────────────────────────────────────────────── */
// const SKILLS = [
//   { label: "Marketing & Business Growth", value: 85, icon: <FiTrendingUp /> },
//   { label: "Creativity & Innovation", value: 90, icon: <FiZap /> },
//   { label: "Business & Project Management", value: 95, icon: <FiLayers /> },
// ];

// const STATS = [
//   { icon: <FiBriefcase />, number: "3K+", label: "Successful Projects" },
//   { icon: <FiUsers />, number: "200+", label: "Expert Team" },
//   { icon: <FiAward />, number: "350+", label: "Happy Customers" },
//   { icon: <FiClock />, number: "16+", label: "Years of Experience" },
// ];

// /* ─── Sub-components ──────────────────────────────────────── */

// function ProgressBar({ label, value, icon, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <motion.div
//       ref={ref}
//       className="au-skill-row"
//       initial={{ opacity: 0, y: 24 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.55, delay: index * 0.12 }}
//     >
//       <div className="au-skill-header">
//         <span className="au-skill-icon">{icon}</span>
//         <span className="au-skill-label">{label}</span>
//         <span className="au-skill-pct">{value}%</span>
//       </div>
//       <div className="au-bar-track">
//         <motion.div
//           className="au-bar-fill"
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${value}%` } : {}}
//           transition={{
//             duration: 1.1,
//             delay: 0.3 + index * 0.12,
//             ease: "easeOut",
//           }}
//         />
//         <motion.div
//           className="au-bar-glow"
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${value}%` } : {}}
//           transition={{
//             duration: 1.1,
//             delay: 0.3 + index * 0.12,
//             ease: "easeOut",
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// }

// function StatCard({ icon, number, label, index }) {
//   return (
//     <motion.div
//       className="au-stat-card"
//       initial={{ opacity: 0, y: 32 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{ duration: 0.55, delay: index * 0.1 }}
//       whileHover={{ y: -4, transition: { duration: 0.25 } }}
//     >
//       <span className="au-stat-icon">{icon}</span>
//       <span className="au-stat-number">{number}</span>
//       <span className="au-stat-label">{label}</span>
//     </motion.div>
//   );
// }

// /* ─── Main Component ─────────────────────────────────────── */
// export default function AboutUsHome() {
//   return (
//     <section className="au-section">
//       {/* ambient blobs only — no dot grid */}
//       <div className="au-blob au-blob-1" />
//       <div className="au-blob au-blob-2" />

//       <div className="au-container">
//         {/* ── TOP GRID ── */}
//         <div className="au-grid">
//           {/* ── LEFT ── */}
//           <motion.div
//             className="au-left"
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, ease: "easeOut" }}
//           >
//             <h2 className="au-heading">
//               Empowering Your Success
//               <br />
//               with{" "}
//               <span className="au-heading-highlight">Digital Expertise</span>
//             </h2>
//             <div className="au-heading-line" />

//             {/* Images stack */}
//             <div className="au-images-wrap">
//               {/* Image 1 */}
//               <motion.div
//                 className="au-img-card au-img-card--top"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.35 }}
//               >
//                 <div className="au-img-inner au-img-1" />
//                 <motion.div
//                   className="au-float-badge au-float-badge--tl"
//                   animate={{ y: [0, -8, 0] }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <FiBarChart2 />
//                 </motion.div>
//               </motion.div>

//               {/* Image 2 */}
//               <motion.div
//                 className="au-img-card au-img-card--bot"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.35 }}
//               >
//                 <div className="au-img-inner au-img-2" />
//                 <motion.div
//                   className="au-float-badge au-float-badge--br"
//                   animate={{ y: [0, 8, 0] }}
//                   transition={{
//                     duration: 3.4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <FiTarget />
//                 </motion.div>
//               </motion.div>

//               {/* Rotating badge */}
//               <div className="au-rotating-badge-wrap">
//                 <motion.div
//                   className="au-rotating-ring"
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 14,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 >
//                   <svg viewBox="0 0 200 200" className="au-ring-svg">
//                     <defs>
//                       <path
//                         id="circle-text"
//                         d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
//                       />
//                     </defs>
//                     <text className="au-ring-text">
//                       <textPath href="#circle-text" startOffset="0%">
//                         DRIVEN BY STRATEGY • FOCUSED ON RESULTS •
//                       </textPath>
//                     </text>
//                   </svg>
//                 </motion.div>
//                 <div className="au-badge-center">
//                   <span className="au-badge-icon">🔥</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* ── RIGHT ── */}
//           <motion.div
//             className="au-right"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, ease: "easeOut" }}
//           >
//             {/* Top badge */}
//             <div className="au-badge-pill">
//               <span className="au-badge-dot" />
//               ABOUT US
//               <span className="au-badge-dot" />
//             </div>

//             {/* Intro block — no border card, just icon + text */}
//             <div className="au-intro-block">
//               <span className="au-intro-icon-wrap">
//                 <FiTarget className="au-intro-icon" />
//               </span>
//               <p className="au-intro-tagline">
//                 We don't just build websites or run campaigns.{" "}
//                 <strong>
//                   We build digital solutions that{" "}
//                   <span className="au-orange">drive real growth.</span>
//                 </strong>
//               </p>
//             </div>

//             <p className="au-body-text">
//               At Brandmingo, we combine creativity, technology, and data to help
//               brands stand out, connect with the right audience, and achieve
//               measurable success in the digital world.
//             </p>

//             {/* Skills */}
//             <div className="au-skills">
//               {SKILLS.map((s, i) => (
//                 <ProgressBar key={s.label} {...s} index={i} />
//               ))}
//             </div>

//             {/* CTA — global theme button */}
//             <a href="#" className="btn-style-one">
//               <span className="btn-arrow-left">
//                 <img src={arrow} alt="" />
//               </span>
//               <span className="btn-title">More About Us</span>
//               <span className="btn-arrow-right">
//                 <img src={arrow} alt="" />
//               </span>
//             </a>
//           </motion.div>
//         </div>

//         {/* ── STATS BAR — white bg ── */}
//         <div className="au-stats-bar">
//           {STATS.map((s, i) => (
//             <React.Fragment key={s.label}>
//               <StatCard {...s} index={i} />
//               {i < STATS.length - 1 && <div className="au-stats-divider" />}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   FiBarChart2,
//   FiTarget,
//   FiTrendingUp,
//   FiUsers,
//   FiAward,
//   FiClock,
//   FiBriefcase,
//   FiZap,
//   FiLayers,
// } from "react-icons/fi";
// import arrow from "../../assets/images/icons/right-arrow-1-2.png";
// import "./AboutUsHome.css";

// /* ─── Data ───────────────────────────────────────────────── */
// const SKILLS = [
//   { label: "Marketing & Business Growth", value: 85, icon: <FiTrendingUp /> },
//   { label: "Creativity & Innovation", value: 90, icon: <FiZap /> },
//   { label: "Business & Project Management", value: 95, icon: <FiLayers /> },
// ];

// const STATS = [
//   { icon: <FiBriefcase />, number: "3K+", label: "Successful Projects" },
//   { icon: <FiUsers />, number: "200+", label: "Expert Team" },
//   { icon: <FiAward />, number: "350+", label: "Happy Customers" },
//   { icon: <FiClock />, number: "16+", label: "Years of Experience" },
// ];

// /* ─── Sub-components ──────────────────────────────────────── */

// function ProgressBar({ label, value, icon, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <motion.div
//       ref={ref}
//       className="au-skill-row"
//       initial={{ opacity: 0, y: 24 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.55, delay: index * 0.12 }}
//     >
//       <div className="au-skill-header">
//         <span className="au-skill-icon">{icon}</span>
//         <span className="au-skill-label">{label}</span>
//         <span className="au-skill-pct">{value}%</span>
//       </div>
//       <div className="au-bar-track">
//         <motion.div
//           className="au-bar-fill"
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${value}%` } : {}}
//           transition={{
//             duration: 1.1,
//             delay: 0.3 + index * 0.12,
//             ease: "easeOut",
//           }}
//         />
//         <motion.div
//           className="au-bar-glow"
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${value}%` } : {}}
//           transition={{
//             duration: 1.1,
//             delay: 0.3 + index * 0.12,
//             ease: "easeOut",
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// }

// function StatCard({ icon, number, label, index }) {
//   return (
//     <motion.div
//       className="au-stat-card"
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       whileHover={{ y: -3, transition: { duration: 0.22 } }}
//     >
//       <span className="au-stat-icon">{icon}</span>
//       <span className="au-stat-number">{number}</span>
//       <span className="au-stat-label">{label}</span>
//     </motion.div>
//   );
// }

// /* ─── Main Component ─────────────────────────────────────── */
// export default function AboutUsHome() {
//   return (
//     <section className="au-section">
//       {/* ambient blobs */}
//       <div className="au-blob au-blob-1" />
//       <div className="au-blob au-blob-2" />

//       <div className="au-container">
//         {/* ── ABOUT US badge — outside grid, centered ── */}
//         <motion.div
//           className="au-section-badge"
//           initial={{ opacity: 0, y: -16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="au-badge-pill">
//             <span className="au-badge-dot" />
//             ABOUT US
//             <span className="au-badge-dot" />
//           </div>
//         </motion.div>

//         {/* ── TOP GRID ── */}
//         <div className="au-grid">
//           {/* ── LEFT ── */}
//           <motion.div
//             className="au-left"
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, ease: "easeOut" }}
//           >
//             {/* Two-line heading */}
//             <h2 className="au-heading">
//               Empowering Your Success
//               <br />
//               with{" "}
//               <span className="au-heading-highlight">Digital Expertise</span>
//             </h2>
//             <div className="au-heading-line" />

//             {/* Images stack — top to bottom, equal size */}
//             <div className="au-images-wrap">
//               {/* Image 1 */}
//               <motion.div
//                 className="au-img-card au-img-card--top"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.35 }}
//               >
//                 <div className="au-img-inner au-img-1" />
//                 <motion.div
//                   className="au-float-badge au-float-badge--tl"
//                   animate={{ y: [0, -8, 0] }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <FiBarChart2 />
//                 </motion.div>
//               </motion.div>

//               {/* Image 2 */}
//               <motion.div
//                 className="au-img-card au-img-card--bot"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.35 }}
//               >
//                 <div className="au-img-inner au-img-2" />
//                 <motion.div
//                   className="au-float-badge au-float-badge--br"
//                   animate={{ y: [0, 8, 0] }}
//                   transition={{
//                     duration: 3.4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <FiTarget />
//                 </motion.div>
//               </motion.div>

//               {/* Rotating badge — centered between the two images */}
//               <div className="au-rotating-badge-wrap">
//                 <motion.div
//                   className="au-rotating-ring"
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 14,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 >
//                   <svg viewBox="0 0 200 200" className="au-ring-svg">
//                     <defs>
//                       <path
//                         id="circle-text"
//                         d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
//                       />
//                     </defs>
//                     <text className="au-ring-text">
//                       <textPath href="#circle-text" startOffset="0%">
//                         DRIVEN BY STRATEGY • FOCUSED ON RESULTS •
//                       </textPath>
//                     </text>
//                   </svg>
//                 </motion.div>
//                 <div className="au-badge-center">
//                   <span className="au-badge-icon">🔥</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* ── RIGHT ── */}
//           <motion.div
//             className="au-right"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, ease: "easeOut" }}
//           >
//             {/* Intro block */}
//             <div className="au-intro-block">
//               <span className="au-intro-icon-wrap">
//                 <FiTarget className="au-intro-icon" />
//               </span>
//               <p className="au-intro-tagline">
//                 We don't just build websites or run campaigns.{" "}
//                 <strong>
//                   We build digital solutions that{" "}
//                   <span className="au-orange">drive real growth.</span>
//                 </strong>
//               </p>
//             </div>

//             <p className="au-body-text">
//               At Brandmingo, we combine creativity, technology, and data to help
//               brands stand out, connect with the right audience, and achieve
//               measurable success in the digital world.
//             </p>

//             {/* Skills */}
//             <div className="au-skills">
//               {SKILLS.map((s, i) => (
//                 <ProgressBar key={s.label} {...s} index={i} />
//               ))}
//             </div>

//             {/* CTA — ref-style button, NOT full width */}
//             <a href="#" className="btn-style-one">
//               <span className="btn-arrow-left">
//                 <img src={arrow} alt="" />
//               </span>
//               <span className="btn-title">More About Us</span>
//               <span className="btn-arrow-right">
//                 <img src={arrow} alt="" />
//               </span>
//             </a>
//           </motion.div>
//         </div>

//         {/* ── STATS BAR ── */}
//         <div className="au-stats-bar">
//           {STATS.map((s, i) => (
//             <React.Fragment key={s.label}>
//               <StatCard {...s} index={i} />
//               {i < STATS.length - 1 && <div className="au-stats-divider" />}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiBarChart2,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiClock,
  FiBriefcase,
  FiZap,
  FiLayers,
} from "react-icons/fi";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import "./AboutUsHome.css";

/* ─── Data ───────────────────────────────────────────────── */
const SKILLS = [
  { label: "Marketing & Business Growth", value: 85, icon: <FiTrendingUp /> },
  { label: "Creativity & Innovation", value: 90, icon: <FiZap /> },
  { label: "Business & Project Management", value: 95, icon: <FiLayers /> },
];

const STATS = [
  { icon: <FiBriefcase />, number: "3K+", label: "Successful Projects" },
  { icon: <FiUsers />, number: "200+", label: "Expert Team" },
  { icon: <FiAward />, number: "350+", label: "Happy Customers" },
  { icon: <FiClock />, number: "16+", label: "Years of Experience" },
];

/* ─── Sub-components ──────────────────────────────────────── */

function ProgressBar({ label, value, icon, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="au-skill-row"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
    >
      <div className="au-skill-header">
        <span className="au-skill-icon">{icon}</span>
        <span className="au-skill-label">{label}</span>
        <span className="au-skill-pct">{value}%</span>
      </div>
      <div className="au-bar-track">
        <motion.div
          className="au-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{
            duration: 1.1,
            delay: 0.3 + index * 0.12,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="au-bar-glow"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{
            duration: 1.1,
            delay: 0.3 + index * 0.12,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}

function StatCard({ icon, number, label, index }) {
  return (
    <motion.div
      className="au-stat-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -3, transition: { duration: 0.22 } }}
    >
      <span className="au-stat-icon">{icon}</span>
      <span className="au-stat-number">{number}</span>
      <span className="au-stat-label">{label}</span>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function AboutUsHome() {
  return (
    <section className="au-section">
      {/* ambient blobs */}
      <div className="au-blob au-blob-1" />
      <div className="au-blob au-blob-2" />
      <div className="au-blob au-blob-3" />

      {/* dot grid overlay */}
      <div className="au-dot-grid" />

      <div className="au-container">
        {/* ── ABOUT US badge — outside grid, centered ── */}
        <motion.div
          className="au-section-badge"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="au-badge-pill">
            <span className="au-badge-dot" />
            ABOUT US
            <span className="au-badge-dot" />
          </div>
        </motion.div>

        {/* ── TOP GRID: Left images | Center badge | Right content ── */}
        <div className="au-grid">
          {/* ── LEFT: Images stacked ── */}
          <motion.div
            className="au-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            {/* Heading */}
            <h2 className="au-heading">
              Empowering Your Success
              <br />
              with{" "}
              <span className="au-heading-highlight">Digital Expertise</span>
            </h2>
            <div className="au-heading-line" />

            {/* Stacked images */}
            <div className="au-images-wrap">
              {/* Image 1 */}
              <motion.div
                className="au-img-card au-img-card--top"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <div className="au-img-inner au-img-1" />
                {/* corner accent */}
                <div className="au-img-corner au-img-corner--tl" />
                <div className="au-img-corner au-img-corner--br" />
                <motion.div
                  className="au-float-badge au-float-badge--tl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiBarChart2 />
                </motion.div>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="au-img-card au-img-card--bot"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <div className="au-img-inner au-img-2" />
                <div className="au-img-corner au-img-corner--tl" />
                <div className="au-img-corner au-img-corner--br" />
                <motion.div
                  className="au-float-badge au-float-badge--br"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiTarget />
                </motion.div>
              </motion.div>

              {/* ── Rotating badge — overlapping between the two cards ── */}
              <div className="au-rotating-badge-wrap">
                {/* Outer decorative ring */}
                <div className="au-ring-outer" />
                {/* Dashed ring */}
                <div className="au-ring-dashed" />

                <motion.div
                  className="au-rotating-ring"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg viewBox="0 0 200 200" className="au-ring-svg">
                    <defs>
                      <path
                        id="circle-text"
                        d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text className="au-ring-text">
                      <textPath href="#circle-text" startOffset="0%">
                        DRIVEN BY STRATEGY • FOCUSED ON RESULTS •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                <motion.div
                  className="au-badge-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="au-badge-icon">🔥</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            className="au-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            {/* Intro block */}
            <div className="au-intro-block">
              <span className="au-intro-icon-wrap">
                <FiTarget className="au-intro-icon" />
              </span>
              <p className="au-intro-tagline">
                We don't just build websites or run campaigns.{" "}
                <strong>
                  We build digital solutions that{" "}
                  <span className="au-orange">drive real growth.</span>
                </strong>
              </p>
            </div>

            <p className="au-body-text">
              At Brandmingo, we combine creativity, technology, and data to help
              brands stand out, connect with the right audience, and achieve
              measurable success in the digital world.
            </p>

            {/* Divider */}
            <div className="au-right-divider" />

            {/* Skills */}
            <div className="au-skills">
              {SKILLS.map((s, i) => (
                <ProgressBar key={s.label} {...s} index={i} />
              ))}
            </div>

            {/* CTA */}
            <a href="#" className="btn-style-one">
              <span className="btn-arrow-left">
                <img src={arrow} alt="" />
              </span>
              <span className="btn-title">More About Us</span>
              <span className="btn-arrow-right">
                <img src={arrow} alt="" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* ── STATS BAR ── */}
        <div className="au-stats-bar">
          {STATS.map((s, i) => (
            <React.Fragment key={s.label}>
              <StatCard {...s} index={i} />
              {i < STATS.length - 1 && <div className="au-stats-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

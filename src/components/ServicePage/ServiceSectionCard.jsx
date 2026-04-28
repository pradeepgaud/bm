// import React from "react";
// import { useNavigate } from "react-router-dom";

// /* ─── 3D Premium Icons ─────────────────────────────── */
// const Icon3D = ({ type }) => {
//   const icons = {
//     webdev: (
//       <svg
//         viewBox="0 0 56 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         width="54"
//         height="54"
//       >
//         <defs>
//           <linearGradient id="g-wd-f" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#FF9A5C" />
//             <stop offset="100%" stopColor="#FF5500" />
//           </linearGradient>
//           <linearGradient id="g-wd-s" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#B83D00" />
//             <stop offset="100%" stopColor="#7A2900" />
//           </linearGradient>
//           <linearGradient id="g-wd-t" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#FFBD95" />
//             <stop offset="100%" stopColor="#FF7733" />
//           </linearGradient>
//         </defs>
//         <rect x="8" y="14" width="36" height="26" rx="3" fill="url(#g-wd-f)" />
//         <path d="M44 14 L50 9 L50 35 L44 40 Z" fill="url(#g-wd-s)" />
//         <path d="M8 14 L14 9 L50 9 L44 14 Z" fill="url(#g-wd-t)" />
//         <rect
//           x="11"
//           y="18"
//           width="30"
//           height="18"
//           rx="2"
//           fill="#1a0a00"
//           opacity="0.85"
//         />
//         <line
//           x1="14"
//           y1="23"
//           x2="20"
//           y2="23"
//           stroke="#FF9A5C"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//         />
//         <line
//           x1="22"
//           y1="23"
//           x2="30"
//           y2="23"
//           stroke="#FF6B1E"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//         />
//         <line
//           x1="14"
//           y1="27"
//           x2="26"
//           y2="27"
//           stroke="#FF9A5C"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//         />
//         <line
//           x1="14"
//           y1="31"
//           x2="22"
//           y2="31"
//           stroke="#FF6B1E"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//         />
//         <line
//           x1="24"
//           y1="31"
//           x2="32"
//           y2="31"
//           stroke="#FF9A5C"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//         />
//         <rect x="22" y="40" width="8" height="5" fill="url(#g-wd-s)" />
//         <rect
//           x="17"
//           y="45"
//           width="18"
//           height="3"
//           rx="1.5"
//           fill="url(#g-wd-s)"
//         />
//       </svg>
//     ),
//     ads: (
//       <svg
//         viewBox="0 0 56 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         width="54"
//         height="54"
//       >
//         <defs>
//           <linearGradient id="g-ad-f" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#FF9A5C" />
//             <stop offset="100%" stopColor="#FF5500" />
//           </linearGradient>
//           <linearGradient id="g-ad-s" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#B83D00" />
//             <stop offset="100%" stopColor="#7A2900" />
//           </linearGradient>
//           <linearGradient id="g-ad-t" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#FFBD95" />
//             <stop offset="100%" stopColor="#FF7733" />
//           </linearGradient>
//         </defs>
//         <path
//           d="M10 20 L10 34 L18 34 L36 42 L36 12 L18 20 Z"
//           fill="url(#g-ad-f)"
//         />
//         <path d="M36 12 L42 8 L42 46 L36 42 Z" fill="url(#g-ad-s)" />
//         <path d="M10 20 L16 16 L36 12 L18 20 Z" fill="url(#g-ad-t)" />
//         <rect x="10" y="20" width="8" height="14" rx="1" fill="#B83D00" />
//         <path
//           d="M40 20 Q46 27 40 34"
//           stroke="#FFBD95"
//           strokeWidth="2"
//           strokeLinecap="round"
//           fill="none"
//         />
//         <path
//           d="M43 16 Q52 27 43 38"
//           stroke="#FF9A5C"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           fill="none"
//           opacity="0.5"
//         />
//         <path d="M13 34 L16 44 L20 44 L17 34" fill="url(#g-ad-s)" />
//         <circle cx="44" cy="13" r="2" fill="#FFBD95" opacity="0.7" />
//         <circle cx="48" cy="22" r="1.2" fill="#FFBD95" opacity="0.5" />
//       </svg>
//     ),
//     social: (
//       <svg
//         viewBox="0 0 56 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         width="54"
//         height="54"
//       >
//         <defs>
//           <linearGradient id="g-sc-f" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#FF9A5C" />
//             <stop offset="100%" stopColor="#FF5500" />
//           </linearGradient>
//           <linearGradient id="g-sc-s" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#B83D00" />
//             <stop offset="100%" stopColor="#7A2900" />
//           </linearGradient>
//         </defs>
//         <ellipse cx="28" cy="11" rx="7" ry="7" fill="url(#g-sc-f)" />
//         <path d="M35 11 L39 8 L39 14 L35 17 Z" fill="url(#g-sc-s)" />
//         <circle cx="28" cy="11" r="3" fill="#fff" opacity="0.2" />
//         <ellipse cx="11" cy="30" rx="6" ry="6" fill="url(#g-sc-f)" />
//         <path d="M17 30 L21 27 L21 33 L17 36 Z" fill="url(#g-sc-s)" />
//         <ellipse cx="45" cy="30" rx="6" ry="6" fill="url(#g-sc-f)" />
//         <ellipse cx="28" cy="47" rx="6" ry="6" fill="url(#g-sc-f)" />
//         <path d="M34 47 L38 44 L38 50 L34 53 Z" fill="url(#g-sc-s)" />
//         <line
//           x1="22"
//           y1="16"
//           x2="17"
//           y2="26"
//           stroke="#FF9A5C"
//           strokeWidth="2.2"
//           strokeLinecap="round"
//           opacity="0.8"
//         />
//         <line
//           x1="34"
//           y1="16"
//           x2="41"
//           y2="26"
//           stroke="#FF9A5C"
//           strokeWidth="2.2"
//           strokeLinecap="round"
//           opacity="0.8"
//         />
//         <line
//           x1="17"
//           y1="34"
//           x2="23"
//           y2="43"
//           stroke="#FF9A5C"
//           strokeWidth="2.2"
//           strokeLinecap="round"
//           opacity="0.8"
//         />
//         <line
//           x1="41"
//           y1="34"
//           x2="33"
//           y2="43"
//           stroke="#FF9A5C"
//           strokeWidth="2.2"
//           strokeLinecap="round"
//           opacity="0.8"
//         />
//       </svg>
//     ),
//     uiux: (
//       <svg
//         viewBox="0 0 56 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         width="54"
//         height="54"
//       >
//         <defs>
//           <linearGradient id="g-ui-f" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#FF9A5C" />
//             <stop offset="100%" stopColor="#FF5500" />
//           </linearGradient>
//           <linearGradient id="g-ui-s" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#B83D00" />
//             <stop offset="100%" stopColor="#7A2900" />
//           </linearGradient>
//           <linearGradient id="g-ui-t" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#FFBD95" />
//             <stop offset="100%" stopColor="#FF7733" />
//           </linearGradient>
//         </defs>
//         <rect x="8" y="10" width="34" height="38" rx="4" fill="url(#g-ui-f)" />
//         <path d="M42 10 L48 6 L48 44 L42 48 Z" fill="url(#g-ui-s)" />
//         <path d="M8 10 L14 6 L48 6 L42 10 Z" fill="url(#g-ui-t)" />
//         <rect
//           x="11"
//           y="14"
//           width="28"
//           height="30"
//           rx="2"
//           fill="#1a0a00"
//           opacity="0.9"
//         />
//         <rect
//           x="13"
//           y="16"
//           width="12"
//           height="10"
//           rx="1"
//           fill="#FF6B1E"
//           opacity="0.5"
//         />
//         <rect
//           x="27"
//           y="16"
//           width="10"
//           height="10"
//           rx="1"
//           fill="#FF9A5C"
//           opacity="0.4"
//         />
//         <rect
//           x="13"
//           y="28"
//           width="24"
//           height="5"
//           rx="1"
//           fill="#FF6B1E"
//           opacity="0.3"
//         />
//         <rect
//           x="13"
//           y="35"
//           width="10"
//           height="5"
//           rx="1"
//           fill="#FF9A5C"
//           opacity="0.35"
//         />
//         <rect
//           x="25"
//           y="35"
//           width="12"
//           height="5"
//           rx="1"
//           fill="#FF6B1E"
//           opacity="0.35"
//         />
//         <path
//           d="M30 20 L30 29 L32.5 25.5 L34.5 30 L35.5 29.5 L33.5 25 L36.5 25 Z"
//           fill="#fff"
//           opacity="0.85"
//         />
//       </svg>
//     ),
//     seo: (
//       <svg
//         viewBox="0 0 56 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         width="54"
//         height="54"
//       >
//         <defs>
//           <linearGradient id="g-se-f" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#FF9A5C" />
//             <stop offset="100%" stopColor="#FF5500" />
//           </linearGradient>
//           <linearGradient id="g-se-s" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#B83D00" />
//             <stop offset="100%" stopColor="#7A2900" />
//           </linearGradient>
//           <linearGradient id="g-se-t" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#FFBD95" />
//             <stop offset="100%" stopColor="#FF7733" />
//           </linearGradient>
//         </defs>
//         <circle cx="23" cy="23" r="14" fill="url(#g-se-f)" />
//         <path
//           d="M37 23 A14 14 0 0 1 23 37 L23 30 A7 7 0 0 0 30 23 Z"
//           fill="url(#g-se-s)"
//           opacity="0.8"
//         />
//         <circle cx="23" cy="23" r="9.5" fill="#1a0a00" opacity="0.88" />
//         <line
//           x1="18"
//           y1="23"
//           x2="28"
//           y2="23"
//           stroke="#FF9A5C"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//         />
//         <line
//           x1="23"
//           y1="18"
//           x2="23"
//           y2="28"
//           stroke="#FF9A5C"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//         />
//         <circle
//           cx="23"
//           cy="23"
//           r="4.5"
//           stroke="#FF6B1E"
//           strokeWidth="1"
//           fill="none"
//           opacity="0.5"
//         />
//         <rect
//           x="33"
//           y="33"
//           width="15"
//           height="6"
//           rx="3"
//           transform="rotate(45 33 33)"
//           fill="url(#g-se-f)"
//         />
//         <rect
//           x="36"
//           y="33"
//           width="5"
//           height="6"
//           rx="2"
//           transform="rotate(45 36 33)"
//           fill="url(#g-se-s)"
//         />
//         <circle cx="14" cy="14" r="2" fill="#FFBD95" opacity="0.7" />
//         <circle cx="34" cy="11" r="1.3" fill="#FFBD95" opacity="0.5" />
//       </svg>
//     ),
//     ecommerce: (
//       <svg
//         viewBox="0 0 56 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         width="54"
//         height="54"
//       >
//         <defs>
//           <linearGradient id="g-ec-f" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#FF9A5C" />
//             <stop offset="100%" stopColor="#FF5500" />
//           </linearGradient>
//           <linearGradient id="g-ec-s" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#B83D00" />
//             <stop offset="100%" stopColor="#7A2900" />
//           </linearGradient>
//           <linearGradient id="g-ec-t" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#FFBD95" />
//             <stop offset="100%" stopColor="#FF7733" />
//           </linearGradient>
//         </defs>
//         <path d="M14 22 L16 46 L42 46 L44 22 Z" fill="url(#g-ec-f)" />
//         <path d="M44 22 L48 20 L48 44 L42 46 Z" fill="url(#g-ec-s)" />
//         <path d="M14 22 L18 20 L48 20 L44 22 Z" fill="url(#g-ec-t)" />
//         <path
//           d="M20 22 L20 16 Q20 10 28 10 Q36 10 36 16 L36 22"
//           stroke="url(#g-ec-f)"
//           strokeWidth="3.5"
//           fill="none"
//           strokeLinecap="round"
//         />
//         <path
//           d="M20 22 L20 16 Q20 10 28 10 Q36 10 36 16 L36 22"
//           stroke="#FFBD95"
//           strokeWidth="1.5"
//           fill="none"
//           strokeLinecap="round"
//           opacity="0.4"
//         />
//         <rect
//           x="21"
//           y="30"
//           width="16"
//           height="10"
//           rx="2"
//           fill="#1a0a00"
//           opacity="0.55"
//         />
//         <line
//           x1="25"
//           y1="34"
//           x2="33"
//           y2="34"
//           stroke="#FFBD95"
//           strokeWidth="1.3"
//           strokeLinecap="round"
//         />
//         <line
//           x1="25"
//           y1="37"
//           x2="30"
//           y2="37"
//           stroke="#FF9A5C"
//           strokeWidth="1.3"
//           strokeLinecap="round"
//         />
//         <circle cx="40" cy="28" r="1.8" fill="#FFBD95" opacity="0.6" />
//       </svg>
//     ),
//     brand: (
//       <svg
//         viewBox="0 0 56 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         width="54"
//         height="54"
//       >
//         <defs>
//           <linearGradient id="g-br-f" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#FF9A5C" />
//             <stop offset="100%" stopColor="#FF5500" />
//           </linearGradient>
//           <linearGradient id="g-br-s" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#B83D00" />
//             <stop offset="100%" stopColor="#7A2900" />
//           </linearGradient>
//           <linearGradient id="g-br-t" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#FFBD95" />
//             <stop offset="100%" stopColor="#FF7733" />
//           </linearGradient>
//         </defs>
//         <path d="M28 7 L44 20 L36 47 L20 47 L12 20 Z" fill="url(#g-br-f)" />
//         <path d="M44 20 L50 16 L42 43 L36 47 Z" fill="url(#g-br-s)" />
//         <path d="M28 7 L34 3 L50 16 L44 20 Z" fill="url(#g-br-t)" />
//         <path d="M28 7 L44 20 L28 19 Z" fill="#fff" opacity="0.12" />
//         <path d="M28 19 L44 20 L36 47 Z" fill="#000" opacity="0.1" />
//         <path d="M28 19 L12 20 L20 47 Z" fill="#fff" opacity="0.07" />
//         <line
//           x1="12"
//           y1="20"
//           x2="44"
//           y2="20"
//           stroke="#FFBD95"
//           strokeWidth="1"
//           opacity="0.3"
//         />
//         <circle cx="47" cy="10" r="2.5" fill="#FFBD95" opacity="0.7" />
//         <circle cx="10" cy="12" r="1.8" fill="#FFBD95" opacity="0.5" />
//         <circle cx="49" cy="38" r="1.2" fill="#FFBD95" opacity="0.4" />
//       </svg>
//     ),
//   };
//   return icons[type] ?? null;
// };

// /* ─── Arrow SVG ─────────────────────────────────────── */
// const ArrowSvg = () => (
//   <svg width="19" height="16" viewBox="0 0 19 16">
//     <path
//       d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
//       stroke="#FF6B1E"
//       strokeWidth="1.5"
//     />
//   </svg>
// );

// /* ─── Services Data ─────────────────────────────────── */
// const SERVICES = [
//   {
//     num: "01",
//     iconType: "webdev",
//     title: "Web Development",
//     path: "/web-development-new",
//     desc: "Build fast, responsive websites designed to convert visitors into customers.",
//   },
//   {
//     num: "02",
//     iconType: "ads",
//     title: "Ads And Campaigns",
//     path: "/ads-and-campaigns",
//     desc: "Run targeted ad campaigns that drive quality leads and maximize ROI.",
//   },
//   {
//     num: "03",
//     iconType: "social",
//     title: "Social Media Management",
//     path: "/social-media-management",
//     desc: "Grow your brand presence with engaging content and consistent social strategies.",
//   },
//   {
//     num: "04",
//     iconType: "uiux",
//     title: "UI/UX And Audits",
//     path: "/ui-ux-audits",
//     desc: "Improve user experience with data-driven audits and optimized design flow.",
//   },
//   {
//     num: "05",
//     iconType: "seo",
//     title: "SEO Optimizing",
//     path: "/seo-optimizing",
//     desc: "Boost your visibility on Google with strategic SEO and performance tracking.",
//   },
//   {
//     num: "06",
//     iconType: "ecommerce",
//     title: "Ecommerce Management",
//     path: "/ecommerce-management",
//     desc: "Manage and scale your online store with optimized listings and conversion strategies.",
//   },
//   {
//     num: "07",
//     iconType: "brand",
//     title: "Brand Identity",
//     path: "/brand-identity",
//     desc: "Create a strong brand image with impactful design and consistent visual identity.",
//   },
// ];

// /* ─── Scoped Styles ─────────────────────────────────── */
// const CSS = `
//   .ssc-card {
//     position: relative;
//     height: 100%;
//     background: #111111;
//     border: 1px solid rgba(255,255,255,0.07);
//     border-radius: 18px;
//     padding: 32px 28px 28px;
//     cursor: pointer;
//     overflow: hidden;
//     transition: background .35s, border-color .35s, transform .35s, box-shadow .35s;
//   }
//   .ssc-card::after {
//     content: "";
//     position: absolute; inset: 0;
//     background: linear-gradient(155deg, rgba(255,107,30,0.05) 0%, transparent 50%);
//     opacity: 0;
//     transition: opacity .35s;
//     pointer-events: none;
//     border-radius: 18px;
//   }
//   .ssc-card:hover {
//     background: #161616;
//     border-color: rgba(255,107,30,0.35);
//     transform: translateY(-8px);
//     box-shadow: 0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,30,0.1), inset 0 1px 0 rgba(255,255,255,0.04);
//   }
//   .ssc-card:hover::after { opacity: 1; }

//   /* Ghost number */
//   .ssc-num {
//     position: absolute; top: 18px; right: 24px;
//     font-size: 46px; font-weight: 800;
//     color: rgba(255,255,255,0.035);
//     line-height: 1; letter-spacing: -2px;
//     user-select: none;
//     transition: color .35s;
//     font-family: inherit;
//   }
//   .ssc-card:hover .ssc-num { color: rgba(255,107,30,0.07); }

//   /* Pulsing dot */
//   .ssc-dot {
//     width: 7px; height: 7px; border-radius: 50%;
//     background: #FF6B1E;
//     margin-bottom: 22px;
//     position: relative; z-index: 1;
//   }
//   .ssc-dot::after {
//     content: "";
//     position: absolute; inset: -3px;
//     border-radius: 50%;
//     background: rgba(255,107,30,0.3);
//     animation: ssc-ping 2.2s infinite;
//   }
//   @keyframes ssc-ping {
//     0%,100% { transform: scale(1); opacity: .6; }
//     55% { transform: scale(2.2); opacity: 0; }
//   }

//   /* Icon box */
//   .ssc-ico {
//     width: 74px; height: 74px; border-radius: 17px;
//     background: rgba(255,107,30,0.07);
//     border: 1px solid rgba(255,107,30,0.14);
//     display: flex; align-items: center; justify-content: center;
//     margin-bottom: 24px;
//     position: relative; z-index: 1;
//     transition: all .4s cubic-bezier(0.34, 1.56, 0.64, 1);
//   }
//   .ssc-card:hover .ssc-ico {
//     background: rgba(255,107,30,0.13);
//     border-color: rgba(255,107,30,0.4);
//     box-shadow: 0 12px 36px rgba(255,107,30,0.22);
//     transform: translateY(-4px) scale(1.05);
//   }

//   /* Text */
//   .ssc-title {
//     font-size: 19px; font-weight: 700; color: #fff;
//     margin-bottom: 10px; line-height: 1.3;
//     position: relative; z-index: 1;
//   }
//   .ssc-desc {
//     font-size: 13.5px; color: rgba(255,255,255,0.42);
//     line-height: 1.72; margin-bottom: 28px;
//     position: relative; z-index: 1;
//   }

//   /* CTA */
//   .ssc-link {
//     display: inline-flex; align-items: center; gap: 8px;
//     font-size: 13px; font-weight: 600;
//     color: #FF6B1E; letter-spacing: .3px;
//     position: relative; z-index: 1;
//     transition: gap .25s;
//   }
//   .ssc-card:hover .ssc-link { gap: 13px; }

//   /* Bottom shine bar */
//   .ssc-bar {
//     position: absolute; bottom: 0; left: 0; right: 0;
//     height: 2px;
//     background: linear-gradient(90deg, transparent 0%, #FF6B1E 50%, transparent 100%);
//     opacity: 0; transition: opacity .35s;
//     border-radius: 0 0 18px 18px;
//   }
//   .ssc-card:hover .ssc-bar { opacity: 1; }

//   /* Corner accent */
//   .ssc-corner {
//     position: absolute; top: 0; right: 0;
//     width: 60px; height: 60px;
//     background: linear-gradient(225deg, rgba(255,107,30,0.08) 0%, transparent 60%);
//     border-radius: 0 18px 0 0;
//     opacity: 0; transition: opacity .35s;
//     pointer-events: none;
//   }
//   .ssc-card:hover .ssc-corner { opacity: 1; }
// `;

// /* ─── Component ─────────────────────────────────────── */
// const ServiceSectionCard = () => {
//   const navigate = useNavigate();

//   const go = (path) => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//     navigate(path);
//   };

//   return (
//     <>
//       <style>{CSS}</style>
//       <section className="service-section pt-120 mt-15 mb-15 pb-120">
//         <div className="auto-container">
//           <div className="row g-3">
//             {SERVICES.map((s, i) => (
//               <div
//                 key={i}
//                 className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
//                 data-wow-delay={`${0.1 + i * 0.08}s`}
//               >
//                 <div className="ssc-card" onClick={() => go(s.path)}>
//                   {/* ghost number */}
//                   <span className="ssc-num">{s.num}</span>

//                   {/* corner glow */}
//                   <div className="ssc-corner" />

//                   {/* pulsing dot */}
//                   <div className="ssc-dot" />

//                   {/* 3D icon */}
//                   <div className="ssc-ico">
//                     <Icon3D type={s.iconType} />
//                   </div>

//                   {/* content */}
//                   <h4 className="ssc-title">{s.title}</h4>
//                   <p className="ssc-desc">{s.desc}</p>
//                   <span className="ssc-link">
//                     View Details <ArrowSvg />
//                   </span>

//                   {/* bottom shine */}
//                   <div className="ssc-bar" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceSectionCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/* ─── Lottie Icon Map ───────────────────────────────── */
const LOTTIE_SRCS = {
  webdev:
    "https://lottie.host/96418d4d-e6c8-4404-aee3-426b7504a4f4/3FEIvrd95G.lottie",
  ads: "https://lottie.host/ae87bd6f-cca4-4bbf-9cd5-550685b9c756/8uvxORn8Nt.lottie",
  social:
    "https://lottie.host/78616e9b-fab8-4eb5-9aaf-3e72512dc386/vsOWoP2AaD.lottie",
  uiux: "https://lottie.host/ddc6980e-69c2-49d3-b088-960b506187f2/1ffIEtNJ8w.lottie",
  seo: "https://lottie.host/66ac1cbb-d906-44b8-8725-f5aaa788f549/LnWeYDVb96.lottie",
  ecommerce:
    "https://lottie.host/631d8e50-0d72-4394-9b70-f8238c8fcabe/DzBa2qZPBS.lottie",
  brand:
    "https://lottie.host/f0ecf788-6465-47be-a8f8-f21feb4e662e/Jy1zxAcsMq.lottie",
};

const LottieIcon = ({ type }) => (
  <DotLottieReact
    src={LOTTIE_SRCS[type]}
    loop
    autoplay
    style={{ width: 54, height: 54 }}
  />
);

/* ─── Arrow SVG ─────────────────────────────────────── */
const ArrowSvg = () => (
  <svg width="19" height="16" viewBox="0 0 19 16">
    <path
      d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
      stroke="#FF6B1E"
      strokeWidth="1.5"
    />
  </svg>
);

/* ─── Services Data ─────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    iconType: "webdev",
    title: "Web Development",
    path: "/web-development-new",
    desc: "Build fast, responsive websites designed to convert visitors into customers.",
  },
  {
    num: "02",
    iconType: "ads",
    title: "Ads And Campaigns",
    path: "/ads-and-campaigns",
    desc: "Run targeted ad campaigns that drive quality leads and maximize ROI.",
  },
  {
    num: "03",
    iconType: "social",
    title: "Social Media Management",
    path: "/social-media-management",
    desc: "Grow your brand presence with engaging content and consistent social strategies.",
  },
  {
    num: "04",
    iconType: "uiux",
    title: "UI/UX And Audits",
    path: "/ui-ux-audits",
    desc: "Improve user experience with data-driven audits and optimized design flow.",
  },
  {
    num: "05",
    iconType: "seo",
    title: "SEO Optimizing",
    path: "/seo-optimizing",
    desc: "Boost your visibility on Google with strategic SEO and performance tracking.",
  },
  {
    num: "06",
    iconType: "ecommerce",
    title: "Ecommerce Management",
    path: "/ecommerce-management",
    desc: "Manage and scale your online store with optimized listings and conversion strategies.",
  },
  {
    num: "07",
    iconType: "brand",
    title: "Brand Identity",
    path: "/brand-identity",
    desc: "Create a strong brand image with impactful design and consistent visual identity.",
  },
];

/* ─── Scoped Styles ─────────────────────────────────── */
const CSS = `
  .ssc-card {
    position: relative;
    height: 100%;
    background: #111111;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 18px;
    padding: 32px 28px 28px;
    cursor: pointer;
    overflow: hidden;
    transition: background .35s, border-color .35s, transform .35s, box-shadow .35s;
  }
  .ssc-card::after {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(155deg, rgba(255,107,30,0.05) 0%, transparent 50%);
    opacity: 0;
    transition: opacity .35s;
    pointer-events: none;
    border-radius: 18px;
  }
  .ssc-card:hover {
    background: #161616;
    border-color: rgba(255,107,30,0.35);
    transform: translateY(-8px);
    box-shadow: 0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,30,0.1), inset 0 1px 0 rgba(255,255,255,0.04);
  }
  .ssc-card:hover::after { opacity: 1; }

  .ssc-num {
    position: absolute; top: 18px; right: 24px;
    font-size: 46px; font-weight: 800;
    color: rgba(255,255,255,0.035);
    line-height: 1; letter-spacing: -2px;
    user-select: none;
    transition: color .35s;
    font-family: inherit;
  }
  .ssc-card:hover .ssc-num { color: rgba(255,107,30,0.07); }

  .ssc-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: #FF6B1E;
    margin-bottom: 22px;
    position: relative; z-index: 1;
  }
  .ssc-dot::after {
    content: "";
    position: absolute; inset: -3px;
    border-radius: 50%;
    background: rgba(255,107,30,0.3);
    animation: ssc-ping 2.2s infinite;
  }
  @keyframes ssc-ping {
    0%,100% { transform: scale(1); opacity: .6; }
    55% { transform: scale(2.2); opacity: 0; }
  }

  .ssc-ico {
    width: 74px; height: 74px; border-radius: 17px;
    background: rgba(255,107,30,0.07);
    border: 1px solid rgba(255,107,30,0.14);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 24px;
    position: relative; z-index: 1;
    overflow: hidden;
    transition: all .4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .ssc-card:hover .ssc-ico {
    background: rgba(255,107,30,0.13);
    border-color: rgba(255,107,30,0.4);
    box-shadow: 0 12px 36px rgba(255,107,30,0.22);
    transform: translateY(-4px) scale(1.05);
  }

  .ssc-title {
    font-size: 19px; font-weight: 700; color: #fff;
    margin-bottom: 10px; line-height: 1.3;
    position: relative; z-index: 1;
  }
  .ssc-desc {
    font-size: 13.5px; color: rgba(255,255,255,0.42);
    line-height: 1.72; margin-bottom: 28px;
    position: relative; z-index: 1;
  }

  .ssc-link {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 13px; font-weight: 600;
    color: #FF6B1E; letter-spacing: .3px;
    position: relative; z-index: 1;
    transition: gap .25s;
  }
  .ssc-card:hover .ssc-link { gap: 13px; }

  .ssc-bar {
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #FF6B1E 50%, transparent 100%);
    opacity: 0; transition: opacity .35s;
    border-radius: 0 0 18px 18px;
  }
  .ssc-card:hover .ssc-bar { opacity: 1; }

  .ssc-corner {
    position: absolute; top: 0; right: 0;
    width: 60px; height: 60px;
    background: linear-gradient(225deg, rgba(255,107,30,0.08) 0%, transparent 60%);
    border-radius: 0 18px 0 0;
    opacity: 0; transition: opacity .35s;
    pointer-events: none;
  }
  .ssc-card:hover .ssc-corner { opacity: 1; }
`;

/* ─── Component ─────────────────────────────────────── */
const ServiceSectionCard = () => {
  const navigate = useNavigate();

  const go = (path) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate(path);
  };

  return (
    <>
      <style>{CSS}</style>
      <section className="service-section pt-120 mt-15 mb-15 pb-120">
        <div className="auto-container">
          <div className="row g-3">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
                data-wow-delay={`${0.1 + i * 0.08}s`}
              >
                <div className="ssc-card" onClick={() => go(s.path)}>
                  <span className="ssc-num">{s.num}</span>
                  <div className="ssc-corner" />
                  <div className="ssc-dot" />
                  <div className="ssc-ico">
                    <LottieIcon type={s.iconType} />
                  </div>
                  <h4 className="ssc-title">{s.title}</h4>
                  <p className="ssc-desc">{s.desc}</p>
                  <span className="ssc-link">
                    View Details <ArrowSvg />
                  </span>
                  <div className="ssc-bar" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSectionCard;

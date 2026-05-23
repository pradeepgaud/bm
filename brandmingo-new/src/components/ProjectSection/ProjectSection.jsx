import { useState } from "react";
import PortfolioPopup from "../PortfolioPopup/PortfolioPopup";

/* ── Icons (your existing imports — keep as-is) ── */
import star from "../../assets/images/icons/star.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import arrowIcon from "../../assets/images/icons/arrow-icon.png";
import shape from "../../assets/images/icons/ellipse1-1.png";

/* ── Projects data — Cloudinary URLs, no local imports ── */
const projects = [
  {
    /* card thumbnail */
    img: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample.jpg",
    title: "E-Commerce Growth Platform",
    category: "Ethnic E-commerce",

    /* popup data */
    description:
      "A performance-focused e-commerce platform built to scale. Delivered a 300% increase in high-quality traffic and improved conversion rates by 75% within 6 months through strategic UX and targeted campaigns.",
    preview: "#",
    caseStudy: "#",
    images: [
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/sample.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-2.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-3.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-4.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-5.jpg",
    ],
    impact: {
      value: "300%",
      label: "Increase in high-quality traffic",
    },
    meta: {
      client: "Syrish Lucknowi",
      services: "UI/UX Design, Shopify Development",
      industry: "Ethnic Fashion",
      team: "3 Specialists",
      duration: "Jan 2024 – Apr 2024",
      tools: ["Shopify", "Figma", "Google Analytics", "Hotjar"],
    },
    results: [
      {
        faIcon: "fa-bullseye",
        value: "300%",
        label: "Increase in",
        bold: "High-Quality Traffic",
      },
      {
        faIcon: "fa-arrow-trend-up",
        value: "75%",
        label: "Improvement in",
        bold: "Conversions",
      },
      {
        faIcon: "fa-cart-shopping",
        value: "40%",
        label: "Reduction in",
        bold: "Cart Abandonment",
      },
      {
        faIcon: "fa-pen-ruler",
        value: "2.5x",
        label: "Increase in",
        bold: "ROI",
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/cld-sample-2.jpg",
    title: "Brand & Website Redesign",
    category: "Luxury Real Estate",

    description:
      "A complete brand identity overhaul and website redesign for a luxury real estate firm. Generated 300% more qualified leads and improved user engagement through immersive 3D visuals and GSAP animations.",
    preview: "#",
    caseStudy: "#",
    images: [
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-2.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-3.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-4.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-5.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/sample.jpg",
    ],
    impact: {
      value: "300%",
      label: "Increase in high-quality leads",
    },
    meta: {
      client: "The Adwaith",
      services: "Performance Marketing, Google Ads",
      industry: "Luxury Real Estate",
      team: "4 Specialists",
      duration: "May 2023 – Nov 2023",
      tools: ["Google Ads", "Google Analytics", "Looker Studio", "Hotjar"],
    },
    results: [
      {
        faIcon: "fa-bullseye",
        value: "300%",
        label: "Increase in",
        bold: "High-Quality Leads",
      },
      {
        faIcon: "fa-arrow-trend-up",
        value: "75%",
        label: "Improvement in",
        bold: "Conversions",
      },
      {
        faIcon: "fa-users",
        value: "40%",
        label: "Reduction in Cost",
        bold: "per Lead",
      },
      {
        faIcon: "fa-pen-ruler",
        value: "2.8x",
        label: "Increase in",
        bold: "ROI",
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/cld-sample-3.jpg",
    title: "Local Business SEO Campaign",
    category: "Retail Destination",

    description:
      "An end-to-end SEO and digital marketing campaign for a retail destination. Achieved top-3 Google rankings for 50+ keywords and drove a 220% increase in organic footfall within 4 months.",
    preview: "#",
    caseStudy: null,
    images: [
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-3.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-4.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-5.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/sample.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-2.jpg",
    ],
    impact: {
      value: "220%",
      label: "Increase in organic footfall",
    },
    meta: {
      client: "Bikers Paradise",
      services: "SEO, Content Marketing, Local Listings",
      industry: "Retail",
      team: "2 Specialists",
      duration: "Mar 2024 – Jul 2024",
      tools: ["SEMrush", "Google Search Console", "Ahrefs", "Moz"],
    },
    results: [
      {
        faIcon: "fa-magnifying-glass",
        value: "220%",
        label: "Increase in",
        bold: "Organic Traffic",
      },
      {
        faIcon: "fa-arrow-trend-up",
        value: "50+",
        label: "Keywords in",
        bold: "Top 3 Rankings",
      },
      {
        faIcon: "fa-star",
        value: "4.9",
        label: "Average",
        bold: "Google Rating",
      },
      {
        faIcon: "fa-pen-ruler",
        value: "3.1x",
        label: "Increase in",
        bold: "ROI",
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════ */
const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openPopup = (project) => setActiveProject(project);
  const closePopup = () => setActiveProject(null);

  return (
    <>
      <section className="project-section section-padding">
        {/* SHAPE — untouched */}
        <div className="light-shape">
          <img src={shape} alt="" />
        </div>

        <div className="container">
          {/* HEADER — untouched */}
          <div className="sec-title text-center text-lg-start">
            <div className="row g-4 justify-content-between align-items-end">
              <div className="col-xl-7 col-lg-8">
                <span className="sub-title">
                  <img src={star} alt="" />
                  Case Study
                </span>

                <h2 className="title">
                  Our Recently Completed <span>Latest Projects</span>
                </h2>
              </div>

              <div className="col-xl-3 col-lg-4" data-aos="fade-up">
                <div className="project-btn text-center text-lg-end">
                  <a href="#" className="btn-style-one">
                    <span className="btn-arrow-left">
                      <img src={arrow} alt="" />
                    </span>
                    <span className="btn-title">View All Project</span>
                    <span className="btn-arrow-right">
                      <img src={arrow} alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT GRID — only onClick added, nothing else changed */}
        <div className="row">
          {projects.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300 + index * 200}
            >
              <div
                className="project-block"
                onClick={() => openPopup(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="inner-block">
                  <div className="image-block">
                    {/* DOUBLE IMAGE FOR HOVER — untouched */}
                    <img className="hover-img" src={item.img} alt="" />
                    <img className="hover-img" src={item.img} alt="" />

                    {/* ARROW ICON — untouched */}
                    <a
                      href="#"
                      className="arrow-icon"
                      onClick={(e) => {
                        e.preventDefault();
                        openPopup(item);
                      }}
                    >
                      <img src={arrowIcon} alt="" />
                    </a>
                  </div>

                  <div className="content-block">
                    <h4 className="title">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openPopup(item);
                        }}
                      >
                        {item.title}
                      </a>
                    </h4>

                    <ul>
                      <li>Graphic</li>
                      <li className="dot"></li>
                      <li>Graphic</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP — renders outside section, above everything */}
      {activeProject && (
        <PortfolioPopup project={activeProject} onClose={closePopup} />
      )}
    </>
  );
};

export default ProjectSection;

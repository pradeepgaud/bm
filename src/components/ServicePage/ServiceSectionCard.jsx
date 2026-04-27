import React from "react";
import { Link } from "react-router-dom";

import service1Icon from "../../assets/images/icons/service-icon-1-1.png";
import service2Icon from "../../assets/images/icons/service-icon-1-2.png";
import service3Icon from "../../assets/images/icons/service-icon-1-3.png";
import service4Icon from "../../assets/images/icons/service-icon-1-4.png";
import service5Icon from "../../assets/images/icons/service-icon-1-5.png";
import service6Icon from "../../assets/images/icons/service-icon-1-6.png";

const ServiceSectionCard = () => {
  return (
    <section className="service-section pt-120 mt-15 mb-15 pb-120">
      <div className="auto-container">
        <div className="row g-2">
          {/* Service 1 */}
          <div
            className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">01</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={service3Icon} alt="" />
                  </div>
                  {/* <h4 className="title">
                    <a href="page-service-details.html">Web Development</a>
                  </h4> */}

                  <h4 className="title">
                    <Link to="/web-development-new">Web Development</Link>
                  </h4>
                  <div className="text">
                    Build fast, responsive websites designed to convert visitors
                    into customers.
                  </div>
                  <Link to="/web-development-new" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">02</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={service2Icon} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="/ads-and-campaigns">Ads And Campaigns</Link>
                  </h4>
                  <div className="text">
                    Run targeted ad campaigns that drive quality leads and
                    maximize ROI
                  </div>
                  <Link to="/ads-and-campaigns" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">03</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={service1Icon} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="/social-media-management">
                      Social Media Management
                    </Link>
                  </h4>
                  <div className="text">
                    Grow your brand presence with engaging content and
                    consistent social strategies.
                  </div>
                  <Link to="/social-media-management" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div
            className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">04</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={service4Icon} alt="" />
                  </div>
                  <h4 className="title">
                    {/* <a href="page-service-details.html">UI/UX And Audits</a> */}
                    <Link to="/ui-ux-audits">UI/UX And Audits</Link>
                  </h4>
                  <div className="text">
                    Improve user experience with data-driven audits and
                    optimized design flow.
                  </div>
                  <Link to="/ui-ux-audits" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div
            className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">05</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={service5Icon} alt="" />
                  </div>
                  <h4 className="title">
                    {/* <a href="page-service-details.html">UI/UX And Audits</a> */}
                    <Link to="/seo-optimizing">SEO Optimizing</Link>
                  </h4>
                  <div className="text">
                    Boost your visibility on Google with strategic SEO and
                    performance tracking.
                  </div>
                  <Link to="/seo-optimizing" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 6 */}

          <div
            className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">06</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={service6Icon} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="ecommerce-management">Ecommerce Management</Link>
                  </h4>
                  <div className="text">
                    Manage and scale your online store with optimized listings
                    and conversion strategies.
                  </div>
                  <Link to="/ecommerce-management" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 7 */}
          <div
            className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-block-one">
              <div className="inner-block">
                <span className="dot"></span>
                <span className="number">07</span>
                <div className="content-box">
                  <div className="icon">
                    <img src={service1Icon} alt="" />
                  </div>
                  <h4 className="title">
                    <Link to="/brand-identity">Brand Identity</Link>
                  </h4>
                  <div className="text">
                    Create a strong brand image with impactful design and
                    consistent visual identity.
                  </div>
                  <Link to="/brand-identity" className="arrow-link">
                    View Details
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionCard;

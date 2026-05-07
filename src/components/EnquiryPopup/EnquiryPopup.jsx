// import React, { useEffect } from "react";
// import "./EnquiryPopup.css";

// const EnquiryPopup = ({ isOpen, onClose }) => {
//   // Prevent scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="ep-overlay" onClick={onClose}>
//       <div className="ep-modal" onClick={(e) => e.stopPropagation()}>
//         {/* Left Side - Dark Branding Area */}
//         <div className="ep-sidebar">
//           <div className="ep-brand-icon">
//             <i className="fa-solid fa-comment-dots"></i>
//           </div>
//           <h2 className="ep-heading">
//             Let's Start a <span>Conversation</span>
//           </h2>
//           <p className="ep-subtext">
//             Share your project details and our team will get back to you within{" "}
//             <span>24 hours.</span>
//           </p>

//           <div className="ep-features">
//             <div className="ep-feature-item">
//               <div className="ep-feat-icon">
//                 <i className="fa-solid fa-shield-halved"></i>
//               </div>
//               <div>
//                 <h4>Trusted by Top Brands</h4>
//                 <p>Delivering excellence across industries.</p>
//               </div>
//             </div>
//             <div className="ep-feature-item">
//               <div className="ep-feat-icon">
//                 <i className="fa-solid fa-rocket"></i>
//               </div>
//               <div>
//                 <h4>Result-Driven Approach</h4>
//                 <p>We focus on outcomes that matter.</p>
//               </div>
//             </div>
//             <div className="ep-feature-item">
//               <div className="ep-feat-icon">
//                 <i className="fa-solid fa-headset"></i>
//               </div>
//               <div>
//                 <h4>Quick & Reliable Support</h4>
//                 <p>Our team is here to help you succeed.</p>
//               </div>
//             </div>
//           </div>

//           <div className="ep-help-card">
//             <div className="ep-help-icon">
//               <i className="fa-solid fa-phone"></i>
//             </div>
//             <div>
//               <small>Need immediate help?</small>
//               <strong>+91 98765 43210</strong>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Form Area */}
//         <div className="ep-form-container">
//           <button className="ep-close-btn" onClick={onClose}>
//             &times;
//           </button>

//           <form onSubmit={(e) => e.preventDefault()}>
//             {/* Section: Your Information */}
//             <div className="ep-form-section">
//               <div className="ep-section-title">
//                 <i className="fa-solid fa-user"></i> Your Information
//               </div>
//               <div className="ep-row">
//                 <div className="ep-group">
//                   <label>Full Name *</label>
//                   <input
//                     type="text"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>
//                 <div className="ep-group">
//                   <label>Email Address *</label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="ep-row">
//                 <div className="ep-group">
//                   <label>Phone Number *</label>
//                   <div className="ep-phone-input">
//                     <div className="ep-flag-select">
//                       <img src="https://flagcdn.com/w20/in.png" alt="IN" />
//                       <span>+91</span>
//                     </div>
//                     <input
//                       type="tel"
//                       placeholder="Enter your phone number"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="ep-group">
//                   <label>Company / Organization *</label>
//                   <input
//                     type="text"
//                     placeholder="Enter your company name"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Section: Project Details */}
//             <div className="ep-form-section">
//               <div className="ep-section-title">
//                 <i className="fa-solid fa-briefcase"></i> Project Details
//               </div>
//               <div className="ep-row">
//                 <div className="ep-group">
//                   <label>Service Interested In *</label>
//                   <select required>
//                     <option value="">Select a service</option>
//                     <option value="web">Web Development</option>
//                     <option value="app">App Development</option>
//                     <option value="uiux">UI/UX Design</option>
//                   </select>
//                 </div>
//                 <div className="ep-group">
//                   <label>Project Budget</label>
//                   <select>
//                     <option value="">Select your budget range</option>
//                     <option value="1">₹15,000 - ₹35,000</option>
//                     <option value="2">₹35,000 - ₹75,000</option>
//                     <option value="3">₹75,000+</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="ep-row">
//                 <div className="ep-group">
//                   <label>Project Timeline</label>
//                   <select>
//                     <option value="">Select project timeline</option>
//                     <option value="1">Less than 1 month</option>
//                     <option value="2">1-3 months</option>
//                   </select>
//                 </div>
//                 <div className="ep-group">
//                   <label>Where did you find us?</label>
//                   <select>
//                     <option value="">Select an option</option>
//                     <option value="google">Google</option>
//                     <option value="social">Social Media</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="ep-group">
//                 <label>Project Overview *</label>
//                 <textarea placeholder="Tell us about your project, goals, target audience..."></textarea>
//                 <span className="ep-hint">
//                   The more details you share, the better we can understand your
//                   needs.
//                 </span>
//               </div>
//             </div>

//             {/* Section: Optional Info */}
//             <div className="ep-form-section">
//               <div className="ep-section-title">
//                 <i className="fa-solid fa-file-invoice"></i> Additional
//                 Information (Optional)
//               </div>
//               <div className="ep-checkbox-grid">
//                 <label className="ep-check">
//                   <input type="checkbox" /> I have a website ready
//                 </label>
//                 <label className="ep-check">
//                   <input type="checkbox" /> I need content writing
//                 </label>
//                 <label className="ep-check">
//                   <input type="checkbox" /> I need branding / design
//                 </label>
//                 <label className="ep-check">
//                   <input type="checkbox" /> I need ongoing support
//                 </label>
//               </div>
//             </div>

//             <div className="ep-footer">
//               <p className="ep-terms">
//                 <i className="fa-solid fa-lock"></i> By submitting this form,
//                 you agree to our
//                 <a href="#"> Privacy Policy</a> and{" "}
//                 <a href="#"> Terms of Service</a>.
//               </p>
//               <button type="submit" className="ep-submit-btn">
//                 Send Enquiry <i className="fa-solid fa-arrow-right"></i>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnquiryPopup;

import React, { useEffect, useState, useRef, useCallback } from "react";
import "./EnquiryPopup.css";

/* ────────────────────────────────────────────
   Validation helpers
──────────────────────────────────────────── */
const VALIDATORS = {
  fullName: (v) => {
    if (!v.trim()) return "Full name is required.";
    if (v.trim().length < 2) return "Name must be at least 2 characters.";
    if (!/^[a-zA-Z\s'.'-]+$/.test(v.trim()))
      return "Name contains invalid characters.";
    return "";
  },
  email: (v) => {
    if (!v.trim()) return "Email address is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()))
      return "Enter a valid email address.";
    return "";
  },
  phone: (v) => {
    const digits = v.replace(/\D/g, "");
    if (!digits) return "Phone number is required.";
    if (digits.length < 7 || digits.length > 15)
      return "Enter a valid phone number.";
    return "";
  },
  company: (v) => {
    if (!v.trim()) return "Company / organization is required.";
    return "";
  },
  service: (v) => {
    if (!v) return "Please select a service.";
    return "";
  },
  overview: (v) => {
    if (!v.trim()) return "Project overview is required.";
    if (v.trim().length < 20) return "Please provide at least 20 characters.";
    return "";
  },
};

const MAX_OVERVIEW = 600;

/* ────────────────────────────────────────────
   Field components
──────────────────────────────────────────── */
const FieldGroup = ({ label, required, error, touched, children }) => (
  <div className="ep-group">
    <label>
      {label}
      {required && <span className="ep-req"> *</span>}
    </label>
    {children}
    {touched && error && (
      <span className="ep-error-msg">
        <i
          className="fa-solid fa-circle-exclamation"
          style={{ fontSize: 10 }}
        />
        {error}
      </span>
    )}
  </div>
);

/* ────────────────────────────────────────────
   Main component
──────────────────────────────────────────── */
const EnquiryPopup = ({ isOpen, onClose }) => {
  /* ── state ── */
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const firstFocusRef = useRef(null);

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    source: "",
    overview: "",
  };

  const initialChecks = {
    hasWebsite: false,
    needsContent: false,
    needsBranding: false,
    needsSupport: false,
  };

  const [values, setValues] = useState(initialValues);
  const [checks, setChecks] = useState(initialChecks);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  /* ── scroll lock ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset on open
      setSubmitted(false);
      setLoading(false);
      setValues(initialValues);
      setChecks(initialChecks);
      setErrors({});
      setTouched({});
      // Focus first input after mount
      setTimeout(() => firstFocusRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ── keyboard close ── */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  /* ── validation ── */
  const validate = useCallback((name, value) => {
    return VALIDATORS[name] ? VALIDATORS[name](value) : "";
  }, []);

  const validateAll = () => {
    const fieldsToValidate = [
      "fullName",
      "email",
      "phone",
      "company",
      "service",
      "overview",
    ];
    const newErrors = {};
    const newTouched = {};
    fieldsToValidate.forEach((f) => {
      newTouched[f] = true;
      newErrors[f] = validate(f, values[f]);
    });
    setTouched((t) => ({ ...t, ...newTouched }));
    setErrors((e) => ({ ...e, ...newErrors }));
    return Object.values(newErrors).every((e) => !e);
  };

  /* ── handlers ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors((er) => ({ ...er, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validate(name, value) }));
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setChecks((c) => ({ ...c, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const getFieldClass = (name) => {
    if (!touched[name]) return "";
    return errors[name] ? "ep-invalid" : "ep-valid";
  };

  const overviewLen = values.overview.length;

  if (!isOpen) return null;

  /* ── Current step indicator ── */
  const filled = {
    info: !!(values.fullName && values.email && values.phone && values.company),
    project: !!(values.service && values.overview),
  };
  const currentStep = !filled.info ? 1 : !filled.project ? 2 : 3;

  return (
    <div
      className="ep-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      <div className="ep-modal" onClick={(e) => e.stopPropagation()}>
        {/* ── SIDEBAR ── */}
        <div className="ep-sidebar">
          <div className="ep-brand-icon">
            <i className="fa-solid fa-comment-dots" />
          </div>

          <h2 className="ep-heading">
            Let's Start a<span>Conversation</span>
          </h2>

          <p className="ep-subtext">
            Share your project details and our team will get back to you within{" "}
            <span>24 hours.</span>
          </p>

          <div className="ep-divider" />

          <div className="ep-features">
            <div className="ep-feature-item">
              <div className="ep-feat-icon-wrap">
                <i className="fa-solid fa-shield-halved" />
              </div>
              <div>
                <h4>Trusted by Top Brands</h4>
                <p>Delivering excellence across industries worldwide.</p>
              </div>
            </div>
            <div className="ep-feature-item">
              <div className="ep-feat-icon-wrap">
                <i className="fa-solid fa-rocket" />
              </div>
              <div>
                <h4>Result-Driven Approach</h4>
                <p>We focus on measurable outcomes that matter.</p>
              </div>
            </div>
            <div className="ep-feature-item">
              <div className="ep-feat-icon-wrap">
                <i className="fa-solid fa-headset" />
              </div>
              <div>
                <h4>Quick & Reliable Support</h4>
                <p>Our team is always here to help you succeed.</p>
              </div>
            </div>
          </div>

          <div className="ep-help-card">
            <div className="ep-help-icon">
              <i className="fa-solid fa-phone" />
            </div>
            <div>
              <small>Need immediate help?</small>
              <strong>+91 98765 43210</strong>
            </div>
          </div>
        </div>

        {/* ── FORM SIDE ── */}
        <div className="ep-form-container">
          <button
            className="ep-close-btn"
            onClick={onClose}
            aria-label="Close enquiry form"
            type="button"
          >
            &times;
          </button>

          {submitted ? (
            <div className="ep-success">
              <div className="ep-success-icon">
                <i className="fa-solid fa-check" />
              </div>
              <h3>Enquiry Sent!</h3>
              <p>
                Thank you for reaching out. Our team will review your project
                details and get back to you within <strong>24 hours</strong>.
              </p>
              <button
                type="button"
                className="ep-submit-btn"
                onClick={onClose}
                style={{ marginTop: 8 }}
              >
                Close <i className="fa-solid fa-xmark" />
              </button>
            </div>
          ) : (
            <>
              {/* Progress */}
              <div className="ep-progress-bar" aria-hidden="true">
                <div className="ep-progress-step">
                  <div
                    className={`ep-step-dot ${currentStep >= 1 ? (currentStep > 1 ? "done" : "active") : ""}`}
                  >
                    {currentStep > 1 ? (
                      <i
                        className="fa-solid fa-check"
                        style={{ fontSize: 10 }}
                      />
                    ) : (
                      "1"
                    )}
                  </div>
                  <span
                    className={`ep-step-label ${currentStep === 1 ? "active" : ""}`}
                  >
                    Your Info
                  </span>
                </div>
                <div
                  className={`ep-step-line ${currentStep > 1 ? "done" : ""}`}
                />
                <div className="ep-progress-step">
                  <div
                    className={`ep-step-dot ${currentStep >= 2 ? (currentStep > 2 ? "done" : "active") : ""}`}
                  >
                    {currentStep > 2 ? (
                      <i
                        className="fa-solid fa-check"
                        style={{ fontSize: 10 }}
                      />
                    ) : (
                      "2"
                    )}
                  </div>
                  <span
                    className={`ep-step-label ${currentStep === 2 ? "active" : ""}`}
                  >
                    Project
                  </span>
                </div>
                <div
                  className={`ep-step-line ${currentStep > 2 ? "done" : ""}`}
                />
                <div className="ep-progress-step">
                  <div
                    className={`ep-step-dot ${currentStep === 3 ? "active" : ""}`}
                  >
                    3
                  </div>
                  <span
                    className={`ep-step-label ${currentStep === 3 ? "active" : ""}`}
                  >
                    Extras
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* ── Section 1: Your Information ── */}
                <div className="ep-form-section">
                  <div className="ep-section-title">
                    <i className="fa-solid fa-user" /> Your Information
                  </div>

                  <div className="ep-row">
                    <FieldGroup
                      label="Full Name"
                      required
                      error={errors.fullName}
                      touched={touched.fullName}
                    >
                      <input
                        ref={firstFocusRef}
                        type="text"
                        name="fullName"
                        placeholder="e.g. Rahul Sharma"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClass("fullName")}
                        autoComplete="name"
                        maxLength={80}
                      />
                    </FieldGroup>

                    <FieldGroup
                      label="Email Address"
                      required
                      error={errors.email}
                      touched={touched.email}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClass("email")}
                        autoComplete="email"
                        maxLength={120}
                      />
                    </FieldGroup>
                  </div>

                  <div className="ep-row">
                    <FieldGroup
                      label="Phone Number"
                      required
                      error={errors.phone}
                      touched={touched.phone}
                    >
                      <div
                        className={`ep-phone-wrap ${touched.phone ? (errors.phone ? "ep-invalid" : "ep-valid") : ""}`}
                      >
                        <div className="ep-flag-select">
                          <img
                            src="https://flagcdn.com/w20/in.png"
                            alt="IN flag"
                            width={20}
                            height={14}
                          />
                          <span>+91</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="98765 43210"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="tel"
                          maxLength={15}
                          inputMode="numeric"
                        />
                      </div>
                    </FieldGroup>

                    <FieldGroup
                      label="Company / Organization"
                      required
                      error={errors.company}
                      touched={touched.company}
                    >
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company name"
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClass("company")}
                        autoComplete="organization"
                        maxLength={100}
                      />
                    </FieldGroup>
                  </div>
                </div>

                {/* ── Section 2: Project Details ── */}
                <div className="ep-form-section">
                  <div className="ep-section-title">
                    <i className="fa-solid fa-briefcase" /> Project Details
                  </div>

                  <div className="ep-row">
                    <FieldGroup
                      label="Service Interested In"
                      required
                      error={errors.service}
                      touched={touched.service}
                    >
                      <div className="ep-select-wrap">
                        <select
                          name="service"
                          value={values.service}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={getFieldClass("service")}
                        >
                          <option value="">Select a service</option>
                          <option value="web">Web Development</option>
                          <option value="app">App Development</option>
                          <option value="react">React Development</option>
                          <option value="uiux">UI/UX Design</option>
                          <option value="ecommerce">E-Commerce</option>
                          <option value="seo">SEO & Marketing</option>
                        </select>
                      </div>
                    </FieldGroup>

                    <FieldGroup label="Project Budget">
                      <div className="ep-select-wrap">
                        <select
                          name="budget"
                          value={values.budget}
                          onChange={handleChange}
                        >
                          <option value="">Select budget range</option>
                          <option value="1">₹15,000 – ₹35,000</option>
                          <option value="2">₹35,000 – ₹75,000</option>
                          <option value="3">₹75,000 – ₹1,50,000</option>
                          <option value="4">₹1,50,000+</option>
                        </select>
                      </div>
                    </FieldGroup>
                  </div>

                  <div className="ep-row">
                    <FieldGroup label="Project Timeline">
                      <div className="ep-select-wrap">
                        <select
                          name="timeline"
                          value={values.timeline}
                          onChange={handleChange}
                        >
                          <option value="">Select timeline</option>
                          <option value="1">Less than 1 month</option>
                          <option value="2">1–3 months</option>
                          <option value="3">3–6 months</option>
                          <option value="4">6+ months</option>
                        </select>
                      </div>
                    </FieldGroup>

                    <FieldGroup label="Where did you find us?">
                      <div className="ep-select-wrap">
                        <select
                          name="source"
                          value={values.source}
                          onChange={handleChange}
                        >
                          <option value="">Select an option</option>
                          <option value="google">Google Search</option>
                          <option value="social">Social Media</option>
                          <option value="referral">Referral / Friend</option>
                          <option value="ad">Online Ad</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </FieldGroup>
                  </div>

                  <div className="ep-row ep-row-single">
                    <FieldGroup
                      label="Project Overview"
                      required
                      error={errors.overview}
                      touched={touched.overview}
                    >
                      <textarea
                        name="overview"
                        placeholder="Tell us about your project, goals, target audience, and any specific requirements..."
                        value={values.overview}
                        onChange={(e) => {
                          if (e.target.value.length <= MAX_OVERVIEW)
                            handleChange(e);
                        }}
                        onBlur={handleBlur}
                        className={getFieldClass("overview")}
                        maxLength={MAX_OVERVIEW}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span className="ep-hint">
                          The more detail you share, the better we can help you.
                        </span>
                        <span
                          className={`ep-char-count ${overviewLen > MAX_OVERVIEW * 0.9 ? "ep-char-warn" : ""}`}
                        >
                          {overviewLen}/{MAX_OVERVIEW}
                        </span>
                      </div>
                    </FieldGroup>
                  </div>
                </div>

                {/* ── Section 3: Optional ── */}
                <div className="ep-form-section">
                  <div className="ep-section-title">
                    <i className="fa-solid fa-file-invoice" /> Additional Info
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        color: "#bbb",
                        marginLeft: 4,
                        textTransform: "none",
                        letterSpacing: 0,
                      }}
                    >
                      (optional)
                    </span>
                  </div>

                  <div className="ep-checkbox-grid">
                    {[
                      {
                        name: "hasWebsite",
                        label: "I have a website ready",
                        icon: "fa-globe",
                      },
                      {
                        name: "needsContent",
                        label: "I need content writing",
                        icon: "fa-pen-nib",
                      },
                      {
                        name: "needsBranding",
                        label: "I need branding / design",
                        icon: "fa-palette",
                      },
                      {
                        name: "needsSupport",
                        label: "I need ongoing support",
                        icon: "fa-headset",
                      },
                    ].map(({ name, label, icon }) => (
                      <label className="ep-check" key={name}>
                        <input
                          type="checkbox"
                          name={name}
                          checked={checks[name]}
                          onChange={handleCheck}
                        />
                        <i
                          className={`fa-solid ${icon}`}
                          style={{
                            color: "var(--theme-color1, #ff5d00)",
                            fontSize: 13,
                            flexShrink: 0,
                          }}
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* ── Footer ── */}
                <div className="ep-footer">
                  <p className="ep-terms">
                    <i className="fa-solid fa-lock" />
                    By submitting, you agree to our{" "}
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Terms of Service
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    className="ep-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <i className="fa-solid fa-arrow-right" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;

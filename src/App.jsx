import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "@fortawesome/fontawesome-free/css/all.min.css";

// CSS
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "aos/dist/aos.css";

// COMPONENTS
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import FloatingContact from "./components/FloatingPopup/FloatingContact";

// LAZY COMPONENTS
const Cursor = lazy(() => import("./components/Cursor/Cursor"));
const BackToTop = lazy(() => import("./components/BackToTop/BackToTop"));
const NewFooter = lazy(() => import("./components/Footer/NewFooter"));

// PAGES
const NewHome = lazy(() => import("./pages/Home/NewHome"));
const About = lazy(() => import("./pages/About/About"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const Services = lazy(() => import("./pages/Services/Services"));
const ContactUs = lazy(() => import("./pages/Contact/ContactUs"));

const WebDevelopmentNew = lazy(
  () => import("./pages/Web Development/WebDevelopmentNew"),
);
const AdsAndCampaigns = lazy(
  () => import("./pages/AdsAndCampaigns/AdsAndCampaigns"),
);
const SocialMediaManagement = lazy(
  () => import("./pages/SocialMediaManagement/SocialMediaManagement"),
);
const UiUx = lazy(() => import("./pages/Uiux/UiUx"));
const SEOOptimizing = lazy(
  () => import("./pages/SEO Optimizing/SEOOptimizing"),
);
const EcomManagement = lazy(
  () => import("./pages/Ecom Management/EcomManagement"),
);
const BrandIdentity = lazy(
  () => import("./pages/Brand Identity/BrandIdentity"),
);
const ServiceDetails = lazy(
  () => import("./components/ServicePage/ServiceDetails"),
);
const ReactDetails = lazy(() => import("./pages/Web Development/ReactDetails"));
const WordpressDetails = lazy(
  () => import("./pages/Web Development/WordpressDetails"),
);
const ShopifyDetails = lazy(
  () => import("./pages/Web Development/ShopifyDetails"),
);

const CRM = lazy(() => import("./pages/Web Development/CRM"));

const PHPDetails = lazy(() => import("./pages/Web Development/PHPDetails"));

// import PHPDetails from "./pages/Web Development/PHPDetails";
const PerformanceMarketing = lazy(
  () => import("./pages/AdsAndCampaigns/PerformanceMarketing"),
);

const WoocommDetails = lazy(
  () => import("./pages/Web Development/WoocommDetails"),
);

// Ads Campaign Management import
const GoogleAds = lazy(() => import("./pages/AdsAndCampaigns/GoogleAds"));
const FbInstAds = lazy(() => import("./pages/AdsAndCampaigns/FbInstAds"));
const LinkedinAds = lazy(() => import("./pages/AdsAndCampaigns/LinkedinAds"));

// SEO Optimizing pages
const OrganicTraffic = lazy(
  () => import("./pages/SEO Optimizing/OrganicTraffic"),
);
const LocalSDominance = lazy(
  () => import("./pages/SEO Optimizing/LocalSDominance"),
);

// Social Media Management
const BrandAwareness = lazy(
  () => import("./pages/SocialMediaManagement/BrandAwareness"),
);
const StrategyPlanning = lazy(
  () => import("./pages/SocialMediaManagement/StrategyPlanning"),
);

const ContentCreation = lazy(
  () => import("./pages/SocialMediaManagement/ContentCreation"),
);

const EngagementGrowth = lazy(
  () => import("./pages/SocialMediaManagement/EngagementGrowth"),
);

// Ecommerce Account Management

const AmazonManServices = lazy(
  () => import("./pages/Ecom Management/AmazonManServices"),
);

const FlipkartManServices = lazy(
  () => import("./pages/Ecom Management/FlipkartManServices"),
);

const ShopsyManServices = lazy(
  () => import("./pages/Ecom Management/ShopsyManServices"),
);
const SnapdealManServices = lazy(
  () => import("./pages/Ecom Management/SnapdealManServices"),
);

const LogoDesign = lazy(() => import("./pages/Brand Identity/LogoDesign"));
const LabelDesigning = lazy(
  () => import("./pages/Brand Identity/LabelDesigning"),
);

const CorporateIdentityDesi = lazy(
  () => import("./pages/Brand Identity/CorporateIdentityDesi"),
);

const BrandIdentityDesign = lazy(
  () => import("./pages/Brand Identity/BrandIdentityDesign"),
);

// import BrandIdentityDesign from "./pages/Brand Identity/BrandIdentityDesign";

// import CorporateIdentityDesi from "./pages/Brand Identity/CorporateIdentityDesi";

// import LabelDesigning from "./pages/Brand Identity/LabelDesigning";

// UI/UX And Audits  sub serivces

const CustomWebDesign = lazy(() => import("./pages/Uiux/CustomWebDesign"));
const CorporateBranding = lazy(() => import("./pages/Uiux/CorporateBranding"));
const MobileAppDesign = lazy(() => import("./pages/Uiux/MobileAppDesign"));
const ProductDesign = lazy(() => import("./pages/Uiux/ProductDesign"));

// ✅ ScrollToTop — har route change pe window top pe jaayegi
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      disable: window.innerWidth < 768,
    });

    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      setShowLoader(true);

      const handleLoad = () => {
        setShowLoader(false);
        sessionStorage.setItem("hasLoaded", "true");
      };

      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        {showLoader && <Preloader />}

        <Navbar />

        <Suspense fallback={<></>}>
          <Cursor />

          <Routes>
            <Route path="/" element={<NewHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/web-development-new"
              element={<WebDevelopmentNew />}
            />
            <Route path="/ads-and-campaigns" element={<AdsAndCampaigns />} />
            <Route path="/ui-ux-audits" element={<UiUx />} />
            <Route path="/seo-optimizing" element={<SEOOptimizing />} />
            <Route path="/ecommerce-management" element={<EcomManagement />} />
            <Route path="/graphic-designing" element={<BrandIdentity />} />
            <Route
              path="/social-media-management"
              element={<SocialMediaManagement />}
            />
            <Route path="/react" element={<ReactDetails />} />

            <Route path="/shopify" element={<ShopifyDetails />} />
            <Route path="/wordpress" element={<WordpressDetails />} />
            <Route path="/woocommerce" element={<WoocommDetails />} />
            <Route path="/php" element={<PHPDetails />} />

            {/* Ads Campaign Management */}
            <Route
              path="/performance-marketing"
              element={<PerformanceMarketing />}
            />
            <Route path="/google-ads" element={<GoogleAds />} />
            <Route path="/facebook-instagram-ads" element={<FbInstAds />} />
            <Route path="/linkedin-ads" element={<LinkedinAds />} />
            <Route path="/brand-awareness" element={<BrandAwareness />} />
            <Route path="/strategy-planning" element={<StrategyPlanning />} />
            <Route
              path="/content-creation-publishing"
              element={<ContentCreation />}
            />
            <Route path="/engagement-growth" element={<EngagementGrowth />} />
            <Route path="/custom-web-design" element={<CustomWebDesign />} />
            <Route path="/corporate-branding" element={<CorporateBranding />} />
            <Route path="/mobile-app-design" element={<MobileAppDesign />} />
            <Route path="/product-design" element={<ProductDesign />} />
            <Route path="/organic-traffic" element={<OrganicTraffic />} />
            <Route
              path="/local-search-dominance"
              element={<LocalSDominance />}
            />
            <Route
              path="/amazon-management-services"
              element={<AmazonManServices />}
            />
            <Route
              path="/flipkart-management-services"
              element={<FlipkartManServices />}
            />
            <Route
              path="/shopsy-management-services"
              element={<ShopsyManServices />}
            />

            <Route
              path="/snapdeal-management-services"
              element={<SnapdealManServices />}
            />

            <Route path="/logo-design" element={<LogoDesign />} />
            <Route path="/label-designing" element={<LabelDesigning />} />
            <Route
              path="/corporate-identity-designing"
              element={<CorporateIdentityDesi />}
            />
            <Route
              path="/brand-identity-design"
              element={<BrandIdentityDesign />}
            />
            <Route path="/crm-development" element={<CRM />} />
          </Routes>

          <NewFooter />
          <BackToTop />
          <FloatingContact />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

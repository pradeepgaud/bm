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

// LAZY COMPONENTS
const Cursor = lazy(() => import("./components/Cursor/Cursor"));
const BackToTop = lazy(() => import("./components/BackToTop/BackToTop"));
const NewFooter = lazy(() => import("./components/Footer/NewFooter"));

// PAGES
const NewHome = lazy(() => import("./pages/Home/NewHome"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const WebDevelopment = lazy(
  () => import("./pages/Web Development/WebDevelopment"),
);
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
const PerformanceMarketing = lazy(
  () => import("./pages/performance Marketing/PerformanceMarketing"),
);

const WoocommDetails = lazy(
  () => import("./pages/Web Development/WoocommDetails"),
);

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

      window.addEventListener("load", () => {
        setShowLoader(false);
        sessionStorage.setItem("hasLoaded", "true");
      });
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
            <Route path="/services" element={<Services />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route
              path="/web-development-new"
              element={<WebDevelopmentNew />}
            />
            <Route path="/ads-and-campaigns" element={<AdsAndCampaigns />} />
            <Route path="/ui-ux-audits" element={<UiUx />} />
            <Route path="/seo-optimizing" element={<SEOOptimizing />} />
            <Route path="/ecommerce-management" element={<EcomManagement />} />
            <Route path="/brand-identity" element={<BrandIdentity />} />
            <Route
              path="/social-media-management"
              element={<SocialMediaManagement />}
            />
            <Route path="/react" element={<ReactDetails />} />
            <Route
              path="/performance-marketing"
              element={<PerformanceMarketing />}
            />
            <Route path="/shopify" element={<ShopifyDetails />} />
            <Route path="/wordpress" element={<WordpressDetails />} />
            <Route path="/woocommerce" element={<WoocommDetails />} />
          </Routes>

          <NewFooter />
          <BackToTop />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

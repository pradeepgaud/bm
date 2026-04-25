import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "@fortawesome/fontawesome-free/css/all.min.css";

// CSS
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "aos/dist/aos.css";

// COMPONENTS (normal load)
import Preloader from "./components/Preloader/Preloader";
import BackToTop from "./components/BackToTop/BackToTop";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import NewFooter from "./components/Footer/NewFooter";
import NewHome from "./pages/Home/NewHome";
// import ReactDetailscopy from "./pages/Web Development/ReactDetailscopy";
import PerformanceMarketing from "./pages/performance Marketing/PerformanceMarketing";
import ShopifyDetails from "./pages/Web Development/ShopifyDetails";
import SocialMediaManagement from "./pages/SocialMediaManagement/SocialMediaManagement";
// import AdsAndCampaigns from "./pages/AdsAndCampaigns/AdsAndCampaigns";

// LAZY LOAD PAGES 🚀
const Home = lazy(() => import("./pages/Home/Home"));
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
const ServiceDetails = lazy(
  () => import("./components/ServicePage/ServiceDetails"),
);
const ReactDetails = lazy(() => import("./pages/Web Development/ReactDetails"));

function App() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // AOS INIT (optimized)
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      disable: window.innerWidth < 768, // mobile performance boost
    });

    // SESSION BASED LOADER
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
      <Cursor />

      <BrowserRouter>
        {/* FIRST LOAD LOADER */}
        {showLoader && <Preloader />}

        <Navbar />

        {/* LAZY LOAD ROUTES */}
        <Suspense fallback={<Preloader />}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
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
            <Route path="/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/react" element={<ReactDetails />} />
            <Route
              path="/performance-marketing"
              element={<PerformanceMarketing />}
            />
            <Route path="/shopify" element={<ShopifyDetails />} />
          </Routes>
        </Suspense>

        {/* <Footer /> */}
        <NewFooter />
        <BackToTop />
      </BrowserRouter>
    </>
  );
}

export default App;

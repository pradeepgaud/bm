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
// import BlogDetails from "./pages/Blogs/BlogDetails/BlogDetails";

// LAZY COMPONENTS
const Cursor = lazy(() => import("./components/Cursor/Cursor"));

const BackToTop = lazy(() => import("./components/BackToTop/BackToTop"));

const NewFooter = lazy(() => import("./components/Footer/NewFooter"));

const FloatingContact = lazy(
  () => import("./components/FloatingPopup/FloatingContact"),
);

const EnquiryPopup = lazy(
  () => import("./components/EnquiryPopup/EnquiryPopup"),
);

// ADMIN
const AdminLayout = lazy(() => import("./admin/AdminLayout/AdminLayout"));

const Dashboard = lazy(() => import("./admin/Dashboard/Dashboard"));
const BlogsAdmin = lazy(() => import("./admin/BlogsAdmin/BlogsAdmin"));
const AddBlog = lazy(() => import("./admin/AddBlog/AddBlog"));
const EditBlog = lazy(() => import("./admin/EditBlog/EditBlog"));

const Login = lazy(() => import("./admin/LoginAdmin/Login"));

// WEBSITE PAGES
const NewHome = lazy(() => import("./pages/Home/NewHome"));
const BlogDetails = lazy(() => import("./pages/Blogs/BlogDetails/BlogDetails"));

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

// SCROLL TO TOP
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showLoader, setShowLoader] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

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
    <BrowserRouter>
      <AppContent
        showLoader={showLoader}
        isPopupOpen={isPopupOpen}
        openPopup={openPopup}
        closePopup={closePopup}
      />
    </BrowserRouter>
  );
}

function AppContent({ showLoader, isPopupOpen, openPopup, closePopup }) {
  const location = useLocation();

  // ADMIN ROUTE CHECK
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      {/* LOADER */}
      {/* {showLoader && <Preloader />}/ */}
      {showLoader && !isAdminRoute && <Preloader />}

      {/* NAVBAR */}
      {!isAdminRoute && <Navbar openPopup={openPopup} />}

      <Suspense fallback={<></>}>
        <Cursor />

        <Routes>
          {/* ADMIN */}
          <Route path="/admin/login" element={<Login />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blogs" element={<BlogsAdmin />} />
            <Route path="blogs/create" element={<AddBlog />} />
            <Route path="/admin/blogs/edit/:id" element={<EditBlog />} />
          </Route>

          {/* WEBSITE */}
          <Route path="/" element={<NewHome openPopup={openPopup} />} />

          <Route path="/about" element={<About openPopup={openPopup} />} />

          <Route path="/blogs" element={<Blogs />} />

          <Route path="/blogs/:slug" element={<BlogDetails />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/web-development-new" element={<WebDevelopmentNew />} />

          <Route path="/ads-and-campaigns" element={<AdsAndCampaigns />} />

          <Route path="/ui-ux-audits" element={<UiUx />} />

          <Route path="/seo-optimizing" element={<SEOOptimizing />} />

          <Route path="/ecommerce-management" element={<EcomManagement />} />

          <Route path="/graphic-designing" element={<BrandIdentity />} />
        </Routes>

        {/* FOOTER */}
        {!isAdminRoute && <NewFooter />}

        {/* BACK TO TOP */}
        {!isAdminRoute && <BackToTop />}

        {/* FLOATING CONTACT */}
        {!isAdminRoute && <FloatingContact />}

        {/* POPUP */}
        {!isAdminRoute && (
          <EnquiryPopup isOpen={isPopupOpen} onClose={closePopup} />
        )}
      </Suspense>
    </>
  );
}

export default App;

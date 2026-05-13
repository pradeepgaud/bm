import React from "react";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import MarqueeSection from "../../components/MarqueeSection/MarqueeSection";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import VideoSection from "../../components/VideoSection/VideoSection";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Testimonial from "../../components/Testimonial/Testimonial";
import FaqSection from "../../components/FaqSection/FaqSection";
// import FeatureSection from "../../components/FeatureSection/FeatureSection";
import BrandSection from "../../components/BrandSection/BrandSection";
// import AwardSection from "../../components/AwardSection/AwardSection";
// import ContactSection from "../../components/ContactSection/ContactSection";
import NewsSection from "../../components/NewsSection/NewsSection";
import ClientForm from "../../components/contactfrom/ClientForm";
// import HeroSection from "../../components/HeroSection/HeroSection";

const NewHome = ({ openPopup }) => {
  return (
    <>
      {/* <HeroSection /> */}
      <Hero openPopup={openPopup} />
      <Feature />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <MarqueeSection />
      <WorkProcess />
      <VideoSection />
      <ChooseUs />
      <Testimonial />
      <FaqSection />
      {/* <FeatureSection /> */}
      <BrandSection />
      {/* <AwardSection /> */}
      {/* <ContactSection /> */}
      <NewsSection />
      <ClientForm />
    </>
  );
};

export default NewHome;

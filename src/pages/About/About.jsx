import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import AboutAwardSection from "../../components/AboutAwardSection/AboutAwardSection";
import AboutHero from "../../components/AboutpagesHero/AboutHero";
import AboutStats from "../../components/AboutStats/AboutStats";
import AboutMission from "../../components/AboutMission/AboutMission";
import AboutProcess from "../../components/AboutProcess/AboutProcess";
import AboutTeam from "../../components/AboutTeam/AboutTeam";

const About = () => {
  return (
    <>
      {/* <AboutPageHero /> */}
      <AboutHero />
      <div className="about-stats-wrap">
        <AboutStats />
      </div>

      <div className="about-mission">
        <AboutMission />
      </div>

      <div className="about-process">
        <AboutProcess />
      </div>

      <div className="about-awardSection">
        <AboutAwardSection />
      </div>

      <div className="about-team">
        <AboutTeam />
      </div>
    </>
  );
};

export default About;

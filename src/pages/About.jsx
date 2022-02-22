import React from "react";
import Footer from "../components/footer/Footer";
import AboutContent from "../components/about/AboutContent";
import PageHeader from "../components/common/PageHeader";
import Navbar from "../components/navbar/Navbar";
import BreadCrumb from "../components/common/BreadCrumb";
import { BacktoTopBtn } from "../components/Buttons/Button";

const About = ({ scrolltoTop }) => {
  return (
    <>
      <Navbar fixed={true} />
      <BreadCrumb label="About" />
      <PageHeader pageTitle="about" />
      <AboutContent />
      <Footer />
      <BacktoTopBtn onClick={scrolltoTop}>
        <span>
          <i className="fas fa-chevron-up"></i>
        </span>
      </BacktoTopBtn>
    </>
  );
};

export default About;

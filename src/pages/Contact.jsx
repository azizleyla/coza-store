import React from "react";
import Footer from "../components/footer/Footer";
import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import Navbar from "../components/navbar/Navbar";
import BreadCrumb from "../components/common/BreadCrumb";
import { BacktoTopBtn } from "../components/Buttons/Button";

const Contact = ({ scrolltoTop }) => {
  return (
    <div>
      <Navbar fixed={true} />
      <BreadCrumb label="Contact" />
      <PageHeader pageTitle="contact" />
      <ContactForm />
      <iframe
        title="nyc"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30593920534!2d-74.25986576030641!3d40.69714941865449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2s!4v1638987041307!5m2!1str!2s"
        loading="lazy"
        style={{ width: "100%", height: "300px" }}
      ></iframe>
      <Footer />
      <BacktoTopBtn onClick={scrolltoTop}>
        <span>
          <i className="fas fa-chevron-up"></i>
        </span>
      </BacktoTopBtn>
    </div>
  );
};

export default Contact;

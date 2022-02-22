import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import imgEmail from "../../images/icon-email.png";
import { FormSubmitBtn } from "../Buttons/Button";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Wrapper className="container">
      <div className="contact-form">
        <div className="contact-form-left bor10">
          <form onSubmit={formik.handleSubmit}>
            <h4>Send Us a message</h4>
            <div className="form-input form-input-flex">
              <img src={imgEmail} alt="email" />
              <input
                name="email"
                placeholder="Your Email Address"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-input">
              <textarea
                name="msg"
                value={formik.values.msg}
                placeholder="How can we help ?"
              />
            </div>
            <FormSubmitBtn className="trans-04">Submit</FormSubmitBtn>
          </form>
        </div>
        <div className="contact-form-right bor10">
          <div className="flex-field pb-42">
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <div className="map-marker">
              <span>Address</span>
              <p className="size-245">
                Coza Store Center 8th floor, 379 Hudson St, New York, NY
                10018 US
              </p>
            </div>
          </div>
          <div className="flex-field pb-42">
            <span>
              <i className="fas fa-phone-alt"></i>
            </span>
            <div className="map-marker">
              <span>Let's talks</span>
              <p className="colorb">+1 800 1236879</p>
            </div>
          </div>
          <div className="flex-field">
            <span>
              <i className="fas fa-envelope"></i>
            </span>
            <div className="map-marker">
              <span>Sale support</span>
              <p className="colorb">contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 11.6rem;
  padding-top: 10.4rem;
  h4 {
    font-size: 24px;
    line-height: 1.5;
    color: #333;
    text-align: center;
    font-weight: normal;
    padding-bottom: 3rem;
  }
  .contact-form {
    display: flex;
    flex-wrap: wrap;
    &-left {
      flex: 0 0 50%;
      padding: 5.5rem 7rem 7rem 7rem;
      @media (max-width: 992px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      @media (max-width: 776px) {
        flex: 0 0 100%;
      }
    }
    &-right {
      flex: 0 0 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 9.3rem;
      @media (max-width: 992px) {
        padding: 3rem 1.5rem;
      }
      @media (max-width: 776px) {
        flex: 0 0 100%;
      }
      .flex-field {
        display: flex;
        i {
          font-size: 1.8rem;
          margin-right: 1.5rem;
        }
        &.pb-42 {
          padding-bottom: 4.2rem;
        }
      }
      .map-marker {
        display: flex;
        flex-direction: column;
        width: 100%;
        span {
          font-size: 1.8rem;
          color: #333;
          line-height: 1.222222;
        }
        p {
          color: #888;
          font-size: 15px;
          line-height: 1.666667;
          padding-top: 1.8rem;
          max-width: 50%;
          &.colorb {
            color: #717fe0;
          }
          &.size-245 {
            max-width: 24.5rem;
          }
        }
      }
    }
    .form-input {
      border-radius: 2px;
      margin-bottom: 2rem;
      border: 1px solid #e6e6e6;
      input,
      textarea {
        text-transform: capitalize;
        font-size: 1.4rem;
        color: #333;
        outline: none;
        border: none;
        line-height: 1.6923;
        padding-left: 2.8rem;
        font-family: "Poppins", sans-serif;
      }

      textarea {
        padding-top: 2.5rem;
        padding-left: 2.8rem;
        height: 19rem;
        width: 100%;
      }
      &-flex {
        display: flex;
        align-items: center;
        input {
          height: 50px;
          width: 100%;
          display: inline-block;
          padding-left: 1rem;
        }
        img {
          padding-left: 2.8rem;
        }
      }
    }
  }

  .bor10 {
    border: 1px solid #e6e6e6;
  }
`;
export default ContactForm;

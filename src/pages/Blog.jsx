import React from "react";
import PageHeader from "../components/common/PageHeader";
import Footer from "../components/footer/Footer";
import BreadCrumb from "../components/common/BreadCrumb";
import Navbar from "../components/navbar/Navbar";
import blogImg1 from "../images/blog-04.jpg";
import blogImg2 from "../images/blog-05.jpg";
import blogImg3 from "../images/blog-06.jpg";
import styled from "styled-components";
const Blog = () => {
  return (
    <Wrapper>
      <BreadCrumb label="Blog" />
      <Navbar fixed="true" />
      <PageHeader pageTitle="blog" />
      <div className="row container">
        <div className="col-md-8">
          <div className="blog-box">
            <a className="img-box" href="/#">
              <img src={blogImg1} alt="img-blog" />
              <div className="blog-date">
                <span className="day">22</span>
                <span className="month">Jan 2018</span>
              </div>
            </a>
            <div className="blog-content">
              <h4>
                <a href="/#">
                  8 Inspiring Ways to Wear Dresses in the Winter
                </a>
              </h4>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                Donec dictum vitae sapien eu varius
              </p>
            </div>
            <div className="blog-footer">
              <span>
                {" "}
                <span>By Admin</span>
                <span className="space">|</span>
                <span>StreetStyle, FashionCouple</span>
                <span className="space">|</span>
                <span>8 comments</span>
              </span>
              <button>
                {" "}
                Continue Reading <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="blog-box">
            <a className="img-box" href="/#">
              <img src={blogImg2} alt="img-blog" />
              <div className="blog-date">
                <span className="day">22</span>
                <span className="month">Jan 2018</span>
              </div>
            </a>
            <div className="blog-content">
              <h4>
                <a href="/#">
                  8 Inspiring Ways to Wear Dresses in the Winter
                </a>
              </h4>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                Donec dictum vitae sapien eu varius
              </p>
            </div>
            <div className="blog-footer">
              <span>
                {" "}
                <span>By Admin</span>
                <span className="space">|</span>
                <span>StreetStyle, FashionCouple</span>
                <span className="space">|</span>
                <span>8 comments</span>
              </span>
              <button>
                {" "}
                Continue Reading <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="blog-box">
            <a className="img-box" href="/#">
              <img src={blogImg3} alt="img-blog" />
              <div className="blog-date">
                <span className="day">22</span>
                <span className="month">Jan 2018</span>
              </div>
            </a>
            <div className="blog-content">
              <h4>
                <a href="/#">
                  8 Inspiring Ways to Wear Dresses in the Winter
                </a>
              </h4>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                Donec dictum vitae sapien eu varius
              </p>
            </div>
            <div className="blog-footer">
              <span>
                {" "}
                <span>By Admin</span>
                <span className="space">|</span>
                <span>StreetStyle, FashionCouple</span>
                <span className="space">|</span>
                <span>8 comments</span>
              </span>
              <button>
                {" "}
                Continue Reading <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .row {
    display: flex;
    padding: 6rem 0;
  }
  .col-md-8 {
    flex: 0 0 75%;
    position: relative;
    max-width: 75%;
    overflow: hidden;
    .blog-box {
      margin-bottom: 60px;
      .img-box {
        overflow: hidden;
        &:hover img {
          transform: scale(1.1);
        }
        img {
          width: 100%;
          transition: transform 0.9s ease;
        }
      }
    }

    .blog-date {
      position: absolute;
      top: 15px;
      left: 10px;
      width: 70px;
      min-height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.9);
      span.day {
        font-size: 30px;
        line-height: 1.1;
        color: #333;
      }
      span.month {
        font-size: 12px;
        line-height: 1.833333;
        color: #666;
      }
    }
    .blog-content {
      a {
        font-size: 26px;
        line-height: 1.3846;
        color: #333;
        transition: all 0.4s;
        padding-top: 32px;
        padding-bottom: 15px;
        display: inline-block;
      }
      p {
        font-size: 15px;
        line-height: 1.666667;
        color: #888;
      }
    }
    .blog-footer {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 13px;
        line-height: 1.6923;
        color: #333;
        margin: 10px 0;
      }
      button {
        font-size: 15px;
        line-height: 1.466667;
        text-transform: uppercase;
        color: #333;
        i {
          margin-left: 9px;
        }
      }
      .space {
        margin-right: 6px;
        margin-left: 4px;
      }
    }
  }
`;

export default Blog;

import React from "react";
import styled from "styled-components";
import aboutImg from "../../images/about-01.jpg";
import aboutImg2 from "../../images/about-02.jpg";
const AboutContent = () => {
  return (
    <Wrapper className="container">
      <AboutContentContainer className="row">
        <div className="col-1">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris consequat consequat enim, non auctor massa ultrices
              non. Morbi sed odio massa. Quisque at vehicula tellus, sed
              tincidunt augue. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Maecenas varius
              egestas diam, eu sodales metus scelerisque congue.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Maecenas gravida justo eu
              arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum
              eget, dictum enim. Donec non neque ut enim dapibus tincidunt
              vitae nec augue. Suspendisse potenti. Proin ut est diam.
              Donec condimentum euismod tortor, eget facilisis diam
              faucibus et. Morbi a tempor elit.
            </p>
            <p>
              Donec gravida lorem elit, quis condimentum ex semper sit
              amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
              sodales. Ut fringilla turpis in vehicula vehicula.
              Pellentesque congue ac orci ut gravida. Aliquam erat
              volutpat. Donec iaculis lectus a arcu facilisis, eu sodales
              lectus sagittis. Etiam pellentesque, magna vel dictum rutrum,
              neque justo eleifend elit, vel tincidunt erat arcu ut sem.
              Sed rutrum, turpis ut commodo efficitur, quam velit convallis
              ipsum, et maximus enim ligula ac ligula.
            </p>
            <p>
              Any questions? Let us know in store at 8th floor, 379 Hudson
              St, New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
          </div>
        </div>
        <div className="col-2">
          <div className="about-img">
            <div className="hov-img">
              <img src={aboutImg} alt="img" />
            </div>
          </div>
        </div>
      </AboutContentContainer>
      <AboutContentContainer direction="reverse">
        <div className="col-1">
          <div className="about-text about-text-right">
            <h3>Our Mission</h3>
            <p>
              Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum
              rhoncus dignissim risus, sed consectetur erat. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Nullam maximus mauris sit amet odio
              convallis, in pharetra magna gravida. Praesent sed nunc
              fermentum mi molestie tempor. Morbi vitae viverra odio.
              Pellentesque ac velit egestas, luctus arcu non, laoreet
              mauris. Sed in ipsum tempor, consequat odio in, porttitor
              ante. Ut mauris ligula, volutpat in sodales in, porta non
              odio. Pellentesque tempor urna vitae mi vestibulum, nec
              venenatis nulla lobortis. Proin at gravida ante. Mauris
              auctor purus at lacus maximus euismod. Pellentesque vulputate
              massa ut nisl hendrerit, eget elementum libero iaculis.
            </p>
            <div className="quote-container">
              <p>
                Creativity is just connecting things. When you ask creative
                people how they did something, they feel a little guilty
                because they didn't really do it, they just saw something.
                It seemed obvious to them after a while.
              </p>
              <span>- Steve Job’s</span>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="about-img about-img-reverse">
            <div className="hov-img">
              <img src={aboutImg2} alt="img" />
            </div>
          </div>
        </div>
      </AboutContentContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-bottom: 12rem;
  padding-top: 7.5rem;
`;

const AboutContentContainer = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  flex-direction: ${(props) =>
    props.direction === "reverse" ? "row-reverse" : "row"};
  padding-top: ${(props) => (props.direction === "reverse" ? "14rem" : 0)};
  gap: 3rem 0;
  @media (max-width: 776px) {
    flex-direction: column;
  }
  .col-1 {
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 66.666%;
    max-width: 66.666%;
    @media (max-width: 776px) {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
  .col-2 {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 776px) {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  .about-text {
    padding-right: 8.5rem;
    @media (max-width: 776px) {
      padding-right: 0;
    }
    &-right {
      padding-left: 8.5rem;
      @media (max-width: 776px) {
        padding: 0 2rem;
      }
    }
    h3 {
      font-size: 25px;
      line-height: 1.2;
      font-weight: bold;
      padding-bottom: 1.6rem;
      color: #333;
    }
    p {
      padding-bottom: 2.6rem;
      font-size: 1.4rem;
      line-height: 1.7857;
      color: #888;
    }
    span {
      font-size: 13px;
      line-height: 1.6923;
      color: #555;
    }
    .quote-container {
      border-left: 3px solid #e6e6e6;
      margin-top: 2.2rem;
      padding-left: 2.9rem;
    }
  }
  .about-img {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 776px) {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    &:before {
      content: "";
      position: absolute;
      bottom: -2.1rem;
      display: block;
      left: -2.1rem;
      width: 100%;
      height: 100%;
      border: 3px solid #ccc;
    }
    &-reverse:before {
      left: 2.1rem;
    }
    .hov-img {
      overflow: hidden;
      &:hover img {
        transform: scale(1.1);
      }
      img {
        max-width: 100%;
        position: relative;
        width: 100%;
        transition: transform 0.9s ease;
      }
    }
  }
`;
export default AboutContent;

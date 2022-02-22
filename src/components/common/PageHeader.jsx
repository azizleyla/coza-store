import React from "react";
import styled from "styled-components";
import bgAbout from "../../images/bg-01.jpg";
import bgBlog from "../../images/bg-02.jpg";

const PageHeader = ({ pageTitle }) => {
  return (
    <HeroContainer page={pageTitle}>
      <h2>{pageTitle}</h2>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
    background-image: ${(props) =>
      props.page === "about" || props.page === "contact"
        ? `url(${bgAbout})`
        : props.page === "blog"
        ? `url(${bgBlog})`
        : ""};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 9.2rem;
    padding-bottom: 9.2rem;
    text-align: center;
    margin-top: 3rem;
    @media(max-width:992px){
      margin-top: 0;
    }
  }

  
  h2 {
    font-size: 50px;
    line-height: 1.1;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
`;

export default PageHeader;

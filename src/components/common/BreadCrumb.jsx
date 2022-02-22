import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadCrumb = ({ label }) => {
  return (
    <BreadCrumbContainer className="container">
      <Link className="main-link" to="/">
        Home
        <i className="fa fa-angle-right"></i>
      </Link>
      <span>{label}</span>
    </BreadCrumbContainer>
  );
};

const BreadCrumbContainer = styled.div`
  margin-top: 120px;
  i {
    margin-right: 1rem;
    margin-left: 0.9rem;
  }
  .main-link,
  span {
    font-size: 13px;
    line-height: 1.833333;
    color: #555;
  }
  span {
    color: #999;
  }
`;

export default BreadCrumb;

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const PageHeader = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Topbar>
      <div className="container">
        <div className="content-bar">
          <div className="left-top-bar">
            <p>{t("free_shipping")}</p>
          </div>
          <div className="right-top-bar">
            <button className="trans-04" href="/#">
              {t("help_faq")}
            </button>
            <button className="trans-04" href="/#">
              {t("account")}
            </button>
            <button
              className="trans-04"
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              className="trans-04"
              onClick={() => changeLanguage("az")}
            >
              AZ
            </button>
            <button className="trans-04" href="/#">
              USD
            </button>
          </div>
        </div>
      </div>
    </Topbar>
  );
};

const Topbar = styled.div`
  background-color: #222;
  height: 40px;
  @media (max-width: 992px) {
    display: none;
  }
  .content-bar {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left-top-bar {
    p {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #b2b2b2;
    }
  }
  .right-top-bar {
    display: flex;
    height: 100%;
    flex-wrap: wrap;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0 2.5rem;
      font-size: 1.2rem;
      color: #b2b2b2;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      &:first-child {
        border-left: 1px solid rgba(255, 255, 255, 0.3);
      }
      &:hover {
        color: #6c7ae0;
      }
    }
  }
`;
export default PageHeader;

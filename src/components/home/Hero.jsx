import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShopBtn } from "../Buttons/Button";
import { sliders, slides } from "../../utils/constants";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Pagination]);

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <HeroContainer>
      <Swiper
        slidesPerView={1}
        pagination
        grabCursor={true}
        loop={true}
        navigation
        spaceBetween={0}
      >
        {sliders(t).map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <img alt="img" className="slide-img" src={slide.img} />
            <div className="hero-content">
              <span>{t(slide.title)}</span>
              <h2>{t(slide.subtitle)}</h2>
              <ShopBtn>
                <Link to="/shop">{t("shop_now")}</Link>
              </ShopBtn>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroContainer>
  );
};
const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  .hero-content {
    position: absolute;
    top: 0;
    left: 4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    span {
      font-size: 2.8rem;
      line-height: 1.2857;
      color: #333;
      text-transform: capitalize;
      animation: bottom 1s ease-in-out;
      @keyframes bottom {
        from {
          transform: translateY(-80px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @media (max-width: 776px) {
        font-size: 2rem;
      }
    }
    h2 {
      margin: 3rem 0;
      font-size: 6rem;
      line-height: 1.1;
      text-transform: uppercase;
      color: #333;
      animation: top 1s ease-in-out;
      @keyframes top {
        from {
          opacity: 0;
          transform: translateY(80px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @media (max-width: 776px) {
        font-size: 3rem;
      }
    }
  }
`;

export default Hero;

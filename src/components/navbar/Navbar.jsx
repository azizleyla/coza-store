import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getNavItems, navItems } from "../../utils/constants";
import logo from "../../images/logo-01.png";
import "boxicons";
import { useSelector } from "react-redux";
import { showSidebar } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = ({ fixed }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const ref = useRef();
  const [fixNavbar, setFixNavbar] = useState(false);
  const favoriteProducts = useSelector((state) =>
    state.favoriteProducts.filter((item) => item.like),
  );
  useEffect(
    (e) => {
      window.addEventListener("scroll", handleScroll);
      const checkIfClickedOutside = (e) => {
        if (
          ref.current &&
          !ref.current.contains(e.target) &&
          !e.target.classList.contains("fa-bars")
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", checkIfClickedOutside);
      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside);
      };
    },
    [setIsOpen],
  );

  const handleScroll = () => {
    if (window.pageYOffset > 30) {
      setFixNavbar(true);
    } else {
      setFixNavbar(false);
    }
  };

  const handleClick = () => {
    dispatch(showSidebar());
  };
  return (
    <NavbarContainer
      className={`${fixNavbar || fixed ? "fixed" : ""} ${
        isOpen ? "fixed-lg" : ""
      }`}
    >
      <nav className="nav">
        <div className="nav-header">
          <a href="/#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="navbar-icon">
            <a href="/#" className="icon">
              <box-icon size="lg" name="search-alt-2"></box-icon>
            </a>
            <button onClick={handleClick} className="icon">
              <box-icon
                size="lg"
                className="icon"
                name="cart"
                type="solid"
              ></box-icon>
              <span>{cart.length}</span>
            </button>
            <Link to="/wishlist" className="icon">
              <box-icon size="lg" name="heart"></box-icon>
              <span>{favoriteProducts.length}</span>
            </Link>
          </div>
          <div className="hamburger-menu" onClick={() => setIsOpen(true)}>
            <RiMenu3Line className="hamburger-icon" />
          </div>
        </div>
        <div className={isOpen ? "navbar-mobile active" : "navbar-mobile"}>
          <ul
            ref={ref}
            className={isOpen ? "nav-list active" : "nav-list"}
          >
            <a href="/#" className="logo">
              <span>COZA</span> STORE
            </a>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              <i className="fas fa-times" />
            </button>

            {getNavItems(t).map((item) => (
              <li className="nav-item trans-04" key={item.id}>
                <Link
                  onClick={() => {
                    setActiveLink(item.path);
                    setIsOpen(false);
                  }}
                  className={
                    activeLink === item.path
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-icon2">
          <a href="/#" className="icon">
            <box-icon size="lg" name="search-alt-2"></box-icon>
          </a>
          <button className="icon" onClick={handleClick}>
            <box-icon
              size="lg"
              className="icon"
              name="cart"
              type="solid"
            ></box-icon>
            <span>{cart.length}</span>
          </button>
          <Link to="/wishlist" className="icon">
            <box-icon size="lg" name="heart"></box-icon>
            <span>{favoriteProducts.length}</span>
          </Link>
        </div>
      </nav>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: transparent;
  width: 100%;
  position: fixed;
  z-index: 9999;
  transition: height 0.3s, background-color 0.3s;
  @media (max-width: 992px) {
    padding: 0;
  }
  &.fixed {
    padding-top: 1rem;
    padding-bottom: 1rem;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0px 3px 0px rgb(0 0 0 / 20%);
    -moz-box-shadow: 0 0px 3px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 0px 3px 0px rgb(0 0 0 / 20%);
    @media (max-width: 992px) {
      padding: 0;
    }
  }
  .hamburger-icon {
    font-size: 2.5rem;
    color: #6c7ae0;
  }

  .nav-header {
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      padding: 1rem 2rem;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;
      width: 100%;
      padding: 1.5rem;
    }
    .navbar-icon {
      display: none;
      @media (max-width: 992px) {
        display: flex;
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
    @media (max-width: 992px) {
      display: block;
    }
    .logo {
      margin-right: 5.5rem;
      display: flex;
      align-items: center;
      @media (max-width: 576px) {
        img {
          width: 80px;
        }
      }
    }

    .nav-list {
      display: flex;
      align-items: center;

      .close-btn {
        display: none;
        @media (max-width: 992px) {
          display: block;
          position: absolute;
          right: 2rem;
          transform: scale(1);
          top: 2rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          &:hover {
            transform: rotate(180deg);
          }
          i {
            font-size: 2.3rem;
            color: #fff;
          }
        }
      }
      .logo {
        display: none;
        span {
          color: #444;
        }
        @media (max-width: 992px) {
          display: block;
          color: #fff;
          font-size: 20px;
          margin: 20px 10px;
        }
      }

      @media (max-width: 992px) {
        flex-direction: column;
        align-items: flex-start;
        position: fixed;
        left: -100%;
        transition: all 0.4s;
        top: 0;
        height: 100vh;
        padding: 50px 20px;
        &.active {
          background-color: #6c7ae0;
          left: 0;
          width: 80%;
        }
      }
      .nav-item {
        display: block;
        position: relative;
        padding: 20px 10px 20px 0px;
        margin: 0px 4px 0px 14px;
        @media (max-width: 992px) {
          padding: 1rem 0;
          &:last-child {
            padding: 0;
          }
        }

        .nav-link {
          text-transform: capitalize;
          font-size: 1.4rem;
          color: #333;
          padding: 5px 0px;
          font-weight: 500;
          transition: all 0.4s;
          @media (max-width: 992px) {
            color: #fff;
            font-size: 1.6rem;
          }
          &:hover {
            color: #6c7ae0;
            @media (max-width: 992px) {
              color: #fff;
              margin-left: 7px;
            }
          }
          &.active {
            color: #6c7ae0;
            @media (max-width: 992px) {
              color: #fff;
            }
          }
        }
      }
    }
    .navbar-icon {
      margin-left: auto;
      display: flex;

      .icon {
        cursor: pointer;
        position: relative;
        margin-right: 2.5rem;
        @media (max-width: 992px) {
          margin-right: 1.8rem;
        }
        span {
          top: -1rem;
          right: -1rem;
          position: absolute;
          background-color: #6c7ae0;
          width: 1.8rem;
          height: 1.8rem;
          text-align: center;
          line-height: 2rem;
          color: #fff;
          font-size: 1.3rem;
        }
        &:hover {
          color: #6c7ae0;
        }
      }
    }
    .navbar-icon2 {
      margin-left: auto;
      display: flex;
      @media (max-width: 992px) {
        display: none;
      }
      .icon {
        cursor: pointer;
        position: relative;
        margin-right: 2.5rem;
        @media (max-width: 992px) {
          margin-right: 1.8rem;
        }
        span {
          top: -1rem;
          right: -1rem;
          position: absolute;
          background-color: #6c7ae0;
          width: 1.8rem;
          height: 1.8rem;
          text-align: center;
          line-height: 2rem;
          color: #fff;
          font-size: 1.3rem;
        }
        &:hover {
          color: #6c7ae0;
        }
      }
    }
  }
  .hamburger-menu {
    cursor: pointer;
    display: none;
    margin-left: 2rem;
    @media (max-width: 992px) {
      display: block;
    }
  }
`;
export default Navbar;

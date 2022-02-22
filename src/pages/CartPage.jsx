import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BreadCrumb from "../components/common/BreadCrumb";
import Cart from "../components/cart/Cart";
import CartTotal from "../components/cart/CartTotal";
import EmptyCartMessage from "../components/common/EmptyCartMessage";
import Footer from "../components/footer/Footer";
import LoadingModal from "../components/common/LoadingModal";
import Navbar from "../components/navbar/Navbar";
import Spinner from "../components/common/Spinner";


const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);
  return (
    <>
      {isLoading && (
        <LoadingModal isLoading={isLoading} setIsLoading={setIsLoading} />
      )}

      <Wrapper>
        <Navbar fixed={true} />
        <BreadCrumb label="Shopping cart" />
        {loading ? (
          <Spinner />
        ) : (
          <form className="container">
            <div className="row">
              {cart.length ? (
                <>
                  <Cart
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                  />
                  <CartTotal />
                </>
              ) : (
                <EmptyCartMessage />
              )}
            </div>
          </form>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;

  .row {
    display: flex;
    margin-top: 4rem;
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
`;
export default CartPage;

import React from "react";

import { Product, FooterBanner, UpBanner } from "../components";

const Home = () => {
  return (
    <>
      <UpBanner />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Headphones</p>
      </div>
      <div className='products-container'>
        {["Product 1", "Product 2", "Product 3"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;

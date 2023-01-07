import React from "react";

import { client } from "../lib/client";
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

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;

import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, UpBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      {/* <UpBanner bannerD={bannerData.length && bannerData[0]} /> */}
      <UpBanner bannerD={bannerData.length && bannerData} />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Top Products</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner bannerD={bannerData.length && bannerData[0]} />
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

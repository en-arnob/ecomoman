import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const UpBanner = ({ bannerD }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{bannerD.smallText}</p>
        <h3>{bannerD.midText}</h3>
        <h1>{bannerD.largeText1}</h1>
        <img
          src={urlFor(bannerD.image)}
          alt='headphones'
          className='hero-banner-image'
        />
        <div>
          <Link href={`/product/${bannerD.product}`}>
            <button type='button'>{bannerD.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>{bannerD.desc}</h5>
            <p>{bannerD.saleTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpBanner;

import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({ bannerD }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{bannerD.discount}</p>
          <h3>{bannerD.largeText1}</h3>
          <h3>{bannerD.largeText2}</h3>
          <p>{bannerD.saleTime}</p>
        </div>
        <div className='right'>
          <p>{bannerD.smallText}</p>
          <h3>{bannerD.midText}</h3>
          <p>{bannerD.desc}</p>
          <Link href={`/product/${bannerD.product}`}>
            <button type='button'>{bannerD.buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(bannerD.image)} className='footer-banner-image' />
      </div>
    </div>
  );
};

export default FooterBanner;

import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Carousel from "react-grid-carousel";

const UpBanner = ({ bannerD }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <Carousel showDots>
          {bannerD.map((banner, i) => (
            <Carousel.Item key={i}>
              <div class='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                  <img src={urlFor(banner.image)} width='300px' height='5px' />
                </div>

                <div>
                  <p className='md:text-5xl sm:text-3xl'>{banner.smallText}</p>
                  <h1>{banner.largeText1}</h1>
                  <div>
                    <h5>{banner.midText}</h5>
                    <p>{banner.discount}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <p className='beats-solo'>{bannerD.smallText}</p>
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
        </div> */}
      </div>
    </div>
  );
};

export default UpBanner;

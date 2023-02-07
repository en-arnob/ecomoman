import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Carousel from "react-grid-carousel";

const UpBanner = ({ bannerD }) => {
  return (
    <div className='hero-banner-container'>
      <div ml-2>
        <Carousel showDots loop gap={5} cols={1} autoplay={2000}>
          {bannerD.map((banner, i) => (
            <Carousel.Item key={i}>
              <div class='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div className='h-50%'>
                  <img src={urlFor(banner.image)} width='300px' height='5px' />
                </div>

                <div className='h-50%'>
                  <p className='md:text-5xl sm:text-3xl'>{banner.smallText}</p>
                  <h1 className='md:text-5xl sm:text-xl'>
                    {banner.largeText1}
                  </h1>
                  <div className='md:visible '>
                    <h5 className='text-3xl mt-2 font-bold mb-2 text-red-700'>
                      {banner.midText}
                    </h5>
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

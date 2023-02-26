import React from "react";
import { useState } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { Product } from "../../components";

const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const { image, name, price, details } = product;
  return (
    <div>
      <div className='product-detail-container '>
        <div className='grid md:grid-cols-3 sm:grid-row gap-4'>
          <div className='col-span-2'>
            <div className='flex flex-col '>
              <div className='image-container object-contain w-96'>
                <img src={urlFor(image && image[index])} alt='' />
              </div>
              <div className='small-images-container'>
                {image?.map((item, i) => (
                  <img
                    src={urlFor(item)}
                    className={
                      i === index ? "small-image selected-image" : "small-image"
                    }
                    onMouseEnter={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className='ml-10 product-details-desc'>
              <h1 className='text-2xl'>{name}</h1>
              <div className='reviews flex'>
                <div className='flex'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
              <h4 className='font-bold mt-2'>Details:</h4>
              <p>{details}</p>
              <p className='text-lg mt-2'>Price</p>
              <p className='price font-semibold text-red-600 text-lg'>
                ${price}
              </p>
              <div className='quantity mt-4'>
                <h3 className='text-lg mb-3 '>Quantity:</h3>
                <div>
                  <div class='flex items-center border border-gray-200 divide-x divide-gray-200 rounded'>
                    <button
                      type='button'
                      class='w-10 h-10 text-center ml-2 pl-2 text-gray-600 transition hover:opacity-75'
                      onClick=''
                    >
                      <AiOutlineMinus />
                    </button>

                    <span className='h-10 w-16 text-lg mt-2 border-transparent text-center'>
                      0
                    </span>

                    <button
                      type='button'
                      class='w-10 h-10 text-center pl-5 leading-10 text-gray-600 transition hover:opacity-75'
                      onClick=''
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>

                <div className='buttons flex flex-col  gap-2'>
                  <button type='button' className='add-to-cart' onClick=''>
                    Add To Cart
                  </button>
                  <button type='button' className='buy-now' onClick=''>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;

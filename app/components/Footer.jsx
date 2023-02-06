import React from "react";
import { AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='mt-20 rounded-xl py-6 bg-gray-700 dark:text-gray-50'>
      <div className='container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50'>
        <div className='grid grid-cols-12'>
          <div className='pb-6 col-span-full md:pb-0 md:col-span-6'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='flex justify-center space-x-3 md:justify-start'
            >
              <div className='flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  fill='currentColor'
                  className='flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900'
                >
                  <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                </svg>
              </div>
              <span className='self-center text-2xl font-semibold'>
                Ecomoman
              </span>
            </a>
            <div className='mt-5 rounded-lg '>
              <iframe
                width='300'
                height='150'
                style={{ border: 0 }}
                loading='lazy'
                allowfullscreen
                src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ92pXbcOV6IkRuasOtcOeKEY&key=YOUR_API_KEY'
              />
            </div>
          </div>
          <div className='col-span-6 text-left md:col-span-3'>
            <p className='pb-1 text-lg font-medium'>Category</p>
            <ul>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-red-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-red-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-6 text-left md:text-left md:col-span-3'>
            <p className='pb-1 text-lg font-medium'>Address</p>
            <ul>
              <p className=''>17/5-B West Rajabazar</p>

              <li>
                <p className=''>Dhaka 1208</p>
              </li>
              <li>
                <p className=''>Contact: 017XXXXXX</p>
              </li>
              <li>
                <p className=''>feedback@ecomoman.com</p>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-red-400'
                >
                  Get us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='grid justify-center pt-6 lg:justify-between'>
          <div className='flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6'>
            <span>©2023 All rights reserved</span>
            <a rel='noopener noreferrer' href='#'>
              <span>Privacy policy</span>
            </a>
            <a rel='noopener noreferrer' href='#'>
              <span>Terms of service</span>
            </a>
          </div>
          <div className='flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13'>
            <a
              rel='noopener noreferrer'
              href='#'
              title='Email'
              className='flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900'
            >
              <AiFillInstagram />
            </a>

            <a
              rel='noopener noreferrer'
              href='#'
              title='GitHub'
              className='flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900'
            >
              <AiOutlineFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

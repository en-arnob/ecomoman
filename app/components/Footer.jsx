import React from "react";
import { AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Ecomoman: Buy your gadgets!</p>
      <p>Quick Support: 017XXXXXXX</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineFacebook />
      </p>
    </div>
  );
};

export default Footer;

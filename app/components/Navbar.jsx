import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo '>
        <Link href='/'>
          <h3>Ecomoman</h3>
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick=''>
        <FiShoppingBag />
        <span className='cart-item-qty mb-10'>1</span>
      </button>
    </div>
  );
};

export default Navbar;

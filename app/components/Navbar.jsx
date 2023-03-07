import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Cart } from "./";

import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo '>
        <Link href='/'>
          <h3>Ecomoman</h3>
        </Link>
      </p>
      <button
        type='button'
        className='cart-icon'
        onClick={() => setShowCart(true)}
      >
        <FiShoppingBag />
        <span className='cart-item-qty mb-10'>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;

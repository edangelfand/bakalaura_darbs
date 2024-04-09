import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./cart";
import Payment from "./payment";
import "./navbar.style.css";

const cartIsShown = (props) => {
  let sum = 0;
  props.cart.forEach(element => sum += element.price)

  return (
    <div>
      {props.cart.map(element => (
        <Cart key={element.id} item={element}/>
      ))}
      <h2 className="cart-sum">Apmaksai: {sum} €</h2>
      <Payment />
      <button className = "product-payment">Apmaksāt</button>
    </div>
  )
}

const cartIsNotShown = () => {
  return (
    <div className="cart-hidden">
      <h2>Grozs ir tukšs</h2>
    </div>
  )
}

export const Navbar = (props) => {
  let [showCart, setShowCart] = useState(false);

  return (
    <div className="navbar">
      <a href="/home" className="logo">2b.lv</a>
      <nav>
        <FaShoppingCart onClick={() => setShowCart(showCart = !showCart)} className={`menu-cart ${showCart && "active"}`} />
        {showCart && (
          <div className="opened-cart">
            {props.cart.length > 0 ? 
              cartIsShown(props) : cartIsNotShown()}
          </div>
        )}
        <ul>
          <li>Par veikalu</li>
          <li>Kontakti</li>
        </ul>
      </nav>
    </div>
  );
}
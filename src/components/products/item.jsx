import React, { Component } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import "./items.style.css";

class Item extends Component {
  handleItemClick(event) {
    if (!event.target.closest('button')) {
      this.props.itemIsOpened(this.props.item);
    }
  }

  render() {
    return (
        <div className="product-items">
            <div className="product-element" onClick={(event) => this.handleItemClick(event)}> 
                <img src={this.props.item.img}
                    className="product-img" alt="produkts" />
                <p className="product-name">{this.props.item.name}</p>
                <p className="product-price">{this.props.item.price} €</p>
                <button onClick={() => this.props.withAdding(this.props.item)}>Pievienot grozam 
                    <FaShoppingCart className="cart-icon" />
                </button>
            </div>
        </div>
    );
  }
}

export default Item;

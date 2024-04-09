import React, { Component } from 'react';
import { FaShoppingCart } from "react-icons/fa";

class ItemPage extends Component {
    render() {
    return (
        <div className="product-page" onClick={() => this.props.itemIsOpened(this.props.item)}>
            <div className="product-page-wrap" onClick={(event) => event.stopPropagation()}>
                <img src={this.props.item.img}
                    className="product-img" alt="produkts" />
                <p className="product-name">{this.props.item.name}</p>
                <p className="product-price">{this.props.item.price} €</p>
                <p className="product-descr">{this.props.item.description}</p>
                <button onClick={() => this.props.withAdding(this.props.item)}>Pievienot grozam 
                <FaShoppingCart className="cart-icon" />
                </button>
            </div>
        </div>
    );
  }
}

export default ItemPage;

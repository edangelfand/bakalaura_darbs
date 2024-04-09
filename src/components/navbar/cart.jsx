import React, { Component } from 'react'

export class Cart extends Component {
  render() {
    return (
        <div className="product">
            <img src={this.props.item.img} className="product-img" alt="produkts" />
            <div className="info-wrap">
                <p className = "product-name">{this.props.item.name}</p>
                <p className = "product-price">{this.props.item.price} €</p>
            </div>
        </div>
    )
  }
}

export default Cart
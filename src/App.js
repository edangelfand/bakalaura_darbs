import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { Items } from "./components/products/items";
import Categories from "./components/products/categories";
import ItemPage from "./components/products/itemPage";
import "./style.css";


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          img: './././assets/products/Iphone_15_titan.jpg',
          name: 'Apple iPhone 15 Pro, 256GB',
          price: 1100,
          category: 'phone',
        },
        {
          id: 2,
          img: './././assets/products/iphone_15_blue.jpg',
          name: 'Apple iPhone 15 Pro Max, 256GB',
          price: 1300,
          category: 'phone',
        },
        {
          id: 3,
          img: './././assets/products/apple_macbook_pro.webp',
          name: 'Apple MacBook Pro 16, 512 GB',
          price: 2800,
          category: 'laptop',
        },
        {
          id: 4,
          img: './././assets/products/apple_airpods_gen2.jpg',
          name: 'Apple Airpods Gen 2',
          price: 120,
          category: 'headphones',         
        },
        {
          id: 5,
          img: './././assets/products/iphone_13_pink.jpg',
          name: 'Apple iPhone 13, 256GB',
          price: 800,
          category: 'phone',
        },
        {
          id: 6,
          img: './././assets/products/iphone_14_plus_red.jpg',
          name: 'Apple iPhone 14 Plus, 128GB',
          price: 900,
          category: 'phone',
        },
        {
          id: 7,
          img: './././assets/products/logitech_g435.webp',
          name: 'Logitech G435',
          price: 65,
          category: 'headphones',       
        },
        {
          id: 8,
          img: './././assets/products/lenovo_legion_slim.jpg',
          name: 'Lenovo Legion Slim 5, 512 GB',
          price: 1350,
          category: 'laptop',
        },
        {
          id: 9,
          img: './././assets/products/samsung_s24_grey.jpg',
          name: 'Samsung Galaxy S24 Plus, 256GB',
          price: 500,
          category: 'phone',
        },
        {
          id: 10,
          img: './././assets/products/poco_x6.jpg',
          name: 'Poco X6 Pro 5G, 512GB',
          price: 300,
          category: 'phone',
        },
        {
          id: 11,
          img: './././assets/products/xiaomi_12.jpg',
          name: 'Xiaomi 12, 256GB',
          price: 250,
          category: 'phone',
        },
        {
          id: 12,
          img: './././assets/products/one_plus.jpg',
          name: 'OnePlus Nord CE 3 Lite 5G, 128G',
          price: 350,
          category: 'phone',
        },
        {
          id: 13,
          img: './././assets/products/lenovo_ideapad.jpg',
          name: 'Lenovo IdeaPad Slim 3, 512 GB',
          price: 450,
          category: 'laptop',
        },
        {
          id: 14,
          img: './././assets/products/Samsung_S24_melns.jpg',
          name: 'Samsung Galaxy S24 5G, 128GB',
          price: 400,
          category: 'phone',
        },
        {
          id: 15,
          img: './././assets/products/asus_vivobook.jpg',
          name: 'Asus Vivobook 16, 512 GB',
          price: 780,
          category: 'laptop',
        },
        {
          id: 16,
          img: './././assets/products/iphone_15_grey.jpg',
          name: 'Apple iPhone 15 Pro Max, 512GB',
          price: 1400,
          category: 'phone',
        },
        {
          id: 17,
          img: './././assets/products/sennheiser_momentum_4.jpeg',
          name: 'Sennheiser Momentum 4',
          price: 260,
          category: 'headphones',
        },
        {
          id: 18,
          img: './././assets/products/samsung_galaxy_buds_2_onyx.webp',
          name: 'Samsung Galaxy Buds 2 Onyx',
          price: 100,
          category: 'headphones',
        },
        {
          id: 19,
          img: './././assets/products/iphone_11_grey.jpg',
          name: 'Apple iPhone 11, 64GB',
          price: 550,
          category: 'phone',
          description: 'iPhone 11 ir aprīkots ar 6,1 collu Liquid Retina HD displeju ar izšķirtspēju 1792 x 828 pikseļi. Tā darbību nodrošina A13 Bionic procesors. Telefonam ir divas aizmugurējās kameras (12 MP katra) un priekšējā kamera TrueDepth (12 MP). Krātuve ietver 64 GB iebūvētās atmiņas. Baterija ir iebūvēta litija-jonu baterija. OS ir iOS. Papildus funkcijas ietver Wi-Fi 6, Bluetooth 5.0, NFC, GPS/GNSS un stereo skaļruņus.'
        },
        {
          id: 20,
          img: './././assets/products/iphone_12_purple.jpg',
          name: 'Apple iPhone 12, 64GB',
          price: 700,
          category: 'phone',
        },
      ],
      shownItems: [],
      cart: [],
      itemPage: false,
      itemFullInfo: {}
    }
    this.state.shownItems = this.state.items
    this.addToCart = this.addToCart.bind(this)
    this.filterItems = this.filterItems.bind(this)
    this.itemIsOpened = this.itemIsOpened.bind(this)
  }
  
  render() {
    return (
      <>
        <Navbar cart={this.state.cart} />
        <Categories filterItems={this.filterItems} />
        <Items itemIsOpened={this.itemIsOpened} items={this.state.shownItems} withAdding={this.addToCart} />
        {this.state.itemPage && <ItemPage itemIsOpened={this.itemIsOpened} withAdding={this.addToCart} item={this.state.itemFullInfo} />}
      </>
    );
  }

  itemIsOpened(item) {
    this.setState({itemFullInfo: item})
    this.setState({itemPage: !this.state.itemPage})
  }

  filterItems(category) {
    if (category === "all") {
      this.setState({shownItems: this.state.items})
      return
    }
    this.setState({
      shownItems: this.state.items.filter(element => 
        element.category === category)
    })
  }


  addToCart(item) {
    let isInCart = false
    this.state.cart.forEach(element => {
      if (element.id === item.id)
      isInCart = true
    })
    if (!isInCart)
    this.setState({cart: [...this.state.cart, item]})
  }
}

export default App;

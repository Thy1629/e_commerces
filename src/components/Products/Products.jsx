import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import airpod from "../../assets/Product/airpod.png";
import headphone_2 from "../../assets/Product/headphone_2.png";
import earphone from "../../assets/Product/earphone.png";
import Keyboard_G from "../../assets/Product/Keyboard_G.png";
import Mac_book from "../../assets/Product/Mac_book.png";
import webcam from "../../assets/Product/webcam.png";
import wire_mouse from "../../assets/Product/wire_mouse.png";
import wireless_mouse from "../../assets/Product/wireless_mouse.png";

const ProductsData = [
    {
        id:1,
        img: airpod,
        title: "AirPod",
        price: "120",
        aosDelay: '0',
    },
    {
      id:1,
      img: headphone_2,
      title: "Beat Headphone",
      price: "200",
      aosDelay: '200',
    },
    {
      id:1,
      img: earphone,
      title: "Earphone",
      price: "300",
      aosDelay: '400',
    },
    {
      id:1,
      img: Keyboard_G,
      title: "Gaming Keybaord",
      price: "400",
      aosDelay: '600',
    },
    {
      id:1,
      img: Mac_book,
      title: "Mac Pro",
      price: "150",
      aosDelay: '800',
    },
    {
      id:1,
      img: webcam,
      title: "Wireless Webcam",
      price: "150",
      aosDelay: '1000',
    },
    {
      id:1,
      img: wire_mouse,
      title: "Gaming Mouse",
      price: "120",
      aosDelay: '1200',
    },
    {
      id:1,
      img: wireless_mouse,
      title: "Wireless Mouse",
      price: "200",
      aosDelay: '1400',
    },
  ]


const Products = () => {
  return (
    <div>
      <div className='container'>
        {/*Header section*/}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/*Body section*/}
        <ProductCard data={ProductsData} />

      </div>
    </div>
  )
}

export default Products

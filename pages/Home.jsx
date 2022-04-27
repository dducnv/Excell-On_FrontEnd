import React from 'react';
import Itemcard from "../components/Itemcard";
import data from "../components/data";
import Cart from '../components/Cart';
import { useCart } from "react-use-cart";
 
const Home = () => {
  const {items,emptyCart } = useCart();
  const checkOut = () =>{
    console.log(items)
    emptyCart()
  }
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center" >
          <ul>
            {data.productData.map((item, index) =>
            (
              <li>
                <Itemcard title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
              </li>
            )
            )}
          </ul>
          <Cart/>
        </div>
        <button onClick={checkOut}>Checkout</button>
      </section>
    </>
  )
}

export default Home
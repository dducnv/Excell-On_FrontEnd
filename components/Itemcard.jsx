import React from 'react'
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart(typeof window === "undefined");
  if (typeof window === 'undefined') {
    return <></>
}
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5>
                    <h5 className="card-title">{props.price} </h5>            
                    <p className="card-text">{props.desc}</p>
                    
                    <button className="btn btn-success" onClick={() => addItem(props.item)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Itemcard;
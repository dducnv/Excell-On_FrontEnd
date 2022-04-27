import React from 'react'
import { useCart } from "react-use-cart"

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,

    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your Cart is isEmpty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalUniqueItems}) </h5>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <img src={item.img} style={{ height: '6rem' }} />
                            </td>
                            <td> {item.title} </td>
                            <td> {item.price * item.quantity} </td>
                            <td>Quantity ({item.quantity}) </td>
                        </tr>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cart;
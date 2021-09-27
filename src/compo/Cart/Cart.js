import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, price } = props;
    
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity)
            product.quantity = 1;
            
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity+product.quantity;
        
    }
    const tax = (total / 100) * 10;
    
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items ordered : {totalQuantity} </h5>
            <br />
            {/* <h6>Items Price : {props.cart.price }</h6> */}
            <h6>tax : ${tax.toFixed(2)}</h6>
            <br />
            <hr />
            <h4 className="text-danger">OrderTotal : ${total.toFixed(2)}</h4>
            
            
        </div>
    );
};

export default Cart;
import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    
    
    const { name, img, price, stock, seller, star, features } = props.product;
    console.log(features);
   
    return (
        <div className="product">
            <div className="pd-5">
            <img src={img} alt=""/>
            </div>
            <div className="pd-5">
                <h5 className="product-name left-align">{name}</h5 >
                <p className="left-align">by: {seller} </p>
                <div className="product-info">
                    <div className="left-align">
                        <h4>${price}</h4>
                        <p>Only {stock} left in stock-order soon</p>
                     
                        <button
                            onClick={()=>props.addCartHandler(props.product)}
                            className="add-to-cart-btn" ><i class="fas fa-shopping-cart"></i>Add to cart</button>
                       
                    </div>
                    <div className="ps-5 pt-5">
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"/>
                        <h5>Features :</h5>
                        <ul>
                        </ul>
                        


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
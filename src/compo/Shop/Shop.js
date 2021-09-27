
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct,setDisplayProduct]=useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProduct(data);
            });
    }, []);

    useEffect(() => {
        if (products.length)
        {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart)
            {
                const addedProduct = products.find(product => product.key === key);
                console.log(key, addedProduct);
                if (addedProduct)
                {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                    }
            }
            setCart(storedCart);
           }
    },[products])
    const addCartHandler = (product) => {
       
        
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);

    }

    const handleSearch = event => {
        console.log();
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
      
        setDisplayProduct(matchedProducts);
        console.log(matchedProducts.length);
    }


    return (
        <div>
            <div className="input-container">
                <input onChange={handleSearch} className="field" type="text" placeholder=" Search Products" />
            </div>
            <div className="shop-container">
            <div className="product-container">
                
                {
                    displayProduct.map(product => <Product
                        key={product.key}
                        addCartHandler={addCartHandler}
                        product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
               
            </div>
        </div>
        </div>
    );
};

export default Shop;
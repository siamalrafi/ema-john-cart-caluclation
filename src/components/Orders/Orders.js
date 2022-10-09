import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, intialCart } = useLoaderData();
    const [cart, setCart] = useState(intialCart);

    const removeItem = id => {
        const remening = cart.filter(product => product.id !== id);
        setCart(remening);
        removeFromDb(id);
    }


    return (
        <div className='shop-container'>
            <div className="orders-container">
                {cart.map(product =>
                    <ReviewItem key={product.id}
                        removeItem={removeItem}
                        product={product}   >
                    </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
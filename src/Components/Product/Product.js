import React from 'react';
import './Product.css';

const Product = (props) => {

    const { img, name, price, seller, rating } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-name'>
                <p>Name: {name}</p>
                <p>Price: $ {price}</p>
                <p> Brand: {seller}</p>
                <p>Ratings: {rating}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-info'>
                <p>Add To Cart</p>
            </button>

        </div>
    );
};

export default Product;
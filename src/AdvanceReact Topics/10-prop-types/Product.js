import React from 'react';
import PropTypes from "prop- types";
import image from "../../assets/1.jpeg";
const url = image && image.url;
const Product = (image, name, price) => {
    console.log(image, name,price);
    return (
        
        <>
            <article className="product">
                <h4>Single Products</h4>
                <img src={url || image} alt={name || "Prit" } />
                <h4>{name || "prit"}</h4>
                <h4>${price || 3.99}</h4>
            </article>
        </>
    );
}
Product.PropTypes  = {
    image:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
};
// Product.defaultProps = {
//     name: 'default name',
//     price: 3.99,
//     image: image
// };

export default Product;
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { capitalizeWords } from "../../Utilities/Functions";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className="product">
            <img className="img-fluid" src={img} alt="" />
            <div className="product-description mt-3 mb-5">
                <h5>{capitalizeWords(name)}</h5>
                <p className="mb-5 fs-5 fw-bold">Price: ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className="btn cart-btn">
                Add to Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;

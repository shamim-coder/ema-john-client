import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalizeWords } from "../../Utilities/functions";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product;
    const productName = capitalizeWords(name);
    return (
        <div className="product">
            <img className="img-fluid" src={img} alt="" />
            <div className="product-description mt-3 mb-5">
                <h5 title={productName}>{productName.length > 26 ? productName.slice(0, 26) + "..." : productName}</h5>
                <p className="mb-3 fs-5 fw-bold">Price: ${price}</p>
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

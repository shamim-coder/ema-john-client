import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
    return (
        <Row className="mt-5 placeholder-glow">
            <Col className="products">
                <div className="product ">
                    <img className="img-fluid placeholder w-100 h-50" alt="" />
                    <div className="product-description mt-3 mb-5">
                        <h3 className="mb-4 placeholder w-75"> </h3>
                        <p className="mb-3 fs-5 placeholder w-100"> </p>
                        <p className="mb-3 fs-5 placeholder w-50"> </p>
                        <p className="mb-3 fs-5 placeholder w-75"> </p>
                    </div>
                    <button className="btn loader-btn placeholder"></button>
                </div>
                <div className="product ">
                    <img className="img-fluid placeholder w-100 h-50" alt="" />
                    <div className="product-description mt-3 mb-5">
                        <h3 className="mb-4 placeholder w-75"> </h3>
                        <p className="mb-3 fs-5 placeholder w-100"> </p>
                        <p className="mb-3 fs-5 placeholder w-50"> </p>
                        <p className="mb-3 fs-5 placeholder w-75"> </p>
                    </div>
                    <button className="btn loader-btn placeholder"></button>
                </div>
                <div className="product ">
                    <img className="img-fluid placeholder w-100 h-50" alt="" />
                    <div className="product-description mt-3 mb-5">
                        <h3 className="mb-4 placeholder w-75"> </h3>
                        <p className="mb-3 fs-5 placeholder w-100"> </p>
                        <p className="mb-3 fs-5 placeholder w-50"> </p>
                        <p className="mb-3 fs-5 placeholder w-75"> </p>
                    </div>
                    <button className="btn loader-btn placeholder"></button>
                </div>
            </Col>

            <Col className="col-lg-3 placeholder"></Col>
        </Row>
    );
};

export default Loader;

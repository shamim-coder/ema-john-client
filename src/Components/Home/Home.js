import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../../Images/home-img.jpg";
import "./Home.css";

const Home = () => {
    return (
        <div className="container">
            <div className="row align-items-center home">
                <div className="col-lg-8">
                    <p className="mb-5 text-yellow">
                        <small className="offer-text">Sale up to 70% off</small>
                    </p>
                    <div className="mb-5">
                        <h1 className="fw-bolder home-title">New Collection For Fall</h1>
                        <p className="home-text">Discover all the new arrivals of ready-to-wear collection.</p>
                    </div>
                    <Link to="/shop" className="btn bg-yellow">
                        SHOP NOW
                    </Link>
                </div>
                <div className="col-lg-4">
                    <img className="home-img" src={homeImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;

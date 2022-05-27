import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import Logo from "../../Images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../App";

const Header = () => {
    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Order Review", href: "/orders" },
        { name: "Orders", href: "/review" },
        { name: "Manage Inventory", href: "/inventory" },
        { name: "Login", href: "/login" },
    ];

    const navigate = useNavigate();

    const cart = useContext(CartContext);

    return (
        <header className="main-header">
            <Navbar variant="dark">
                <Container>
                    <Link className="me-auto" to="/">
                        <img src={Logo} className="d-inline-block align-top" alt="Logo" />
                    </Link>
                    <Nav>
                        {menuItems.map((nav, index) => (
                            <Link key={index} className="nav-link" to={nav.href}>
                                {nav.name}
                            </Link>
                        ))}

                        <div onClick={() => navigate("/orders")} type="button" style={{ color: "white" }} className="btn position-relative">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{cart.length}</span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

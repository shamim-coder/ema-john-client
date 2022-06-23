import React, { useContext, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import Logo from "../../Images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import useProducts from "../Hooks/useProducts";
import useCart from "../Hooks/useCart";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    // const menuItems = [
    //     { name: "Home", href: "/" },
    //     { name: "Shop", href: "/shop" },
    //     { name: "Order Review", href: "/orders" },
    //     { name: "Orders", href: "/review" },
    //     { name: "Manage Inventory", href: "/inventory" },
    //     { name: "Login", href: "/login" },
    // ];

    const navigate = useNavigate();
    const [headerCart, setHeaderCart] = useContext(CartContext);
    const { products } = useProducts();
    const { cart } = useCart(products);

    useEffect(() => {
        setHeaderCart(cart);
    }, [cart, setHeaderCart]);

    const [user] = useAuthState(auth);

    return (
        <header className="main-header">
            <Navbar variant="dark">
                <Container>
                    <Link className="me-auto" to="/">
                        <img src={Logo} className="d-md-inline-block align-top" alt="Logo" />
                    </Link>
                    <Nav className="d-flex flex-wrap">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/shop">
                            Shop
                        </Link>
                        <Link className="nav-link" to="/orders">
                            Order Review
                        </Link>
                        <Link className="nav-link" to="/manageOrders">
                            Manage Orders
                        </Link>
                        <Link className="nav-link" to="/inventory">
                            Manage Inventory
                        </Link>
                        {user ? (
                            <button onClick={() => signOut(auth)} className="btn btn-link">
                                Logout
                            </button>
                        ) : (
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        )}

                        <div onClick={() => navigate("/orders")} type="button" style={{ color: "white" }} className="btn position-relative">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{headerCart.length}</span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

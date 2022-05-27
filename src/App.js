import "./App.css";
import Header from "./Components/Header/Header";
import React, { createContext, useState } from "react";
import Shop from "./Components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

export const CartContext = createContext(0);

function App() {
    const [cart, setCart] = useState([]);

    return (
        <React.Fragment>
            <CartContext.Provider value={cart}>
                <Header></Header>
            </CartContext.Provider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop getCart={setCart} />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;

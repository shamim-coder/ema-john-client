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
import SignUp from "./Components/SignUp/SignUp";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Shipping from "./Components/Shipping/Shipping";

export const CartContext = createContext(0);

function App() {
    const [cart, setCart] = useState([]);

    return (
        <React.Fragment>
            <CartContext.Provider value={[cart, setCart]}>
                <Header></Header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route
                        path="/inventory"
                        element={
                            <RequireAuth>
                                <Inventory />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/shipping"
                        element={
                            <RequireAuth>
                                <Shipping />
                            </RequireAuth>
                        }
                    />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CartContext.Provider>
        </React.Fragment>
    );
}

export default App;

import "./App.css";
import Header from "./Components/Header/Header";
import React from "react";
import Shop from "./Components/Shop/Shop";

function App() {
    return (
        <React.Fragment>
            <header className="main-header">
                <Header></Header>
            </header>
            <section>
                <Shop></Shop>
            </section>
        </React.Fragment>
    );
}

export default App;

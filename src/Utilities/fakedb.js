// use local storage to manage cart data
const addToDb = (id) => {
    // Get data from local storage
    const shoppingCart = getShoppingCart();

    // add quantity
    const quantity = shoppingCart[id];

    if (quantity) {
        shoppingCart[id] = quantity + 1;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// Remove from Local Storage
const removeCart = (id) => {
    const storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);

        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
        }
    }
};

// Remove Item from Local Storage
const deleteShoppingCart = () => {
    localStorage.removeItem("shopping-cart");
};

// Clear Local Storage Data
const clearDB = () => {
    localStorage.clear();
};

// Get data from local storage
const getShoppingCart = () => {
    let cartItems = {};

    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        cartItems = JSON.parse(storedCart);
    }

    return cartItems;
};

export { addToDb, removeCart as removeFromDb, deleteShoppingCart, getShoppingCart as getCartItems, clearDB };

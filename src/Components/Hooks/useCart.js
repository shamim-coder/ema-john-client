import { useEffect, useState } from "react";
import { getCartItems } from "../../Utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    // displaying cart data from local storage
    useEffect(() => {
        // get local storage data
        const cartItems = getCartItems();

        // save added items with quantity updating
        const savedCart = [];

        for (const id in cartItems) {
            // find product from products by ID
            const addedItem = products.find((product) => product.id === id);

            // if addedItem has product
            if (addedItem) {
                const quantity = cartItems[id]; // get quantities from local storage
                addedItem.quantity = quantity; // set the quantity to product quantity properties
                savedCart.push(addedItem); // send addedItem to savedCart
            }
        }
        setCart(savedCart); // set state (setCart) with exists products with updated quantities
    }, [products]);
    return [cart, setCart];
};

export default useCart;

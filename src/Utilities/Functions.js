// Convert Uppercase to Capital Lower Case
function capitalizeWords(string) {
    return string.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
}

// Calculate Total Amounts
const calculateTotal = (arr, amount) => arr.reduce((acc, curr) => acc + curr[amount], 0);

// Calculate Tax
const calculateTax = (percentage, amount) => Math.round(percentage * amount);

// Handle Cart with Quantity added to exists cart
const getCart = (cartState, selectedItem, setCart, addToDB) => {
    const exists = cartState.find((product) => product.id === selectedItem.id);

    let newCart = [];

    if (!exists) {
        selectedItem.quantity = 1;
        newCart = [...cartState, selectedItem];
    } else {
        const rest = cartState.filter((product) => product.id !== selectedItem.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDB(selectedItem.id);
};

export { capitalizeWords, calculateTotal, calculateTax, getCart };

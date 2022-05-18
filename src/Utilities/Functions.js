// Convert Uppercase to Capital Lower Case
function capitalizeWords(string) {
    return string.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
}

// Handle Add to Cart
const handleAddToCart = (product) => {
    console.log(product);
};
export { capitalizeWords, handleAddToCart };

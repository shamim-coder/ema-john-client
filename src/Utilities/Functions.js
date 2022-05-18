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

export { capitalizeWords, calculateTotal, calculateTax };

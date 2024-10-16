function convertDollarToINR(amountInDollars, conversionRate) {
    if (typeof amountInDollars !== 'number' || typeof conversionRate !== 'number') {
        throw new Error("Both amount and conversion rate must be numbers");
    }
    return (amountInDollars * conversionRate).toFixed(2);
}

export default convertDollarToINR;
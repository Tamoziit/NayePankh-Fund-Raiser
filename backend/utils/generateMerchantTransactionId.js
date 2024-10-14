function getRandomNumber(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1)));
}

function generateMerchantTransactionId() {
    const randomNumber = getRandomNumber(16);
    return 'MT' + randomNumber.toString().padStart(16, '0');
}

export default generateMerchantTransactionId;
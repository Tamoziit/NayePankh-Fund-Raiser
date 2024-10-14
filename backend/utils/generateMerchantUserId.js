function getRandomNumber(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1)));
}

function generateMerchantUserId(username, mobileNumber) {
    const firstTwoChars = username.slice(0, 2).toUpperCase();
    const lastThreeDigits = mobileNumber.slice(-3);
    const randomNumber = getRandomNumber(13);
    return 'MU' + firstTwoChars + randomNumber.toString().padStart(13, '0') + lastThreeDigits;
}

export default generateMerchantUserId; 
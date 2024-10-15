import createOrder from "../services/paypal.js";
import Payment from "../models/payment.model.js";

const prices = [];

export const priceHandler = async (req, res) => {
    try {
        const price = req.body;
        console.log('Received price:', price);

        prices.push(price);
        console.log('Current prices:', prices);

        res.status(200).json({ message: "Price stored successfully", price });
    } catch (err) {
        console.log("Error in priceHandler", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const paymentHandler = async (req, res) => {
    try {
        const price = req.body;
        console.log("payment handler", price)
        prices.push(price);
        console.log("payment handler prices", prices)
        const url = await createOrder();
        res.redirect(url);
    } catch (err) {
        console.error("Error in paymentHandler", err.response ? err.response.data : err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const completeOrderHandler = async (req, res) => {
    const { orderId, name, email, mobileNo, referenceCode } = req.query;

    try {
        const captureData = await capturePayment(orderId);

        if (captureData.status === "COMPLETED") {
            const paymentDetails = {
                orderId: captureData.id,
                payer: captureData.payer,
                purchase_units: captureData.purchase_units,
                status: captureData.status,
                amount: captureData.purchase_units[0].amount.value,
                currency: captureData.purchase_units[0].amount.currency_code,
                name,
                email,
                mobileNo,
                referenceCode,
            };

            const paymentRecord = new Payment(paymentDetails);
            await paymentRecord.save();

            res.status(200).json({ message: "Payment completed successfully", paymentDetails });
        } else {
            res.status(400).json({ message: "Payment not completed" });
        }
    } catch (error) {
        console.error("Error capturing payment", error);
        res.status(500).json({ error: "Failed to capture payment" });
    }
};

export default prices;

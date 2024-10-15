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
    try {
        const { token, payerId, name, email, mobileNo, referenceCode, amount } = req.body;

        const newPayment = new Payment({
            token,
            payerId,
            name,
            email,
            mobileNo,
            referenceCode,
            amount
        });

        if (newPayment) {
            await newPayment.save();
            return res.status(201).json({
                payerId: newPayment.payerId,
                name: newPayment.name,
                email: newPayment.email,
                mobileNo: newPayment.mobileNo,
                referenceCode: newPayment.referenceCode,
                amount: newPayment.amount
            });
        } else {
            res.status(400).json({ message: "Payment not completed" });
        }
    } catch (error) {
        console.error("Error capturing payment", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMyRefCodePayments = async (req, res) => {
    try {
        const referenceCode = req.params.id;
        const payments = await Payment.find({ referenceCode });

        if (!payments) {
            return res.status(400).json({ error: "No Payments done under this reference code" });
        }

        res.status(200).json(payments);
    } catch (error) {
        console.error("Error fetching transactions", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default prices;

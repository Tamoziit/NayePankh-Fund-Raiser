import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    orderId: { 
        type: String, 
        required: true 
    },
    payer: { 
        type: Object, 
        required: true 
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    referenceCode: {
        type: String,
        required: true,
        min: 7,
        max: 7,
    },
    purchase_units: { 
        type: Array, 
        required: true 
    },
    status: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: String, 
        required: true 
    },
    currency: { 
        type: String, 
        required: true 
    },
}, { timestamps: true });

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
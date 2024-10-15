import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    token: { 
        type: String, 
        required: true 
    },
    payerId: { 
        type: String, 
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
    mobileNo: {
        type: String,
        required: true
    },
    referenceCode: {
        type: String,
        required: true,
        min: 7,
        max: 7,
    },
    amount: { 
        type: Number, 
        required: true 
    }
}, { timestamps: true });

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
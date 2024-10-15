import { useState } from "react"
import toast from "react-hot-toast";

const usePaymentHandler = () => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async ({
        token,
        payerId,
        name,
        email,
        mobileNo,
        referenceCode,
        amount
    }) => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/np/api/v1/payment/payment-resolve", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token, payerId, name, email, mobileNo, referenceCode, amount })
            });
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            if (data) {
                toast.success("Payment made Successfully");
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                console.log("An unknown error occurred", error);
            }
        } finally {
            setLoading(false);
        }
    }
    return { loading, handlePayment };
}

export default usePaymentHandler;
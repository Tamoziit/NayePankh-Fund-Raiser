import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useGetTransactions = () => {
    const [loading, setLoading] = useState();
    const { authUser } = useAuthContext();

    const transactions = async () => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:5000/np/api/v1/payment/transactions/${authUser.referenceCode}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            return data;
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { loading, transactions }
}

export default useGetTransactions;
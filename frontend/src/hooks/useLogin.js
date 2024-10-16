import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({
        email,
        password,
    }) => {
        const success = handleInputErrors({ email, password });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/np/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("NP-user", JSON.stringify(data));
            setAuthUser(data);
            if (data) {
                toast.success("Logged in Successfully");
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
    return { loading, login };
}

export default useLogin;


function handleInputErrors({ email, password }) {
    if (!email || !password) {
        toast.error("Please fill all the fields");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password should be atleast 6 characters long");
        return false;
    }

    return true;
}
import { Navigate, Route, Routes } from "react-router-dom";
import CompletePayment from "./pages/payments/CompletePayment";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import CancelPayment from "./pages/payments/CancelPayment";
import Transactions from "./pages/transactions/Transactions";
import DonationForm from "./pages/donate/DonationForm";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={authUser ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
          <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path="/transactions" element={authUser ? <Transactions /> : <Navigate to="/login" />} />
          <Route path="/donate/:id" element={<DonationForm />} />
          <Route path="/complete-order" element={<CompletePayment />} />
          <Route path="/cancel-order" element={<CancelPayment />} />
        </Routes>

        <Toaster />
      </div>
    </>
  )
}

export default App

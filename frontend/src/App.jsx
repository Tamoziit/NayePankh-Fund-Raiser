import { Navigate, Route, Routes } from "react-router-dom";
import CompletePayment from "./pages/payments/CompletePayment";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import CancelPayment from "./pages/payments/CancelPayment";
import Transactions from "./pages/transactions/Transactions";
import DonationForm from "./pages/donate/DonationForm";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/donate" element={<DonationForm />} />
          <Route path="/complete-order" element={<CompletePayment />} />
          <Route path="/cancel-order" element={<CancelPayment />} />
        </Routes>

        <Toaster />
      </div>
    </>
  )
}

export default App

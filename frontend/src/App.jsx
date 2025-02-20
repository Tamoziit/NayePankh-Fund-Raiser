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
import GratitudePage from "./pages/payments/GratitudePage";

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
          <Route path="/complete-order/:name/:email/:mobileNo/:referenceCode/:price" element={<CompletePayment />} />
          <Route path="/cancel-order" element={<CancelPayment />} />
          <Route path="/gratitude" element={<GratitudePage />} />
        </Routes>

        <Toaster />
      </div>
    </>
  )
}

export default App

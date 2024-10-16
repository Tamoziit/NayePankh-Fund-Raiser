import { FaHome } from "react-icons/fa";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import useGetTransactions from "../../hooks/useGetTransactions";
import { useEffect, useState } from "react";
import TransactionCard from "../../components/TransactionCard";

const Transactions = () => {
  const { loading, transactions } = useGetTransactions();
  const [transactionData, setTransactionData] = useState([]);

  const getTransactions = async () => {
    const data = await transactions();
    console.log(data);
    setTransactionData(data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  console.log(transactionData);

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="absolute ml-[240px] mt-[69px] bg-gray-100 w-[165vh] h-full px-10 py-6">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-xl">Transactions</h1>

          <div className="flex flex-row items-center gap-2 text-sm">
            <span className="text-red-500"><FaHome /></span>
            <span>/</span>
            <span>General</span>
            <span>/</span>
            <span className="text-gray-500">Transactions</span>
          </div>
        </div>

        <div>
          {loading ? (
            <span>Loading...</span>
          ) : transactionData ? (
            <div className="flex flex-col gap-3 mt-10">
              {transactionData.map((transaction, index) => (
                <TransactionCard data={transaction} key={index} />
              ))}
            </div>
          ) : (
            <p>No Transactions under your Reference Code found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Transactions
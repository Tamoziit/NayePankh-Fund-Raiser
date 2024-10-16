/* eslint-disable react/prop-types */
const TransactionCard = ({ data }) => {
    console.log(data);
    return (
        <div className="border rounded-lg p-4 shadow-sm w-full bg-white space-y-4">
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 text-left">ID</th>
                        <th className="border px-4 py-2 text-left">Name</th>
                        <th className="border px-4 py-2 text-left">Amount</th>
                        <th className="border px-4 py-2 text-left">Payer Id</th>
                        <th className="border px-4 py-2 text-left">Date & Time</th>
                        <th className="border px-4 py-2 text-left">Email</th>
                        <th className="border px-4 py-2 text-left">Mobile No.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">{data.token}</td>
                        <td className="border px-4 py-2">{data.name}</td>
                        <td className="border px-4 py-2">${data.amount}</td>
                        <td className="border px-4 py-2">{data.payerId}</td>
                        <td className="border px-4 py-2">{data.createdAt}</td>
                        <td className="border px-4 py-2">{data.email}</td>
                        <td className="border px-4 py-2">{data.mobileNo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TransactionCard
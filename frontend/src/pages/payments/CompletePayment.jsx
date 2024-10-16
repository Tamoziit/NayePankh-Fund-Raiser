import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import usePaymentHandler from '../../hooks/usePaymentHandler';

const CompletePayment = () => {
	const location = useLocation();
	const { loading, handlePayment } = usePaymentHandler();
	const [paramsData, setParamsData] = useState({
		token: '',
		payerId: '',
		name: '',
		email: '',
		mobileNo: '',
		referenceCode: '',
		amount: 0
	});

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const token = queryParams.get('token');
		const payerId = queryParams.get('PayerID');
		const pathParts = location.pathname.split('/');

		const name = decodeURIComponent(pathParts[2]);
		const email = decodeURIComponent(pathParts[3]);
		const mobileNo = decodeURIComponent(pathParts[4]);
		const referenceCode = decodeURIComponent(pathParts[5]);
		const amount = decodeURIComponent(pathParts[6]);

		const updatedData = {
			token,
			payerId,
			name,
			email,
			mobileNo,
			referenceCode,
			amount,
		};

		setParamsData(updatedData);
	}, [])

	const resolvePaymentToDB = async () => {
		console.log(paramsData);
		await handlePayment(paramsData);
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<div className="w-[400px] mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
				<h2 className="text-xl font-semibold mb-4">Just One Step Behind</h2>

				<div className="border-t border-gray-300 pt-4">
					<h3 className="text-lg font-medium mb-2">Donation Invoice</h3>
					<div className="text-sm space-y-2">
						<div className="flex justify-between">
							<span className="font-semibold">Full Name:</span>
							<span>{paramsData.name || 'N/A'}</span>
						</div>
						<div className="flex justify-between">
							<span className="font-semibold">Email:</span>
							<span>{paramsData.email || 'N/A'}</span>
						</div>
						<div className="flex justify-between">
							<span className="font-semibold">Mobile No:</span>
							<span>{paramsData.mobileNo || 'N/A'}</span>
						</div>
						<div className="flex justify-between">
							<span className="font-semibold">Reference Code:</span>
							<span>{paramsData.referenceCode || 'N/A'}</span>
						</div>
						<div className="flex justify-between">
							<span className="font-semibold">Amount:</span>
							<span>$ {paramsData.amount || 'N/A'}</span>
						</div>
						<div className="flex justify-between">
							<span className="font-semibold">Token:</span>
							<span>{paramsData.token || 'N/A'}</span>
						</div>
						<div className="flex justify-between">
							<span className="font-semibold">Payer ID:</span>
							<span>{paramsData.payerId || 'N/A'}</span>
						</div>
					</div>
				</div>

				<button
					className={`mt-6 w-full bg-blue-500 text-white py-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
					onClick={resolvePaymentToDB}
					disabled={loading}
				>
					{loading ? 'Processing...' : 'Press to Confirm Donation'}
				</button>
			</div>
		</div>
	);
};

export default CompletePayment;

import { useEffect, useState } from "react";
import useGetTransactions from "../hooks/useGetTransactions";
import ProgressTracker from "./ProgressTracker";
import { useAuthContext } from "../context/AuthContext";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

const Analytics = () => {
	const { loading, transactions } = useGetTransactions();
	const [target, setTarget] = useState(0);
	const [percentage, setPercentage] = useState(0);
	const { authUser } = useAuthContext();
	const linkToShare = `https://nayepankh-fund-raiser-portal.onrender.com/donate/${authUser.referenceCode}`;

	const getTransactions = async () => {
		const data = await transactions();
		if (data) {
			const totalAmount = data.reduce((sum, transaction) => sum + transaction.amount, 0);
			setTarget(totalAmount);
		}
	};

	useEffect(() => {
		getTransactions();
	}, []);

	useEffect(() => {
		if (authUser) {
			const calculatedPercentage = ((target / authUser.assignedTarget) * 100).toFixed(1);
			setPercentage(calculatedPercentage);
		}
	}, [target]);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(linkToShare)
			.then(() => {
				toast.success("Link copied to clipboard!");
			})
			.catch(err => {
				console.error("Failed to copy: ", err);
			});
	};

	const shareOnWhatsApp = () => {
		const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(linkToShare)}`;
		window.open(whatsappUrl, "_blank");
	};

	return (
		<>
			{authUser ? (
				<div className="w-full flex gap-20 justify-between p-10 bg-white rounded-lg md:flex-col lg:flex-row">
					{loading ? (<span>Loading</span>) : (
						<div className="flex flex-col items-center justify-center">
							<ProgressTracker progress={percentage} />
							<span className="text-red-600 font-semibold">Total Goal</span>
							<span className="text-xl font-bold">${authUser.assignedTarget}</span>
						</div>
					)}

					<div className="flex flex-col gap-3 items-center justify-center">
						<div>
							<span className="text-red-600 font-semibold">Level Achieved : </span>
							<span className="font-bold">{authUser.level}</span>
						</div>

						<div className="bg-gray-300 w-[500px] h-1"></div>

						<div className="flex gap-4 mt-3">
							<button className="bg-gradient-to-r from-red-500 to-violet-600 text-white font-semibold py-2 px-4 rounded hover:from-red-700 hover:to-violet-800 transition duration-300 flex gap-1 items-center justify-center">
								<span><FaRegStar /></span>
								<span>Rewards</span>
							</button>

							<button
								className="bg-gradient-to-r from-red-500 to-violet-600 text-white font-semibold py-2 px-4 rounded hover:from-red-700 hover:to-violet-800 transition duration-300 flex gap-1 items-center justify-center"
								onClick={copyToClipboard}
							>
								<span><MdOutlineContentCopy /></span>
								<span>Copy to Clipboard</span>
							</button>
						</div>

						<div className="mt-3 italic">
							<span>Unlock&nbsp;</span>
							<span className="font-semibold">Ninja Level&nbsp;</span>
							<span>at 5000</span>
						</div>

						<div className="mt-6 font-bold">
							<span className="text-red-600">Time Left:&nbsp;</span>
							<span>Campaign Expired</span>
						</div>

						<button className="bg-red-500 px-6 py-2 rounded-md text-white">Extend now</button>

						<div className="bg-red-400 w-[500px] h-1 mt-2"></div>

						<div className="mt-3 font-bold">
							<span className="text-red-500">Reference Code : </span>
							<span>{authUser.referenceCode}</span>
						</div>

						<button className="bg-gradient-to-r from-red-500 to-violet-600 text-white font-semibold py-2 px-4 rounded hover:from-red-700 hover:to-violet-800 transition duration-300 flex gap-1 items-center justify-center mt-6">
							Start Here
						</button>
					</div>

					<div className="mt-4 absolute bottom-8 py-4">
						<button
							className="bg-gradient-to-r from-red-500 to-violet-600 text-white font-semibold py-2 px-4 rounded hover:from-red-700 hover:to-violet-800 transition duration-300 flex gap-1 items-center justify-center"
							onClick={shareOnWhatsApp}
						>
							<span><FaWhatsapp /></span>
							<span>Share on Whatsapp</span>
						</button>
					</div>
				</div>
			) : (<span>Loading...</span>)}
		</>
	);
};

export default Analytics;

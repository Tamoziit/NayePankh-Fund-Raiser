import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext"
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { FaHome } from "react-icons/fa";
import Analytics from "../../components/Analytics";

const Dashboard = () => {
	const { authUser } = useAuthContext();

	return (
		<div>
			<Header />
			<Sidebar />

			<div className="absolute ml-[240px] mt-[69px] bg-gray-100 w-[165vh] px-10 py-6">
				<div className="flex items-center justify-between w-full">
					<h1 className="font-bold text-xl">Dashboard</h1>

					<div className="flex flex-row items-center gap-2 text-sm">
						<span className="text-red-500"><FaHome /></span>
						<span>/</span>
						<span>General</span>
						<span>/</span>
						<span className="text-gray-500">Dashboard</span>
					</div>
				</div>

				<div className="w-full relative mt-4 rounded-lg overflow-hidden">
					<img src="dashboard.png" alt="dashboard Image" className="w-full h-[80vh] filter grayscale" />
					<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-20">
						<div className="bg-black bg-opacity-60 text-white px-8 py-6 rounded-lg w-full">
							<h2 className="text-4xl font-bold text-red-600 mb-5">Hello {authUser.name},</h2>
							<span className="font-semibold italic">Initial push is the toughest! Go through the leraning modules, or rreach out to your fundraising manager to level up.</span>
						</div>
					</div>
				</div>

				<div>
					<Analytics />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
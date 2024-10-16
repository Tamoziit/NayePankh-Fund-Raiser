import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext"
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
	const { authUser } = useAuthContext();

	return (
		<div>
			<Header />
			<Sidebar />

			<div>
				<button className="bg-green-700 rounded-lg p-3 mt-10">
					<Link to={`/donate/${authUser.referenceCode}`}>
						Donate
					</Link>
				</button>
			</div>
		</div>
	)
}

export default Dashboard
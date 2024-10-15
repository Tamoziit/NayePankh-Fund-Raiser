import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext"

const Dashboard = () => {
	const { authUser } = useAuthContext();

	return (
		<div>
			<h1>{authUser.name}</h1>
			<h1>{authUser.email}</h1>
			<h1>{authUser.referenceCode}</h1>

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
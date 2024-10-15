import { useAuthContext } from "../../context/AuthContext"

const Dashboard = () => {
	const {authUser} = useAuthContext();

  return (
    <div>
			<h1>{authUser.name}</h1>
			<h1>{authUser.email}</h1>
			<h1>{authUser.referenceCode}</h1>
		</div>
  )
}

export default Dashboard
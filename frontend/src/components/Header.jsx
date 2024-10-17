import { useAuthContext } from "../context/AuthContext";
import { MdLogout } from "react-icons/md";
import useLogout from "../hooks/useLogout";
import getRandomImage from "../utils/getProfileImg";

const Header = () => {
    const { authUser } = useAuthContext();
    const { loading, logout } = useLogout();

    const img = getRandomImage();

    return (
        <div className="absolute top-0 w-full bg-white p-2 shadow-md z-10">
            <div className="flex gap-2 items-center justify-end mr-8">
                <img src={img} alt={authUser.name} className="rounded-lg w-[40px] h-[40px]" />
                <div className="flex flex-col">
                    <span className="font-bold text-lg">{authUser.name}</span>
                    <span className="text-gray-500 text-sm mb-1">Fundraiser</span>
                </div>
                <button className="bg-transparent p-1 ml-2" onClick={logout} disabled={loading}>
                    <MdLogout className="text-lg" />
                </button>
            </div>
        </div>
    )
}

export default Header
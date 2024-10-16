import { useAuthContext } from "../context/AuthContext"

const Header = () => {
    const { authUser } = useAuthContext();

    return (
        <div className="absolute top-0 w-full bg-white p-2 shadow-md z-10">
            <div className="flex gap-2 items-center justify-end mr-10">
                <img src="profile.jpg" alt={authUser.name} className="rounded-lg w-[40px] h-[40px]" />
                <div className="flex flex-col">
                    <span className="font-bold text-lg">{authUser.name}</span>
                    <span className="text-gray-500 text-sm mb-1">Fundraiser</span>
                </div>
            </div>
        </div>
    )
}

export default Header
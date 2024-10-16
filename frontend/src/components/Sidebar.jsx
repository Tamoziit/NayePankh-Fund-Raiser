import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdMonitor } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { RiFeedbackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const options = [
        {
            name: "Dashboard",
            logo: <MdMonitor />,
            link: "/"
        },
        {
            name: "Transactions",
            logo: <FaListUl />,
            link: "/transactions"
        },
        {
            name: "Start Here",
            logo: <FaArrowTurnDown />,
            link: "/"
        },
        {
            name: "FAQ",
            logo: <FaRegCircleQuestion />,
            link: "/"
        },
        {
            name: "Learning Modules",
            logo: <IoBookOutline />,
            link: "/"
        },
        {
            name: "Rewards",
            logo: <FaRegStar />,
            link: "/"
        },
        {
            name: "Feedback",
            logo: <RiFeedbackLine />,
            link: "/"
        },
    ];

    return (
        <div className="fixed left-0 h-full bg-white shadow-lg z-20 px-4 lg:w-[240px] md:w-[90px] sm:w-[90px]">
            <div className="flex items-center gap-2 px-4 py-2 w-full">
                <div className="border-[3px] border-blue-500 rounded-lg px-10 py-2 lg:block md:hidden">
                    <span className="text-blue-500 font-semibold">Logo</span>
                </div>
                <HiOutlineSquares2X2 className="text-lg md:text-xl" />
            </div>

            {/* Visible only on small screens */}
            <div className="lg:flex flex-col bg-red-100 rounded-lg px-2 py-3 mt-[40px] justify-start md:hidden sm:hidden">
                <span className="font-semibold text-red-600 text-md">General</span>
                <span className="text-xs text-gray-500">Dashboard</span>
            </div>

            <div className="flex flex-col w-full mt-4">
                {options.map((option, _idx) => (
                    <Link className="flex gap-2 items-center rounded-lg px-2 py-3 hover:bg-red-500 hover:text-white hover:font-semibold cursor-pointer" key={_idx} to={option.link}>
                        {option.logo}
                        <span className="lg:block md:hidden xs:hidden">{option.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMiniEyeSlash } from 'react-icons/hi2';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		password: '',
		mobileNo: '',
	});
	const [secure, setSecure] = useState(true);
	const { loading, signup } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(inputs)
		await signup(inputs)
	}

	return (
		<div className="h-screen bg-gradient-to-b from-violet-700 to-white p-4 flex items-center justify-center">
			<div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<div className="relative flex w-1/2 shadow-xl">
					<img src="bg1.jpg" alt="auth bg" className="w-full h-full object-cover opacity-60" />
					<div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
					<div className="absolute inset-0 flex flex-col items-center justify-center">
						<h1 className="text-white text-[50px] md:text-[45px] lg:text-[50px] xl:text-[60px] font-bold neon-text z-50">Welcome</h1>
						<h1 className="text-white text-[100px] md:text-[70px] lg:text-[90px] xl:text-[100px] font-bold neon-text z-50">NayePankh</h1>
					</div>
				</div>

				{/* Form */}
				<div className="flex flex-col items-center justify-center p-5 w-1/2 shadow-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-white rounded-r-lg">
					<h1 className="text-3xl font-bold text-blue-200">Signup</h1>
					<div className="w-10 h-1 bg-blue-800 mx-auto my-4 rounded-full mb-8"></div>
					<form className="w-full" onSubmit={handleSubmit}>
						<div className="space-y-4 w-full">
							<div className="flex items-center bg-blue-200 rounded-lg w-full">
								<FaUser className="ml-4 text-gray-500 h-10" />
								<input type="text" placeholder="Enter your name" className="w-full h-[40px] p-4 bg-transparent border-0 focus:outline-none"
									value={inputs.name}
									onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
								/>
							</div>

							<div className="flex items-center bg-blue-200 rounded-lg w-full">
								<MdEmail className="ml-4 text-gray-500 h-10" />
								<input type="email" placeholder="Enter your email" className="w-full h-[40px] p-4 bg-transparent border-0 focus:outline-none"
									value={inputs.email}
									onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
								/>
							</div>

							<div className="flex items-center bg-blue-200 rounded-lg w-full">
								<RiLockPasswordFill className="ml-4 text-gray-500 h-10" />
								<input type={secure ? "password" : "text"} placeholder="Enter your password" className="w-full h-[40px] p-4 bg-transparent border-0 focus:outline-none"
									value={inputs.password}
									onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
								/>
								<button
									onClick={(e) => {
										e.preventDefault();
										setSecure(!secure);
									}}
								>
									<HiMiniEyeSlash className="ml-4 text-gray-500 h-10 mr-4" />
								</button>
							</div>

							<div className="flex items-center bg-blue-200 rounded-lg w-full">
								<FaPhone className="ml-4 text-gray-500 h-10" />
								<input type="text" placeholder="Enter your mobile number" className="w-full h-[40px] p-4 bg-transparent border-0 focus:outline-none"
									value={inputs.mobileNo}
									onChange={(e) => setInputs({ ...inputs, mobileNo: e.target.value })}
								/>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center mt-5">
							<button className="w-full bg-blue-700 text-white text-lg py-2 rounded-full hover:bg-blue-500 transition-colors" disabled={loading}>
								Signup
							</button>

							<Link to="/login" className="text-gray-800 hover:underline hover:text-blue-700 mt-1">
								Already have an Account? Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup
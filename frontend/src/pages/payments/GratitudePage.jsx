const GratitudePage = () => {
	return (
		<div className="flex items-center justify-center w-full min-h-screen relative p-4 overflow-hidden">
			<div className="w-full rounded-lg overflow-hidden">
			<img src="dashboard.png" alt="dashboard Image" className="w-full h-[80vh] filter grayscale" />
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-20">
				<div className="bg-black bg-opacity-60 text-white px-8 py-6 rounded-lg w-full">
					<h2 className="text-4xl font-bold text-red-600 mb-5">Thank You from NayePankh,</h2>
					<span className="font-semibold italic">Thank You for your contribution towards the Cause... Join our campaign to bring about a Global Change!</span>
				</div>
			</div>
		</div>
	)
}

export default GratitudePage
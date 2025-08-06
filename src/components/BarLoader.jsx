const BarLoader = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] font-nunito">
			{/* Logo with subtle pulse */}
			<img src="/l.png" alt="Logo" className="w-24 h-24 mb-2 object-contain " />

			<h1 className="text-xl font-nunito font-semibold text-gray-700 mb-4 tracking-wide">
				Unique Solutions
			</h1>

			{/* Bar Loader with animated glowing gradient */}
			<div className="w-64 h-2 rounded-full overflow-hidden bg-gray-300 relative shadow-inner">
				<div className="absolute top-0 left-0 h-full w-full animate-loading rounded-full" />
			</div>

			{/* Optional loading text */}
			<p className="mt-4 text-gray-600 text-sm tracking-wide animate-pulse">
				Loading, please wait...
			</p>
		</div>
	);
};

export default BarLoader;

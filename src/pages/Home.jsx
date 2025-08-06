import { motion } from "framer-motion";
import Aboutus from "../components/Aboutus";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div>
			<head>
				<title>
					Unique Group – Innovative Jig Manufacturing and Machining Solutions
				</title>
				<meta
					name="description"
					content="Unique Group is your trusted manufacturer for high-quality jigs, hydraulic and mechanical fixtures, gauges, custom jaw sets, and machining solutions in Kolhapur, India. Quality. Precision. Reliability."
				/>
				<meta
					name="keywords"
					content="Jig manufacturer India, Hydraulic fixture, mechanical fixture, custom jaw sets, relation gauge, special gauges, VMC machining, Kolhapur, Unique Solution, rest pad, clamp, bush, locator, precision machining, sub assembly parts, right first time every time"
				/>
				<meta name="author" content="Unique Solution, Kolhapur India" />
				<meta name="robots" content="index, follow" />
			</head>
			<div className="w-full overflow-hidden relative">
				<div className="font-nunito relative w-full min-h-screen overflow-hidden">
					{/* Background Image */}
					<img
						src="/hero.png"
						alt="Hero Image"
						className="absolute inset-0 w-full h-full object-cover z-0 max-w-full max-h-full"
					/>

					{/* Overlay */}
					<div className="absolute inset-0 bg-black/40 z-10"></div>

					{/* Hero Content */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									staggerChildren: 0.2,
									duration: 0.8,
									ease: "easeOut",
								},
							},
						}}
						className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 w-full max-w-7xl mx-auto">
						{/* Heading */}
						<motion.p
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							className="text-xl sm:text-2xl md:text-4xl pt-8 lg:text-5xl font-bold text-white leading-tight w-full max-w-4xl mx-auto">
							Innovative Jig Fixturing and Machining Solutions for{" "}
							<span className="text-[#A4DD00]">Tomorrow’s</span> Industry
						</motion.p>

						{/* Subtext */}
						<motion.p
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							className="text-sm sm:text-base md:text-lg italic mt-4 text-white w-full max-w-3xl mx-auto">
							Delivering precision, durability, and excellence from the heart of
							Shiroli MIDC, Kolhapur.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							className="flex sm:flex-col lg:flex-row justify-center items-center gap-3 sm:gap-4 mt-6">
							<Link to="/contact">
								<button className="bg-white text-black px-6 py-2 text-sm sm:text-base rounded hover:bg-gray-100 transition hover:text-[#A4DD00] hover:scale-105">
									Request a Quote
								</button>
							</Link>
							<Link to="/products">
								<button className="bg-gradient-to-r from-[#A4DD00] to-[#7CB518] text-white px-6 py-2 text-sm sm:text-base rounded shadow-md hover:brightness-110 transition transform hover:scale-105">
									Explore our Products
								</button>
							</Link>
						</motion.div>
					</motion.div>

					{/* Bottom CTA */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.3 }}
						className="absolute bottom-0 left-0 w-full py-3 md:py-4 bg-[#101010] z-20 flex items-center justify-center text-white px-4 text-center">
						<p className="text-xs md:text-base leading-snug">
							Want to partner with us?
							<a href="#services">
								<span className="ml-2 font-bold underline cursor-pointer hover:text-[#A4DD00] transition-all duration-300">
									Join us today!
								</span>
							</a>
						</p>
					</motion.div>
				</div>

				{/* Next Section */}
				<Aboutus />
			</div>
		</div>
	);
};

export default Home;

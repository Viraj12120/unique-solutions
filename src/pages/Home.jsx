import { motion } from "framer-motion";
import Aboutus from "../components/Aboutus";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div className="w-screen ">
			<div className="font-ubuntu relative w-full min-h-screen overflow-hidden">
				{/* Background Image */}
				<img
					src="/hero.jpg"
					alt="Hero Image"
					className="w-full h-full object-cover absolute inset-0 z-0"
				/>

				{/* Black Overlay */}
				<div className="absolute inset-0 bg-black/60 z-10"></div>

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
					className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full max-w-5xl">
					{/* Heading */}
					<motion.p
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: { opacity: 1, y: 0 },
						}}
						className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
						Innovative Machine Manufacturing Solutions for{" "}
						<span className="text-[#A4DD00]">Tomorrow’s</span> Industry
					</motion.p>

					{/* Subtext */}
					<motion.p
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						className="text-sm sm:text-base md:text-lg italic mt-4 text-white">
						Delivering precision, durability, and excellence from the heart of
						Shiroli MIDC, Kolhapur.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						className="flex flex-wrap justify-center gap-4 mt-6">
						<Link to={"/contact"}>
							{" "}
							<button className="bg-white text-black px-5 cursor cursor-pointer py-2 text-sm sm:text-base rounded hover:bg-gray-100 transition hover:text-[#A4DD00] hover:scale-105">
								Request a Quote
							</button>
						</Link>
						<Link to={"/products"}>
							<button className="border border-white text-white px-5 cursor cursor-pointer py-2 text-sm sm:text-base rounded hover:bg-white transition hover:text-[#A4DD00] hover:scale-105">
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
					className="absolute bottom-0 left-0 w-full h-fit py-4 sm:py-6 bg-[#101010] z-20 flex items-center justify-center text-white px-4 text-center">
					<p className="text-xs sm:text-sm md:text-base leading-snug">
						Curious to know about how it works? Want to partner with us?
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
	);
};

export default Home;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="min-h-screen bg-[#FAFAFA] font-nunito text-gray-900">
			{/* Hero Section */}
			<div className="relative w-full h-[60vh] bg-[#101010] flex items-center justify-center overflow-hidden">
				{/* Background image behind text */}
				<img
					src="/y.webp" // replace with your actual image path
					alt="Background"
					className="absolute inset-0 w-full h-full backdrop-blur-2xl object-cover object-center z-0"
				/>

				{/* Optional dark overlay for better contrast */}
				<div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

				{/* Foreground text content */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="relative z-10 text-center">
					<h1 className="text-white text-5xl md:text-6xl font-bold">
						About Us
					</h1>
				</motion.div>
			</div>

			{/* About Content */}

			{/* Director Body – Unique Group */}
			<div className="py-20 px-6  text-gray-800">
				<div className="max-w-6xl mx-auto text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl font-bold mb-4">
						The Unique Group
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-gray-600 max-w-2xl mx-auto">
						A strong collaboration between{" "}
						<span className="font-semibold">Unique Solutions</span> and{" "}
						<span className="font-semibold">Unique Vision</span>, led by
						experienced industry professionals who shape the future of
						engineering excellence.
					</motion.p>
				</div>

				{/* Companies and Directors Grid */}
				<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
					{/* Unique Solutions */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="bg-white rounded-xl shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Unique Solutions</h3>
						<p className="text-gray-600 mb-4 text-sm">
							Delivering Jigs and machining solutions across India.
						</p>

						{/* <img
							src="/your-image-path.jpg" // Replace with your actual image path
							alt="Unique Vision"
							className="w-full h-auto rounded-md mb-4"
						/> */}
						<ul className="text-sm text-gray-700 space-y-1">
							<li> Mr. Ranjeet Khade – Managing Director</li>
						</ul>
					</motion.div>

					{/* Unique Vision */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="bg-white rounded-xl shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Unique Vision</h3>
						<p className="text-gray-600 mb-4 text-sm">
							Focused on automation & control systems for next-gen industrial
							performance.
						</p>
						{/* <img
							src="/your-image-path.jpg" // Replace with your actual image path
							alt="Unique Vision"
							className="w-full h-auto rounded-md mb-4"
						/> */}
						<ul className="text-sm text-gray-700 space-y-1">
							<li>Mr Sagar Khot – CEO of Unique Group</li>
						</ul>
					</motion.div>
				</div>
			</div>

			<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 py-20 items-center">
				<motion.img
					src="/worker.jpg"
					alt="Worker"
					className="rounded-xl shadow-xl object-cover w-full"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				/>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
						We Always Deliver The Best{" "}
						<span className="text-[#A4DD00]">Engineering Solutions</span>
					</h2>
					<p className=" font-light italic text-xl  text-gray-600">
						Unique Solutions, established in Shiroli MIDC, Kolhapur, is a
						trusted name in machine manufacturing and engineering. 
						We have been delivering Jig Fixturing and Machining tailored solutions that power India’s
						leading industries.
					</p>
					<Link to="/contactus">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="mt-6 px-6 py-3 bg-[#A4DD00]/90 text-white rounded-md hover:bg-[#A4DD00] transition cursor cursor-pointer">
							Contact Us
						</motion.button>
					</Link>
				</motion.div>
			</div>

			{/* Skills Section */}
			<div className=" py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-2xl md:text-3xl font-bold mb-2">
						Our Skills
					</motion.h3>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-gray-600 mb-8 text-sm md:text-base">
						Our commitment to innovation, accuracy, and performance drives our
						specialized expertise.
					</motion.p>

					<div className="space-y-6">
						{[
							{ skill: "Hydraulic Fixture Design", percent: "85%" },
							{ skill: "Industrial Automation", percent: "90%" },
							{ skill: "Precision Tooling", percent: "77%" },
						].map(({ skill, percent }, i) => (
							<motion.div
								key={skill}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: i * 0.2 }}
								viewport={{ once: true }}>
								<p className="font-medium mb-1">{skill}</p>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<motion.div
										className="bg-black h-2 rounded-full"
										initial={{ width: "0%" }}
										whileInView={{ width: percent }}
										transition={{ duration: 1 }}
										viewport={{ once: true }}
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 ml-96 text-center mt-16">
					{[
						{ label: "Years of Experience", value: "20+", color: "#A4DD00" },
						{ label: "Projects Completed", value: "150+" },
						{ label: "Satisfied Clients", value: "200+" },
						// { label: "Awards Received", value: "64", color: "#A4DD00" },
					].map((stat, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}>
							<h4
								className={`text-3xl font-bold ${
									stat.color ? `text-[${stat.color}]` : ""
								}`}>
								{stat.value}
							</h4>
							<p className="text-gray-600 text-sm">{stat.label}</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
				<img
					src="/workers.jpg"
					alt="Call to Action"
					className="absolute inset-0 object-cover w-full h-full scale-105"
				/>
				<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
				<div className="relative z-10 text-center px-6">
					<motion.h2
						className="text-2xl md:text-4xl font-light text-white leading-tight"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}>
						We Are Always Ready To Take A Perfect Shot
					</motion.h2>
					<Link to="/contactus">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className="mt-6 px-6 py-3 bg-[#A4DD00]/90 text-white rounded-md hover:bg-[#A4DD00] transition cursor cursor-pointer">
							Get Started
						</motion.button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;

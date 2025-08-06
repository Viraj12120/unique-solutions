import { delay, motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ProductModal } from "./Modal";
import WhatWeDo from "./Whatwedo";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Aboutus = () => {
	const [openModal, setOpenModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const carouselRef = useRef(null);

	const handleOpen = (product) => {
		setSelectedProduct(product);
		setOpenModal(true);
	};

	const handleClose = () => {
		setOpenModal(false);
		setSelectedProduct(null);
	};

	const carouselItems = [
		{
			src: "/wm2.jpg",
			title: "Mechanical Fixtures",
			description:
				"Engineered for precision and durability, our hydraulic jigs streamline machining operations by ensuring stable, repeatable clamping — ideal for high-pressure production environments.",
		},
		{
			src: "/wm3.jpg",
			title: "Tool Fixture",
			description:
				"Robust and versatile, our tool fixtures are designed to withstand heavy loads and long production cycles, providing consistent alignment and positioning for complex tooling tasks.",
		},
		{
			src: "/wm06.png",
			title: "Cylindrical Grinding Machine",
			description:
				"Crafted with superior-grade materials, our casting dies support complex geometries and tight tolerances, delivering reliable results in high-volume die casting applications.",
		},
		{
			src: "/wm13.jpg",
			title: "Machining Fixture",
			description:
				"These fixtures ensure precise positioning and secure workpiece holding during multi-axis machining, increasing throughput and minimizing rework in mass production lines.",
		},
		{
			src: "/wm6.jpg",
			title: " Inspection Fixture",
			description:
				"Heavy-duty clamping solution built for integration into automated systems, offering high holding force, quick release mechanisms, and enhanced operator safety.",
		},
		// {
		// 	src: "stamping.webp",
		// 	title: "Stamping Tool",
		// 	description:
		// 		"High-performance stamping tools designed for rapid-cycle production. Manufactured to resist deformation, they ensure long-lasting accuracy and minimal wear under repetitive stress.",
		// },
		// {
		// 	src: "u.jpg",
		// 	title: "Automation Unit",
		// 	description:
		// 		"Compact and fully-integrated automation units designed for robotic platforms. Enhance operational efficiency through seamless control, modular scalability, and sensor integration.",
		// },
	];

	const scrollCarousel = (direction) => {
		if (carouselRef.current) {
			const scrollAmount = 300;
			carouselRef.current.scrollBy({
				left: direction * scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="bg-[#FAFAFA] w-screen font-nunito">
			{/* ABOUT US SECTION */}
			<motion.div
				className="p-6 md:p-12 flex flex-col lg:flex-row gap-12 items-center"
				initial="initial"
				whileInView="whileInView"
				viewport={{ amount: 0.2 }}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					viewport={{ amount: 0.3 }}
					className="w-full md:w-1/2">
					<p className="font-text-lg lg:text-2xl sm:text-xl text-gray-500  leading-relaxed">
						Unique Solutions, based in{" "}
						<span className="font-bold italic text-[#A4DD00]">
							Shiroli MIDC
						</span>
						, Kolhapur,{" "}
						<span className="font-medium italic text-[#A4DD00]">
							manufactures
						</span>{" "}
						custom hydraulic fixtures, precision gauges, and automation
						components for diverse industries.
					</p>
				</motion.div>

				<motion.video
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					src="https://res.cloudinary.com/domgx4mk9/video/upload/q_auto,f_auto,vc_auto/v1752389070/uniquev_yhxwzn.mp4"
					controls
					autoPlay
					loop
					className="w-full md:w-[600px] rounded mt-8 md:mt-0"
				/>
			</motion.div>

			<div className="p-6 md:p-12">
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					viewport={{ amount: 0.3 }}
					className="text-3xl md:text-4xl font-bold">
					What we Do
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					viewport={{ amount: 0.3 }}
					className="mt-2 text-base md:text-lg text-gray-600 w">
					We craft high-quality, tailored digital experiences with precision and
					creativity — from design to deployment.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}>
					<WhatWeDo />
				</motion.div>
			</div>
			{/* SERVICES SECTION */}
			<motion.div
				id="services"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3 }}
				viewport={{ amount: 0.3 }}
				className="p-6 md:p-12 ">
				<h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-12 mt-16">
					{[
						{
							icon: "/repair.png",
							title: "Custom Machine Design & Manufacturing",
							desc: "We create innovative, tailor-made machines to meet your unique production needs.",
						},
						{
							icon: "/components.png",
							title: "Hydraulic Fixtures & Mechanical Fixtures",
							desc: "Precision hydraulic and machining fixtures for improved efficiency and accuracy.",
						},
						{
							icon: "/tech.png",
							title: "Precision Gauging Solutions",
							desc: "High-quality gauges to ensure dimensional accuracy in your components.",
						},
						{
							icon: "/design.png",
							title: "Industrial Automation Equipment",
							desc: "Automation solutions to enhance productivity and minimize manual worker efforts.",
						},
						{
							icon: "/rep.png",
							title: "Tooling & Engineering Solutions",
							desc: "Custom tooling and engineering support for any type of job manufacturing processes.",
						},
						{
							icon: "/rep.png",
							title: "Special Gauges",
							desc: "Custom tooling gauges engineering support for any type of gauges manufacturing processes.",
						},
					].map((service, i) => (
						<div key={i} className="flex flex-col items-start ">
							<img
								src={service.icon}
								alt={service.title}
								className="w-12 h-12"
							/>
							<p className="text-lg lg:text-lg font-bold mt-4 text-[#A4DD00]">
								{service.title}
							</p>
							<div className="w-24 border-t-2 mt-4 mb-2 border-gray-300" />
							<p className="text-sm w-1/2 text-gray-400  lg:text-lg w-full">
								{service.desc}
							</p>
						</div>
					))}
				</div>
			</motion.div>
			{/* PRODUCTS SECTION */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3 }}
				viewport={{ amount: 0.3 }}
				className="mt-24 w-full">
				{/* SCROLLING MARQUEE */}
				<div id="products" className="overflow-hidden py-6">
					<div className="flex animate-scroll-x min-w-full">
						{[...Array(100)].map((_, idx) => (
							<div key={idx} className="flex">
								<p className="text-[4rem] md:text-[8rem] font-bold mr-12 whitespace-nowrap">
									PRODUCTS
								</p>
							</div>
						))}
					</div>
				</div>

				{/* CAROUSEL */}
				<div className="relative mt-12 w-full px-4 md:px-12 lg:px-20">
					{/* Arrows */}
					<button
						className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:scale-110 transition"
						onClick={() => scrollCarousel(-1)}>
						<span className="text-xl">
							<FaArrowLeft />
						</span>
					</button>
					<button
						className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:scale-110 transition"
						onClick={() => scrollCarousel(1)}>
						<span className="text-xl">
							<FaArrowRight />
						</span>
					</button>

					{/* Carousel Container */}
					<div
						ref={carouselRef}
						className="flex overflow-x-auto w-full space-x-6 no-scrollbar scroll-smooth px-8 md:px-14">
						{carouselItems.map((item, i) => (
							<div
								key={i}
								className="flex-none w-[250px] md:w-[300px] cursor-pointer transition transform"
								onClick={() => handleOpen(item)}>
								<div className="relative w-full h-96 rounded-xl overflow-hidden mb-4">
									<img
										src={item.src}
										alt={item.title}
										className="w-full h-[500px] object-cover"
									/>
									<div className="absolute inset-0 bg-black/40 flex items-end justify-center">
										<p className="text-white text-sm md:text-lg font-semibold text-center p-3">
											{item.title}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Modal below carousel */}
				<ProductModal
					isOpen={openModal}
					onClose={handleClose}
					product={selectedProduct}
				/>
			</motion.div>
			{/* WHO WE ARE SECTION */}
			<div className="relative mt-32 mb-14 w-screen py-16 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-12 bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] text-white overflow-hidden">
				{/* Decorative soft glows */}
				<div className="absolute top-0 left-0 w-72 h-72 bg-[#ffffff0d] rounded-full blur-3xl opacity-20 pointer-events-none" />
				<div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ffffff0d] rounded-full blur-3xl opacity-20 pointer-events-none" />

				{/* Video */}
				<motion.img
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					src="/wm9.jpg"
					alt="Unique Group"
					className="w-full md:w-[600px] rounded-xl shadow-xl"
				/>

				{/* Text Content */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					viewport={{ amount: 0.3 }}
					className="max-w-2xl text-gray-100 z-10">
					<h3 className="text-3xl text-[#A4DD00] md:text-5xl font-semibold mb-6">
						Experience
					</h3>
					<p className="font-light mb-8 text-gray-300 leading-relaxed">
						With over 20+ years of industry presence, Unique Solutions is
						trusted nationwide for delivering efficient, robust, and
						thoughtfully engineered solutions tailored for long-term industrial
						performance.
					</p>

					<h3 className="text-3xl text-[#A4DD00] md:text-5xl font-semibold mt-2 mb-6">
						Our Vision
					</h3>
					<p className="font-light text-gray-300 leading-relaxed">
						To be a globally recognized partner in machinery manufacturing —
						pioneering affordable, sustainable, and innovative engineering
						solutions for tomorrow’s challenges.
					</p>

					<Link to={"/aboutus"}>
						<button className="mt-10 bg-[#A4DD00]/90 text-white cursor cursor-pointer hover:bg-[#A4DD00] px-6 py-2 rounded-md transition hover:scale-105 border border-gray-400/20">
							Know More
						</button>
					</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default Aboutus;

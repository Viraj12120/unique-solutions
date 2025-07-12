import { delay, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductModal } from "./Modal";

const Aboutus = () => {
	const [openModal, setOpenModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

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
			src: "j.jpg",
			title: "Hydraulic Jig",
			description:
				"Engineered for precision and durability, our hydraulic jigs streamline machining operations by ensuring stable, repeatable clamping — ideal for high-pressure production environments.",
		},
		{
			src: "tech.jpeg",
			title: "Tool Fixture",
			description:
				"Robust and versatile, our tool fixtures are designed to withstand heavy loads and long production cycles, providing consistent alignment and positioning for complex tooling tasks.",
		},
		{
			src: "dies.jpg",
			title: "Casting Die",
			description:
				"Crafted with superior-grade materials, our casting dies support complex geometries and tight tolerances, delivering reliable results in high-volume die casting applications.",
		},
		{
			src: "fix.png",
			title: "Machining Fixture",
			description:
				"These fixtures ensure precise positioning and secure workpiece holding during multi-axis machining, increasing throughput and minimizing rework in mass production lines.",
		},
		{
			src: "p.webp",
			title: "Industrial Clamp",
			description:
				"Heavy-duty clamping solution built for integration into automated systems, offering high holding force, quick release mechanisms, and enhanced operator safety.",
		},
		{
			src: "stamping.webp",
			title: "Stamping Tool",
			description:
				"High-performance stamping tools designed for rapid-cycle production. Manufactured to resist deformation, they ensure long-lasting accuracy and minimal wear under repetitive stress.",
		},
		{
			src: "u.jpg",
			title: "Automation Unit",
			description:
				"Compact and fully-integrated automation units designed for robotic platforms. Enhance operational efficiency through seamless control, modular scalability, and sensor integration.",
		},
	];

	return (
		<div className="bg-[#FAFAFA] w-screen font-ubuntu">
			{/* ABOUT US SECTION */}
			<motion.div
				className="p-6 md:p-12 flex flex-col md:flex-row gap-12 items-center"
				initial="initial"
				whileInView="whileInView"
				viewport={{ amount: 0.2 }}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					viewport={{ amount: 0.3 }}
					className="w-full md:w-1/2">
					<p className="text-lg lg:text-2xl sm:text-xl text-gray-500 font-extralight leading-relaxed">
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
					src="/Unique.mp4"
					controls
					autoPlay
					loop
					className="w-full md:w-[600px] rounded mt-8 md:mt-0"
				/>
			</motion.div>

			{/* SERVICES SECTION */}
			<motion.div
				id="services"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3 }}
				viewport={{ amount: 0.3 }}
				className="p-6 md:p-12 mt-24">
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
							title: "Hydraulic Fixtures & Machining Fixtures",
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
							<p className="text-sm w-1/2 text-gray-500 font-extralight lg:text-lg w-full">
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
						{[...Array(20)].map((_, idx) => (
							<div key={idx} className="flex">
								<p className="text-[4rem] md:text-[8rem] font-bold mr-12 whitespace-nowrap">
									PRODUCTS
								</p>
							</div>
						))}
					</div>
				</div>

				{/* CAROUSEL */}
				<div className=" ">
					<div className="mt-12 flex justify-center px-4 md:px-36">
						<div className="flex overflow-x-auto space-x-4 no-scrollbar">
							{carouselItems.map((item, i) => (
								<div
									key={i}
									className="flex-none w-[250px] md:w-[300px] cursor-pointer"
									onClick={() => handleOpen(item)}>
									<div className="relative w-full h-96 rounded shadow overflow-hidden mb-4">
										<img
											src={item.src}
											alt={item.title}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-black/40 flex items-end justify-center">
											<p className="text-white text-sm md:text-lg font-semibold text-center p-2">
												{item.title}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
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
			<div className="bg-[#101010] mt-32 mb-14 text-white w-screen py-16 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-12">
				<img
					src="/cnc.jpg"
					alt="Experience"
					className="w-full max-w-md lg:max-w-lg h-auto rounded"
				/>

				{/* Animate only this inner content */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					viewport={{ amount: 0.3 }}
					className="max-w-2xl">
					<h3 className="text-3xl md:text-5xl font-bold mb-6">Experience</h3>
					<p className="font-extralight mb-8">
						- With 15+ years of excellence, Unique Solutions has earned the
						trust of industries nationwide for delivering cost-effective,
						durable, and innovative engineering solutions.
					</p>
					<Link to={"/aboutus"}>
						<button className="bg-[#A4DD00]/90 text-white hover:bg-[#A4DD00] px-6 py-2 rounded-md transition hover:scale-105 cursor cursor-pointer">
							Know More
						</button>
					</Link>
					<h3 className="text-3xl md:text-5xl font-bold mt-16 mb-6">
						Our Vision
					</h3>
					<p className="font-extralight">
						- To become a leading global partner in machine manufacturing by
						delivering innovative and cost-effective engineering solutions.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Aboutus;

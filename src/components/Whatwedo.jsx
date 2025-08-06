import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
	{
		title: "HYDRAULIC FIXTURES",
		image: "/hydraulic.jpeg",
		description:
			"We specialize in the design and manufacture of high-pressure hydraulic fixtures that deliver unmatched clamping force and precision. These fixtures are ideal for complex machining operations where stability and repeatability are critical, ensuring optimal productivity and reduced cycle times in high-volume manufacturing environments.",
		gallery: ["/wm14.jpg", "/wm13.jpg", "/wm1.jpg", "/wm9.jpg"],
	},
	{
		title: "MECHANICAL FIXTURES",
		image: "/jaws.jpeg",
		description:
			"Our mechanical fixtures are custom-built for durability, accuracy, and ease of use. Designed to secure workpieces during machining or assembly processes, these fixtures offer flexible configurations for a wide range of applications, from single-part prototypes to batch production runs, while reducing setup time and human error.",
		gallery: ["/wm2.jpg", "/wm12.jpg", "/wm0.jpg", "/wm4.jpg"],
	},
	// {
	// 	title: "ROBOTIC LINE FIXTURES",
	// 	image: "/fixtures/robotic.jpg",
	// 	description: "Fixtures for automated robotic assembly lines.",
	// 	gallery: ["/fixtures/robot1.jpg", "/fixtures/robot2.jpg"],
	// },
	{
		title: "CNC Machines",
		image: "/MACHINE.jpg",
		description:
			"We provide robust fixture solutions optimized for CNC machining centers, including vertical, horizontal, and 5-axis systems. Our fixtures ensure precise alignment and minimal deflection, allowing for consistent and efficient machining of critical aerospace, automotive, and precision-engineered components.",
		gallery: ["/cnc2.jpg", "/cnc3.jpg", "/za.jpg"],
	},
	{
		title: "ROTARY INDEXER FIXTURES",
		image: "/rotary.jpg",
		description:
			"Built for use with rotary indexing tables, our rotary indexer fixtures are engineered for operations requiring multi-face machining without repositioning. They significantly enhance process efficiency by allowing multiple operations to be performed in a single setup, increasing accuracy and reducing machining time.",
		gallery: ["/rotary.jpg", "/123.jpg", "/321.jpg"],
	},
	{
		title: "VERTICAL DRILLING",
		image: "/drilling.jpg",
		description:
			"Our vertical drilling fixtures are designed for high-precision hole-making processes. These fixtures support consistent part placement and depth accuracy across repetitive drilling cycles, making them suitable for production lines in industries like automotive, fabrication, and heavy equipment.",
		gallery: ["/z.png", "/ig.jpg", "/wm17.png"],
	},
	{
		title: "FIXTURES",
		image: "/F.jpg",
		description:
			"We offer a wide range of general-purpose and custom-built fixtures for various industrial applications. Whether it's for turning, milling, welding, or inspection, our fixtures are designed with precision in mind and are fabricated using advanced machining methods to meet tight tolerances and demanding environments.",
		gallery: ["/wm01.jpg", "/wm15.jpg", "0.webp", "poi.jpg"],
	},
];

const WhatWeDo = () => {
	const [selected, setSelected] = useState(null);

	return (
		<section className="px-6 md:px-12 py-24">
			<div className="max-w-screen-lg mx-auto">
				{" "}
				{/* Center & reduce width */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
					{services.map((item, index) => (
						<motion.div
							key={index}
							className="relative h-42  rounded-lg overflow-hidden cursor-pointer group"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.3 }}
							viewport={{ amount: 0.3 }}
							onClick={() => setSelected(item)}>
							{/* Image */}
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-black/50 flex items-end justify-start p-4">
								<h3 className="text-white text-xl font-semibold">
									{item.title}
								</h3>
							</div>
						</motion.div>
					))}
				</div>
				<AnimatePresence>
					{selected && (
						<motion.div
							className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg flex items-center justify-center px-4 py-8"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelected(null)} // close on backdrop click
						>
							<motion.div
								className="bg-white  rounded-sm p-6 md:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
								initial={{ scale: 0.8, opacity: 0, y: 50 }}
								animate={{ scale: 1, opacity: 1, y: 0 }}
								exit={{ scale: 0.8, opacity: 0, y: 50 }}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
								onClick={(e) => e.stopPropagation()}>
								{/* Header */}
								<div className="flex justify-between items-center mb-6">
									<h3 className="text-2xl font-bold text-gray-800">
										{selected.title}
									</h3>
									<button
										className="text-sm text-red-500 hover:underline cursor cursor-pointer"
										onClick={() => setSelected(null)}>
										✕
									</button>
								</div>

								{/* Description */}
								<p className="text-gray-700 mb-6">{selected.description}</p>

								{/* Animated Gallery */}
								<motion.div
									className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
									initial="hidden"
									animate="visible"
									variants={{
										visible: {
											transition: {
												staggerChildren: 0.15,
											},
										},
									}}>
									{selected.gallery.map((img, i) => (
										<motion.img
											key={i}
											src={img}
											alt={`Gallery ${i}`}
											className="rounded-lg w-full object-cover h-48"
											variants={{
												hidden: { opacity: 0, scale: 0.95 },
												visible: { opacity: 1, scale: 1 },
											}}
											transition={{ duration: 0.4 }}
										/>
									))}
								</motion.div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default WhatWeDo;

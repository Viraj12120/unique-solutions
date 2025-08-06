import { motion } from "framer-motion";
import { useState } from "react";

const Products = () => {
	const products = [
		{
			src: "/wm14.jpg",
			title: "Hydraulic System",
			description: "Advanced high-pressure hydraulics in action.",
			span: "col-span-2 row-span-2",
		},
		{
			src: "/wm01.jpg",
			title: "Precision Tooling",
			description: "Machined to exact tolerances for performance.",
		},
		{
			src: "/wm06.png",
			title: "Cylinder Drilling",
			description: "Controls for industrial automation systems.",
		},
		{
			src: "/wm02.jpg",
			title: "Cylinder Drilling",
			description: "Tailored jigs designed for mass production.",
			span: "col-span-2 row-span-2",
		},
		{
			src: "/wm3.jpg",
			title: "Tool Rack",
			description: "Organized storage for efficient workflows.",
		},
		{
			src: "/wm0.jpg",
			title: "Soft Jaws",
			description: "Organized storage for efficient workflows.",
		},
		{
			src: "/wm7.jpg",
			title: "Hydraulic Clamping Fixture",
			description: "Organized storage for efficient workflows.",
		},
	];
	const [showAll, setShowAll] = useState(false);
	const visibleProducts = showAll ? products : products.slice(0, 6);

	return (
		<div>
			<title>
				Products – Unique Solution | Precision Jig Fixtures, Hydraulic Systems &
				Machining Solutions
			</title>
			<meta
				name="description"
				content="Explore Unique Group wide portfolio of hydraulic systems, precision tooling, cylinder drilling fixtures, soft jaws, clamping fixtures, and more—engineered for high-performance manufacturing and inspection."
			/>
			<meta
				name="keywords"
				content="hydraulic system, precision tooling, cylinder drilling, jig fixtures, soft jaws, hydraulic clamping fixture, manufacturing solutions, machining fixtures, industrial automation, Kolhapur, Unique Solution"
			/>
			<meta name="author" content="Unique Solution, Kolhapur India" />
			<meta name="robots" content="index, follow" />

			<div className="bg-[#FAFAFA] font-nunito">
				<div className="relative w-screen min-h-screen overflow-hidden">
					{/* Background Image */}
					<motion.img
						src="/product.jpg"
						alt="Product Showcase"
						initial={{ scale: 1.1, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.2 }}
						className="absolute top-0 left-0 w-screen h-[80vh] object-cover z-0"
					/>

					{/* Hero Text Overlay */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.3 }}
						className="absolute text-sm top-0 left-0 w-full h-[80vh] bg-black/30 backdrop-blur-sm flex flex-col justify-center px-6 md:px-16 z-10">
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-4xl md:text-5xl text-white drop-shadow-xl mb-2 leading-tight">
							<span className="block">Products</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="text-lg font-extralight text-white/90 max-w-2xl leading-relaxed">
							Precision. Performance. Reliability.
							<br />
							Explore our complete portfolio of hydraulic machining fixtures,
							inspection gauges, and industrial automation systems — engineered
							for demanding manufacturing environments.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className="mt-4">
							<a
								href="#product-grid"
								className="inline-block bg-[#A4DD00]/90 text-white rounded-full hover:bg-[#A4DD00] text-gray-900 font-semibold px-5 py-2.5 shadow transition">
								View Product Range →
							</a>
						</motion.div>
					</motion.div>

					<div className="h-[80vh] w-full" />

					{/* Company Description */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="p-8 text-xl italic w-full md:w-1/2 text-justify text-gray-700">
						At Unique Solutions, we specialize in designing and manufacturing a
						wide range of precision-engineered components and systems for
						machining, inspection, and hydraulic operations. With decades of
						experience serving the automotive, engineering, and heavy machinery
						industries, our products are built for durability, repeatability,
						and precision.
					</motion.p>
				</div>

				{/* ✅ Product Grid */}
				<div id="product-grid" className="w-full px-6 md:px-16 py-16">
					<div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6">
						{visibleProducts.map((item, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.02 }}
								whileInView={{ opacity: 1, y: 0 }}
								initial={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className={`relative overflow-hidden rounded-2xl shadow-md group ${
									item.span ?? ""
								}`}>
								<img
									src={item.src}
									alt={item.title}
									className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
								/>
								<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
									<h3 className="text-lg font-bold">{item.title}</h3>
									<p className="text-sm">{item.description}</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Toggle Button */}
					<div className="mt-8 flex justify-center">
						<motion.button
							whileTap={{ scale: 0.95 }}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
							onClick={() => setShowAll(!showAll)}
							className="bg-[#A4DD00] text-white px-6 py-2 rounded-full shadow hover:bg-[#8cc800] transition">
							{showAll ? "Show Less" : "View More"}
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;

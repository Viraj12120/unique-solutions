import { motion } from "framer-motion";

const Products = () => {
	return (
		<div className="bg-[#FAFAFA] font-ubuntu">
			<div className="relative w-screen min-h-screen  font-ubuntu overflow-hidden">
				<img
					src="/product.jpg"
					alt="Product Showcase"
					className="absolute top-0 left-0 w-screen h-[80vh] object-cover z-0"
				/>

				<div className="absolute text-sm top-0 left-0 w-full h-[80vh] bg-black/30 backdrop-blur-sm flex flex-col justify-center px-6 md:px-16 z-10">
					<h1 className="text-4xl md:text-5xl text-white drop-shadow-xl mb-2 leading-tight">
						<span className="block">Products</span>
					</h1>

					<p className="text-lg  font-extralight text-white/90 max-w-2xl leading-relaxed">
						Precision. Performance. Reliability.
						<br />
						Explore our complete portfolio of hydraulic machining fixtures,
						inspection gauges, and industrial automation systems — engineered
						for demanding manufacturing environments.
					</p>

					<div className="mt-4">
						<a
							href="#product-grid"
							className="inline-block bg-[#A4DD00]/90 text-white rounded-full hover:bg-[#A4DD00] text-gray-900 font-semibold px-5 py-2.5 rounded-full shadow  transition">
							View Product Range →
						</a>
					</div>
				</div>

				<div className="h-[80vh] w-full" />

				<p className="p-8 text-lg w-full md:w-1/2 font-ubuntu text-justify text-gray-700 font-extralight">
					At Unique Solutions, we specialize in designing and manufacturing a
					wide range of precision-engineered components and systems for
					machining, inspection, and hydraulic operations. With decades of
					experience serving the automotive, engineering, and heavy machinery
					industries, our products are built for durability, repeatability, and
					precision.
				</p>
			</div>

			{/* ✅ Bento Image Grid with Zoom Effect */}
			<div
				id="product-grid"
				className="w-full px-6 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6">
				{[
					{
						src: "/a.jpg",
						title: "Hydraulic System",
						description: "Advanced high-pressure hydraulics in action.",
						span: "col-span-2 row-span-2",
					},
					{
						src: "/d.jpg",
						title: "Precision Tooling",
						description: "Machined to exact tolerances for performance.",
					},
					{
						src: "/c.jpg",
						title: "Automation Panel",
						description: "Controls for industrial automation systems.",
					},
					{
						src: "/jigss.jpg",
						title: "Custom Jigs",
						description: "Tailored jigs designed for mass production.",
						span: "col-span-2 row-span-2",
					},
					{
						src: "/dies.jpg",
						title: "Casting Dies",
						description: "Precision cast dies for industrial molds.",
					},
					{
						src: "/b.jpg",
						title: "Tool Rack",
						description: "Organized storage for efficient workflows.",
					},
				].map((item, index) => (
					<motion.div
						key={index}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.3 }}
						className={`relative overflow-hidden rounded-2xl shadow-md group ${
							item.span ?? ""
						}`}>
						<img
							src={item.src}
							alt={item.title}
							className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
						/>

						{/* Overlay on hover */}
						<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
							<h3 className="text-lg font-bold">{item.title}</h3>
							<p className="text-sm">{item.description}</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Products;

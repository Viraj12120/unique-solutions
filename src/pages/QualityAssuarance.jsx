import { motion } from "framer-motion";

const QualityAssurance = () => {
	return (
		<div className="w-full font-ubuntu text-gray-800">
			{/* 🔷 Hero Section */}
			<div className="relative w-full h-[75vh]">
				<img
					src="/u.jpg"
					alt="Quality Assurance"
					className="w-full h-full object-cover object-center"
				/>

				<div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center px-6 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-4xl md:text-6xl text-white font-bold drop-shadow mb-4">
						Quality Assurance
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="text-md md:text-xl text-white/90 max-w-3xl leading-relaxed">
						Precision, performance & trust — engineered into every detail.
					</motion.p>
				</div>
			</div>

			{/* 🔶 Content Section */}
			<div className="min-h-screen bg-[#F9FAFB] px-6 md:px-16 py-20">
				<div className="max-w-5xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="text-2xl md:text-3xl font-semibold mb-6">
						Our Commitment to Quality
					</motion.h2>

					{[
						`At Unique Solutions, quality is not just a department — it's a discipline woven into every step of our process. From sourcing the highest-grade raw materials to delivering precision-engineered products, our standards never compromise.`,
						`We partner only with approved and certified suppliers for material procurement, ensuring traceability and compliance. Every component is thoroughly inspected — both during machining and after final assembly — using state-of-the-art instruments like CMMs, digital gauges, and hardness testers.`,
						`Our manufacturing facility is ISO 9001:2015 certified, validating our commitment to continuous quality improvement. We invest regularly in advanced metrology and training to uphold global standards and exceed customer expectations.`,
						`Our in-house inspection setup includes Coordinate Measuring Machines (CMM), surface roughness testers, digital height gauges, and hardness testing equipment. These enable us to guarantee the reliability and repeatability your industry demands.`,
					].map((text, index) => (
						<motion.p
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="text-lg md:text-xl leading-relaxed mb-8">
							{text}
						</motion.p>
					))}
				</div>
			</div>
		</div>
	);
};

export default QualityAssurance;

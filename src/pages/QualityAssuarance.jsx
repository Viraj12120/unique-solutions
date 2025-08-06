import { motion } from "framer-motion";

const QualityAssurance = () => {
	return (
		<div className="w-full font-nunito text-gray-800">
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
						`At US, our fundamental belief is: “Do it right the first time, every time.” We are committed to delivering excellence in everything we do. This principle guides our daily operations, decisions, and the way we serve our customers. Quality is not just an end goal — it is an integral part of our culture, driven by dedication, precision, and proactive responsibility.`,

						`1. Customer-Centric Approach: We aim to understand our customers' evolving needs and expectations to deliver products and services that consistently exceed them. Our goal is to earn not just satisfaction, but long-term trust and loyalty.`,

						`2. First-Time Quality Execution: We emphasize doing things right the first time to eliminate defects, reduce rework, and ensure reliable, consistent outcomes across all functions.`,

						`3. Continuous Skill Development: We believe that people are our greatest asset. Through ongoing manpower training, upskilling, and awareness programs, we empower our team to foster a quality-first mindset and customer-focused work culture.`,

						`4. Commitment to Improvement: We pursue continuous improvement across all aspects of our business — from manufacturing and processes to communication and customer service. We regularly evaluate our quality management systems and performance to maintain excellence.`,

						`5. Quality as a Value: For us, quality is not just a standard — it's a core value. We embed quality thinking into our day-to-day decisions to ensure that every product leaving our facility reflects our unwavering commitment to excellence.`,
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

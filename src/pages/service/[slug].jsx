import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../../../data/services";

const ServiceDetail = () => {
	const navigate = useNavigate();
	const { slug } = useParams(); // ✅ This replaces router.query

	const service = services.find(
		(s) => s.title.toLowerCase().replace(/\s+/g, "-") === slug
	);

	if (!service) return <p className="p-10 text-center">Loading...</p>;

	return (
		<section className="min-h-screen bg-gray-50 px-6 py-16">
			<div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-3xl font-bold text-gray-800">{service.title}</h1>
					<button
						onClick={() => navigate(-1)}
						className="text-red-500 hover:underline text-sm">
						← Go Back
					</button>
				</div>

				<p className="text-gray-700 mb-6">{service.description}</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{service.gallery.map((img, i) => (
						<motion.img
							key={i}
							src={img}
							alt={`Gallery image ${i}`}
							className="rounded-lg w-full object-cover h-48"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: i * 0.2 }}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceDetail;

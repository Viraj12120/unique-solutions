import { X } from "lucide-react";

export const ProductModal = ({ isOpen, onClose, product }) => {
	if (!isOpen || !product) return null;

	return (
		<div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
			<div className="bg-white rounded-xl max-w-md w-full p-6 relative">
				<button
					className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl cursor cursor-pointer"
					onClick={onClose}>
					<X size={24} />
				</button>
				<img
					src={product.src}
					alt={product.title}
					className="w-full h-60 mt-4 object-cover rounded mb-4"
				/>
				<h3 className="text-xl font-semibold mb-2">{product.title}</h3>
				<p className="text-gray-700 text-sm">{product.description}</p>
			</div>
		</div>
	);
};

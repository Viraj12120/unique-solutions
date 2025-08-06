import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icons from react-icons

const Carousel = ({ carouselItems, handleOpen }) => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		if (scrollRef.current) {
			const { scrollLeft, clientWidth } = scrollRef.current;
			const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
			scrollRef.current.scrollTo({
				left: scrollLeft + scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="relative mt-12 px-4 md:px-36">
			{/* Left Arrow */}
			<button
				onClick={() => scroll("left")}
				className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition hidden md:block">
				<FaArrowLeft />
			</button>

			{/* Scrollable Items */}
			<div
				ref={scrollRef}
				className="flex overflow-x-auto space-x-4 no-scrollbar scroll-smooth">
				{carouselItems.map((item, i) => (
					<div
						key={i}
						className="flex-none w-[250px] md:w-[300px] cursor-pointer"
						onClick={() => handleOpen(item)}>
						<div className="relative w-full h-96 rounded shadow overflow-hidden mb-4">
							<img
								src={`/${item.src}`}
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

			{/* Right Arrow */}
			<button
				onClick={() => scroll("right")}
				className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition hidden md:block">
				<FaArrowRight />
			</button>
		</div>
	);
};

export default Carousel;

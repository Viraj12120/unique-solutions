import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Header = () => {

const [isOpen, setIsOpen] = useState(false);

const navLinks = [
	{ label: "Home", to: "/" },
	{ label: "About Us", to: "/about" },
	{ label: "Products", to: "/products" },
	{ label: "Quality Assurance", to: "/quality" },
	{ label: "Contact Us", to: "/contact" },
];

  return (
		<div className="fixed top-0 z-50 w-full px-4 py-3 mt-4 bg-transparent">
			{/* Container */}
			<div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center relative">
				{/* Logo (always on left on mobile, hidden on md and up) */}
				<Link to="/" className="block md:hidden">
					<img src="/l.png" alt="Logo" className="w-12 object-contain" />
				</Link>

				{/* Centered Navbar */}
				<div className="hidden md:flex items-center bg-[#101010]/90 backdrop-blur-lg space-x-8 text-sm lg:text-md text-white rounded-full px-6 py-3 shadow-lg hover:shadow-[#4F8260]/80 transition-all duration-300">
					{navLinks.map(({ label, to }) => (
						<Link
							key={to}
							to={to}
							className="relative group hover:text-[#A4DD00] transition-colors duration-200">
							{label}
							<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A4DD00] transition-all duration-300 group-hover:w-full"></span>
						</Link>
					))}
				</div>

				{/* Logo (centered on md and up) */}
				<Link to="/" className="hidden md:block absolute left-6">
					<img src="/l.png" alt="Logo" className="h-16 w-auto object-contain" />{" "}
					{/* ← increased from h-12 to h-16 */}
				</Link>

				{/* Mobile Toggle Button */}
				<button
					className="md:hidden text-white z-50 bg-[#101010] rounded-full p-2"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Mobile Dropdown Menu */}
				{isOpen && (
					<div className="fixed inset-0 bg-[#101010]/90 backdrop-blur-2xl z-40 px-6 py-8 space-y-6 text-white md:hidden overflow-y-auto">
						{navLinks.map(({ label, to }) => (
							<Link
								key={to}
								to={to}
								onClick={() => setIsOpen(false)}
								className="block text-lg font-light hover:text-[#A4DD00] transition-colors">
								{label}
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Header
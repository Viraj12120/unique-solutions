import React from "react";

const Footer = () => {
	return (
		<div className="w-full  bg-[#101010] text-white pt-16 font-nunito  px-6 md:px-16">
			<div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-4 gap-12 items-start">
				{/* Logo */}
				<div className="flex justify-center md:justify-start">
					<img
						src="/l.png"
						alt="Unique Solutions Logo"
						className="w-28 object-contain"
					/>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Quick Links</h3>
					<ul className="grid grid-cols-2 gap-y-2 gap-x-8 text-sm text-gray-300">
						{[
							{ label: "Home", href: "/" },
							{ label: "Career", href: "/career" },
							{ label: "About Us", href: "/about" },
							{ label: "Quality", href: "/quality" },
							{ label: "Products", href: "/products" },
							{ label: "Contact", href: "/contact" },
						].map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="relative group transition-all text-gray-300 hover:text-[#A4DD00]">
									{link.label}
									<span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#A4DD00]  transition-all duration-300 group-hover:w-full"></span>
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Follow Us */}
				<div>
					<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
					<ul className="space-y-2 text-sm text-gray-300">
						{[
							{ label: "LinkedIn", href: "https://www.linkedin.com" },
							{ label: "Indiamart", href: "https://www.indiamart.com" },
						].map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="relative group hover:text-[#A4DD00]">
									{link.label}
									<span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#A4DD00]  transition-all duration-300 group-hover:w-full"></span>
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h3 className="text-lg font-semibold mb-4">Contact</h3>
					<p className="text-sm text-gray-300">
						M.No.2084, HanumanNagar, Shiye,
						<br />
						Shiroli, Kolhapur – 416122
					</p>
					<p className="mt-2 text-sm text-gray-300">
						Email: uniquesolution@unique-group.co.in
					</p>
					<p className="mt-1 text-sm text-gray-300">Phone: +91 9623151218</p>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-700 mt-36 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 py-6">
				<p className="mt-4 md:mt-0">
					© 2025 Unique Solutions, Kolhapur. All rights reserved.
				</p>
				<div className="mt-4 md:mt-0">
					<p>
						Created by{" "}
						<a href="https://quarx.vercel.app/" target="_blank">
							<span className="text-white">QuarkX</span>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

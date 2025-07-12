import { useState } from "react";
const ContactUs = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		company: "",
		email: "",
		message: "",
	});

const handleSubmit = (e) => {
  e.preventDefault();

  const subject = `Enquiry from ${formData.firstName} ${formData.lastName}`;

  const body = 
    `Name: ${formData.firstName} ${formData.lastName}\n` +
    `Email: ${formData.email}\n` +
    `Company: ${formData.company}\n\n` +
    `Message:\n${formData.message}`;

  const mailtoLink = `mailto:uniquesolution@unique-group.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};


	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};
	return (
		<div className="w-full min-h-screen bg-[#FAFAFA] mt-16 font-ubuntu text-gray-900 px-6 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
			{/* Left Column - Heading and Form */}
			<div className="flex flex-col justify-start space-y-8 mt-10">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
					<p className="text-base md:text-lg text-gray-600 mb-8">
						Let’s <span className="text-[#A4DD00]">connect.</span> Get in touch
						with us for any enquiries or questions.
					</p>
				</div>

				{/* 📩 Contact Form */}
				<form
					onSubmit={handleSubmit}
					className="space-y-6 p-8 bg-white shadow-2xl rounded-xl border border-gray-100 transition-all duration-300 transform hover:shadow-gray-500 hover:shadow-2xl hover:scale-[1.01]">
					{/* Name Inputs */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="flex flex-col">
							<label
								htmlFor="firstName"
								className="text-sm font-medium text-gray-700 mb-1">
								First Name
							</label>
							<input
								id="firstName"
								type="text"
								value={formData.firstName}
								onChange={handleChange}
								placeholder="John"
								className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A4DD00]"
							/>
						</div>

						<div className="flex flex-col">
							<label
								htmlFor="lastName"
								className="text-sm font-medium text-gray-700 mb-1">
								Last Name
							</label>
							<input
								id="lastName"
								type="text"
								value={formData.lastName}
								onChange={handleChange}
								placeholder="Doe"
								className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A4DD00]"
							/>
						</div>
					</div>

					{/* Company */}
					<div className="flex flex-col">
						<label
							htmlFor="company"
							className="text-sm font-medium text-gray-700 mb-1">
							Company
						</label>
						<input
							id="company"
							type="text"
							value={formData.company}
							onChange={handleChange}
							placeholder="Acme Corp"
							className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A4DD00]"
						/>
					</div>

					{/* Email */}
					<div className="flex flex-col">
						<label
							htmlFor="email"
							className="text-sm font-medium text-gray-700 mb-1">
							Email Address
						</label>
						<input
							id="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="john@example.com"
							className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A4DD00]"
						/>
					</div>

					{/* Message */}
					<div className="flex flex-col">
						<label
							htmlFor="message"
							className="text-sm font-medium text-gray-700 mb-1">
							Your Message
						</label>
						<textarea
							id="message"
							rows="5"
							value={formData.message}
							onChange={handleChange}
							placeholder="Write your message here..."
							className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A4DD00] resize-none"></textarea>
					</div>

					{/* Submit Button */}
					<div className="pt-2">
						<button
							type="submit"
							className="w-full bg-[#A4DD00]/90 text-white font-semibold px-6 py-3 rounded-md hover:bg-[#A4DD00] transition">
							Send Message
						</button>
					</div>
				</form>
			</div>

			{/* Right Column - Contact Info + Image */}
			<div className="space-y-12 mt-56 text-sm md:text-base text-gray-700">
				{/* Departmental Emails */}
				<div className="grid grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-none">
					{/* First Column of Emails */}
					<div>
						<h3 className="font-semibold text-gray-900 text-lg mb-4">
							📩 Departmental Contacts
						</h3>

						<div className="mb-5">
							<p className="font-medium text-gray-900">
								uniquesolution@unique-group.co.in
							</p>
							<p className="text-sm text-gray-600">
								For all general business inquiries, product discussions, or
								partnership proposals.
							</p>
						</div>

						<div className="mb-5">
							<p className="font-medium text-gray-900">
								uniquevision@unique-group.co.in
							</p>
							<p className="text-sm text-gray-600">
								Connect with our R&D team for custom developments, new ideas, or
								innovations.
							</p>
						</div>
					</div>

					{/* Second Column of Emails */}
					<div className="mt-2 md:mt-12">
						<div className="mb-5">
							<p className="font-medium text-gray-900">
								account@unique-group.co.in
							</p>
							<p className="text-sm text-gray-600">
								For invoice queries, payment details, or financial
								communications.
							</p>
						</div>

						<div>
							<p className="font-medium text-gray-900">
								design@unique-group.co.in
							</p>
							<p className="text-sm text-gray-600">
								Send your CAD files, technical drawings, or design collaboration
								requirements here.
							</p>
						</div>
					</div>
				</div>

				{/* Phone & Business Hours */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h3 className="font-semibold text-gray-900 text-lg mb-2">
							📞 Phone
						</h3>
						<p>+91 9623151218</p>
					</div>
					<div>
						<h3 className="font-semibold text-gray-900 text-lg mb-2">
							⏰ Business Hours
						</h3>
						<p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
					</div>
				</div>

				{/* Office Address & Website */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h3 className="font-semibold text-gray-900 text-lg mb-2">
							📍 Office Address
						</h3>
						<p>
							M.No.2084, HanumanNagar, Shiye, Shiroli, <br /> Maharashtra 416122
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;

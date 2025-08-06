import { useState,useEffect } from "react";
import Lottie from "lottie-react";
const ContactUs = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		company: "",
		phoneNo: "",
		email: "",
		message: "",
	});

	const [animationData, setAnimationData] = useState(null);

	useEffect(() => {
		fetch("/gears.json")
			.then((res) => res.json())
			.then((data) => setAnimationData(data));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const subject = `Enquiry from ${formData.firstName} ${formData.lastName}`;

		const body =
			`Name: ${formData.firstName} ${formData.lastName}\n` +
			`Email: ${formData.email}\n` +
			`Phone No: ${formData.phoneNo}\n` +
			`Company: ${formData.company}\n\n` +
			`Message:\n${formData.message}`;

		const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=uniquesolution@unique-group.co.in&su=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;

		// Open Gmail compose in a new tab
		window.open(gmailLink, "_blank");
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};
	return (
		<div>
			<title>
				Contact - Unique Solution | Jig & Fixture Manufacturer, Kolhapur
			</title>
			<meta
				name="description"
				content="Contact Unique Solution for custom jigs, fixtures, gauges, and precision machining solutions. We are based in Kolhapur, Maharashtra, India—delivering quality tools right first time, every time."
			/>
			<meta
				name="keywords"
				content="Contact Unique Solution, Jig manufacturer contact, Fixture supplier Kolhapur, Gauge manufacturing, CNC machining India, Kolhapur, Maharashtra, email, phone, address"
			/>
			<meta name="author" content="Unique Solution, Kolhapur India" />

			<div className="w-full min-h-screen bg-[#FAFAFA] pt-24 font-nunito text-gray-900 px-6 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Left Column - Heading and Form */}
				<div className="flex flex-col justify-start space-y-8 mt-10">
					<div>
						<h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
						<p className="text-base md:text-lg text-gray-600 mb-8">
							Let’s <span className="text-[#A4DD00]">connect.</span> Get in
							touch with us for any enquiries or questions.
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

						{/* Company */}
						<div className="flex flex-col">
							<label
								htmlFor="company"
								className="text-sm font-medium text-gray-700 mb-1">
								Phone
							</label>
							<input
								id="phoneNo"
								type="text"
								value={formData.phoneNo}
								onChange={handleChange}
								placeholder="+91 9623151218"
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
								className="w-full bg-[#A4DD00]/90 text-white font-semibold px-6 py-3 rounded-md hover:bg-[#A4DD00] cursor cursor-pointer transition">
								Send Message
							</button>
						</div>
					</form>
				</div>

				{/* Right Column - Contact Info + Image */}
				<div className="mt-56 space-y-16 text-sm md:text-base text-gray-700">
					{/* Departmental Emails & Contact Info */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						{/* Left Column: Departmental Emails */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-6">
								📩 Departmental Contacts
							</h3>

							<div className="space-y-6">
								<div>
									<p className="font-medium text-gray-900">
										uniquesolution@unique-group.co.in
									</p>
									<p className="text-sm text-gray-600">
										For all general business inquiries, product discussions, or
										partnership proposals.
									</p>
								</div>

								<div>
									<p className="font-medium text-gray-900">
										uniquevision@unique-group.co.in
									</p>
									<p className="text-sm text-gray-600">
										Connect with our R&D team for custom developments, new
										ideas, or innovations.
									</p>
								</div>
							</div>
						</div>

						{/* Right Column: Business Hours & Phone */}
						<div className="space-y-10">
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									🕰️ Business Hours
								</h3>
								<div className="flex flex-col leading-relaxed">
									<span className="font-medium text-gray-800 text-base">
										Tuesday – Sunday
									</span>
									<span className="text-gray-600 text-sm">
										9:00 AM – 6:00 PM
									</span>
								</div>
							</div>

							<div className="pt-2">
								<a
									href="https://wa.me/919623151218"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-3 text-gray-800 hover:text-green-600 transition-colors duration-300">
									<img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
									<span className="text-base font-medium">+91 9623151218</span>
								</a>
							</div>
						</div>
					</div>

					<h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
						Right first time. Every time.
					</h2>
					{animationData && (
						<Lottie
							animationData={animationData}
							loop
							autoplay
							className="w-[280px] md:w-[350px] lg:w-[400px]"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ContactUs;

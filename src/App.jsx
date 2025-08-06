import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import QualityAssuarance from "./pages/QualityAssuarance";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import BarLoader from "./components/BarLoader"; 
import ServiceDetail from "./pages/service/[slug]";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 3000); // 5 seconds
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <BarLoader />;
	}

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/service/:slug" element={<ServiceDetail />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
				<Route path="/quality" element={<QualityAssuarance />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

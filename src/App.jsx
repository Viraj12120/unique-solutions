import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import QualityAssuarance from "./pages/QualityAssuarance";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
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

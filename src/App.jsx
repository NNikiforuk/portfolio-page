import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import ProjectDisplay from "./pages/ProjectDisplay";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/project/:id" element={<ProjectDisplay />} />
					<Route path="/experience" element={<Experience />}></Route>
					<Route path="/education" element={<Education />}></Route>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

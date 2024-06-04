import React from 'react';
import './App.css';
import NavbarSite from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import About from './pages/about';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
return (
	<div id="main_app">
		<Router>
		<NavbarSite />
		<Routes>
			<Route exact path='/' element={<About />} />
			<Route exact path='/' element={<About />} />
		</Routes>
		</Router>
		<SpeedInsights />
	</div>
);
}

export default App;

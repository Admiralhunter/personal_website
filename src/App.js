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
		<meta property="og:site_name" content="Hunter Palcich Personal Website"></meta>
		<meta property="og:title" content="Hunter Palcich Personal Website"></meta>
		<meta property="og:url" content="hunterpalcich.com"></meta>
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

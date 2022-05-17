import React from 'react';
import './App.css';
import NavbarSite from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
return (
	<div id="main_app">
		<Router>
		<NavbarSite />
		<Routes>
			<Route exact path='/' element={<About />} />
			<Route path='/blogs' element={<Blogs/>} />
			<Route path='/sign-up' element={<SignUp/>} />
		</Routes>
		</Router>
	</div>
);
}

export default App;

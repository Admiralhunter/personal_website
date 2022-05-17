import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import './index.css';

const NavbarSite = () => {
return (
	<div>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
			<Container>
				<Navbar.Brand href="/">Hunter Palcich</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
					<Nav.Link href="/contact">Contact</Nav.Link>
					<Nav.Link href="/resume.pdf">Resume</Nav.Link>
					<NavDropdown title="PUBG Things" id="collasible-nav-dropdown">
						<NavDropdown.Item target="_blank" href="https://pubg.op.gg/user/FingerMeTibbers">Hunter</NavDropdown.Item>
						<NavDropdown.Item target="_blank" href="https://pubg.op.gg/user/jessyes">Jess</NavDropdown.Item>
						<NavDropdown.Item target="_blank" href="https://pubg.op.gg/user/Tybur">Ty</NavDropdown.Item>
						<NavDropdown.Item target="_blank" href="https://pubg.op.gg/user/TheCosmisGinger">Dave</NavDropdown.Item>
						<NavDropdown.Item target="_blank" href="https://pubg.op.gg/user/Truthful">Truth?</NavDropdown.Item>
						<NavDropdown.Item target="_blank" href="https://pubg.op.gg/user/TuxedoPenguin">Rob</NavDropdown.Item>
						{/* <NavDropdown.Divider /> */}
					</NavDropdown>
					</Nav>
					<Nav className="social_links">
					<SocialIcon target="_blank" bgColor="white" url="https://linkedin.com/in/hunter-palcich"/>
					<SocialIcon target="_blank" bgColor="white" url="https://github.com/Admiralhunter"/>
					<SocialIcon target="_blank" network="email" bgColor="white" url="mailto:hunterpalcich18@gmail.com"/>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</div>
);
};

export default NavbarSite;

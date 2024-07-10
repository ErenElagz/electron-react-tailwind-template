// src/components/Navbar.jsimport React from "react";
import Button from "../button/button";
import "./hero-section.css";

function HeroSection() {
	return (
		<div className="mt-5">
			<div className="mb-5">
				<p className="description">Engineering Faculty</p>
				<h1 className="title">
					Hitit University <span className="letter">I</span>nternship{" "}
					<br />
					<span className="letter">M</span>anagment{" "}
					<span className="letter">S</span>ystem
				</h1>
			</div>
			<Button>Lets Start</Button>
		</div>
	);
}

export default HeroSection;

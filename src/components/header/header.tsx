import React from "react";
import Navbar from "./navbar";
import ButtonGroup from "../button/buttonGroup";	
export default function Header() {
	return (
		<header className="flex justify-between items-center w-full	">
			<a href="#/">
				<img
					src="https://www.hitit.edu.tr/images/HititLogoYeni.svg"
					alt="Logo"
					width="160"
					height="50"
				/>
			</a>
			<Navbar />
			<ButtonGroup />
		</header>
	);
}

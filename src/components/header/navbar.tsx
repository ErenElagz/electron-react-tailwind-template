import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
	const location = useLocation();
	const [active, setActive] = React.useState("");

	useEffect(() => {
		setActive(location.pathname);
	}, [location]);

	return (
		<nav className="navbar">
			<ul className="navbar-links">
				<li>
					<a
						className={active === "/" ? "active" : ""}
						href="#/"
						onClick={() => setActive("/")}
					>
						Home
					</a>
				</li>
				<li>
					<a
						className={active === "/database" ? "active" : ""}
						href="#/database"
						onClick={() => setActive("/database")}
					>
						Database
					</a>
				</li>
				<li>
					<a
						className={active === "/dashboard" ? "active" : ""}
						href="#/dashboard"
						onClick={() => setActive("/dashboard")}
					>
						Statistics
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

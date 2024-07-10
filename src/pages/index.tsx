import { FC } from "react";
import Navbar from "../components/navbar/navbar";
import ButtonGroup from "../components/button/buttonGroup";	
import HeroSection from "../components/hero-section/hero-section";
export const Home: FC = () => {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-8">
				<header className="flex justify-between items-center w-full	">
					<a href="#/">
						<img
							src="https://www.hitit.edu.tr/images/HititLogoYeni.svg"
							alt="Logo"
							width="200"
							height="100"
						/>
					</a>
					<Navbar />
					<ButtonGroup />

				</header>
				<section>
					<HeroSection />
				</section>
			</main>
		</>
	);
};

import { FC } from "react";
import Header from "../components/header/header";				
import HeroSection from "../components/hero-section/hero-section";
export const Home: FC = () => {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-8">
				<Header/>
				<section>
					<HeroSection />
				</section>
			</main>
		</>
	);
};

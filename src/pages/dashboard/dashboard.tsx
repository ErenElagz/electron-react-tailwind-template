import { FC } from "react";
import Navbar from "../../components/navbar/navbar";
import ButtonGroup from "../../components/button/buttonGroup";	
export const Dashboard: FC = () => {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-8">
				<header className="flex justify-between items-center w-full	">
					<a href="#/">
						<img
							src="https://www.hitit.edu.tr/images/HititLogoYeni.svg"
							alt="Logo"
							width="200"
							height="50"
						/>
					</a>

					<Navbar />
					<ButtonGroup />

				</header>
				<div className="min-h-screen bg-white">
					<main className="flex justify-center items-center py-20">
						<div className="w-full max-w-md">
							<h2 className="text-4xl font-bold text-red-700 mb-6">
								Dashboard
							</h2>
						</div>
					</main>
				</div>
			</main>
		</>
	);
};

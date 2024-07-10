import { FC } from "react";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button";
import HeroSection from "../../components/hero-section/hero-section";
export const SignIn: FC = () => {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-8">
				<header className="flex justify-between items-center w-full	">
					<a href=".">
						<img
							src="https://www.hitit.edu.tr/images/HititLogoYeni.svg"
							alt="Logo"
							width="200"
							height="50"
						/>
					</a>

					<Navbar />
					<div className="flex gap-4">
						<a href="#/signUp"><Button>Create an Account</Button></a>
						<a href="#/signIn"><Button>Login</Button></a>
					</div>
				</header>
				<div className="min-h-screen bg-white">
					<main className="flex justify-center items-center py-20">
						<div className="w-full max-w-md">
							<h2 className="text-4xl font-bold text-red-700 mb-6">
								Login the System
							</h2>
							<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="email"
									>
										E-mail
									</label>
									<input
										id="email"
										type="email"
										placeholder="E-mail"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									/>
								</div>
								<div className="mb-6">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="password"
									>
										Password
									</label>
									<input
										id="password"
										type="password"
										placeholder="Password"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									/>
								</div>
							</form>
						</div>
					</main>
				</div>
			</main>
		</>
	);
};

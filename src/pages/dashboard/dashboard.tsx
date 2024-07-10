import { FC } from "react";
import Header from "../../components/header/header";
export const Dashboard: FC = () => {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-8">
				<Header />
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

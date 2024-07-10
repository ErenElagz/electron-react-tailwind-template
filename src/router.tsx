import { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/index";
import { SignIn } from "./pages/auth/signIn";
import { SignUp } from "./pages/auth/signUp";
import { Database } from "./pages/database/database";
import { Dashboard } from "./pages/dashboard/dashboard";
export const Router: FC = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="signIn" element={<SignIn />} />
					<Route path="signUp" element={<SignUp />} />
					<Route path="database" element={<Database />} />
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

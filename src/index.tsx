import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./tailwind.css";
import "./components/Titlebar/titlebar.css";
import {Titlebar} from "./components/Titlebar";
import { Router } from "./router";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<Titlebar />
		<ToastContainer position="bottom-right" autoClose={2500} />
		<Router />
	</React.StrictMode>
);

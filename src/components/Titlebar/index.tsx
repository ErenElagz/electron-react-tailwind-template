import { FC, useEffect, useState } from "react";
import {
	IoCloseOutline,
	IoContractOutline,
	IoExpandOutline,
	IoRemove,
} from "react-icons/io5";
import Logo from "../../assets/logo.jpg";
import "./titlebar.css";
const { getCurrentWindow, app } = window.require("@electron/remote");

export const Titlebar: FC = () => {
	const currentWindow = getCurrentWindow();
	const [maximized, setMaximized] = useState(currentWindow.isMaximized());

	useEffect(() => {
		const icon = document.getElementById("icon") as HTMLElement;
		icon.ondragstart = () => false;
	});

	const onMinimize = () => currentWindow.minimize();
	const onMaximize = () => {
		setMaximized(!currentWindow.isMaximized());
		currentWindow.isMaximized()
			? currentWindow.unmaximize()
			: currentWindow.maximize();
	};
	const onQuit = () => app.quit();

	return (
		<div className="title-bar sticky top-0 select-none">
			<div className="menu-button-container">
				<img
					id="icon"
					src={Logo}
					className="menu-icon select-none"
					alt="Logo"
				/>
			</div>
			<div className="app-name-container select-none">
				<p>Hitit University Internship Managment System</p>
			</div>
			<div className="window-controls-container">
				<button
					title="Minimize"
					className="minimize-button flex justify-center items-center focus:outline-none hover:bg-red-200"
					onClick={onMinimize}
				>
					<IoRemove />
				</button>
				<button
					title="Maximize"
					className="min-max-button flex justify-center items-center focus:outline-none hover:bg-red-200"
					onClick={onMaximize}
				>
					{maximized ? <IoContractOutline /> : <IoExpandOutline />}
				</button>
				<button
					title="Close"
					className="close-button flex justify-center items-center  focus:outline-none hover:bg-red-300"
					onClick={onQuit}
				>
					<IoCloseOutline />
				</button>
			</div>
		</div>
	);
};

import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
	return (
		<div className="bg-white min-h-screen flex flex-[3] flex-row">
			<Nav />
			<div className="text-black p-10 m-10 rounded-2xl  flex-[9]">{children}</div>
		</div>
	);
}

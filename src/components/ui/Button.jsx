import React from "react";

export default function Button({ children }) {
	return (
		<button className="basketBtn relative flex gap-2">{children}</button>
	);
}

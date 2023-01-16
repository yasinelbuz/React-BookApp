import React from "react";

export default function Categori({ item }) {
	return (
		<a className="px-4 py-2 text-black cursor-pointer font-bold">
			{item.title}
		</a>
	);
}

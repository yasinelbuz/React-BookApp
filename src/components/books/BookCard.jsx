import React from "react";

export default function BookCard() {
	return (
		<div className="relative bg-white h-36 shadow-gray-200 shadow rounded-md flex items-start hover:shadow-md transition-all cursor-pointer">
			<img
				src="images/the-little-black-fish.jpeg"
				className="object-cover h-full w-40"
			/>
			<div className="flex flex-col p-4">
				<b>Pizza pepperoni</b>
				<span>Pepperoni, molho de tomate e queijo.</span>
				<span className="absolute bottom-4 font-bold">
					25,49 <small>TL</small>
				</span>
			</div>
		</div>
	);
}

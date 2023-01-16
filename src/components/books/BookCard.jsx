import React from "react";

export default function BookCard({ book }) {
	return (
		<div className="relative bg-white h-36 shadow-gray-200 shadow rounded-md flex items-start hover:shadow-md transition-all cursor-pointer">
			<img
				src="images/the-little-black-fish.jpeg"
				className="object-cover h-full w-40"
			/>
			<div className="flex flex-col p-4">
				<b>{book.title}</b>
				<span>{book.description}</span>
				<span className="absolute bottom-4 font-bold">
					{book.price} <small>TL</small>
				</span>
			</div>
		</div>
	);
}

import React from "react";
import { TitleDownLineIcon } from "@/icon";
import categories from "@/list/categoriesdb";
import Categori from "@/components/books/Categori";
import BookCard from "@/components/books/BookCard";

export default function Books() {
	return (
		<section>
			<div className="container mx-auto p-7">
				<h1 className="font-bold text-2xl">
					<span>Books</span>
					<TitleDownLineIcon />
				</h1>
				<div className="mt-10">
					<h2 className="font-bold">Kategoriler</h2>
					<div className="flex items-start mt-2 overflow-auto">
						{categories.map((item, index) => (
							<Categori key={index} item={item} />
						))}
					</div>
				</div>
				<div className="grid grid-cols-3 py-8 gap-8">
					<BookCard />
				</div>
			</div>
		</section>
	);
}

import React from "react";
import { TitleDownLineIcon } from "icon";
import categories from "list/categoriesdb";
import booksList from "list/booksdb";
import Categori from "components/category/CategoryItem";
import BookCard from "components/books/BookCard";
import Modal from "components/modal/Modal";

export default function Books() {
	return (
		<>
			<Modal />
			<section>
				<div className="container mx-auto p-7">
					<h1 className="font-bold text-2xl">
						<span>Books</span>
						<TitleDownLineIcon />
					</h1>
					<div className="mt-10">
						<h2 className="font-bold text-black/20">Categories</h2>
						<div className="flex items-start mt-2 overflow-auto">
							{categories.map((item, index) => (
								<Categori key={item.id} item={item} />
							))}
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 py-8 gap-8">
						{booksList.map((book) => (
							<BookCard key={book.id} book={book} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}

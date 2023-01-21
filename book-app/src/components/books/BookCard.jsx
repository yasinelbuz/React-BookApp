import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalToggle, setBookId } from "stores/bookShopSlice";

export default function BookCard({ book }) {
	const dispatch = useDispatch();
	const categoryId = useSelector((state) => state.filter.categoryId);
	const {modalOpen} = useSelector(state => state.bookShop);
	//
	const checkCategory = book.categories.includes(categoryId);

	return (
		checkCategory && (
			<div
				className="relative bg-white h-36 shadow-gray-200 shadow rounded-md flex items-start hover:shadow-md hover:border-2 hover:border-yellow-500 transition-all cursor-pointer"
				onClick={() => {
					dispatch(setModalToggle(!modalOpen));
					dispatch(setBookId(book.id));
				}}
			>
				<img
					src={`images/${book.img}`}
					className="object-cover h-full w-[440px] rounded-tl-md rounded-bl-md"
					alt="books"
				/>

				<div className="flex flex-col p-4">
					<b className="truncate min-w-[190px]">{book.title}</b>
					<span className="w-full h-[43px] overflow-hidden text-sm">
						{book.description}
					</span>
					<span className="absolute bottom-4 font-bold">
						{book.price} <small>TL</small>
					</span>
				</div>
			</div>
		)
	);
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalToggle } from 'stores/bookShopSlice';
import { CloseIcon,TitleDownLineIcon } from "icon";

export default function Modal() {
	const dispatch = useDispatch();
	const {bookId, modalOpen, books} = useSelector((state) => state.bookShop);
	const book = books.find(item => +item.id === +bookId);

	return (
		modalOpen  && <div className="bg-black/50 fixed inset-0 z-10 p-8">
			<div className="w-full md:w-[600px] h-[300px] bg-white left-1/2 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row rounded-md border-4 border-gray-800">
				<div className="flex items-start relative w-full h-full">
					<div className="absolute right-0 top-0 bg-slate-300 p-2 px-4 rounded-tr-md cursor-pointer user-select z-10" onClick={() => dispatch(setModalToggle(!modalOpen))}>
						<CloseIcon />
					</div>
					<div className="bg-yellow-100 min-w-[250px] p-4 h-full">
						<img src={`images/${book.img}`} alt="resim" className="object-cover h-full w-full" />
					</div>
					<div className="p-4 relative h-full">
						<h2 className="font-bold">{book.title}
							<TitleDownLineIcon />
						</h2>
						<p className="my-4">{book.description}</p>
						<div className="flex justify-between">
							<span className="font-bold">
								<small>1x </small>
								<span>{ book.price }TL</span>
							</span>
							<div className="flex items-center gap-2">
								<button class="flex text-white bg-gray-500 border-0 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg">+</button>
								<button class="flex text-white bg-gray-500 border-0 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg">-</button>
							</div>
						</div>
						<div className="flex items-center justify-between absolute bottom-0 left-0 w-full bg-gray-200 px-4 py-2">
							<div className="flex flex-col">
								<span className="font-bold">Total </span>
								<small>{ book.price }TL</small>
							</div>
							<button class=" text-white bg-blue-500 border-0 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

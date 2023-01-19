import { CloseIcon } from "@/icon";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalToggle } from '@/stores/bookShopSlice';

export default function Modal() {
	const dispatch = useDispatch();
	const modalOpen = useSelector((state) => state.bookShop.modalOpen);
	return (
		modalOpen  && <div className="bg-black/50 fixed inset-0 z-10 p-8">
			<div className="w-full md:w-[600px] h-[300px] bg-white left-1/2 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row rounded-md">
				<div className="flex items-start relative w-full h-full">
					<div className="absolute right-0 top-0 bg-slate-300 p-2 px-4 rounded-tr-md cursor-pointer user-select" onClick={() => dispatch(setModalToggle(!modalOpen))}>
						<CloseIcon />
					</div>
					<div>image</div>
					<div>text</div>
				</div>
			</div>
		</div>
	);
}

import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryId } from "@/stores/filterSlice";

export default function Categori({ item }) {
	const dispatch = useDispatch();
	return (
		<a
			className="pr-4 text-black cursor-pointer font-bold text-[14px] hover:text-blue-600"
			onClick={() => dispatch(setCategoryId(item.id))}
		>
			{item.title}
		</a>
	);
}

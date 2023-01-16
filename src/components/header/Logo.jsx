import React from "react";
import BookOpen from "@/icon";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<div>
			<Link to="/">
				<div className="flex items-center gap-2">
					<BookOpen />
					<span className="font-bold text-xl">BookApp</span>
				</div>
			</Link>
		</div>
	);
}

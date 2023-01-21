import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="header-menu hidden md:flex md:gap-4">
			<NavLink to="/" className="hover:text-[#f0b761]">
				Home
			</NavLink>
			<NavLink to="books" className="hover:text-[#f0b761]">
				Books
			</NavLink>
		</nav>
	);
}

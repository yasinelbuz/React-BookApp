import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import { BasketIcon, HamburgerIcon } from "@/icon";
import Button from "@/components/ui/Button";

export default function Header() {
	return (
		<header className="header">
			<div className="container header-container">
				<Nav />
				<Logo />
				<div className="flex items-center gap-2">
					<HamburgerIcon />
					<Button>
						<span className="hidden md:block">Basket</span>
						<BasketIcon />
						<div className="absolute -right-2 -top-2 bg-yellow-400 rounded-full w-6 h-6 text-black">
							2
						</div>
					</Button>
				</div>
			</div>
		</header>
	);
}

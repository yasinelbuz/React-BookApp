import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import { BasketIcon, HamburgerIcon } from "icon";
import Button from "components/ui/Button";
import OpenMenu from "../open-menu/OpenMenu";

export default function Header() {
	return (
		<>
			<header className="header">
				<div className="container header-container relative">
					<Nav />
					<Logo />
					<div className="flex items-center gap-2">
						<HamburgerIcon />

						<Button>
							<label
								htmlFor="header-open"
								className="flex gap-2 cursor-pointer w-full h-full"
							>
								<span className="hidden md:block">Basket</span>
								<BasketIcon />
								<div className="absolute -right-2 -top-2 bg-yellow-400 rounded-full w-6 h-6 text-black">
									2
								</div>
							</label>
						</Button>

						<input
							type="checkbox"
							id="header-open"
							className="hidden"
						/>
						<OpenMenu />
					</div>
				</div>
			</header>
		</>
	);
}

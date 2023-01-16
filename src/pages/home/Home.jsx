import React from "react";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRightIcon, Quotation } from "@/icon";
import Hero from "@/components/home/Hero";

export default function Home() {
	return (
		<section>
			<div className="container mx-auto px-6 py-24 flex md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<Quotation />
					<Hero />
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover rounded"
						alt="hero"
						src="images/the-little-black-fish.jpeg"
					/>
				</div>
			</div>
		</section>
	);
}

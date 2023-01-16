import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@/icon";
import Button from "@/components/ui/Button";

export default function Hero() {
	return (
		<>
			<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
				<span className="leading-[120%] block">
					If you want to move forward, you have to act...
				</span>
				<span className="text-sm bg-yellow-300 text-yellow-900 p-3">
					The Little Black Fish
				</span>
			</h1>

			<p className="mb-8 leading-relaxed">
				The story is told through the voice of an old fish speaking to
				her 12,000 children and grandchildren. She describes the journey
				of a small black fish who leaves the safety of the local stream
				to venture into the world.
			</p>

			<div className="flex justify-center">
				<Link to="/books">
					<Button>
						Go to{" "}
						<b className="flex items-center gap-1">
							Books <ArrowRightIcon />
						</b>
					</Button>
				</Link>
			</div>
		</>
	);
}

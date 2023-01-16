import HomeLayout from "@/pages/home/HomeLayout";
import Home from "@/pages/home/Home";
import Books from "@/pages/books/Books";
import Order from "@/pages/order/Order";

const routes = [
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/books",
				element: <Books />,
			},
			{
				path: "/order",
				element: <Order />,
			},
		],
	},
];

export default routes;

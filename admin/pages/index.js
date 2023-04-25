import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<Layout>
			<h1>Home</h1>
			<div className=" grid place-items-center h-[60%]">
				<h1>Welcome to Ecommerce Admin Dashboard</h1>
			</div>
		</Layout>
	);
}

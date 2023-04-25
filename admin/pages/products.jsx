import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export default function Products() {
	return (
		<Layout>
			<h1>Products</h1>
			<div className="grid place-items-center">
				<Link className="btn-primary" href={"/products/new"}>
					Add new product
				</Link>
			</div>
		</Layout>
	);
}

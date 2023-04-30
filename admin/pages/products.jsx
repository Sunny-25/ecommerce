import Layout from "@/components/Layout";
import { DeleteIcon, EditIcon } from "@/constants/images/svg";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Products() {
	const [products, setProducts] = useState([]);
	console.log(products);

	useEffect(() => {
		async function a() {
			const { data } = await axios.get("http://localhost:3004/api/products");
			setProducts(data);
		}
		a();
	}, []);

	return (
		<Layout>
			<h1>Products</h1>
			<div className="grid place-items-center">
				<Link className="btn-primary" href={"/products/new"}>
					Add new product
				</Link>
			</div>
			<table className="basic max-h-[60vh]">
				<thead>
					<tr>
						<td>Product name</td>
						<td></td>
					</tr>
				</thead>

				<tbody>
					{products.map((product) => (
						<tr key={product._id}>
							<td>{product.title}</td>
							<td>
								<Link href={"/products/edit/" + product._id} className="btn-primary">
									<EditIcon />
									Edit
								</Link>
								<Link href={"/products/" + product._id} className="btn-primary">
									<DeleteIcon />
									Delete
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Layout>
	);
}

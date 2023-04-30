import { useRouter } from "next/router";
import React, { useState } from "react";

const ProductForm = ({ title: currentTitle, desc: currentDesc, price: currentPrice }) => {
	const [title, setTitle] = useState(currentTitle || "");
	const [desc, setDesc] = useState(currentDesc || "");
	const [price, setPrice] = useState(currentPrice || "");
	const router = useRouter();

	const createProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/products", { title, desc, price });
			router.push("/products");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<form onSubmit={createProduct} className="w-[80%] mt-8 h-[90%] flex flex-col gap-5">
			<h1>New Product</h1>
			<div>
				<label htmlFor="productName">Product Name</label>
				<input
					type="text"
					id="productName"
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Product Name"
					value={title}
				/>
			</div>
			<div>
				<label htmlFor="desc">Description</label>
				<textarea
					name=""
					onChange={(e) => setDesc(e.target.value)}
					title={desc}
					placeholder="Description"
					id="desc"
					cols="30"
					rows="10"></textarea>
			</div>
			<div>
				<label htmlFor="price">Price (in USD)</label>
				<input
					type="text"
					value={price}
					id="price"
					onChange={(e) => setPrice(e.target.value)}
					placeholder="price"
				/>
			</div>
			<button type="submit" className="btn-primary">
				Save
			</button>
		</form>
	);
};

export default ProductForm;

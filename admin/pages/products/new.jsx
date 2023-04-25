import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";

const New = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [price, setPrice] = useState("");
	const createProduct = async (e) => {
		e.preventDefault();
		const data = { title, desc, price };
		try {
			await axios.post("/api/products", data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout>
			<h1>New Product</h1>
			<form onSubmit={createProduct} className="w-[80%] mt-8 h-[90%] flex flex-col gap-5">
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
		</Layout>
	);
};

export default New;

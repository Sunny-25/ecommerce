import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
	title: { type: String, required: true },
	desc: String,
	price: { type: String, required: true },
});

export const Product = model("Product", ProductSchema);

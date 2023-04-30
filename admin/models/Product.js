import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
	{
		title: { type: String, required: true },
		desc: String,
		price: { type: Number, required: true },
	},
	{ timestamps: true }
);

export const Product = models.Product || model("Product", ProductSchema);

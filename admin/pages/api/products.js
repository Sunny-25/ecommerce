import { Product } from "@/models/Product.js";
import mongoose from "mongoose";

export default async function handler(req, res) {
	mongoose.connect(process.env.MONGO_URL).then(() => console.log("connected to mongodb"));
	const { method } = req;

	switch (method) {
		case "GET":
			if (req.query.id) {
				res.json(await Product.findOne({ _id: req.query.id }));
			} else {
				res.status(200).json(await Product.find());
			}
			break;

		case "POST":
			const { title, desc, price } = req.body;
			try {
				var newProduct = await Product.create({ title, desc, price });
				res.status(200).json(newProduct);
			} catch (error) {
				console.error(error);
			}
			break;

		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

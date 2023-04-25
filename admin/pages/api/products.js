import mongoose from "mongoose";

export default function handle(req, res) {
	mongoose.Promise = clientPromise;
	if (req.method === "POST") {
	}
	res.json(req.method);
}

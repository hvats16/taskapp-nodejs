import express from "express";
import mongoose from "mongoose";

const app = express();

//Using middleware
app.use(express.json());

mongoose
	.connect("mongodb://127.0.0.1:27017", {
		dbName: "backendapi",
	})
	.then(() => console.log("Database Connected"))
	.catch((e) => console.log(e));

const schema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
});

const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
	res.send("Nice");
});

app.get("/users/all", async (req, res) => {
	console.log(req.query);
	const users = await User.find({});
	res.json({
		success: true,
		users,
	});
});

app.post("/users/new", async (req, res) => {
	const { name, email, password } = req.body;
	const users = await User.create({
		name,
		email,
		password,
	});
	res.status(201).cookie("cookie", "lol").json({
		success: true,
		message: "Registered Successfully",
	});
});

app.listen("5000", () => {
	console.log("Listiening on port 5000");
});

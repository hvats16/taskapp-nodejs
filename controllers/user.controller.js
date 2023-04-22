import { User } from "../models/user.model.js";

export const getAllUser = async (req, res) => {
	console.log(req.query);
	const users = await User.find({});
	res.json({
		success: true,
		users,
	});
};

export const createNewUser = async (req, res) => {
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
};

export const fetchSingleUser = async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id);
	console.log(req.params);
	res.json({
		success: true,
		user,
	});
};

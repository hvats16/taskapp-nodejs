import express from "express";
import {
	createNewUser,
	fetchSingleUser,
	getAllUser,
} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/all", getAllUser);

router.post("/new", createNewUser);

router.get("/:id", fetchSingleUser);

export default router;

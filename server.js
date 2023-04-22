import { app } from "./app.js";

import { connectDB } from "./data/database.js";
connectDB();

app.listen(process.env.PORT, () => {
	console.log("Listiening on port 5000");
});

import express from "express";
const app = express();


app.get("/",(req,res)=>{
    res.send("Nice")
})

app.listen("5000", () => {
	console.log("Listiening on port 5000");
});

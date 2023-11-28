require("dotenv").config();
const path = require("path")
const express = require("express");
const cors=require("cors")

const app = express();

app.use(express.static(path.join(__dirname,"./build")));
app.use(cors());
app.use(express.json());
app.use("/",require("./routes/root"));

app.use("/generate",require("./routes/generatorRoutes"))

app.get("/*", (req,res)=>{
    res.sendFile(path.join(__dirname,"views", "error.html"))
})

app.listen(3500,()=>console.log("Listening on the port 3500"))
import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import orderRouter from "./order/order-routes.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (_req, res) => {
    res.status(200).json({ hello: "world" });
});

mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Database Connected");
});

app.use("/orders", orderRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

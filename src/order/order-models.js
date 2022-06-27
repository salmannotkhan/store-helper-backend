import mongoose from "mongoose";
import schemaOptions from "../common/schemaOptions.js";

const orderSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "service",
            required: true,
        },
        status: {
            type: String,
            enum: ["waiting", "processing", "completed"],
        },
    },
    schemaOptions
);

const Order = mongoose.model("order", orderSchema);
export default Order;

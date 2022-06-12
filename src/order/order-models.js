import mongoose from "mongoose";

const schemaOptions = {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
};

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
            type: String,
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

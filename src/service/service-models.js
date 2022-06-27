import mongoose from "mongoose";
import schemaOptions from "../common/schemaOptions.js";

const serviceSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rate: { type: Number, required: true },
        approxTime: { type: Number, required: true },
    },
    schemaOptions
);

const Service = mongoose.model("service", serviceSchema);

export default Service;

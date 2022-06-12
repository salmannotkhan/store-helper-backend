import { Router } from "express";
import ablyChannels from "../configs/ably.js";
import orderQueries from "./order-queries.js";

const orderRouter = Router();

orderRouter.get("/", async (_req, res) => {
    const orderQueue = await orderQueries.fetchAllOrders();
    res.status(200).json(orderQueue);
});

orderRouter.post("/", async (req, res) => {
    const orderQueue = await orderQueries.createOrder(req.body);
    ablyChannels.orderQueueChannel.publish("added", orderQueue);
    res.status(200).json({ status: "OK" });
});

orderRouter.delete("/:id", async (req, res) => {
    const orderQueue = await orderQueries.completeOrder(req.params.id);
    ablyChannels.orderQueueChannel.publish("completed", req.params.id);
    res.status(200).json({ status: "OK" });
});

orderRouter.put("/:id", async (req, res) => {
    const orderQueue = await orderQueries.processingOrder(req.params.id);
    ablyChannels.orderQueueChannel.publish("update", req.params.id);
    res.status(200).json({ status: "OK" });
});

export default orderRouter;

import { Router } from "express";
import ablyChannels from "../configs/ably.js";
import orderQueries from "./order-queries.js";

const orderRouter = Router();

orderRouter.get("/", (_req, res) => {
    const orderQueue = orderQueries.fetchAllOrders();
    res.status(200).json(orderQueue);
});

orderRouter.post("/", (req, res) => {
    const orderQueue = orderQueries.createOrder(req.body);
    ablyChannels.orderQueueChannel.publish("update", orderQueue);
    res.status(200).json({ status: "OK" });
});

orderRouter.delete("/:id", (req, res) => {
    const orderQueue = orderQueries.completeOrder(req.params.id);
    ablyChannels.orderQueueChannel.publish("update", orderQueue);
    res.status(200).json({ status: "OK" });
});

export default orderRouter;

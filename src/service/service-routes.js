import { Router } from "express";
import serviceQueries from "./service-queries.js";

const serviceRouter = Router();

serviceRouter.get("/", async (_req, res) => {
    const services = await serviceQueries.getAllServices();
    res.status(200).json(services);
});

serviceRouter.post("/", async (req, res) => {
    const service = await serviceQueries.createNewService(req.body);
    res.status(200).json(service);
});

serviceRouter.put("/:serviceId", async (req, res) => {
    const service = await serviceQueries.updateService(
        req.params.serviceId,
        req.body
    );
    res.status(200).json(service);
});

serviceRouter.delete("/:serviceId", async (req, res) => {
    const service = await serviceQueries.deleteService(req.params.serviceId);
    res.status(200).json(service);
});

export default serviceRouter;

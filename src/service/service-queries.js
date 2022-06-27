import Service from "./service-models.js";

const getAllServices = async () => {
    const services = await Service.find({});
    return services;
};

const createNewService = async (serviceDetails) => {
    const service = await Service.create(serviceDetails);
    return service;
};

const updateService = async (id, serviceDetails) => {
    const service = await Service.updateOne({ _id: id }, serviceDetails);
    return service;
};

const deleteService = async (serviceId) => {
    const service = await Service.deleteOne({ _id: serviceId });
    return service;
};

const serviceQueries = {
    getAllServices,
    createNewService,
    updateService,
    deleteService,
};

export default serviceQueries;

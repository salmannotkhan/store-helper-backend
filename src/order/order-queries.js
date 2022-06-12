import crypto from "crypto";

const orderQueue = [];

const fetchAllOrders = () => {
    return orderQueue;
};

const completeOrder = (orderId) => {
    return orderQueue.filter((order) => order.id !== orderId);
};

const createOrder = (orderDetails) => {
    return [
        ...orderQueue,
        {
            id: crypto.randomUUID(),
            ...orderDetails,
        },
    ];
};

const orderQueries = {
    createOrder,
    fetchAllOrders,
    completeOrder,
};

export default orderQueries;

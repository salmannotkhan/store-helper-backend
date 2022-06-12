import Order from "./order-models.js";

const fetchAllOrders = async () => {
    const orderQueue = await Order.find({ status: { $ne: "completed" } });
    return orderQueue;
};

const completeOrder = async (orderId) => {
    const updatedOrder = await Order.updateOne(
        { _id: orderId },
        { status: "completed" }
    );
    return updatedOrder;
};

const processingOrder = async (orderId) => {
    const updatedOrder = await Order.updateOne(
        { _id: orderId },
        { status: "processing" }
    );
    return updatedOrder;
};

const createOrder = async (orderDetails) => {
    console.log(orderDetails);
    const order = await Order.create(orderDetails);
    return order;
};

const orderQueries = {
    createOrder,
    fetchAllOrders,
    completeOrder,
    processingOrder,
};

export default orderQueries;

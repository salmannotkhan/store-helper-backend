import ably from "ably";

const ablyClient = new ably.Realtime(process.env.ABLY_API_KEY);
const orderQueueChannel = ablyClient.channels.get("order:queue");

const ablyChannels = {
    orderQueueChannel,
};

export default ablyChannels;

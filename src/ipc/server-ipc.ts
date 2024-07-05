import { ToServer, ToClient } from "./channels.enum";
import { ChannelBody } from "./channels.type";

export const sendToClient = <T extends ToClient>(
    socket: any,
    channel: T,
    body: ChannelBody<T>,
) => {
    socket.emit(channel, body);
}

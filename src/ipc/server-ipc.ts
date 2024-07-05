import { ClientToServerChannel, ServerToClientChannel } from "./channels.enum";
import { ChannelBody } from "./channels.type";

export const sendToClient = <T extends ServerToClientChannel>(
    socket: any,
    channel: T,
    body: ChannelBody<T>,
) => {
    socket.emit(channel, body);
}

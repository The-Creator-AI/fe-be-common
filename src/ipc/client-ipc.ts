import { ClientToServerChannel, ServerToClientChannel } from "./channels.enum";
import { ChannelBody } from "./channels.type";

export const sendToServer = <T extends ClientToServerChannel>(
  socket: any,
  channel: T,
  body: ChannelBody<T>): void => {
  socket.emit(channel, body);
}

export const onServerMessage = <T extends ServerToClientChannel>(
  socket: any,
  channel: T,
  callback: (body: ChannelBody<T>) => void): void => {
  socket.on(channel, callback);
}

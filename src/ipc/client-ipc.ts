import { ToServer, ToClient } from "./channels.enum";
import { ChannelBody } from "./channels.type";

export const sendToServer = <T extends ToServer>(
  socket: any,
  channel: T,
  body: ChannelBody<T>): void => {
  socket.emit(channel, body);
}

export const onServerMessage = <T extends ToClient>(
  socket: any,
  channel: T,
  callback: (body: ChannelBody<T>) => void): void => {
  socket.on(channel, callback);
}

import { ClientToServerChannel, ServerToClientChannel } from "./channels.enum";
import { ChannelBody } from "./channels.type";
import { Socket, io } from "socket.io-client"; 

export class ClientIPC {
  private static _instance?: ClientIPC;
  private _listeners: {
    channel: ServerToClientChannel,
    callback: (body: ChannelBody<ServerToClientChannel>) => void
  }[];
  private _socket?: Socket;

  private constructor(
    url: string,
  ) {
    this._listeners = [];
    console.log("Client IPC created", url);
    const newSocket = io(url)
    this._socket = newSocket;
    this._socket.onAny((channel: ServerToClientChannel, body: ChannelBody<ServerToClientChannel>) => {
      console.log({ dataOnServerSide: body });
      this._listeners.forEach((listener) => {
        if (listener.channel === channel) {
          listener.callback(body);
        }
      });
    });
  }

  static getInstance(url: string): ClientIPC {
    console.log({ instance: ClientIPC._instance })
    if (!ClientIPC._instance) {
      ClientIPC._instance = new ClientIPC(url);
    }
    return ClientIPC._instance;
  }

  sendToServer<T extends ClientToServerChannel>(channel: T, body: ChannelBody<T>): void {
    console.log({ dataOnClientSide: body });
    this._socket?.emit(channel, body);
  }

  onServerMessage<T extends ServerToClientChannel>(channel: T, callback: (body: ChannelBody<T>) => void): void {
    this._listeners.push({ channel, callback: callback as any });
  }

  disconnect() {
    this._socket?.disconnect();
  }
}

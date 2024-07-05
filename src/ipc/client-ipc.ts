import { ClientToServerChannel, ServerToClientChannel } from "./channels.enum";
import { ChannelBody } from "./channels.type";

export class ClientIPC {
  private static _instance?: ClientIPC;
  private _listeners: {
    channel: ServerToClientChannel,
    callback: (body: ChannelBody<ServerToClientChannel>) => void
  }[];

  private constructor(
    private sendMessage: (channel: ClientToServerChannel, body: ChannelBody<ClientToServerChannel>) => void,
    private onMessage: (cb: (channel: ServerToClientChannel, body: ChannelBody<ServerToClientChannel>) => void) => void
  ) {
    this._listeners = [];
    this.onMessage((channel: ServerToClientChannel, body: ChannelBody<ServerToClientChannel>) => {
      console.log({ dataOnServerSide: body });
      this._listeners.forEach((listener) => {
        if (listener.channel === channel) {
          listener.callback(body);
        }
      });
    });
  }

  static getInstance(
    sendMessage: (channel: ClientToServerChannel, body: ChannelBody<ClientToServerChannel>) => void,
    onMessage: (cb: (channel: ServerToClientChannel, body: ChannelBody<ServerToClientChannel>) => void) => void
  ): ClientIPC {
    if (!ClientIPC._instance) {
      ClientIPC._instance = new ClientIPC(sendMessage, onMessage);
    }
    return ClientIPC._instance;
  }

  sendToServer<T extends ClientToServerChannel>(channel: T, body: ChannelBody<T>): void {
    this.sendMessage(channel, body);
  }

  onServerMessage<T extends ServerToClientChannel>(channel: T, callback: (body: ChannelBody<T>) => void): void {
    this._listeners.push({ channel, callback: callback as any });
  }
}

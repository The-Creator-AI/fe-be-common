import { ClientToServerChannel, ServerToClientChannel } from "./channels.enum";
import { ChannelBody } from "./channels.type";

export class ServerIPC {
    private static _instance?: ServerIPC;
    private _listeners: {
        channel: ClientToServerChannel,
        callback: (body: ChannelBody<ClientToServerChannel>) => void
    }[];
    private constructor(
        private sendMessage: (channel: ServerToClientChannel, body: ChannelBody<ServerToClientChannel>) => void,
        private onMessage: (cb: (channel: ClientToServerChannel, body: ChannelBody<ClientToServerChannel>) => void) => void
    ) {
        this._listeners = [];
        this.onMessage((data: any) => {
            this._listeners.forEach((listener) => {
                if (listener.channel === data.channel) {
                    listener.callback(data.body);
                }
            });
        });
    }

    static getInstance(
        sendMessage: (channel: ServerToClientChannel, body: ChannelBody<ServerToClientChannel>) => void,
        onMessage: (cb: (channel: ClientToServerChannel, body: ChannelBody<ClientToServerChannel>) => void) => void
    ) {
        if (onMessage && sendMessage) {
            ServerIPC._instance = new ServerIPC(sendMessage, onMessage);
        }
        return ServerIPC._instance;
    }

    // Server-to-Client communication 
    sendToClient<T extends ServerToClientChannel>(channel: T, body: ChannelBody<T>): void {
        this.sendMessage(channel, body);
    }

    onClientMessage<T extends ClientToServerChannel>(channel: T, callback: (body: ChannelBody<T>) => void): void {
        this._listeners.push({ channel, callback: callback as any });
    }
}

import { SummarizedResult } from "../types";
import { ClientToServerChannel, ServerToClientChannel } from "./channels.enum";

export type ChannelBody<T extends ClientToServerChannel | ServerToClientChannel> =
    T extends ClientToServerChannel.SendMessage ? { message: string } :
    T extends ServerToClientChannel.SendMessage ? { message: string } :

    T extends ClientToServerChannel.RequestChatHistory ? {
        chatId?: string
    } :
    T extends ServerToClientChannel.SendChatHistory ? {
        chatId: string;
        messages: {
            user: string;
            message: string;
        }[];
    } :
    
    T extends ClientToServerChannel.search ? { topic: string } :
    T extends ServerToClientChannel.progress ? { message: string } :
    T extends ServerToClientChannel.result ? SummarizedResult :
    T extends ServerToClientChannel.error ? { message: string } :
    T extends ServerToClientChannel.complete ? { message: string } :

    never; 
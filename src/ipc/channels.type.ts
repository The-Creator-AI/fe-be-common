import {
  BotMessageChunk,
  ChatMessageType,
  ChatType,
  PlanType,
  SummarizedResult,
  SummarizedResultChunk,
  UserMessage,
  Agent,
} from '../types';
import { ToServer, ToClient } from './channels.enum';

export type ChannelBody<T extends ToServer | ToClient> =
  // --- Research ---
  T extends ToServer.SEARCH
    ? { topic: string }
    : T extends ToClient.PROGRESS
    ? { message: string }
    : T extends ToClient.RESULT
    ? SummarizedResult
    : T extends ToClient.ERROR
    ? { message: string }
    : T extends ToClient.COMPLETE
    ? { message: string }
    : T extends ToClient.CHUNK
    ? SummarizedResultChunk
    : // --- Code Chat ---
    T extends ToServer.USER_MESSAGE
    ? UserMessage
    : T extends ToClient.BOT_MESSAGE
    ? ChatMessageType
    : T extends ToClient.BOT_MESSAGE_CHUNK
    ? BotMessageChunk
    : T extends ToServer.GET_FILE_CONTENT
    ? { filePath: string }
    : T extends ToClient.FILE_CONTENT
    ? string
    : T extends ToServer.GET_TOKEN_COUNT
    ? UserMessage
    : T extends ToClient.TOKEN_COUNT
    ? number
    : // --- Plans ---
    T extends ToServer.SAVE_PLAN
    ? Omit<PlanType, 'id'> & { id?: number }
    : T extends ToServer.DELETE_PLAN
    ? { id: number }
    : T extends ToServer.GET_PLANS
    ? {}
    : T extends ToClient.PLANS
    ? PlanType[]
    : // --- Chats ---
    T extends ToServer.SAVE_CHAT
    ? Omit<ChatType, 'id'>
    : T extends ToServer.DELETE_CHAT
    ? { id: number }
    : T extends ToServer.GET_CHATS
    ? {}
    : T extends ToClient.CHATS
    ? ChatType[]
    : // --- Agents ---
    T extends ToServer.GET_AGENTS
    ? {}
    : T extends ToServer.SAVE_AGENT
    ? Agent & { id?: string }
    : T extends ToServer.DELETE_AGENT
    ? { id: string }
    : T extends ToClient.AGENTS
    ? Agent[]
    : // --- Other Groups... ---
      never;


export interface  ChatType {
  id?: number;
  title: string;
  description: string;
  chat_history: ChatMessageType[];
}

export interface ChatMessageType {
  uuid: string;
  user: 'user' | 'bot' | 'instructor';
  message: string;
  model?: string;
  agentName?: string;
  isCollapsed?: boolean;
}

export interface BotMessageChunk extends Pick<ChatMessageType, "uuid" | "user" | "model"> {
  chunk: string;
}

export interface UserMessage {
  chatHistory: ChatMessageType[];
  selectedFiles: string[];
}

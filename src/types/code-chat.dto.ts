export interface ChatMessageType {
  uuid: string;
  user: 'user' | 'bot' | 'instructor';
  message: string;
  model?: string;
  agentName?: string;
  isCollapsed?: boolean;
}

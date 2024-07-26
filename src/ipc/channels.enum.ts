export enum ToServer {
  // --- Research ---
  SEARCH = 'clientToServer.search',
  // --- Code Chat ---
  USER_MESSAGE = 'clientToServer.userMessage',
  GET_FILE_CONTENT = 'clientToServer.getFileContent',
  GET_TOKEN_COUNT = 'clientToServer.getTokens',
  // --- Plans ---
  SAVE_PLAN = 'clientToServer.savePlan',
  DELETE_PLAN = 'clientToServer.deletePlan',
  GET_PLANS = 'clientToServer.getPlans',
  // --- Chats ---
  SAVE_CHAT = 'clientToServer.saveChat',
  DELETE_CHAT = 'clientToServer.deleteChat',
  GET_CHATS = 'clientToServer.getChats',
  // --- Agents ---
  GET_AGENTS = 'clientToServer.getAgents',
  SAVE_AGENT = 'clientToServer.saveAgent',
  DELETE_AGENT = 'clientToServer.deleteAgent',
  // --- Other Groups... ---
}

export enum ToClient {
  // --- Research ---
  PROGRESS = 'serverToClient.progress',
  RESULT = 'serverToClient.result',
  CHUNK = 'serverToClient.chunk',
  ERROR = 'serverToClient.error',
  COMPLETE = 'serverToClient.complete',
  // --- Code Chat ---
  BOT_MESSAGE = 'serverToClient.botMessage',
  BOT_MESSAGE_CHUNK = 'serverToClient.botMessageChunk',
  FILE_CONTENT = 'serverToClient.fileContent',
  TOKEN_COUNT = 'serverToClient.tokenCount',
  // --- Plans ---
  PLANS = 'serverToClient.plans',
  // --- Chats ---
  CHATS = 'serverToClient.chats',
  // --- Agents ---
  AGENTS = 'serverToClient.agents',
  // --- Other Groups... ---
}

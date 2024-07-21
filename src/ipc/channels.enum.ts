export enum ToServer {
    // --- Research ---    
    SEARCH = 'clientToServer.search',
    // --- Code Chat ---
    USER_MESSAGE = 'clientToServer.userMessage',
    GET_FILE_CONTENT = 'clientToServer.getFileContent',
    GET_TOKEN_COUNT = 'clientToServer.getTokens',
    // --- Plans ---
    SAVE_PLAN = 'clientToServer.savePlan',
    GET_PLANS = 'clientToServer.getPlans',
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
}

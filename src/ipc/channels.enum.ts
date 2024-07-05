export enum ToServer {
    // --- Research ---    
    SEARCH = 'clientToServer.search',
    // --- Code Chat ---
    USER_MESSAGE = 'clientToServer.userMessage',
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
}

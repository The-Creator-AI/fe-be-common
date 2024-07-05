export enum ToServer {
    SEARCH = 'clientToServer.search',
}

export enum ToClient {
    PROGRESS = 'serverToClient.progress',
    RESULT = 'serverToClient.result',
    CHUNK = 'serverToClient.chunk',
    ERROR = 'serverToClient.error',
    COMPLETE = 'serverToClient.complete'
}

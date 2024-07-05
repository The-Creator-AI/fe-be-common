export enum ToServer {
    SEARCH = 'clientToServer.search',
}

export enum ToClient {
    PROGRESS = 'serverToClient.progress',
    RESULT = 'serverToClient.result',
    ERROR = 'serverToClient.error',
    COMPLETE = 'serverToClient.complete'
}

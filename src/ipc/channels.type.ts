import { SummarizedResult, SummarizedResultChunk } from "../types";
import { ToServer, ToClient } from "./channels.enum";

export type ChannelBody<T extends ToServer | ToClient> =
    // --- Research ---    
    T extends ToServer.SEARCH ? { topic: string } :
    T extends ToClient.PROGRESS ? { message: string } :
    T extends ToClient.RESULT ? SummarizedResult :
    T extends ToClient.ERROR ? { message: string } :
    T extends ToClient.COMPLETE ? { message: string } :
    T extends ToClient.CHUNK ? SummarizedResultChunk:

    // --- Other Groups... ---
    never; 
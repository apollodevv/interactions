declare module 'interactions.js' {
    import { EventEmitter } from 'events';
    import * as WebSocket from 'ws';

    export const version: string;

    export class Client extends EventEmitter {
        constructor(options: ClientOptions)
    }

    interface ClientOptions {
        intents: String | number
    }
}
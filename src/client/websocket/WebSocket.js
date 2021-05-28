"use strict";

const EventEmitter = require('events').EventEmitter;
const { Events, GATEWAY } = require('../../util/Constants');

/**
 * Documentation: {@link https://discord.com/developers/docs/topics/gateway}
 * @extends EventEmitter
 */

class WebSocket extends EventEmitter {
    constructor() {
        super();

        /**
         * Create a new connection to WebSocket.
         */
        this.client = new WebSocket(GATEWAY);

        /**
         * Emitted when an error occurs.
         * @event Client#error
         */

        /**
         * Emitted when a message is received from the server.
         * @event Client#message
         */
        this.client.on('message', () => {
            /**
             * Emits when the connection is established.
             * @event Client#open
             */
            this.client.emit('open')
        });

        this.client.on('error', event => {
            this.client.emit(Events.ERROR, event)
        });

        /**
         * Emitted when the connection is closed.
         */
        this.client.on('close', event => {
            this.client.emit(Events.CLOSE, event)
        });

    }
}

exports.WebSocket;
"use strict";

const EventEmitter = require('events').EventEmitter;
const { Errors } = require('../errors/Messages');
const { Intents } = require('../util/Intents');
const { ClientOptions } = require('../util/Constants');

class Client extends EventEmitter {
    /**
     * @param {ClientOptions} options Options for the Client
     */
    constructor(options = ClientOptions) {
        super();

        this.options = Object.assign({
            intents: []
        }, options);
    }

    async connect(token = this.token) {
        /**
         * @param {string} [token = this.token]
         * @returns {Promise<string>}
         */
        if (!token) throw new Error(Errors.MISSING_TOKEN);
    };
}

module.exports = Client;
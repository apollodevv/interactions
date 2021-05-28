"use strict";

exports.version = {
    GATEWAY: 8,
    REST: 8
};

exports.UserAgent = `DiscordBot (https://github.com/apollodevv/interactions, ${require('../../package.json').version})`;

exports.GATEWAY = `wss://gateway.discord.gg/?v=${this.version.GATEWAY}&encoding=json`;

exports.OPCodes = {
    DISPATCH: 0,
    HEARTBEAT: 1,
    IDENTIFY: 2,
    PRESENCE_UPDATE: 3,
    VOICE_STATE_UPDATE: 4,
    RESUME: 6,
    RECONNECT: 7,
    REQUEST_GUILD_MEMBERS: 8,
    INVALID_SESSION: 9,
    HELLO: 10,
    HEARTBEAT_ACK: 11
};

exports.Events = {
    ERROR: 'error',
    CLOSE: 'close'
}
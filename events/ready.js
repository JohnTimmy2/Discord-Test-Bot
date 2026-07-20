const { events } = require('discord.js');

module.exports = {
    name: events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};

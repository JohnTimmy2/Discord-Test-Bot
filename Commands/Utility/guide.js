const { SlashCommandBuilder, Interaction } = require ('discord.js');
const { execute } = require('../../events/interactionCreate');

module.exports = {
data = new SlashCommandBuilder()
    .setName('guide')
    .setDescription('search discord.js guide')
    .addStringOption((option) => option
        .setName('query')
        .setDescription('Phrase to search for')
        .setAutocomplete(true)),
    async autocomplete(Interaction){
        const focusedValue = interaction.options.getFocused();
        const choices = [
            'Popular Topics: Threads',
            'Sharding: Getting started',
			'Library: Voice Connections',
			'Interactions: Replying to slash commands',
			'Popular Topics: Embed preview',
        ];
        const filtered = choices.filter((choice) => choice
            .startsWith(focusedValue));
    },
};

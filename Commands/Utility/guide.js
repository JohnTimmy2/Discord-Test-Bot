const { SlashCommandBuilder, Interaction } = require ('discord.js');
const { execute } = require('../../events/interactionCreate');
const interactionCreate = require('../../events/interactionCreate');

module.exports = {
data = new SlashCommandBuilder()
    .setName('guide')
    .setDescription('search discord.js guide')
    .addStringOption((option) => option
        .setName('query')
        .setDescription('Phrase to search for')
        .setAutocomplete(true)),
    async autocomplete(Interaction){
        const focusedOption = interaction.options.getfocused(true);
        let choices;

        if (focusedOption.name === 'query') {
            choices = [
                'Popular Topics: Threads',
				'Sharding: Getting started',
				'Library: Voice Connections',
				'Interactions: Replying to slash commands',
				'Popular Topics: Embed preview',
            ];
        }
        if (focusedOption.name === 'version') {
            choices = ['v9', 'v11', 'v12', 'v13', 'v14'];
        }
        const filtered = choices.filter((choice) => choice
            .startsWith(focusedOption.value));
            await interaction.respond(filtered.map((choice) => ({ name: choice, value: choice})));
    },
};

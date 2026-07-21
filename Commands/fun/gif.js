const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
.setName('gif')
.setDescription('sends a random gif')
.addStringOption((option) =>
    option
        .setName('category')
        .setDescription('the gif category')
        .setRequired(true)
        .addChoices (
            { name: 'Funny', value: 'gif_funny' },
            { name: 'Meme', value: 'gif_name' },
            { name: 'Movie', value: 'gif_movie'},
        ),
);
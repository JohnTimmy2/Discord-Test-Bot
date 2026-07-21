const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about our server')
    .addSubcommand((subcommand) =>
        subcommand
            .setName('user')
            .setDescription('info about a user')
            .addUserOption((option) =>
                option
                    .setName('target')
                    .setDescription('The user'),
            ),
    )
    .addSubcommand((subcommand) =>
        subcommand
            .setName('server')
            .setDescription('info about the server'),
    );
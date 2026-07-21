const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption((option) =>
		option
			.setName('input')
			.setDescription('The input to echo back')
			.setMaxLength(2_000),
	)
	.addChannelOption((option) =>
		option
			.setName('bot-chat')
			.setDescription('The channel to echo into')
			.addChannelTypes(ChannelType.GuildText),
	)
	.addBooleanOption((option) => option.setName('embed').setDescription('Whether or not the echo should be embedded'));
    
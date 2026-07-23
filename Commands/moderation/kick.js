const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Select a member to kick')
    .addUserOption((option) => option
        .setName('target')
        .setDescription('The member to kick')
        .setRequired(true)
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .setContexts(InteractionContextType.Guild)    
)

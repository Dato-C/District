import { SlashCommandBuilder } from 'discord.js';

export default {
    slashOnly: true,

    data: new SlashCommandBuilder()
        .setName('hodnost')
        .setDescription('Přehled policejních hodností'),

    category: 'Community',

    async execute(interaction) {
        await interaction.reply({
            content:
                '🎖️ **POLICEJNÍ HODNOSTI PČR**\n\n' +
                '🔹 **Praporčické hodnosti**\n' +
                '• rotný\n' +
                '• strážmistr\n' +
                '• nadstrážmistr\n' +
                '• podpraporčík\n' +
                '• praporčík\n' +
                '• nadpraporčík\n\n' +
                '🔹 **Důstojnické hodnosti**\n' +
                '• podporučík\n' +
                '• poručík\n' +
                '• nadporučík\n' +
                '• kapitán\n' +
                '• major\n' +
                '• podplukovník\n' +
                '• plukovník\n\n' +
                '⭐ **Generálské hodnosti**\n' +
                '• brigádní generál\n' +
                '• generálmajor\n' +
                '• generálporučík\n' +
                '• generál'
        });
    }
};

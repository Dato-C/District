import { SlashCommandBuilder } from 'discord.js';

export default {
    slashOnly: true,

    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Zobrazí seznam dostupných příkazů'),

    category: 'Community',

    async execute(interaction) {
        await interaction.reply({
            content:
                '📖 **NÁPOVĚDA – PČR BOT**\n\n' +
                '🇨🇿 **INFORMACE O PČR**\n\n' +
                '`/pcr` – základní informace o Policii ČR\n' +
                '`/hodnost` – přehled policejních hodností\n' +
                '`/vozidla` – přehled policejních vozidel\n' +
                '`/utvar` – přehled útvarů PČR\n' +
                '`/help` – zobrazí tuto nápovědu\n\n' +
                '👮 **PČR BOT**\n' +
                'Použij `/` pro zobrazení dostupných příkazů.'
        });
    }
};

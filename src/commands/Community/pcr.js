import { SlashCommandBuilder } from 'discord.js';

export default {
    slashOnly: true,

    data: new SlashCommandBuilder()
        .setName('pcr')
        .setDescription('Základní informace o Policii České republiky'),

    category: 'Community',

    async execute(interaction) {
        await interaction.reply({
            content:
                '🇨🇿 **POLICIE ČESKÉ REPUBLIKY**\n\n' +
                '🚔 Policie České republiky je bezpečnostní sbor České republiky.\n\n' +
                '🛡️ Zajišťuje ochranu osob a majetku, veřejný pořádek a odhalování trestné činnosti.'
        });
    }
};

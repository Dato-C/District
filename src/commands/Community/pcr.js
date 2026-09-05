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
                '🚔 Policie ČR je bezpečnostní sbor České republiky.\n' +
                '🛡️ Zajišťuje ochranu osob, majetku a veřejného pořádku a odhaluje trestnou činnost.\n\n' +
                '📌 **Dostupné informace:**\n' +
                '`/hodnost` – policejní hodnosti\n' +
                '`/utvar` – útvary Policie ČR\n' +
                '`/vozidla` – policejní vozidla\n\n' +
                '🇨🇿 **POLICIE ČR | Bezpečnostní sbor České republiky**'
        });
    }
};

import { SlashCommandBuilder } from 'discord.js';

export default {
    slashOnly: true,

    data: new SlashCommandBuilder()
        .setName('vozidla')
        .setDescription('Přehled policejních vozidel'),

    category: 'Community',

    async execute(interaction) {
        await interaction.reply({
            content:
                '🚔 **POLICEJNÍ VOZIDLA**\n\n' +
                '🚓 **Označená vozidla**\n' +
                '• Škoda Octavia\n' +
                '• Škoda Superb\n' +
                '• Škoda Kodiaq\n' +
                '• Hyundai i30\n' +
                '• Volkswagen Passat\n\n' +
                '🚨 **Speciální vozidla**\n' +
                '• vozidla dopravní policie\n' +
                '• vozidla pořádkové policie\n' +
                '• vozidla zásahových jednotek\n' +
                '• neoznačená služební vozidla\n\n' +
                '🏍️ **Motocykly**\n' +
                '• služební motocykly dopravní policie'
        });
    }
};

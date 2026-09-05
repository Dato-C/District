```js
import { SlashCommandBuilder } from 'discord.js';

export default {
    slashOnly: true,

    data: new SlashCommandBuilder()
        .setName('utvar')
        .setDescription('Přehled útvarů Policie České republiky'),

    category: 'Community',

    async execute(interaction) {
        await interaction.reply({
            content:
                '🏢 **ÚTVARY POLICIE ČESKÉ REPUBLIKY**\n\n' +

                '🚔 **POŘÁDKOVÁ POLICIE**\n' +
                '• Obvodní oddělení Policie ČR\n' +
                '• Oddělení hlídkové služby\n' +
                '• Pohotovostní a eskortní oddělení\n' +
                '• Oddělení služební kynologie\n' +
                '• Oddělení služební hipologie\n\n' +

                '🚦 **DOPRAVNÍ POLICIE**\n' +
                '• Dopravní inspektorát\n' +
                '• Dálniční oddělení\n' +
                '• Oddělení silničního dohledu\n' +
                '• Oddělení dopravních nehod\n' +
                '• Skupina dopravních nehod\n\n' +

                '🔎 **KRIMINÁLNÍ POLICIE A VYŠETŘOVÁNÍ**\n' +
                '• Obecná kriminalita\n' +
                '• Násilná kriminalita\n' +
                '• Majetková kriminalita\n' +
                '• Hospodářská kriminalita\n' +
                '• Korupce\n' +
                '• Organizovaný zločin\n' +
                '• Kybernetická kriminalita\n' +
                '• Drogová kriminalita\n' +
                '• Pátrání po osobách a věcech\n\n' +

                '⚡ **SPECIÁLNÍ JEDNOTKY**\n' +
                '• Zásahová jednotka\n' +
                '• Útvar rychlého nasazení (URNA)\n' +
                '• Útvar speciálních činností\n' +
                '• Národní protidrogová centrála\n' +
                '• Národní centrála proti terorismu, extremismu a kybernetické kriminalitě\n\n' +

                '🕵️ **NÁRODNÍ ÚTVARY**\n' +
                '• Národní centrála proti organizovanému zločinu (NCOZ)\n' +
                '• Národní protidrogová centrála (NPC)\n' +
                '• Kriminalistický ústav\n' +
                '• Úřad dokumentace a vyšetřování zločinů komunismu (ÚDV)\n\n' +

                '🐕 **SLUŽEBNÍ ČINNOSTI**\n' +
                '• Služební kynologie\n' +
                '• Služební hipologie\n' +
                '• Pyrotechnická služba\n' +
                '• Letecká služba\n\n' +

                '📡 **PODPŮRNÉ A SPECIALIZOVANÉ ÚTVARY**\n' +
                '• Operační středisko\n' +
                '• Kriminalistická technika\n' +
                '• Informační kriminalistika\n' +
                '• Oddělení zbraní a bezpečnostního materiálu\n' +
                '• Ochranná služba\n' +
                '• Ochranná služba prezidenta republiky\n\n' +

                '🇨🇿 **POLICIE ČESKÉ REPUBLIKY**\n' +
                'Bezpečnostní sbor České republiky.'
        });
    }
};
```

const { SlashCommandSubcommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js');
const Guild = require('../database');

module.exports = {
    data: new SlashCommandSubcommandBuilder()
    .setName("showmodal")
    .setDescription("Shows a modal!"),

    async execute(interaction){
        const modal = new ModalBuilder({
            customId:`myModal-${interaction.user.id}`,
            title: 'FORMULÁRIO DE CADASTRO'
        });
        const DiscordIDInput = new TextInputBuilder({
            customId:'DiscordIDInput',
            label: "Qual é seu discord ID?",
            style: TextInputStyle.Short,

        });

        const SteamIDInput = new TextInputBuilder({
            customId:'SteamIDInput',
            label: "Qual é o seu Steam ID?",
            style: TextInputStyle.Short,

        });

        const NomeUsuarioInput = new TextInputBuilder({
            customId:'NomeUsuarioInput',
            label: "Qual o seu nome de usuário no Palworld?",
            style: TextInputStyle.Short,

        });

        modal.addComponents(new ActionRowBuilder().addComponents(DiscordIDInput));
        modal.addComponents(new ActionRowBuilder().addComponents(SteamIDInput));
        modal.addComponents(new ActionRowBuilder().addComponents(NomeUsuarioInput));

        await interaction.showModal(modal);


        //Aguarda a interação do modal para enviar
        function filter(interaction) {
            return interaction.customId === `myModal-${interaction.user.id}`;
        }
        interaction
            .awaitModalSubmit({filter, time: 30_000})
            .then((modalInteraction) =>{
                const DiscordIDValue = modalInteraction.fields.getTextInputValue('DiscordIDInput');
                const SteamIDValue = modalInteraction.fields.getTextInputValue('SteamIDInput');
                const NomeUsuarioValue = modalInteraction.fields.getTextInputValue('NomeUsuarioInput');

                modalInteraction.reply(`Seu discord ID é? : ${DiscordIDValue}\nSeu Steam ID é? : ${SteamIDValue}\nSeu nome de usuário é? : ${NomeUsuarioValue}\n `);

                const [guild, created] = Guild.findOrCreate({ where: {id: interaction.guild.id},defaults:{DiscordID:DiscordIDValue,SteamID:SteamIDValue,Nome_Usuario_Palworld:NomeUsuarioValue}});


                
            })
            .catch((err) =>{
                console.log(`Error: ${err}`);
            })



    }



}

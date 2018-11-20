const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn more about what I can do :)'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle("About me :heart:")
            .addField("!flip", "Flips a coin - good luck :)", true)
            .addField("!roll", "Rolls a 6 sided die.", true)
            .addField("!join", "Joins the voice channel the commander is in.", true)
            .addField("!leave", "Leaves the voice channel the commander is in.", true)
            .setDescription("Hello, my name is Kate! I am bot.. beep boop.")
            .setColor(0x9370DB)
            .setFooter("Thanks for reading! Hopefully you now understand the commands!")


        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;
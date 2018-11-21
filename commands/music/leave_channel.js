const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the channel the user is in.'
        });
    }

    async run(message, args)
    {   
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect()
        }
               
        else
        {
            message.reply("I must be in a voice channel for you to use this command!");
        }
    }
}

module.exports = LeaveChannelCommand;
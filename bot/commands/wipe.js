const Discord = require('discord.js');
module.exports = {
    name: 'wipe',
    aliases: ['prune', 'del'],
    description: 'prune messages',
    execute(bot, msg, args, guildConf) {
        async function asyncprune() {
            if (msg.member.hasPermission('ADMINISTRATOR')) {
                if (args == '') {
                    msg.reply('Usage:\n' + '`' + guildConf.prefix + 'wipe <amount of messages to delete>`')
                        .then(message => {
                            message.delete({
                                timeout: 7500
                            })
                        })
                    return;
                }
                let msgarg = parseInt(args) + 1;
                await msg.channel.messages.fetch({
                    limit: msgarg
                }).then(messages => {
                    msg.channel.bulkDelete(messages)
                });
                //console.log(args);
                function grammar() {
                    if (args == 1) {
                        return `Deleted ${args} message ✅`
                    } else {
                        return `Deleted ${args} messages ✅`
                    }
                }
                msg.channel.send({
                    embed: {
                        title: "Prune :gear:",
                        description: [
                            grammar()
                        ].join("\n"),
                        color: 56319,
                        footer: {
                            text: "Requested by " + msg.author.tag,
                            icon_url: msg.author.avatarURL({dynamic : true})
                        },
                        timestamp: new Date()
                    }
                }).then(msg => {
                    msg.delete({
                        timeout: 5000
                    })
                }).catch(() => msg.edit("error: give me embed permissions pls"));
            } else {
                msg.reply("nice one.");
                msg.channel.send({
                    embed: {
                        title: "Prune :x:",
                        description: [
                            "ok dummy :x:"
                        ].join("\n"),
                        color: 56319,
                        footer: {
                            text: "Requested by " + msg.author.tag,
                            icon_url: msg.author.avatarURL({dynamic : true})
                        },
                        timestamp: new Date()
                    }
                }).catch(() => msg.edit("error: give me embed permissions pls"));
            }
        }
        asyncprune()
    },
};

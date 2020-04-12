const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const recentMsg = new Set();
const Enmap = require('enmap');
const Canvas = require('canvas');
const botOwner = 215190712063492096;
const taylor = 360166880733822976;
const viktor = 252529231215460353;
const myid = 650439523699916808;

bot.settings = new Enmap({
    name: 'settings',
    fetchAll: false,
    autoFetch: true,
    cloneLevel: 'deep'
});

const defaultSettings = {
    prefix: ';',
    welcomeChannel: "general",
    welcomeMessage: "hey {{user}}, fuck you.",
    cooldown: 0
}

bot.on("guildDelete", guild => {
    bot.settings.delete(guild.id);
});

/*bot.on("guildMemberAdd", member => {
    bot.settings.ensure(member.guild.id, defaultSettings);
    let welcomeMessage = bot.settings.get(member.guild.id, "welcomeMessage");
    welcomeMessage = welcomeMessage.replace("{{user}}", member.user.tag);
    member.guild.channels
        .find("name", bot.settings.get(member.guild.id, "welcomeChannel"))
        .send(welcomeMessage)
        .catch(console.error);
});
*/
bot.on('ready', () => {
	console.log('\x1b[36m%s\x1b[0m','BOT STATUS:');
	console.log('\x1b[32m',errorCheck());
    if (bot.guilds.cache.size == 1) {
        bot.user.setActivity(`with the minds of ${bot.guilds.cache.size} server`);
    } else {
        bot.user.setActivity(`with the minds of ${bot.guilds.cache.size} servers`);
    }
	console.log("\x1b[0m");
});

bot.on("guildCreate", guild => {

    let defaultChannel = "";
    guild.channels.cache.forEach((channel) => {
        if (channel.type == "text" && defaultChannel == "") {
            if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                defaultChannel = channel;
            }
        }
    })
    defaultChannel.send('hello uwu @everyone - I am a very useful bot that is very nice and understanding :3 - use ;help to see what I can do!');
});


bot.on('message', async msg => {
    if (!msg.guild || msg.author.bot) return;
    const guildConf = bot.settings.ensure(msg.guild.id, defaultSettings);
		if (msg.mentions.users.first() == myid){
		msg.reply("the current prefix for this server is `" + guildConf.prefix + "`. ping me again and I ban you.");
	}
    if (msg.content.indexOf(guildConf.prefix) !== 0) return;
    const args = msg.content.split(/\s+/g);
    let command = args.shift().slice(guildConf.prefix.length).toLowerCase();
    if (guildConf.cooldown > 0) {
        antiSpam();
    }
    switch (command) {
        case 'ping':
            ping();
            break;

        case 'p':
            ping();
            break;

        case 'help':
            msg.channel.send({
                embed: {
                    title: "Commands :notebook_with_decorative_cover: ",
                    description: [
                        "**Utility**: `info`, `ping`, `calculate`, `notify`, `search`, `randomimage`, `hopon`, `8ball`, `sergal`, `votekick`",
                        "**Admin**: `kick`, `ban`, `mute`, `announce`, `wipe`",
                        "**Configuration**: `setconfig`, `showconfig`"
                    ].join("\n"),
                    color: 56319,
                    footer: {
                        text: "Requested by " + msg.author.tag,
                        icon_url: msg.author.avatarURL()
                    },
                    timestamp: new Date()
                }
            }).catch(() => msg.edit("error: give me embed permissions pls"));
            break;

        case 'calculate':
            msg.reply("fuck you, there's literally a calculator on your PC");
            break;

        case 'kick':
            if (msg.member.hasPermission('KICK_MEMBERS'))
                msg.reply("fuck you just right click on them you lazy sack of shit");
            else
                msg.reply("you wish")
            break;

        case 'ban':
            if (msg.member.hasPermission('BAN_MEMBERS'))
                msg.reply("fuck you just right click on them you lazy sack of shit");
            else
                msg.reply("you wish");
            break;

        case 'notify':
            msg.reply("fuck you, do it yourself");
            break;

        case 'mute':
            msg.reply("fuck you, literally just right click");
            break;
        case 'announce':
            if (msg.member.hasPermission('ADMINISTRATOR'))
                msg.reply("says fuck you to @everyone");
            else
                msg.reply("nah fuck you")
            break;

        case 'search':
            msg.reply("google.com");
            break;

        case 'randomimage':
            msg.reply("wow, you're so bored aren't you?");
            break;

        case 'killserver':
            msg.channel.send("https://images-ext-1.discordapp.net/external/3qJsIIlDH1oyBafwifdZ35LvC1_C0uyHCg2nGjkxRr4/%3Fwidth%3D41%26height%3D43/https/images-ext-1.discordapp.net/external/ePwzmrv7_IqtTsDOJfN4zhyK9x04RvBXyBlMe_GLTM8/%253Fwidth%253D51%2526height%253D53/https/images-ext-2.discordapp.net/external/CrOyUPyi4PY-SBsg3lR7c1D0Y4PBPGlEt-oD9EO9tqs/%25253Fwidth%25253D63%252526height%25253D65/https/images-ext-1.discordapp.net/external/v2UlOdSXdpvh-ySd6bPP73Oq98nKmvr-vAAmz2lEm3c/%2525253Fwidth%2525253D78%25252526height%2525253D81/https/images-ext-2.discordapp.net/external/O1FzyZXy72L2Os77Lhc_EaT_wcH5Up69bF-g6_XDxYI/%252525253Fwidth%252525253D97%2525252526height%252525253D101/https/images-ext-1.discordapp.net/external/DGfIHYpIM0ZsD1hyUfznGz780KgGkzfJrtNxZuQbGCE/%25252525253Fwidth%25252525253D120%252525252526height%25252525253D125/https/images-ext-1.discordapp.net/external/Q33OW84DKCgtRI5rcZehKTqyGfRsjgDEB5dNdYsd9_k/%2525252525253Fwidth%2525252525253D149%25252525252526height%2525252525253D155/https/images-ext-2.discordapp.net/external/S_YDfZ0scqfEcvmUu4rbWRzFIer-0n6Uio6dGPZv9Lk/%252525252525253Fwidth%252525252525253D185%2525252525252526height%252525252525253D193/https/images-ext-2.discordapp.net/external/ICf9NsvE61OSwM1ocYVlSjjy4J2nwy3tdXaIGVa9_tI/%25252525252525253Fwidth%25252525252525253D231%252525252525252526height%25252525252525253D241/https/images-ext-2.discordapp.net/external/DzgYTqjFs-B07s2XyP3wiJAlahWBo9-YOK2BsgDvgPU/https/i.redd.it/hqx7okmi64c11.gif?width=33&height=35");
            break;

        case 'hopon':
            user = msg.mentions.users.first();
			if (!user){
				msg.reply('Usage:\n' + '`' + guildConf.prefix + 'hopon <user>`')
				break;
			}
            if (user != botOwner) { // bot owner lmao, never tell me to hop on ever again Jacob.
                msg.channel.send('hop on <@' + user + '>');
            } else 
				msg.reply("nah");
            break;

        case 'wipe':
            if (msg.member.hasPermission('ADMINISTRATOR')) {
			  if (args == ''){
				  msg.reply('Usage:\n' + '`' + guildConf.prefix + 'wipe <amount of messages to delete>`')
				  .then(message => {
				  message.delete({ timeout: 7500 }) 
			  })
			  break;}
			 await msg.channel.messages.fetch({ limit: args }).then(messages => { 
			 msg.channel.bulkDelete(messages)});
			  function grammar(){
				 if (args == 1){
					 return `Deleted ${args} message ✅`
				 }
				 else {
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
                        icon_url: msg.author.avatarURL()
                    },
                    timestamp: new Date()
                }
            }).catch(() => msg.edit("error: give me embed permissions pls"));
			}
			else {
                msg.reply("ok retard.");msg.channel.send({
                embed: {
                    title: "Prune :x:",
                    description: [
					"ok retard :x:"
                    ].join("\n"),
                    color: 56319,
                    footer: {
                        text: "Requested by " + msg.author.tag,
                        icon_url: msg.author.avatarURL()
                    },
                    timestamp: new Date()
                }
            }).catch(() => msg.edit("error: give me embed permissions pls"));
            }
            break;

        case 'info':
            const embed = new Discord.MessageEmbed()
                .setTitle("sauceBot")
                .setAuthor("sauceBot", bot.user.avatarURL())
                .setColor(0x10FFFF)
                .setDescription("Hey, I'm a bot written in Discord.JS that could do *many* things but I choose not to. Why? There's so many bots these days that we need a little bit of variety.")
                .setFooter("fuck you, especially you, Viktor.")
                .setImage("https://media0.giphy.com/media/J32hiijciT1GE/source.gif")
                .setThumbnail(bot.user.avatarURL())
                .setTimestamp()
                .addField(";help", "and get started", false)
                .addField("**Uptime:**", msToTime(bot.uptime) + '', false)
                .setURL("https://steamcommunity.com/id/saucy26/")
            /*
              .addField("This is a field title, it can hold 256 characters",
              .addField("Inline Field", "They can also be inline.", true)
              .addBlankField(true)
            */
            msg.channel.send(embed);
            break;


        case '8ball':
            Eball();
            break;

        case 'setconfig':
            if (msg.member.hasPermission('ADMINISTRATOR')) {
                const [prop, ...value] = args;
                if (value == '') {
                    msg.reply(`Example: ${guildConf.prefix}setconfig prefix %`);
                    break;
                }
                if (!bot.settings.has(msg.guild.id, prop)) {
                    return msg.reply("not in config...");
                }
                bot.settings.set(msg.guild.id, value.join(""), prop);
                msg.channel.send(`Configuration for ${prop} has been changed to:\n\`${value.join("")}\``)
            }
            break;

        case 'showconfig':
            let configProps = Object.keys(guildConf).map(prop => {
                return `${prop}: ${guildConf[prop]}\n`
            });
  //Depracated     msg.channel.send(`Server Config: \`\`\`${configProps}\`\`\``);
          msg.channel.send({
              embed: {
                  title: "Config :wrench:",
                  description: [
                      `${configProps}`
                  ].join("\n"),
                  color: 6816001,
                  footer: {
                      text: "Requested by " + msg.author.tag,
                      icon_url: msg.author.avatarURL()
                  },
                  timestamp: new Date()
              }
          }).catch(() => msg.edit("error: give me embed permissions pls"));
          break;

        case 'fuckoff':
            if (msg.author.id == botOwner) {
                msg.reply("aight");
				break;
            } 
			if (msg.author.id == taylor){
				msg.reply(":cry:");
				break;
			}
            msg.reply("fuck you");
            break;
			
		case 'sergal':
		if (msg.author.id == viktor){
				const sergembed = new Discord.MessageEmbed()
                .setTitle("here ya go")
                .setAuthor("sauceBot", bot.user.avatarURL())
                .setColor(0x10FFFF)
				.setDescription('fuck you viktor')
                .attachFiles('images/sergal/fuckyou.png')
				.setImage('attachment://fuckyou.png')
            msg.channel.send(sergembed);
			
		}
		else{
		const sergembed = new Discord.MessageEmbed()
                .setTitle("Niggles, The Sergal")
                .setAuthor("sauceBot", bot.user.avatarURL())
                .setColor(0x10FFFF)
				.setDescription('here is your sergal')
                .attachFiles('images/sergal/niggles.png')
				.setImage('attachment://niggles.png')

            msg.channel.send(sergembed);
		}
		break;
		
		case 'votekick':
		var yes;
		//if (msg.member.hasPermission('KICK_MEMBERS')){
			let victim = msg.mentions.users.first();
			if (!victim){
				msg.reply("specify a target");
				break;
			}
            const vkImage = Canvas.createCanvas(404, 74);
                    const ctx = vkImage.getContext('2d');
                    const background = await Canvas.loadImage(`images/examples/votekickexample.png`)
                    ctx.drawImage(background, 0, 0, vkImage.width, vkImage.height)
                    ctx.font = '18px sans-serif';
                    // Select the style that will be used to fill the text in
                    ctx.fillStyle = '#ffffff';
                    // Actually fill the text with a solid color
                    ctx.fillText(victim.tag, vkImage.width / 11, vkImage.height / 2.7);
                    const finalimage = new Discord.MessageAttachment(vkImage.toBuffer(), `VoteKick.png`);
                    sendimage = await msg.channel.send(finalimage);
                    sendimage.react('✅').then(() => sendimage.react('❌'));					
                          
		//}
		break;
			
    } // endmsg

    async function ping() {
        let botMsg = await msg.channel.send("pinging :ping_pong:")

        botMsg.edit({
            embed: {
                title: "fuck you 📶",
                description: [
                    "**Server**: `" + (botMsg.createdAt - msg.createdAt) + "ms`",
                    "**API**: `" + Math.round(bot.ws.ping) + "ms`",
                    "**Uptime**: `" + msToTime(bot.uptime) + "`"
                ].join("\n"),
                color: 14177041,
                footer: {
                    text: "Requested by " + msg.author.tag,
                    icon_url: msg.author.avatarURL()
                },
                timestamp: new Date()
            }
        }).catch(() => botMsg.edit("error: give me permissions pls"));
        botMsg.edit(":ping_pong: fuck you");
    }

    async function Eball() {
        let Eballmsg = await msg.channel.send(":8ball: siphoning power from the oracle...")
        sleep(2000).then(() => {
            Eballmsg.edit({
                embed: {
                    title: "Magic 8ball :8ball:",
                    description: [
                        "**fuck you** :8ball:"
                    ].join("\n"),
                    color: 0xFFFFFF,
                    footer: {
                        text: "Requested by " + msg.author.tag,
                        icon_url: msg.author.avatarURL()
                    },
                    timestamp: new Date()
                }
            }).catch(() => Eballmsg.edit("error: give me permissions pls"));
            Eballmsg.edit(":8ball: power consumed...")
        })

    }
    async function antiSpam() {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            return;
        }
        if (recentMsg.has(msg.author.id)) {
            command = null;
            let spamMsg = await msg.reply(`slow down, cooldown: ${guildConf.cooldown}ms`);
            sleep(guildConf.cooldown).then(() => {
                spamMsg.delete();
                return;
            })
        }
        recentMsg.add(msg.author.id);
        setTimeout(() => {
            recentMsg.delete(msg.author.id);
        }, guildConf.cooldown)
    }

}); //end

function msToTime(ms) {
    days = Math.floor(ms / 86400000);
    daysms = ms % 86400000;
    hours = Math.floor(daysms / 3600000);
    hoursms = ms % 3600000;
    minutes = Math.floor(hoursms / 60000);
    minutesms = ms % 60000;
    sec = Math.floor(minutesms / 1000);

    let str = "";
    if (days) str = str + days + "d ";
    if (hours) str = str + hours + "h ";
    if (minutes) str = str + minutes + "m ";
    if (sec) str = str + sec + "s";

    return str;
}



const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function errorCheck(){
	if (bot.settings && defaultSettings){
		return 'SETTINGS --> PASSED\n MESSAGE FUNCTIONS --> PASSED\n GLOBAL ENMAP --> PASSED\n GUILD_MEMBER_ADD --> FAILED \nSERVERS: '+bot.guilds.cache.size+'\nBOT OPERATIONAL';
}}


bot.login(config.token);

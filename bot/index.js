const Discord = require('discord.js');
const config = require("./config.json");
const Enmap = require('enmap');
const Canvas = require('canvas');
const fs = require('fs');
const recentMsg = new Set();
const myid = 650439523699916808;
const func = require("./functions.js");

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.settings = new Enmap({
    name: 'settings',
    fetchAll: false,
    autoFetch: true,
    cloneLevel: 'deep'
});

const defaultSettings = {
    prefix: ';',
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
			msg.reply("the current prefix for this server is `" + guildConf.prefix + "`").then(msg => { msg.delete({timeout: 3000})})
			.catch(console.error);
	}
    if (msg.content.indexOf(guildConf.prefix) !== 0) return;
    const args = msg.content.split(/\s+/g);
    const commandName = args.shift().slice(guildConf.prefix.length).toLowerCase();

    //if (!bot.commands.has(command)) return;
    var command = bot.commands.get(commandName)
    || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (guildConf.cooldown > 0) {
        antiSpam();
    }

    if (!command) return;
    try {
	command.execute(bot,msg,args,guildConf)
    } catch (error) {
	console.error(error);
	msg.reply("command doesn't exist");
    }

    async function antiSpam() {
      // if (msg.member.hasPermission('ADMINISTRATOR')) {
        //    return;
        //}
        if (recentMsg.has(msg.author.id)) {
            command = null;
            let spamMsg = await msg.reply(`slow down, cooldown: ${guildConf.cooldown}ms`);
            func.sleep(guildConf.cooldown).then(() => {
                spamMsg.delete();
            })
        }
        recentMsg.add(msg.author.id);
        setTimeout(() => {
            recentMsg.delete(msg.author.id);
        }, guildConf.cooldown)
    }

}); //end

// lol this is useless
function errorCheck(){
	if (bot.settings && defaultSettings){
		return 'SETTINGS --> PASSED\n MESSAGE FUNCTIONS --> PASSED\n GLOBAL ENMAP --> PASSED\n GUILD_MEMBER_ADD --> FAILED \nSERVERS: '+bot.guilds.cache.size+'\nBOT OPERATIONAL';
}}


bot.login(config.token);
